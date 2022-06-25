import { Injectable } from '@nestjs/common';

@Injectable()
export class SrvService {
    getHello(): string {
        return 'Hello World!';
    }
}
