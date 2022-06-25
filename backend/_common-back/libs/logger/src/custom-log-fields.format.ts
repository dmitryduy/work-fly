import * as winston from 'winston';
import { format } from 'winston';

const transformFunction = format((info) => {
    return {
        ...info,
        service: 'common-back',
        type: info.type ?? 'internal',
    };
});

export const customLogFieldsFormat: winston.Logform.Format = transformFunction({});
