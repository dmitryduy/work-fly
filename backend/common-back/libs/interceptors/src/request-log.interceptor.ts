import { CallHandler, ExecutionContext, HttpStatus, Inject, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { RequestLogFormat } from '@app/dto';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class RequestLogInterceptor implements NestInterceptor {
    constructor(private readonly configService: ConfigService, @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) {}
    // eslint-disable-next-line max-lines-per-function
    intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
        const now = Date.now();
        const headers = context.switchToHttp().getRequest<Request>().headers;
        const path = context.switchToHttp().getRequest<Request>().url;
        const method = context.switchToHttp().getRequest<Request>().method;
        const requestPayload = {
            body: context.switchToHttp().getRequest<Request>().body,
            query: context.switchToHttp().getRequest<Request>().query,
            params: context.switchToHttp().getRequest<Request>().params,
        };
        let logString: RequestLogFormat = {
            requestSource: headers['x-project'] as string,
            requestPayload,
            requestPayloadString: JSON.stringify(requestPayload),
            protocol: 'http',
            module: RequestLogInterceptor.name,
            method: `${method} ${path}`,
            actor: {
                login: 'test',
                role: 'test',
            },
            message: 'Incoming http request',
            internalPayload: {
                clientProject: headers['x-project'] as string,
                clientDeviceId: headers['x-device-id'] as string,
                headers,
            },
            internalPayloadString: JSON.stringify({
                clientProject: headers['x-project'] as string,
                clientDeviceId: headers['x-device-id'] as string,
                headers,
            }),
            level: 'debug',
            logType: 'request',
        };
        return next.handle().pipe(
            tap(() => {
                const response = context.switchToHttp().getResponse<Response>();
                logString = {
                    ...logString,
                    response: {
                        status: response['statusCode'],
                        responseTime: Date.now() - now,
                    },
                };
                this.logger.log(logString);
            }),
            catchError((err) => {
                logString = {
                    ...logString,
                    level: 'error',
                    response: {
                        status: err['statusCode'] ?? HttpStatus.INTERNAL_SERVER_ERROR,
                        error: JSON.stringify(err),
                        responseTime: Date.now() - now,
                    },
                };
                this.logger.log(logString);
                throw err;
            }),
        );
    }
}
