import { NestFactory } from '@nestjs/core';
import { SrvModule } from './srv.module';

async function bootstrap() {
    const app = await NestFactory.create(SrvModule);
    await app.listen(3000);
}
bootstrap();
