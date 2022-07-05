import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { InjectRepository } from '@nestjs/typeorm';
import { Verification } from 'src/entities/Verification';
import { Repository } from 'typeorm';
import { Users } from 'src/entities/Users';
import { UpdateDto } from './dto/update.dto';
import { TypicalResponceDto } from 'src/dto/typicalResponce.dto';
import { JwtService } from '@nestjs/jwt';
import { hash } from 'bcryptjs';

@Injectable()
export class RegistrationService {
  constructor(
    private readonly mailerService: MailerService,
    @InjectRepository(Verification)
    private readonly verificationRepository: Repository<Verification>,
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
    private readonly jwtService: JwtService,
  ) {}

  private generateCode(): string {
    return Math.random().toString(36).substring(2, 6).toUpperCase();
  }

  private async insertOrUpdateRepository(
    email: string,
    phone: string,
    code: string,
  ): Promise<void> {
    if (
      await this.verificationRepository.findOne({
        where: { email },
      })
    )
      this.verificationRepository.update({ email }, { phone, code });
    else this.verificationRepository.insert({ email, phone, code });
  }

  async register(data: RegisterDto): Promise<RegisterDto> {
    const { email, phone } = data;
    const code = this.generateCode();
    if (await this.usersRepository.findOne({ where: [{ email }, { phone }] }))
      throw new HttpException(
        'This email or phone number is already registered',
        HttpStatus.FORBIDDEN,
      );
    this.mailerService.sendMail({
      to: email,
      subject: 'Registration',
      text: `You have successfully registered, code - ${code}`,
    });
    this.insertOrUpdateRepository(email, phone, code);
    return data;
  }

  async verifyCode(userCode: string): Promise<Users> {
    const user = await this.verificationRepository.findOne({
      where: { code: userCode },
    });
    if (!user) throw new HttpException('Incorrect code', HttpStatus.FORBIDDEN);
    const { raw } = await this.usersRepository.insert({
      email: user.email,
      phone: user.phone,
    });
    await this.verificationRepository.delete({ email: user.email });
    return raw;
  }

  async repeatCode(email: string | undefined): Promise<TypicalResponceDto> {
    const user = await this.verificationRepository.findOne({
      where: { email: String(email) },
    });
    if (!user)
      throw new HttpException(
        'This email is not registered',
        HttpStatus.FORBIDDEN,
      );
    const code = this.generateCode();
    this.mailerService.sendMail({
      to: email,
      subject: 'Repeat code',
      text: `You re-requested the code, your new code - ${code}`,
    });
    this.insertOrUpdateRepository(email, user.phone, code);
    return { message: 'Code sent' };
  }

  private genetateToken({ email, id, name }: Users) {
    return this.jwtService.sign({ email, id, name });
  }

  async updateUser(updateData: UpdateDto): Promise<string> {
    const user = await this.usersRepository.findOne({
      where: { id: updateData.id },
    });
    if (!user)
      throw new HttpException(
        'This user is not registered',
        HttpStatus.FORBIDDEN,
      );
    if (user.name)
      throw new HttpException(
        'This user is already registered',
        HttpStatus.FORBIDDEN,
      );
    const hashPassword = await hash(updateData.password, 10);
    this.usersRepository.update(
      { id: updateData.id },
      {
        ...updateData,
        password: hashPassword,
        name: user.name,
        phone: user.phone,
      },
    );
    return this.genetateToken(user);
  }
}
