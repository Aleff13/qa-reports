import { Box, Button, Dialog, DialogTitle, FormControl } from "@mui/material";
import { Container } from "@mui/system";
import { ChangeEvent, useState } from "react";
import { IReport } from "../services/reports";
import generatePdf from "../services/pdf";

export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
  reports: IReport[];
}

export const ExportReportsDialog = ({
  open,
  onClose,
  reports,
}: SimpleDialogProps) => {
  const [initialDate, setInitialDate] = useState(0);
  const [finalDate, setFinalDate] = useState(0);

  const handleInitialDateChange = (event: ChangeEvent) => {
    setInitialDate(event.target?.value || "");
  };

  const handleFinalDateChange = (event: ChangeEvent) => {
    setFinalDate(event.target?.value || "");
  };

  const onConfirm = async () => {
    if (initialDate === 0 || finalDate === 0) {
      generatePdf(reports);
      return;
    }
    const filteredResults = reports.filter(
      (report: IReport) =>
        report.recordDate >= new Date(initialDate).getTime() &&
        report.recordDate <= new Date(finalDate).getTime()
    );
    generatePdf(filteredResults, initialDate, finalDate);
  };

  return (
    <Dialog onClose={onClose} open={open} maxWidth={"xl"} title="Export">
      <DialogTitle>Export reports</DialogTitle>

      <Container
        sx={{
          marginTop: 2,
          width: 500,
          height: 300,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <FormControl fullWidth>
          <Box
            sx={{
              flexDirection: "row",
              gap: 10,
              pt: 5,
            }}
          >
            <input
              type="date"
              id="start"
              name="trip-start"
              value={initialDate}
              onChange={handleInitialDateChange}
              style={{
                marginRight: 20,
                height: 50,
                backgroundColor: "#1b5e20",
                borderRadius: 10,
                width: "40%",
              }}
            ></input>
            <input
              type="date"
              id="start"
              name="trip-start"
              value={finalDate}
              onChange={handleFinalDateChange}
              style={{
                marginRight: 20,
                height: 50,
                backgroundColor: "#1b5e20",
                borderRadius: 10,
                width: "40%",
              }}
            ></input>
          </Box>
        </FormControl>
        <br></br>
        <Button variant="contained" color="info" onClick={onConfirm}>
          Export
        </Button>
        <br></br>

        <Button variant="outlined" color="error" onClick={onClose}>
          Close
        </Button>
      </Container>
    </Dialog>
  );
};
