import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import StyledInputLabel from "../../components/forms/StyledInputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import STATES from "../../data/states";
import StyledTextField from "../../components/forms/StyledTextField";

const useStyles = makeStyles((theme) => ({
  stateSelect: {
    minWidth: 100,
  },
}));

export default function AddressForm({
  firstName,
  lastName,
  neighborhood,
  city,
  state,
  email,
  facility,
  role,
  onChange,
}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        About You
      </Typography>

      <Grid container spacing={3}>
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
          <FormControl>
            <StyledInputLabel required htmlFor="role" id="role-select-label">
              Your Job Title / Role
            </StyledInputLabel>
            <Select
              required
              native
              labelId="role-select-label"
              id="role"
              name="role"
              className={classes.roleSelect}
              value={role}
              onChange={onChange}
            >
              <option value="" />
              <option value="physician">
                Physician, Nurse Practitioner, Physician Assistant
              </option>
              <option value="nurse">Nurse</option>
              <option value="therapist">
                Respiratory Therapist, Physical Therapist, Occupational
                Therapist, Speech Therapist
              </option>
              <option value="assistant">
                Medical assistant, patient care assistant, or other clinical
                staff
              </option>
              <option value="admin">
                Admin/support staff or social worker
              </option>
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
      </Grid>
    </React.Fragment>
  );
}
