import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import {makeStyles} from "@material-ui/core/styles";
import FormHelperText from "@material-ui/core/FormHelperText";

const STATES = "AL AK AS AZ AR CA CO CT DE DC FM FL GA GU HI ID IL IN IA KS KY LA ME MH MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND MP OH OK OR PW PA PR RI SC SD TN TX UT VT VI VA WA WV WI WY".split(" ");

const useStyles = makeStyles(theme => ({
  stateSelect: {
    minWidth: 100
  }
}));

export default function AddressForm({ firstName, lastName, neighborhood, city, state, email, contactInfo, onChange }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        About You
      </Typography>

      <Grid container spacing={3}>
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
        <Grid item xs={12}>
          <TextField
            id="neighborhood"
            name="neighborhood"
            label="Neighborhood"
            value={neighborhood}
            onChange={onChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
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
            <InputLabel required id="state">State</InputLabel>
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
              {STATES.map(s => <option key={s} value={s}>{s}</option>)}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
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
          <TextField
            required
            id="contactInfo"
            name="contactInfo"
            label="How can volunteers contact you?"
            fullWidth
            value={contactInfo}
            onChange={onChange}
          />
          <FormHelperText>
            This will be PUBLIC. We strongly recommend using something besides personal email or phone. Examples: Facebook Messenger ID, Twitter handle (if you've enabled DMs), create a free disposable email address using spamgourmet.com, boun.cr, or trashmail.com.
          </FormHelperText>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
