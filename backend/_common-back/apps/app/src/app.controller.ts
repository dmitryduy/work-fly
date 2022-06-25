import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { RequestLogInterceptor } from '@app/interceptors';

@Controller()
@UseInterceptors(RequestLogInterceptor)
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}
