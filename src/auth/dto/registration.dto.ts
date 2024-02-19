import { IsInt, IsString } from "class-validator";

export class RegistrationDto {
    @IsString()
    email: string;

    @IsString()
    password: string;

    @IsString()
    name: string;

    @IsString()
    roleName: string;

    @IsInt()
    countryId: number;

}