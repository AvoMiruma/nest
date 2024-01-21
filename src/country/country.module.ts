import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { DatabaseModule } from 'src/database/database.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [CountryController],
  providers: [CountryService],
  imports: [DatabaseModule, AuthModule]
})
export class CountryModule {}
