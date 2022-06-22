import { BeforeApplicationShutdown, Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { _amqpConfig, _pgConfig } from '@app/configs';
import { AMQP_CONNECTION_SERVICE_FACTORY } from '@app/nest-amqp';
import { PG_CONNECTOR_FACTORY, PgClient } from '@app/nest-pg';
import { AmqpConnection, RabbitMQModule, RabbitRpcParamsFactory } from '@golevelup/nestjs-rabbitmq';
import { LoggerModule } from '@app/logger';
import { AMQP_MAIN, PG_MAIN } from '@app/configs/constants';

@Global()
@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [
                _pgConfig(PG_MAIN, 'DATABASE_URL'),
                _amqpConfig(AMQP_MAIN, 'AMQP_URI'),
            ],
        }),
        RabbitMQModule,
        LoggerModule.register(),
    ],
    providers: [
        AMQP_CONNECTION_SERVICE_FACTORY(AMQP_MAIN),
        PG_CONNECTOR_FACTORY(PG_MAIN),
        RabbitRpcParamsFactory,
    ],
    exports: [AmqpConnection, RabbitRpcParamsFactory, PgClient],
})
export class ConnectorsModule implements BeforeApplicationShutdown {
    constructor(private pg: PgClient) {}

    async beforeApplicationShutdown() {
        await this.pg.close();
    }
}
