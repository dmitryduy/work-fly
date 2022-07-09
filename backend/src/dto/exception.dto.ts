import { ApiProperty } from '@nestjs/swagger';

export class ExceptionDto {
  @ApiProperty({
    example: 403,
    description: 'Код http ответа',
  })
  statusCode: string;

  @ApiProperty({
    example: 'Ошибка ...',
    description: 'Описание ошибки в теле ответа',
  })
  message: string;
}
