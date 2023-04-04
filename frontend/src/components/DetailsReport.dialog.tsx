import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import { ChangeEvent, useState } from "react";
import { typeEnum, IReport } from "../services/reports";
import ReportService from "../services/reports";

export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
  report: IReport;
}

export const EditReportDialog = ({
  open,
  onClose,
  report,
}: SimpleDialogProps) => {
  const [type, setType] = useState<typeEnum>(report.type || typeEnum.pr);
  const [description, setDescription] = useState<string>(
    report?.description || ""
  );
  const [date, setDate] = useState<number>(report.recordDate || Date.now);
  const [flags, setFlags] = useState<number>(report.flags || 0);

  const handleTypeChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string as typeEnum);
  };

  const handleNameChange = (event: ChangeEvent) => {
    setDescription(event.target?.value || "");
  };

  const handleFlagsChange = (event: ChangeEvent) => {
    setFlags(event.target?.value || 0);
  };

  const handleDateChange = (event: ChangeEvent) => {
    setDate(event.target?.value || "");
  };

  const onSave = async () => {
    const reportData: IReport = {
      type,
      description,
      id: report.id,
      flags,
      recordDate: Number(date),
    };
    await ReportService.editReport(reportData);
    location.reload();
  };

  return (
    <Dialog onClose={onClose} open={open} maxWidth={"xl"} title="Edit">
      <DialogTitle>Edit report</DialogTitle>

      <Container
        sx={{
          marginTop: 2,
          marginBottom: 3,
          width: 600,
          height: "fit-content",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            onChange={handleNameChange}
            value={description}
          />
          <br></br>
          <TextField
            id="outlined-basic"
            label="Flags"
            variant="outlined"
            type="number"
            onChange={handleFlagsChange}
            value={flags}
          />
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
              value={date}
              onChange={handleDateChange}
              style={{
                marginRight: 20,
                height: 50,
                backgroundColor: "#1b5e20",
                borderRadius: 10,
                width: "50%",
              }}
            ></input>
            <Select
              id="demo-simple-select"
              value={type}
              label="Type"
              onChange={handleTypeChange}
            >
              <MenuItem value={typeEnum.pr}>Pull Request</MenuItem>
              <MenuItem value={typeEnum.flag}>Flag</MenuItem>
            </Select>
          </Box>
        </FormControl>
        <br></br>
        <Button variant="contained" color="success" onClick={onSave}>
          Edit
        </Button>
        <br></br>

        <Button variant="outlined" color="error" onClick={onClose}>
          Cancel
        </Button>
      </Container>
    </Dialog>
  );
};
