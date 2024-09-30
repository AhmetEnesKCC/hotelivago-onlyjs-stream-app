import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginDTO } from './dto/login.dto';
import { SignupDTO } from './dto/signup.dto';
import * as argon2 from 'argon2';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  private async validateUser(email: string) {
    const isExist = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    return Boolean(isExist);
  }

  async login(loginDTO: LoginDTO) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: loginDTO.email,
      },
    });
    if (!user) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    const isPasswordValid = await argon2.verify(
      user.password,
      loginDTO.password,
    );
    if (!isPasswordValid) {
      return new HttpException('Invalid password', HttpStatus.UNAUTHORIZED);
    }
    const token = this.jwt.sign(user);
    return { token, message: 'Login successful' };
  }
  async signup(signupDTO: SignupDTO) {
    try {
      const isExist = await this.validateUser(signupDTO.email);
      if (isExist) {
        return new HttpException('User already exists', HttpStatus.CONFLICT);
      }
      const hashedPassword = await argon2.hash(signupDTO.password);
      const user = await this.prisma.user.create({
        data: {
          email: signupDTO.email,
          password: hashedPassword,
          name: signupDTO.name,
        },
      });
      const token = this.jwt.sign(user);
      return { token, message: 'User created successfully' };
    } catch {
      return new HttpException('Can not create user', HttpStatus.BAD_REQUEST);
    }
  }
}
