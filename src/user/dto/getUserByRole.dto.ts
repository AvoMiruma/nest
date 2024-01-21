import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

export class  UserRoleDto {
    @ApiProperty({example: 1, description: "Id ролі користувача"})
    @IsInt()
    roleId: number
}