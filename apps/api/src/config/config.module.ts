import { DynamicModule, Module } from "@nestjs/common";
import { ConfigModule as ConfigurationModule } from "@nestjs/config";
import { ConfigService } from "./config.service";
import { validateConfig } from "./helpers";

@Module({})
export class ConfigModule {
  static register(nodeEnv: string): DynamicModule {
    if (!nodeEnv) {
      throw new Error("NODE_ENV not set in package.json scripts!");
    }

    const envFiles = [
      `.env.${nodeEnv}.local`,
      `.env.${nodeEnv}`,
      ".env.local",
      ".env",
    ];

    const module: DynamicModule = {
      module: ConfigModule,
      imports: [
        ConfigurationModule.forRoot({
          envFilePath: envFiles,
          validate: validateConfig,
          expandVariables: true,
        }),
      ],
      providers: [ConfigService],
      exports: [ConfigService],
    };
    return module;
  }
}
