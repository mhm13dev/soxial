import { Controller, Get, UseGuards } from "@nestjs/common";
import { GetCurrentUserPayload } from "src/auth/decorators";
import { AccessTokenAuthGuard } from "src/auth/guards";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AccessTokenAuthGuard)
  @Get("me")
  getMe(@GetCurrentUserPayload("sub") loggedInUserId: string) {
    return this.usersService.getMe(loggedInUserId);
  }
}
