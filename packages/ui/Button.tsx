import * as React from "react";
import MuiButton, { ButtonProps } from "@mui/material/Button";

export const Button = (buttonProps: ButtonProps) => {
  return <MuiButton {...buttonProps} style={{ borderRadius: 16 }} />;
};
