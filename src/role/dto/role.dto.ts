import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class RoleDto {
    @ApiProperty({example: "ADMIN", description: "Назва ролі"})
    @IsString()
    role: string

    @ApiProperty({example: "role admin have all access", description: "Опис ролі"})
    @IsString()
    description: string
}