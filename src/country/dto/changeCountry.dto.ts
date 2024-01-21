import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class ChangeCountryNameDto {
    @ApiProperty({example: "Poland", description: "Нова назва країни"})
    @IsString()
    newName: string

    @ApiProperty({example: "England", description: "Назва країни"})
    @IsString()
    name: string
}