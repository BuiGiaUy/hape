import { MaxLength, MinLength, IsNotEmpty, IsEmail, IsString, IsNumber } from "class-validator";

export class UserDto {
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  readonly name: string;


  @MaxLength(14)
  @MinLength(8)
  phone: string;


  @IsEmail()
  @MinLength(5)
  @MaxLength(20)
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(60)
  password: string;
}
