import * as React from "react";
import Typography from "@mui/material/Typography";
import { Card, CardActions, CardContent, IconButton } from "@mui/material";
import { EditReportDialog } from "./DetailsReport.dialog";
import { IReport, typeEnum } from "../services/reports";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import ReportService from "../services/reports";
import dateTimeToReadble from "../services/common";
// interface ReportCardProps {
//   description: string;
//   type: typeEnum;
//   id: string;
//   flags: number;
//   recordDate: number;
// }
const ReportCard = (report: IReport) => {
  const [open, setOpen] = useState(false);
  //const report: IReport = { description, type, id, flags, recordDate };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };

  const handleRemove = async () => {
    await ReportService.removeReport(report.id);
    location.reload();
  };

  return (
    <Card
      sx={{ width: 400, margin: 5, backgroundColor: "#080541" }}
      elevation={8}
    >
      <CardContent sx={{ textAlignLast: "start" }}>
        <Typography sx={{ fontSize: 22 }} color="white" gutterBottom>
          {report.description}
        </Typography>
        <Typography variant="body2" color="white" sx={{ fontSize: 16 }}>
          Tipo: {report.type}
        </Typography>
        <Typography variant="body2" color="white" sx={{ fontSize: 16 }}>
          Flags: {report.flags.toString()}
        </Typography>
        <Typography variant="body2" color="white" sx={{ fontSize: 16 }}>
          Test cases: {report.testCases}
        </Typography>
        <Typography variant="body2" color="white" sx={{ fontSize: 16 }}>
          Data da criação: {dateTimeToReadble(report.recordDate)}
        </Typography>
      </CardContent>
      <CardActions sx={{ gap: 2, pt: 2 }}>
        <IconButton onClick={handleClickOpen} color="primary">
          <EditIcon />
        </IconButton>
        <IconButton onClick={handleRemove} color="primary">
          <DeleteForeverIcon />
        </IconButton>
        <EditReportDialog open={open} onClose={handleClose} report={report} />
      </CardActions>
    </Card>
  );
};

export { ReportCard };
