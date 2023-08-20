import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigService } from "src/config/config.service";

export const RefreshTokenStrategyName = "refresh-token";

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  RefreshTokenStrategyName
) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.auth.REFRESH_TOKEN_PRIVATE_KEY,
      algorithms: [configService.auth.JWT_ALGORITHM],
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: any) {
    const refresh_token = req
      ?.get("authorization")
      ?.replace("Bearer", "")
      .trim();

    if (!refresh_token || !payload) {
      throw new UnauthorizedException("Refresh token invalid");
    }

    return {
      ...payload,
      refresh_token,
    };
  }
}
