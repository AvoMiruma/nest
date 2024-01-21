import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";

export class ChangeCountryUser {
    @ApiProperty({example: "bob@gmail.com", description: "email користувача"})
    @IsString()
    email: string

    @ApiProperty({example: 2, description: "Id країни на яку потрібно змінити користувачу"})
    @IsInt()
    countryId: number
}