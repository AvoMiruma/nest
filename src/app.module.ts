import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { CountryModule } from './country/country.module';
import { CourseModule } from './course/course.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt.strategy';


@Module({
  imports: [
    DatabaseModule,
    CountryModule, 
    CourseModule, 
    UserModule, 
    RoleModule, 
    AuthModule, 
    JwtModule.register({secret: 'secrete', signOptions: {expiresIn: '1h'}}),],
  controllers: [],
  providers: [JwtStrategy],
})
export class AppModule {}
