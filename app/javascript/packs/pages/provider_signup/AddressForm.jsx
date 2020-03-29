import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import StyledInputLabel from "../../components/forms/StyledInputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import StyledTextField from "../../components/forms/StyledTextField";
import LocationInput from "../../components/forms/LocationInput";

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
  role,
  onChange,
  setField,
  address,
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
          <LocationInput
            onChange={({ result, errors }) => {
              setField("city")(
                result.address_components.find((x) =>
                  x.types.includes("locality")
                ).long_name
              );
              setField("state")(
                result.address_components.find((x) =>
                  x.types.includes("administrative_area_level_1")
                ).short_name
              );
              setField("neighborhood")(
                result.address_components.find((x) =>
                  x.types.includes("neighborhood")
                ).long_name
              );
            }}
            value={address}
            setAddress={setField("address")}
            inputProps={{ label: "Location", required: true }}
          />
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
