import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.css";
import { AddReportDialog } from "./components/AddReport.dialog";
import { ReportCard } from "./components/ReportCard";
import ReportService, { IReport, typeEnum } from "./services/reports";
import generatePdf from "./services/pdf";
import { ExportReportsDialog } from "./components/ExportReport.dialog";

const App = () => {
  const [open, setOpen] = useState(false);
  const [openExport, setOpenExport] = useState(false);
  const [reports, setReports] = useState<IReport[]>();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpenExport = () => {
    setOpenExport(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setOpenExport(false);
  };

  // const handleClickExport = () => {
  //   // Default export is a4 paper, portrait, using millimeters for units
  //   generatePdf(reports);
  // };

  useEffect(() => {
    const fetchMock = async () => {
      const reportsData = await ReportService.getReports();
      setReports(reportsData);
      console.log({ reports });
    };
    fetchMock();
  }, []);

  return (
    <Container>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", marginTop: "25px" }}
        color="white"
      >
        Reports
      </Typography>
      <Box
        sx={{
          flexDirection: "row",
          gap: 10,
          pt: 5,
        }}
      >
        <Button
          variant="contained"
          color="success"
          sx={{ borderRadius: 20, width: "fit-content", marginRight: 5 }}
          onClick={handleClickOpen}
        >
          Add new report
        </Button>
        <Button
          variant="contained"
          color="success"
          sx={{ borderRadius: 20, width: "fit-content" }}
          onClick={handleClickOpenExport}
        >
          Export reports in pdf
        </Button>
        <AddReportDialog open={open} onClose={handleClose}></AddReportDialog>
        <ExportReportsDialog
          open={openExport}
          onClose={handleClose}
          reports={reports}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          pt: 2,
        }}
      >
        {reports &&
          reports.map((report: IReport) => (
            <ReportCard
              id={report.id || ""}
              description={report.description || ""}
              type={report.type || typeEnum.pr}
              flags={report.flags}
              recordDate={report.recordDate}
              key={report.id}
            ></ReportCard>
          ))}
      </Box>
    </Container>
  );
};

export default App;
