import { AppEnv } from "./app-env.enum";

export class ICore {
  APP_ENV: AppEnv;
  PORT: number;
  CORS_ORIGINS: string[];
}
