import { ApiProperty } from '@nestjs/swagger';

export class TypicalResponceDto {
  @ApiProperty({
    example: 'Операция прошла успешно',
    description: 'Описание ответа в теле ответа',
  })
  message: string;
}
