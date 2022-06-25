import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { SrvService } from './srv.service';
import { RequestLogInterceptor } from '@app/interceptors';

@Controller()
@UseInterceptors(RequestLogInterceptor)
export class SrvController {
    constructor(private readonly srvService: SrvService) {}

    @Get()
    getHello(): string {
        return this.srvService.getHello();
    }
}
