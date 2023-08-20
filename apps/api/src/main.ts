import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from "./app.module";
import { ConfigService } from "./config/config.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    })
  );

  const configService = app.get(ConfigService);

  app.enableCors({
    origin: configService.core.CORS_ORIGINS,
    credentials: true,
  });

  await app.listen(configService.core.PORT);
}
bootstrap();
