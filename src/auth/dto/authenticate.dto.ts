import { IsNotEmpty, IsString } from "class-validator";

export class AuthenticateDto {
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}