import { BadRequestException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as argon2 from "argon2";
import { UsersService } from "src/users/users.service";
import { UserDocument } from "src/models/user.model";
import { ConfigService } from "src/config/config.service";
import { SignupBodyReqDto } from "./dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  async signup(data: SignupBodyReqDto) {
    if (data.password !== data.confirmPassword) {
      throw new BadRequestException("Passwords do not match");
    }

    try {
      const hashedPassword = await argon2.hash(data.password);

      const user = await this.usersService.createUser(
        data.email,
        hashedPassword
      );

      return user;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async signIn(user: UserDocument) {
    const payload = { sub: user._id };
    return {
      access_token: this.jwtService.sign(payload, {
        expiresIn: this.configService.auth.ACCESS_TOKEN_EXPIRES_IN,
        secret: this.configService.auth.ACCESS_TOKEN_PRIVATE_KEY,
        algorithm: this.configService.auth.JWT_ALGORITHM,
      }),
      refresh_token: this.jwtService.sign(payload, {
        expiresIn: this.configService.auth.REFRESH_TOKEN_EXPIRES_IN,
        secret: this.configService.auth.REFRESH_TOKEN_PRIVATE_KEY,
        algorithm: this.configService.auth.JWT_ALGORITHM,
      }),
    };
  }

  async validateUser(
    usernameOrEmail: string,
    password: string
  ): Promise<UserDocument> {
    if (!usernameOrEmail || !usernameOrEmail.trim() || !password) {
      return null;
    }

    const user = await this.usersService.findUserByEmailOrUsername(
      usernameOrEmail
    );

    if (!user) {
      return null;
    }

    const isPasswordValid = await argon2.verify(user.password, password);

    if (!isPasswordValid) {
      return null;
    }

    return user;
  }
}
