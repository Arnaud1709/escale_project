import React from "react";
import "./TimeField.style";
import { withTranslation } from "react-i18next";
import { TimePicker } from "@mui/x-date-pickers";

const TimeField = () => {
  return <TimePicker />;
};

export default withTranslation()(TimeField);
