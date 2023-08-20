import {
  Body,
  Controller,
  HttpStatus,
  Post,
  UseGuards,
  HttpCode,
} from "@nestjs/common";
import { UserDocument } from "src/models/user.model";
import { AuthService } from "./auth.service";
import { SignupBodyReqDto } from "./dto";
import { LocalAuthGuard } from "./guards";
import { GetCurrentUserPayload } from "./decorators";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  async signup(@Body() body: SignupBodyReqDto) {
    return this.authService.signup(body);
  }

  @UseGuards(LocalAuthGuard)
  @Post("signin")
  @HttpCode(HttpStatus.OK)
  async signIn(@GetCurrentUserPayload() loggedInUser: UserDocument) {
    return this.authService.signIn(loggedInUser);
  }
}
