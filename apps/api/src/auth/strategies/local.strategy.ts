import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UserDocument } from "src/models/user.model";
import { AuthService } from "../auth.service";

export const LocalStrategyName = "local";

@Injectable()
export class LocalStrategy extends PassportStrategy(
  Strategy,
  LocalStrategyName
) {
  constructor(private authService: AuthService) {
    super({
      usernameField: "emailOrUsername",
      passwordField: "password",
    });
  }

  async validate(username: string, password: string): Promise<UserDocument> {
    const user = await this.authService.validateUser(username, password);

    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }

    return user;
  }
}
