import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import StyledFormLabel from "../../components/forms/StyledFormLabel";
import StyledTextField from "../../components/forms/StyledTextField";
import StyledInputLabel from "../../components/forms/StyledInputLabel";
import Checkbox from "@material-ui/core/Checkbox";

const STATES = "AL AK AS AZ AR CA CO CT DE DC FM FL GA GU HI ID IL IN IA KS KY LA ME MH MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND MP OH OK OR PW PA PR RI SC SD TN TX UT VT VI VA WA WV WI WY".split(
  " "
);

const useStyles = makeStyles((theme) => ({
  stateSelect: {
    minWidth: 100,
  },
}));

export default function VolunteerAddressForm({
  firstName,
  lastName,
  neighborhood,
  city,
  state,
  email,
  phone,
  social,
  onChange,
  setField,
  over18,
}) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        About You
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl>
            <StyledFormLabel required id="type-select-label">
              I am over 18 years old.
            </StyledFormLabel>
            <FormControlLabel
              control={
                <Checkbox
                  checked={over18}
                  onChange={(e) =>
                    e.target.checked
                      ? setField("over18")(true)
                      : setField("over18")(false)
                  }
                  name="over18"
                  color="primary"
                />
              }
            />
          </FormControl>
        </Grid>
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
        <Grid item xs={12}>
          <StyledTextField
            id="neighborhood"
            name="neighborhood"
            label="Neighborhood"
            value={neighborhood}
            onChange={onChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            required
            id="city"
            name="city"
            label="City"
            value={city}
            onChange={onChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <StyledInputLabel htmlFor="state" required id="state">
              State
            </StyledInputLabel>
            <Select
              required
              native
              labelId="state"
              id="state"
              name="state"
              className={classes.stateSelect}
              onChange={onChange}
              value={state}
            >
              <option value="" />
              {STATES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            required
            id="email"
            name="email"
            label="Email"
            value={email}
            onChange={onChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            id="phone"
            name="phone"
            label="Phone number"
            fullWidth
            value={phone}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            id="social"
            name="social"
            label="Link to a social media profile"
            fullWidth
            value={social}
            onChange={onChange}
          />
          <FormHelperText>
            If you are responding to a public request, this is encouraged.
          </FormHelperText>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
