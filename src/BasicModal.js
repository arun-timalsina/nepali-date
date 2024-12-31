import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import NepaliDatePicker from "./NepaliDatePicker";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectedDate, setSelectedDate] = React.useState("");

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="success">
        Pick
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div id="exampleBox">
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Nepali Date Picker v3.7 Issue on Modal
            </Typography>
            <Typography variant="subtitle">
              position issue & doesn't trigger onChange event on modal
            </Typography>
            <NepaliDatePicker
              id="exampe_in_modal"
              name="Example In Modal"
              label="Select a date"
              value={selectedDate}
              onDateChange={(val) => setSelectedDate(val)}
              container="#exampleBox"
            />
          </Box>
        </div>
      </Modal>
    </div>
  );
}
