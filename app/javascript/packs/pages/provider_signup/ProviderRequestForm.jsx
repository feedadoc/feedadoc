import React from "react";
import FormHelperText from "@material-ui/core/FormHelperText";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import StyledFormLabel from "../../components/forms/StyledFormLabel";
import StyledTextField from "../../components/forms/StyledTextField";
import providerRequestTypes from "../../data/providerRequestTypes";

const useStyles = makeStyles((theme) => ({
  firstEntry: {
    marginTop: theme.spacing(2),
  },
  typeSelect: {
    minWidth: 200,
  },
  formLabel: {
    paddingBottom: "24px",
    fontWeight: 500,
  },
}));

export default function ProviderRequestForm({
  requests,
  description,
  onChange,
  setField,
}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Your Request
      </Typography>

      <Grid container spacing={3} className={classes.firstEntry}>
        <Grid item xs={12}>
          <FormControl>
            <StyledFormLabel
              required
              id="type-select-label"
              className={classes.formLabel}
            >
              What kinds of support do you need?
            </StyledFormLabel>
            {providerRequestTypes.map((type) => (
              <FormControlLabel
                key={type.value}
                control={
                  <Checkbox
                    checked={requests.includes(type.value)}
                    onChange={(e) =>
                      e.target.checked
                        ? setField("requests")([...requests, type.value])
                        : setField("requests")(
                            requests.filter((x) => x !== type.value)
                          )
                    }
                    name={type.value}
                    color="primary"
                  />
                }
                label={type.label}
              />
            ))}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            multiline
            required
            id="description"
            name="description"
            variant="outlined"
            rows={5}
            label="Describe your request"
            fullWidth
            value={description}
            onChange={onChange}
          />
          <FormHelperText>
            If possible, please include details such as days or times of week
            you anticipate needing help, dietary restrictions, and anything else
            a helper might need to know.
          </FormHelperText>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
