import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleDto } from './dto/role.dto';
import { DeleteRoleDto } from './dto/deleteRole.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role/role.guard';

@ApiTags('Операції з ролями користувача')
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}
  
  @ApiOperation({summary: 'Виведення всіх існуючих ролей'})
  @ApiResponse({status: 200, type: [RoleDto]})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('get')
  getAll() {
    return this.roleService.getAll()
  }

  @ApiOperation({summary: 'Пошук ролі по Id'})
  @ApiResponse({status: 200, type: RoleDto})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('get/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.roleService.getById(id);
  }

  @ApiOperation({summary: 'Створення нової ролі'})
  @ApiResponse({status: 200, type: RoleDto})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post('create')
  @UsePipes(new ValidationPipe())
  create(@Body() dto: RoleDto) {
    return this.roleService.create(dto)
  }

  @ApiOperation({summary: 'Зміна опису до ролі'})
  @ApiResponse({status: 200, type: RoleDto})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Put('update')
  @UsePipes(new ValidationPipe())
  changeRoleDescription(@Body() dto: RoleDto) {
    return this.roleService.changeRoleDescription(dto)
  }

  @ApiOperation({summary: 'Видалення ролі'})
  @ApiResponse({status: 200, type: RoleDto})
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Delete()
  @UsePipes(new ValidationPipe())
  delete(@Body() dto: DeleteRoleDto) {
    return this.roleService.delete(dto)
  }
}
