import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { RoleDto } from './dto/role.dto'
import { DeleteRoleDto } from './dto/deleteRole.dto';

@Injectable()
export class RoleService {
    constructor(private readonly databaseService: DatabaseService) {}

    async getAll() {
        const roles = await this.databaseService.role.findMany()
        return roles;
    }

    async getById(id) {
        const role = await this.databaseService.role.findUnique({where: {id: id}})
        return role;
    }

    async changeRoleDescription(dto: RoleDto) {
        const role = await this.databaseService.role.update({
            where: {
                role: dto.role
            }, 
            data: {
                description: dto.description
            }
        })
        return role;
    }

    async create(dto: RoleDto) {
        const role = await this.databaseService.role.create({data: dto})
        return role;
    }

    async delete(dto: DeleteRoleDto) {
        const role = await this.databaseService.role.delete({where: {role: dto.role}})
        return role;
    }
}
