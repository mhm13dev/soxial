import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigService } from "src/config/config.service";

export const AccessTokenStrategyName = "access-token";

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(
  Strategy,
  AccessTokenStrategyName
) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.auth.ACCESS_TOKEN_PRIVATE_KEY,
      algorithms: [configService.auth.JWT_ALGORITHM],
    });
  }

  async validate(payload: any) {
    if (!payload) throw new UnauthorizedException("Access token invalid");
    return payload;
  }
}
