import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { DatabaseModule } from 'src/database/database.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [CourseController],
  providers: [CourseService],
  imports: [DatabaseModule, AuthModule]
})
export class CourseModule {}
