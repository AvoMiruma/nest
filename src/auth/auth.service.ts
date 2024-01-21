import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcryptjs'
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/user/dto/User.dto';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
    constructor(private readonly databaseService: DatabaseService,
                private readonly jwtService: JwtService) {}

    async login(dto: AuthDto) {
        const user = await this.validateUser(dto)
        return this.generateToken(user);
    }
    
    async registration(dto: UserDto) {
        const candidate = await this.databaseService.user.findUnique({where: {email: dto.email}})
        if(candidate) {
            throw new HttpException('Користувач з таким email вже існує', HttpStatus.BAD_REQUEST)
        }
        dto.password = await bcrypt.hash(dto.password, 5);
        const user = await this.databaseService.user.create({data: dto})
        return this.generateToken(user);
    }

    private async generateToken(user: User) {
        const payload = {email: user.email, id: user.id, role: user.roleId}
        return {
            token:  this.jwtService.sign(payload)
        }
    }

    private async validateUser(dto: AuthDto) {
        const user = await this.databaseService.user.findUnique({where: {email: dto.email}})
        const passwordEquals = await bcrypt.compare(dto.password, user.password);
        if(user && passwordEquals) {
            return user;
        }
        throw new UnauthorizedException({message: 'Не коректний логін або пароль'})
    }
}
