import { Report } from 'src/schema/report';
import ReportSchema from '../schema/reportSchema';
import { v4 as uuidv4 } from 'uuid';

class ReportRepository {
  public async getAll() {
    const reports = await ReportSchema.scan()
      .attributes(['id', 'description', 'flags', 'recordDate', 'type'])
      .exec();

    return reports;
  }

  public async createReport(report: Report) {
    report.id = uuidv4(); //this is the issue, it seems
    console.log({ report });
    const reports = await ReportSchema.create(report);

    return reports;
  }

  public async deleteReport(id: string) {
    const result = await ReportSchema.delete(id);

    return result;
  }

  public async getById(id: string) {
    const result = ReportSchema.get(id);

    return result as unknown as Report;
  }

  public async updateReport(report: Report) {
    const result = await ReportSchema.update(report);

    return result;
  }
}

export default ReportRepository;
