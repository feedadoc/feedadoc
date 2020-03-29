import React from "react";
import { withStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";

const StyledFormLabel = withStyles({
  asterisk: {
    display: "none",
  },
})(FormLabel);

export default (props) => (
  <StyledFormLabel {...props}>
    {props.children} {!props.required ? " (Optional)" : ""}
  </StyledFormLabel>
);
