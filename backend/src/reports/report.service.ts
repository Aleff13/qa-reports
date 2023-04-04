import { Injectable } from '@nestjs/common';
import ReportRepository from '../services/report.service';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';

@Injectable()
export class ReportService {
  private reportRepo: ReportRepository;

  constructor() {
    this.reportRepo = new ReportRepository();
  }

  async create(createReportDto: CreateReportDto) {
    return await this.reportRepo.createReport(createReportDto);
  }

  async findAll() {
    return await this.reportRepo.getAll();
  }

  async findOne(id: string) {
    return await this.reportRepo.getById(id);
  }

  async update(id: string, UpdateReportDto: UpdateReportDto) {
    return await this.reportRepo.updateReport(UpdateReportDto);
  }

  async remove(id: string) {
    return await this.reportRepo.deleteReport(id);
  }
}
