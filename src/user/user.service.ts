import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { ChangeCountryUser } from './dto/changeCountryUser.dto';
import { ChangePasswordUser } from './dto/changePasswordUser.dto';
import { UserDto } from './dto/User.dto';
import { UserRoleDto } from './dto/getUserByRole.dto';

@Injectable()
export class UserService {
    constructor(private readonly databaseService: DatabaseService) {}

    //TODO: Add get user by Role
    async getAll() {
        const users = await this.databaseService.user.findMany();
        if(!users) {
            throw new NotFoundException({message: "Ще не створено жодного користувача"})
        }
        return users;
    }

    async getUserById(id: number) {
        const user = await this.databaseService.user.findUnique({where: {id: id}});
        if(!user) {
            throw new NotFoundException({message: "Користувача з таким Id не знайдено"})
        }
        return user;
    }

    async getUserByRole(dto: UserRoleDto) {
        const users = await this.databaseService.user.findMany({where: {roleName: dto.roleName}})
        if(!users) {
            throw new NotFoundException({message: "Користувача з такою роллю не знайдено"})
        }
        return users;
    }

    async create(dto: UserDto) {
        const user = await this.databaseService.user.create({data: dto});
        return user;
    }

    async changePassword(dto: ChangePasswordUser) {
        const user = await this.databaseService.user.update({
            where: {
                email: dto.email
            },
            data: {
                password: dto.password
            },
        });
        if(!user) {
            throw new NotFoundException({message: "Введені не коректний логін або пароль"})
        }
        return user;
    }

    async changeCountry(dto: ChangeCountryUser) {
        const user = await this.databaseService.user.update({
            where: {
                email: dto.email
            },
            data: {
                countryId: dto.countryId
            }
        });
        if(!user) {
            throw new NotFoundException({message: "Введені не коректні данні"})
        }
        return user;
    }

    async delete(id: number) {
        const user = await this.databaseService.user.delete({where: {id: id}});
        if(!user) {
            throw new NotFoundException({message: "Користувача з таким Id не знайдено"})
        }
        return user;
    }
}
