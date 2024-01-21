import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class AuthDto {
    @ApiProperty({example: "user333@gmail.com", description: "Електронна пошта користувача"})
    @IsString()
    email: string

    @ApiProperty({example: "12326fgsa", description: "Пароль користувача"})
    @IsString()
    password: string
}