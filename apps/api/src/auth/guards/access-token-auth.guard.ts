import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AccessTokenStrategyName } from "../strategies";

@Injectable()
export class AccessTokenAuthGuard extends AuthGuard(AccessTokenStrategyName) {}
