import {IsEmail, IsNotEmpty, MaxLength, MinLength} from "class-validator"
import {User} from "../interfaces/user.interfaces"

export class loginAuthDto implements User{
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @MinLength(6)
    @MaxLength(25)
    @IsNotEmpty()
    password: string;
}