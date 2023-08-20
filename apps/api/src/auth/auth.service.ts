import { BadRequestException, Injectable } from "@nestjs/common";
import * as argon2 from "argon2";
import { UsersService } from "src/users/users.service";
import { SignupBodyReqDto } from "./dto";

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

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
}
