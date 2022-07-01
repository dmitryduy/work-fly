import { RabbitMQConfig, RabbitMQExchangeConfig } from '@golevelup/nestjs-rabbitmq';
import { ConfigService, registerAs } from '@nestjs/config';

const AMQP_CONFIG_EXCHANGES: RabbitMQExchangeConfig[] = [];

export const _amqpConfig = (configIdent: string, env: string) =>
    registerAs(configIdent, (): RabbitMQConfig => {
        const configService = new ConfigService();
        const connectionString = configService.get<string>(env);
        if (!connectionString) {
            throw new Error(`ENV: '${env}' not found. Check '.env' file or server variables.`);
        }
        return {
            uri: connectionString.split(','),
            exchanges: AMQP_CONFIG_EXCHANGES,
            connectionInitOptions: { wait: false },
            connectionManagerOptions: {
                heartbeatIntervalInSeconds: 15,
                reconnectTimeInSeconds: 30,
            },
        };
    });
