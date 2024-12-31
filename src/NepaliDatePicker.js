import React, { useEffect, useRef } from "react";

import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

function NepaliDatePicker(props) {
  const {
    id,
    name,
    label,
    error,
    helperText,
    required,
    size,
    onDateChange,
    options,
    disabled,
    dateFormat,
    dateMask,
    variant,
    value,
    container,
    ...rest
  } = props;

  const datepickerRef = useRef(null);

  useEffect(() => {
    datepickerRef.current.nepaliDatePicker({
      ...options,
      dateFormat: dateFormat,
      onChange: (value) => onDateChange(datepickerRef.current.value),
      container: container,
    });
  }, [options, dateFormat, dateMask, onDateChange, container]);

  return (
    <TextField
      id={id}
      inputRef={datepickerRef}
      inputProps={{
        style: {
          pointerEvents: "none",
        },
      }}
      error={error}
      helperText={helperText}
      label={label}
      variant={variant}
      fullWidth
      required={required}
      size={size}
      value={value}
      disabled={disabled}
      {...rest}
    />
  );
}

export default NepaliDatePicker;

NepaliDatePicker.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["medium", "small"]),
  onDateChange: PropTypes.func,
  variant: PropTypes.oneOf(["outlined", "standard", "filled"]),
  focused: PropTypes.bool,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "error",
    "info",
    "success",
    "warning",
  ]),
  options: PropTypes.shape({
    ndpTriggerButton: PropTypes.bool,
    ndpTriggerButtonClass: PropTypes.string,
    ndpTriggerButtonText: PropTypes.string,
    ndpEnglishInput: PropTypes.string,
    ndpYearCount: PropTypes.number,
    ndpYear: PropTypes.bool,
    ndpMonth: PropTypes.bool,
    disableDaysBefore: PropTypes.number,
    disableDaysAfter: PropTypes.number,
    disableBefore: PropTypes.string,
    disableAfter: PropTypes.string,
    unicodeDate: PropTypes.bool,
    readOnlyInput: PropTypes.bool,
    container: PropTypes.string,
  }),
  dateFormat: PropTypes.oneOf([
    "YYYY-MM-DD",
    "MM-DD-YYYY",
    "YYYY/MM/DD",
    "MM/DD/YYYY",
  ]).isRequired,
  value: PropTypes.string,
};

NepaliDatePicker.defaultProps = {
  label: "",
  helperText: "",
  required: true,
  disabled: false,
  size: "medium",
  options: {},
  variant: "standard",
  dateFormat: "YYYY-MM-DD",
  value: undefined,
};
