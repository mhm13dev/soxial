import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";
import { AppEnv } from "../types";

export class ConfigDto {
  // General
  @IsOptional()
  @IsEnum(AppEnv)
  APP_ENV: AppEnv;

  @IsOptional()
  @IsNumber()
  PORT: number;

  @IsString()
  @IsNotEmpty()
  CORS_ORIGINS!: string; // comma separated list of origins (e.g. http://localhost:3000,http://localhost:3001)

  // Database
  @IsString()
  @IsNotEmpty()
  MONGODB_URI!: string;
}
