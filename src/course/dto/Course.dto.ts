import { ApiProperty } from "@nestjs/swagger"
import { IsInt, IsString } from "class-validator"

export class CourseDto {
    @ApiProperty({example: 10, description: 'ціна долару відносно валюти вибраної країни'})
    @IsInt()
    dollars: number

    @ApiProperty({example: 12, description: 'ціна євро відносно валюти вибраної країни'})
    @IsInt()
    euro: number

    @ApiProperty({example: "England", description: "Назва країни якій належить ця валюта"})
    @IsString()
    countryName: string
}