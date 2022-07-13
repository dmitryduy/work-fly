import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdateDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Alex',
    description: 'Имя пользователя',
  })
  name: string;

  @ApiProperty({
    example: '+11111111111',
    description: 'Номер телефона пользователя',
  })
  phone: string;

  @ApiProperty({
    example: 'test@gmail.com',
    description: 'Почтовый адресс пользователя',
  })
  email: string;

  @IsNotEmpty()
  @ApiProperty({
    example: 1,
    description: 'Уникальный идентификатор пользователя',
  })
  id: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Google',
    description: 'Компания пользователя',
  })
  company: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @ApiProperty({
    example: '12345678',
    description: 'Пароль пользователя',
  })
  password: string;

  @IsNotEmpty()
  @ApiProperty({
    example: 10,
    description: 'Количество сотрудников компании пользователя',
  })
  amount: number;
}
