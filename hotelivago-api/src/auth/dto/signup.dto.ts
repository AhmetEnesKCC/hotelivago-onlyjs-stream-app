import { PartialType } from '@nestjs/mapped-types';
import { LoginDTO } from './login.dto';

export class SignupDTO extends PartialType(LoginDTO) {
  name: string;
}
