import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import { ChangeEvent, useState } from "react";
import ReportService, { IReport, typeEnum } from "../services/reports";

export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
}

export const AddReportDialog = ({ open, onClose }: SimpleDialogProps) => {
  const [type, setType] = useState<typeEnum>(typeEnum.pr);
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<number>(new Date().getTime());
  const [flags, setFlags] = useState<number>();

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
    const report: Partial<IReport> = {
      description,
      type,
      recordDate: new Date(date).getTime(),
      flags: Number(flags),
    };
    //call method to add report
    await ReportService.addReport(report);
    location.reload();
  };

  return (
    <Dialog onClose={onClose} open={open} maxWidth={"xl"}>
      <DialogTitle>Create report</DialogTitle>
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
                width: "30%",
              }}
            />
            <Select
              id="demo-simple-select"
              value={type}
              label="Type"
              onChange={handleTypeChange}
            >
              <MenuItem value={typeEnum.pr}>Pull request</MenuItem>
              <MenuItem value={typeEnum.flag}>Flag</MenuItem>
              <MenuItem value={typeEnum.bug}>Bug</MenuItem>
            </Select>
          </Box>
        </FormControl>
        <br></br>
        <Button variant="contained" color="success" onClick={onSave}>
          Add
        </Button>
        <br></br>

        <Button variant="outlined" color="error" onClick={onClose}>
          Cancel
        </Button>
      </Container>
    </Dialog>
  );
};
