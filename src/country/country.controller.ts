import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/createCountry.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ChangeCountryNameDto } from './dto/changeCountry.dto';
import { Roles } from 'src/auth/roles/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role/role.guard';


@ApiTags('Операції з країнами')
@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @ApiOperation({summary: 'Пошук країни по Id'})
  @ApiResponse({status: 200, type: CreateCountryDto})
  @Roles("USER")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('get/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.countryService.getById(id);
  }

  @ApiOperation({summary: 'Виведення усіх країн'})
  @ApiResponse({status: 200, type: [CreateCountryDto]})
  @Roles("USER")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('get')
  getAll() {
    return this.countryService.getAll();
  }

  @ApiOperation({summary: 'Створення країни'})
  @ApiResponse({status: 200, type: CreateCountryDto})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post('create')
  @UsePipes(new ValidationPipe())
  create(@Body() dto: CreateCountryDto) {
    return this.countryService.create(dto);
  }

  @ApiOperation({summary: 'Зміна назви країни'})
  @ApiResponse({status: 200, type: CreateCountryDto})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Put('update')
  @UsePipes(new ValidationPipe())
  changeCountryName(@Body() dto: ChangeCountryNameDto) {
    return this.countryService.changeCountryName(dto);
  }

  @ApiOperation({summary: 'Видалення країни'})
  @ApiResponse({status: 200, type: CreateCountryDto})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Delete('delete/:id')
  deleteById(@Param('id', ParseIntPipe) id: number) {
    return this.countryService.delete(id);
  }
}
