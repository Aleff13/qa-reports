export interface IReport {
  description?: string;
  type: typeEnum;
  flags: number;
  recordDate: number;
  id: string;
}

export enum typeEnum {
  pr = "pull request",
  flag = "flag",
  bug = "bug",
}

const apiUrl = "http://localhost:3000";

class ReportService {
  static getReports = async (): Promise<IReport[]> => {
    const reports = await fetch(`${apiUrl}/reports`).then((res) => res.json());
    console.log(reports);
    return reports as unknown as IReport[];
  };

  static addReport = async (report: Partial<IReport>) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(report),
    };
    const response = await fetch(`${apiUrl}/reports`, options);
    return response;
  };

  static editReport = async (report: Partial<IReport>) => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(report),
    };
    const response = await fetch(`${apiUrl}/reports/${report.id}`, options);
    return response;
  };

  static removeReport = async (id: string) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${apiUrl}/reports/${id}`, options);
    return response;
  };
}

export default ReportService;
