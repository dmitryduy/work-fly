export interface RequestLogFormat {
    module: string;
    method: string;
    requestPayload: object;
    requestPayloadString: string;
    protocol: 'socketio' | 'webhook' | 'http' | 'rabbitmq' | 'redis' | '';
    internalPayload: object;
    internalPayloadString: string;
    level: 'silly' | 'debug' | 'verbose' | 'info' | 'warn' | 'error';
    requestSource?: string;
    message: string;
    response?: {
        status: number;
        error?: string;
        responseTime: number;
    };
    logType: 'internal' | 'request';
    actor: {
        login: string;
        role: string;
    };
}
