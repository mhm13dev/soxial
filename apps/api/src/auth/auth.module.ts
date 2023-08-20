import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { UsersModule } from "src/users/users.module";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import {
  AccessTokenStrategy,
  LocalStrategy,
  RefreshTokenStrategy,
} from "./strategies";

@Module({
  providers: [
    AuthService,
    LocalStrategy,
    AccessTokenStrategy,
    RefreshTokenStrategy,
  ],
  controllers: [AuthController],
  imports: [UsersModule, PassportModule, JwtModule.register({})],
})
export class AuthModule {}
