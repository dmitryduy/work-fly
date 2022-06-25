import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { ConnectorsModule } from './connectors/connectors.module';
import { AppService } from './services/app.service';

@Module({
    imports: [ConnectorsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
