import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/createCountry.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ChangeCountryNameDto } from './dto/changeCountry.dto';

@ApiTags('Операції з країнами')
@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @ApiOperation({summary: 'Пошук країни по Id'})
  @ApiResponse({status: 200, type: CreateCountryDto})
  @UseGuards(JwtAuthGuard)
  @Get('get/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.countryService.getById(id);
  }

  @ApiOperation({summary: 'Виведення усіх країн'})
  @ApiResponse({status: 200, type: [CreateCountryDto]})
  @UseGuards(JwtAuthGuard)
  @Get('get')
  getAll() {
    return this.countryService.getAll();
  }

  @ApiOperation({summary: 'Створення країни'})
  @ApiResponse({status: 200, type: CreateCountryDto})
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post('create')
  @UsePipes(new ValidationPipe())
  create(@Body() dto: CreateCountryDto) {
    return this.countryService.create(dto);
  }

  @ApiOperation({summary: 'Зміна назви країни'})
  @ApiResponse({status: 200, type: CreateCountryDto})
  @UseGuards(JwtAuthGuard)
  @Put('update')
  @UsePipes(new ValidationPipe())
  changeCountryName(@Body() dto: ChangeCountryNameDto) {
    return this.countryService.changeCountryName(dto);
  }

  @ApiOperation({summary: 'Видалення країни'})
  @ApiResponse({status: 200, type: CreateCountryDto})
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Delete('delete/:id')
  deleteById(@Param('id', ParseIntPipe) id: number) {
    return this.countryService.delete(id);
  }
}
