import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const config = app.get(ConfigService);
    app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

    const PORT = config.get<number>('SERVER_PORT') || 3025;
    await app.listen(PORT);
    Logger.log(`Server started on ${PORT}`, 'App Service');
    useContainer(app.select(AppModule), { fallbackOnErrors: true });
}

bootstrap()
    .then()
    .catch((e) => {
        Logger.error('fatal error', e);
    });
