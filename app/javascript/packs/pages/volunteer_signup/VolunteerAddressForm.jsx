import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import StyledFormLabel from "../../components/forms/StyledFormLabel";
import StyledTextField from "../../components/forms/StyledTextField";
import LocationInput from "../../components/forms/LocationInput";
import Checkbox from "@material-ui/core/Checkbox";
import {
  getAddressNeighborhood,
  getAddressLocality,
  getAddressCountry,
  getAddressAdministrativeAreaLevel1,
} from "../../helpers/address";

export default function VolunteerAddressForm({
  firstName,
  lastName,
  mapResult,
  setMapResult,
  email,
  phone,
  social,
  onChange,
  setField,
  over18,
}) {
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
              setMapResult(value);
              setField("address")(value.description);
              setField("latitude")(geocoded.geometry.location.lat());
              setField("longitude")(geocoded.geometry.location.lng());
              setField("city")(getAddressLocality(geocoded).long_name);
              setField("country")(getAddressCountry(geocoded).long_name);
              setField("state")(
                getAddressAdministrativeAreaLevel1(geocoded).short_name
              );
              const neighborhood = getAddressNeighborhood(geocoded);
              if (neighborhood) {
                setField("neighborhood")(neighborhood.long_name);
              }
            }}
            value={mapResult}
            inputProps={{ label: "Location", required: true }}
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
      </Grid>
    </React.Fragment>
  );
}
