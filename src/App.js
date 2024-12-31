import React from "react";
// import "./styles.css";
import BasicModal from "./BasicModal";
// import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NepaliDatePicker from "./NepaliDatePicker";

export default function App() {
  const [selectedDate, setSelectedDate] = React.useState("");

  return (
    <div className="App">
      {/* <Box sx={{ p: 6 }}> */}
      <NepaliDatePicker
        id="date_picker_in_non_modal"
        name="date_picker_in_non_modal"
        label="Select a date"
        value={selectedDate}
        onDateChange={(val) => setSelectedDate(val)}
      />
      {/* </Box> */}
      <BasicModal />
    </div>
  );
}
