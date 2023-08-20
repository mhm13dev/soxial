import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class SignupBodyReqDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  confirmPassword: string;
}
