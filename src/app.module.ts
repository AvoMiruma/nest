import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { CountryModule } from './country/country.module';
import { CourseModule } from './course/course.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule, CountryModule, CourseModule, UserModule, RoleModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
