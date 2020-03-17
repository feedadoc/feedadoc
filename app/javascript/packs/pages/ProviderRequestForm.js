import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  firstEntry: {
    marginTop: theme.spacing(2),
  }
}));

export default function ProviderRequestForm() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Your Request
      </Typography>

      <Grid container spacing={3} className={classes.firstEntry}>
        <Grid item xs={12}>
          <InputLabel required id="type-select-label">Type of Request</InputLabel>
          <Select
            required
            labelId="type-select-label"
            id="type"
            name="type"
          >
            <MenuItem value={10}>Childcare</MenuItem>
            <MenuItem value={20}>Errands/Shopping</MenuItem>
            <MenuItem value={30}>Housecleaning</MenuItem>
            <MenuItem value={40}>Meal preparation</MenuItem>
            <MenuItem value={50}>Laundry</MenuItem>
            <MenuItem value={60}>Lodging</MenuItem>
            <MenuItem value={70}>Supplies</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <TextField required id="description" label="Describe your request" fullWidth />
          <FormHelperText>
            Be sure to include details like frequency, quantity, duration, etc.
          </FormHelperText>
        </Grid>
        <Grid item xs={12}>
          <TextField required id="contact-info" label="How can volunteers contact you?" fullWidth />
          <FormHelperText>
            This will be PUBLIC. We strongly recommend using something besides personal email or phone. Examples: Facebook Messenger ID, Twitter handle (if you've enabled DMs), create a free disposable email address using spamgourmet.com, boun.cr, or trashmail.com.
          </FormHelperText>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
