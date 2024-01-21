import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class ChangePasswordUser {
    @ApiProperty({example: "bob@gmail.com", description: "email користувача"})
    @IsString()
    email: string
    
    @ApiProperty({example: "123456", description: "Новий пароль користувача"})
    @IsString()
    password: string
}