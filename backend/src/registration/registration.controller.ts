import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Get,
  Query,
  Delete,
  Put,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ExceptionDto } from 'src/dto/exception.dto';
import { TypicalResponceDto } from 'src/dto/typicalResponce.dto';
import { Users } from 'src/entities/Users';
import { RegisterDto } from './dto/register.dto';
import { UpdateDto } from './dto/update.dto';
import { RegistrationService } from './registration.service';

@ApiTags('Регистрация')
@Controller('registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary:
      'Регистрация пользователя по почте и телефону, оправка кода по почте',
  })
  @ApiCreatedResponse({
    status: HttpStatus.CREATED,
    type: RegisterDto,
  })
  @ApiForbiddenResponse({
    status: HttpStatus.FORBIDDEN,
    type: ExceptionDto,
  })
  async register(@Body() RegisterData: RegisterDto): Promise<RegisterDto> {
    return await this.registrationService.register(RegisterData);
  }

  @Delete()
  @ApiOperation({
    summary: 'Валидация кода, первоначальная регистрация пользователя',
  })
  @ApiOkResponse({
    status: HttpStatus.OK,
    type: Users,
  })
  @ApiForbiddenResponse({
    status: HttpStatus.FORBIDDEN,
    type: ExceptionDto,
  })
  @HttpCode(HttpStatus.OK)
  async verifyCode(@Query('code') code: string): Promise<Users> {
    return await this.registrationService.verifyCode(code);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Повторная отправка кода по почте',
  })
  @ApiOkResponse({
    status: HttpStatus.OK,
    type: TypicalResponceDto,
  })
  @ApiForbiddenResponse({
    status: HttpStatus.FORBIDDEN,
    type: ExceptionDto,
  })
  async repeatCode(@Query('email') email: string): Promise<TypicalResponceDto> {
    return await this.registrationService.repeatCode(email);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary:
      'Окончательная регистрация пользователя (обновление данных пользователя)',
  })
  @ApiBody({
    type: UpdateDto,
    description:
      'Данные для регистрации, email и phone можно не передавать, главное - id и информация о пользователе',
  })
  @ApiOkResponse({
    status: HttpStatus.OK,
    schema: { type: 'string' },
    description: 'Токен для авторизации',
  })
  @ApiForbiddenResponse({
    status: HttpStatus.FORBIDDEN,
    type: ExceptionDto,
  })
  async updateUser(@Body() UpdateData: UpdateDto): Promise<string> {
    return await this.registrationService.updateUser(UpdateData);
  }
}
