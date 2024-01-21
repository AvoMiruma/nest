import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/User.dto';
import { ChangePasswordUser } from './dto/changePasswordUser.dto';
import { ChangeCountryUser } from './dto/changeCountryUser.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { UserRoleDto } from './dto/getUserByRole.dto';

@ApiTags('Операції з користувачами')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({summary: 'Отримання усіх користувачів'})
  @ApiResponse({status: 200, type: [UserDto]})
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Get('get')
  getAll() {
    return this.userService.getAll();
  }

  @ApiOperation({summary: 'Зміна ролі користувача'})
  @ApiResponse({status: 200, type: UserDto})
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Get('get/role')
  @UsePipes(new ValidationPipe())
  getUserByRole(@Body() dto: UserRoleDto) {
    return this.userService.getUserByRole(dto);
  }

  
  @ApiOperation({summary: 'Отримання користувача по Id'})
  @ApiResponse({status: 200, type: UserDto})
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Get('get/:id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }

  @ApiOperation({summary: 'Створення користувача'})
  @ApiResponse({status: 200, type: UserDto})
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post('create')
  @UsePipes(new ValidationPipe())
  create(@Body() dto: UserDto) {
    return this.userService.create(dto);
  }

  @ApiOperation({summary: 'Зміна паролю користувача'})
  @ApiResponse({status: 200, type: ChangePasswordUser})
  @UseGuards(JwtAuthGuard)
  @Put('update/password')
  @UsePipes(new ValidationPipe())
  changePassword(@Body() dto: ChangePasswordUser) {
    return this.userService.changePassword(dto);
  }

  @ApiOperation({summary: 'Зміна країни користувача'})
  @ApiResponse({status: 200, type: ChangeCountryUser})
  @UseGuards(JwtAuthGuard)
  @Put('update/country')
  @UsePipes(new ValidationPipe())
  changeCountry(@Body() dto: ChangeCountryUser) {
    return this.userService.changeCountry(dto);
  }

  @ApiOperation({summary: 'Видалення користувача'})
  @ApiResponse({status: 200, type: UserDto})
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Delete('delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
