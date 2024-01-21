import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CourseDto } from './dto/Course.dto';
import { DeleteCourseDto } from './dto/deleteCourse.dto';

@Injectable()
export class CourseService {
    constructor(private readonly databaseService: DatabaseService) {}

    async changeCourse(dto: CourseDto) {
        const course = await this.databaseService.course.update({
            where: {
                countryName: dto.countryName
            }, 
            data:{
                dollars: dto.dollars,
                euro: dto.euro
            }
        })
        if(!course) {
            throw new NotFoundException({message: "Курсу цієї країни не знайдено"})
        }
        return course;
    }

    async getAll() {
        const course = await this.databaseService.course.findMany()
        if(!course) {
            throw new NotFoundException({message: "Ще не створено жодного курсу країни"})
        }
        return course;
    }

    async getById(id: number) {
        const course = await this.databaseService.course.findUnique({where: {id: id}})
        if(!course) {
            throw new NotFoundException({message: "Курсу з таким Id не знайдено"})
        }
        return course
    }

    async create(dto: CourseDto) {
        const course = await this.databaseService.course.create({
            data: {
                dollars: dto.dollars, 
                euro: dto.euro, 
                countryName: dto.countryName
            }
        })
        return course;
    }

    async delete(dto: DeleteCourseDto) {
        const course = await this.databaseService.course.delete({where: {countryName: dto.countryName}})
        if(!course) {
            throw new NotFoundException({message: "Курсу для цля цієї країни не знайдено"})
        }
        return course;
    }
}
