import { JwtSignOptions } from "@nestjs/jwt";
import { AppEnv } from "./app-env.enum";

export class IConfig {
  core: {
    APP_ENV: AppEnv;
    PORT: number;
    CORS_ORIGINS: string[];
  };

  db: {
    MONGODB_URI: string;
  };

  auth: {
    ACCESS_TOKEN_PRIVATE_KEY: string;
    ACCESS_TOKEN_PUBLIC_KEY: string;
    ACCESS_TOKEN_EXPIRES_IN: string;
    REFRESH_TOKEN_PRIVATE_KEY: string;
    REFRESH_TOKEN_PUBLIC_KEY: string;
    REFRESH_TOKEN_EXPIRES_IN: string;
    JWT_ALGORITHM: JwtSignOptions["algorithm"];
  };
}
