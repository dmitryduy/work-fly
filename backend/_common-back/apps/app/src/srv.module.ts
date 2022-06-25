import { Module } from '@nestjs/common';
import { SrvController } from './srv.controller';
import { SrvService } from './srv.service';
import { ConnectorsModule } from './connectors/connectors.module';

@Module({
    imports: [ConnectorsModule],
    controllers: [SrvController],
    providers: [SrvService],
})
export class SrvModule {}
