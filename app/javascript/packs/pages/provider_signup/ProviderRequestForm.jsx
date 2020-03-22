import React from "react";
import FormHelperText from "@material-ui/core/FormHelperText";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles(theme => ({
  firstEntry: {
    marginTop: theme.spacing(2)
  },
  typeSelect: {
    minWidth: 200
  }
}));

const providerRequestTypes = [
  {
    label: "Childcare",
    value: "childcare"
  },
  {
    label: "Errands/Shopping",
    value: "shopping"
  },
  {
    label: "Housecleaning",
    value: "cleaning"
  },
  {
    label: "Meal preparation / delivery",
    value: "meals"
  },
  {
    label: "Laundry",
    value: "laundry"
  },
  {
    label: "Lodging",
    value: "lodging"
  },
  {
    label: "Supplies",
    value: "supplies"
  }
];

export default function ProviderRequestForm({
  requestTypes,
  requestDescription,
  onChange,
  setField
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
            <FormLabel required id="type-select-label">
              What kinds of support do you need?
            </FormLabel>
            {providerRequestTypes.map(type => (
              <FormControlLabel
                key={type.value}
                control={
                  <Checkbox
                    checked={requestTypes.includes(type.value)}
                    onChange={e =>
                      e.target.checked
                        ? setField("requestTypes")([
                            ...requestTypes,
                            type.value
                          ])
                        : setField("requestTypes")(
                            requestTypes.filter(x => x !== type.value)
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
          <TextField
            required
            id="requestDescription"
            name="requestDescription"
            label="Describe your request"
            fullWidth
            value={requestDescription}
            onChange={onChange}
          />
          <FormHelperText>
            Be sure to include details like frequency, quantity, duration, etc.
          </FormHelperText>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
