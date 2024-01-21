import { BadRequestException, HttpException, HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateCountryDto } from './dto/createCountry.dto';
import { DatabaseService } from 'src/database/database.service';
import { ChangeCountryNameDto } from './dto/changeCountry.dto';

@Injectable()
export class CountryService {
    constructor(private readonly databaseService: DatabaseService) {}

    async getAll() {
        const country = await this.databaseService.country.findMany();
        if(!country) {
            throw new NotFoundException({message: "Ще не створено жодної країни"})
        }
        return country;
    }

    async getById(id) {
        const country = await this.databaseService.country.findUnique({where: {id: id}})
        if(!country) {
            throw new NotFoundException({message: "Країни з таким Id не знайдено"})
        }
        return country;     
    }

    async create(dto: CreateCountryDto){
        const country = await this.databaseService.country.create({data: dto})
        return country;
    }

    async changeCountryName(dto: ChangeCountryNameDto) {
        const country = await this.databaseService.country.update({
            where: {
                name: dto.name
            }, 
            data: {
                name: dto.newName
            }
        })
        return country;
    }

    async delete(id) {
        const country = await this.databaseService.country.delete({where: {id: id}})
        if(!country) {
            throw new NotFoundException({message: "Країни з таким Id не знайдено"})
        }
        return country;
    }
}
