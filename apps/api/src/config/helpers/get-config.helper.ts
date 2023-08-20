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
  };
}
