import { AmqpConnection, RabbitMQConfig } from '@golevelup/nestjs-rabbitmq';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export const AMQP_CONNECTION_SERVICE_FACTORY = (configIdent: string) => ({
    provide: AmqpConnection,
    useFactory: async (configService: ConfigService) => {
        const amqpConfig: RabbitMQConfig = configService.get(configIdent);

        const amqpConnection = new AmqpConnection(amqpConfig);
        Logger.verbose('AMQP Init...', 'Amqp_Connection');
        await amqpConnection.init().catch((error) => {
            Logger.error('connection fail', error, 'RABBIT MQ Connection factory');
        });

        Logger.verbose('AMQP Init done.', 'Amqp_Connection');
        return amqpConnection;
    },
    inject: [ConfigService],
});
