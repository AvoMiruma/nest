import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class  UserRoleDto {
    @ApiProperty({example: 1, description: "Id ролі користувача"})
    @IsString()
    roleName: string
}