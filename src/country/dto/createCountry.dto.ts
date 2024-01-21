import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateCountryDto {
    @ApiProperty({example: 'England', description: 'Назва країни'})
    @IsString()
    name: string;

    @ApiProperty({example: 'frank', description: 'Назва власної валюти країни'})
    @IsString()
    currency: string;
}