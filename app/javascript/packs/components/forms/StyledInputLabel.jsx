import React from "react";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";

const StyledInputLabel = withStyles({
  asterisk: {
    display: "none",
  },
})(InputLabel);

export default (props) => (
  <StyledInputLabel {...props}>
    {props.children} {!props.required ? " (Optional)" : ""}
  </StyledInputLabel>
);
