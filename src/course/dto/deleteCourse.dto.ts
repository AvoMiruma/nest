import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class DeleteCourseDto {
    @ApiProperty({example: 'England', description: 'Назва країни курс якої потрібно видалити'})
    @IsString()
    countryName: string
}