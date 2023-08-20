import { JwtSignOptions } from "@nestjs/jwt";
import { AppEnv, IConfig } from "../types";

export function getConfig(): IConfig {
  return {
    core: {
      APP_ENV: (process.env.APP_ENV ?? "development") as AppEnv,
      PORT: parseInt(process.env.PORT, 10) || 5000,
      CORS_ORIGINS: process.env.CORS_ORIGINS.split(","),
    },

    db: {
      MONGODB_URI: process.env.MONGODB_URI,
    },

    auth: {
      ACCESS_TOKEN_PRIVATE_KEY: process.env.ACCESS_TOKEN_PRIVATE_KEY,
      ACCESS_TOKEN_PUBLIC_KEY: process.env.ACCESS_TOKEN_PUBLIC_KEY,
      ACCESS_TOKEN_EXPIRES_IN: process.env.ACCESS_TOKEN_EXPIRES_IN,
      REFRESH_TOKEN_PRIVATE_KEY: process.env.REFRESH_TOKEN_PRIVATE_KEY,
      REFRESH_TOKEN_PUBLIC_KEY: process.env.REFRESH_TOKEN_PUBLIC_KEY,
      REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN,
      JWT_ALGORITHM: process.env.JWT_ALGORITHM as JwtSignOptions["algorithm"],
    },
  };
}
