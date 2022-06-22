import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsPhoneNumber } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  @ApiProperty({
    example: 'test@gmail.com',
    description: 'Почтовый адресс пользователя',
  })
  email: string;

  @ApiProperty({
    example: '+11111111111',
    description: 'Номер телефона пользователя',
  })
  @IsPhoneNumber('US')
  phone: string;
}
