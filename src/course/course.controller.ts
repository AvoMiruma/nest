import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseDto } from './dto/Course.dto';
import { DeleteCourseDto } from './dto/deleteCourse.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@ApiTags('Операції з курсами країн')
@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @ApiOperation({summary: 'Отримання усіх курсів'})
  @ApiResponse({status: 200, type: [CourseDto]})
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Get('get')
  getAll() {
    return this.courseService.getAll();
  }

  @ApiOperation({summary: 'Отримання курсу по Id'})
  @ApiResponse({status: 200, type:CourseDto})
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Get('get/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.courseService.getById(id);
  }

  @ApiOperation({summary: 'Створення курсу'})
  @ApiResponse({status: 200, type: CourseDto})
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post('create')
  @UsePipes(new ValidationPipe())
  create(@Body() dto: CourseDto) {
    return this.courseService.create(dto);
  }

  @ApiOperation({summary: 'Зміна курсу валют'})
  @ApiResponse({status: 200, type: CourseDto})
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Put('update')
  @UsePipes(new ValidationPipe())
  changeCourse(@Body() dto: CourseDto) {
    return this.courseService.changeCourse(dto);
  }

  @ApiOperation({summary: 'Видалення курсу'})
  @ApiResponse({status: 200, type: DeleteCourseDto})
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Delete('delete')
  @UsePipes(new ValidationPipe())
  delete(@Body() dto: DeleteCourseDto) {
    return this.courseService.delete(dto);
  }

}
