import { DynamicModule, Logger, Module } from '@nestjs/common';
import { utilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { customLogFieldsFormat } from './custom-log-fields.format';

@Module({})
export class LoggerModule {
    static register(): DynamicModule {
        return {
            module: LoggerModule,
            global: true,
            imports: [
                WinstonModule.forRoot({
                    transports: [
                        new winston.transports.Console({
                            format: winston.format.combine(winston.format.timestamp(), winston.format.ms(), utilities.format.nestLike()),
                            level: process.env.APP_LOGGER_DEBUG === 'on' ? 'debug' : 'info',
                        }),
                        new winston.transports.File({
                            dirname: process.env.LOG_DIR || '/var/log/apps/common-back/',
                            filename: 'common-back.log',
                            format: winston.format.combine(winston.format.timestamp(), customLogFieldsFormat, winston.format.logstash()),
                            level: 'debug',
                        }),
                    ],
                }),
            ],
            providers: [Logger],
            exports: [Logger],
        };
    }
}
