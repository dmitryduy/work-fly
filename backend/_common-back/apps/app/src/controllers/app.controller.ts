import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { RequestLogInterceptor } from '@app/interceptors';
import { AppService } from '../services/app.service';

@Controller()
@UseInterceptors(RequestLogInterceptor)
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}
