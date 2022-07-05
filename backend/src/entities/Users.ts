import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @ApiProperty({
    example: 1,
    description: 'Уникальный идентификатор пользователя',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'test@gmail.com',
    description: 'Почтовый адресс пользователя',
  })
  @Column({ type: 'text' })
  email: string;

  @ApiProperty({
    example: '+11111111111',
    description: 'Номер телефона пользователя',
  })
  @Column({ type: 'varchar' })
  phone: string;

  @ApiProperty({
    example: 'Google',
    description: 'Компания пользователя',
  })
  @Column({ type: 'text', default: null })
  company: string;

  @ApiProperty({
    example: '$2a$10$RwPYbNqEAUYrTOy.FBYrxuupjz31fATGqt8x4Ev4prtp6.QPHD2fa',
    description: 'Пароль пользователя в виде хэша',
  })
  @Column({ type: 'text', default: null })
  password: string;

  @ApiProperty({
    example: 'Alex',
    description: 'Имя пользователя',
  })
  @Column({ type: 'text', default: null })
  name: string;

  @ApiProperty({
    example: 10,
    description: 'Количество сотрудников компании пользователя',
  })
  @Column({ type: 'int', default: null })
  amount: number;
}
