import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const StyledTextField = withStyles({
  root: {
    '& label [class*="asterisk"]': {
      display: "none",
    },
  },
})(TextField);

export default (props) => (
  <StyledTextField
    {...{
      ...props,
      ...(!props.required && props.label
        ? { label: `${props.label} (Optional)` }
        : {}),
    }}
  />
);
