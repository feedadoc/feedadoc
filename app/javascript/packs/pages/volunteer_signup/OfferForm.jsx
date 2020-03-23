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
  },
  requestTypes: {
    marginTop: theme.spacing(2)
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
  },
  {
    label: "Pet care",
    value: "pets"
  }
];

const availabilityOptions = ["mornings", "mid-day", "evenings", "nights"];

export default function OfferForm({
  firstName,
  lastName,
  requests,
  availabilities,
  description,
  onChange,
  setField
}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={3} className={classes.firstEntry}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            value={firstName}
            onChange={onChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="lastName"
            name="lastName"
            label="Last name"
            value={lastName}
            onChange={onChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} className={classes.requestTypes}>
          <FormControl>
            <FormLabel required id="type-select-label">
              What can you help with?
            </FormLabel>
            {providerRequestTypes.map(type => (
              <FormControlLabel
                key={type.value}
                control={
                  <Checkbox
                    checked={requests.includes(type.value)}
                    onChange={e =>
                      e.target.checked
                        ? setField("requests")([
                            ...requests,
                            type.value
                          ])
                        : setField("requests")(
                            requests.filter(x => x !== type.value)
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
            id="description"
            name="description"
            label="Offer Details"
            fullWidth
            value={description}
            onChange={onChange}
          />
          <FormHelperText>
            Please be specific. How often can you help? Do you have any limitations?
          </FormHelperText>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel required id="type-select-label">
              When are you generally available?
            </FormLabel>
            {availabilityOptions.map(option => (
              <FormControlLabel
                key={option}
                control={
                  <Checkbox
                    checked={availabilities.includes(option)}
                    onChange={e =>
                      e.target.checked
                        ? setField("availabilities")([
                            ...availabilities,
                            option
                          ])
                        : setField("availabilities")(
                            availabilities.filter(x => x !== option)
                          )
                    }
                    name={option}
                    color="primary"
                  />
                }
                label={option}
              />
            ))}
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
