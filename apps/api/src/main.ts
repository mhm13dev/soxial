import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "./config/config.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  app.enableCors({
    origin: configService.core.CORS_ORIGINS,
    credentials: true,
  });

  await app.listen(configService.core.PORT);
}
bootstrap();
