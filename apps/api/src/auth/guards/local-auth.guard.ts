import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { LocalStrategyName } from "../strategies";

@Injectable()
export class LocalAuthGuard extends AuthGuard(LocalStrategyName) {}
