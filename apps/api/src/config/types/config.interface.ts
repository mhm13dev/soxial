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
}
