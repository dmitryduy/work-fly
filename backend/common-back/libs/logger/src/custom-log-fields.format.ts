import * as winston from 'winston';
import { format } from 'winston';

const transformFunction = format((info) => {
    return {
        ...info,
        service: 'common-back',
    };
});

export const customLogFieldsFormat: winston.Logform.Format = transformFunction({});
