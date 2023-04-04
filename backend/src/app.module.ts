import { Module } from '@nestjs/common';
import { ReportModule } from './reports/report.module';

@Module({
  imports: [ReportModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
