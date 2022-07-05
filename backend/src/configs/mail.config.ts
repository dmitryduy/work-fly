import { ConfigService } from '@nestjs/config';

export const getMailConfig = async (
  configService: ConfigService,
): Promise<any> => {
  const transport = configService.get<string>('MAIL_TRANSPORT');
  const mailFromAddress = transport.split(':')[1].split('//')[1];

  return {
    transport,
    defaults: {
      from: `"WorkFly" <${mailFromAddress}>`,
    },
  };
};
