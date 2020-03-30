import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import StyledInputLabel from "../../components/forms/StyledInputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import StyledTextField from "../../components/forms/StyledTextField";
import LocationInput from "../../components/forms/LocationInput";
import {
  getAddressNeighborhood,
  getAddressLocality,
  getAddressAdministrativeAreaLevel1,
} from "../../helpers/address";

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
  facility,
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
            onChange={({ value, geocoded }) => {
              setField("address")(value);
              setField("city")(getAddressLocality(geocoded).long_name);
              setField("state")(
                getAddressAdministrativeAreaLevel1(geocoded).short_name
              );
              const neighborhood = getAddressNeighborhood(geocoded);
              if (neighborhood) {
                setField("neighborhood")(neighborhood.long_name);
              }
            }}
            value={address}
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
              <option value="physician">Doctor, NP, PA</option>
              <option value="nurse">Nurse</option>
              <option value="therapist">RT, PT, OT, ST, Nutrition</option>
              <option value="assistant">Patient care assistant, MA</option>
              <option value="social">Social Worker, Chaplain</option>
              <option value="admin">Admin/support staff</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            id="facility"
            name="facility"
            label="Your Medical Facility"
            value={facility}
            onChange={onChange}
            fullWidth
          />
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
