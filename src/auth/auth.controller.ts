import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthenticateDto } from './dto/authenticate.dto';
import { RegistrationDto } from './dto/registration.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth-Controller')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(new ValidationPipe())
  @Post('login')
  login(@Body() authDto: AuthenticateDto) {
    return this.authService.authenticate(authDto);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  registration(@Body() registration: RegistrationDto) {
    return this.authService.registration(registration)
  }
}
