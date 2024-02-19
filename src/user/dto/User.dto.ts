import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";

export class UserDto {
    @ApiProperty({example: "bob@gmail.com", description: "email користувача"})
    @IsString()
    email: string

    @ApiProperty({example: "12345", description: "Пароль користувача"})
    @IsString()
    password: string

    @ApiProperty({example: "james", description: "Ім'я користувача"})
    @IsString()
    name: string

    @ApiProperty({example: 1, description: "Id Країни в якій проживає користувач"})
    @IsInt()
    countryId: number

    @IsString()
    roleName: string
}