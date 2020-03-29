import React from "react";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import providerRequestTypes from "../../data/providerRequestTypes";
import StyledFormLabel from "../../components/forms/StyledFormLabel";
import StyledTextField from "../../components/forms/StyledTextField";

const useStyles = makeStyles((theme) => ({
  firstEntry: {
    marginTop: theme.spacing(2),
  },
  typeSelect: {
    minWidth: 200,
  },
  requestTypes: {
    marginTop: theme.spacing(2),
  },
  availabilityQuestionLabel: {
    marginBottom: theme.spacing(3),
  },
  availabilityCheckboxLabel: {
    textTransform: "capitalize",
  },
}));

const availabilityOptions = [
  "mornings",
  "mid-day",
  "evenings",
  "nights",
  "weekends",
];

export default function OfferForm({
  firstName,
  lastName,
  requests,
  availabilities,
  description,
  onChange,
  setField,
  provider,
}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={3} className={classes.firstEntry}>
        <Grid item xs={12} sm={6}>
          <StyledTextField
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
          <StyledTextField
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
            <StyledFormLabel required id="type-select-label">
              What can you help with?
            </StyledFormLabel>
            {provider &&
              provider.requests.map((request) => {
                if (request.satisfied) return null;

                const requestObj = providerRequestTypes.find(
                  (x) => x.value === request.type
                );
                if (!requestObj) return null;

                return (
                  <FormControlLabel
                    key={requestObj.value}
                    control={
                      <Checkbox
                        checked={requests.includes(requestObj.value)}
                        onChange={(e) =>
                          e.target.checked
                            ? setField("requests")([
                                ...requests,
                                requestObj.value,
                              ])
                            : setField("requests")(
                                requests.filter((x) => x !== requestObj.value)
                              )
                        }
                        name={requestObj.value}
                        color="primary"
                      />
                    }
                    label={requestObj.label}
                  />
                );
              })}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            required
            id="description"
            name="description"
            label="Offer Details"
            fullWidth
            value={description}
            onChange={onChange}
          />
          <FormHelperText>
            Please be specific. How often can you help? Do you have any
            limitations?
          </FormHelperText>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <StyledFormLabel
              required
              className={classes.availabilityQuestionLabel}
              id="type-select-label"
            >
              When are you generally available?
            </StyledFormLabel>
            {availabilityOptions.map((option) => (
              <FormControlLabel
                key={option}
                control={
                  <Checkbox
                    checked={availabilities.includes(option)}
                    onChange={(e) =>
                      e.target.checked
                        ? setField("availabilities")([
                            ...availabilities,
                            option,
                          ])
                        : setField("availabilities")(
                            availabilities.filter((x) => x !== option)
                          )
                    }
                    name={option}
                    color="primary"
                  />
                }
                className={classes.availabilityCheckboxLabel}
                label={option}
              />
            ))}
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
