import { Prisma } from '@prisma/client';

export class LoginDTO {
  email: Prisma.UserCreateInput['email'];
  password: Prisma.UserCreateInput['password'];
}
