import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Verification } from 'src/entities/Verification';
import { RegistrationController } from './registration.controller';
import { RegistrationService } from './registration.service';

@Module({
  providers: [RegistrationService],
  controllers: [RegistrationController],
  imports: [
    TypeOrmModule.forFeature([Verification, Users]),
    JwtModule.register({
      secret: process.env.JWT_KEY,
      signOptions: { expiresIn: '24h' },
    }),
  ],
})
export class RegistrationModule {}
