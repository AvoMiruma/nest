import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class DeleteRoleDto {
    @ApiProperty({example: "ADMIN", description: "Назва ролі, яку потрібно видалити"})
    @IsString()
    role: string
}