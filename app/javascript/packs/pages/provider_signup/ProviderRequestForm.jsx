import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import {makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles(theme => ({
  firstEntry: {
    marginTop: theme.spacing(2),
  },
  typeSelect: {
    minWidth: 200,
  }
}));

export default function ProviderRequestForm({ requestType, requestDescription, onChange }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Your Request
      </Typography>

      <Grid container spacing={3} className={classes.firstEntry}>
        <Grid item xs={12}>
          <FormControl>
            <InputLabel required id="type-select-label">Type of Request</InputLabel>
            <Select
              required
              native
              labelId="type-select-label"
              id="requestType"
              name="requestType"
              className={classes.typeSelect}
              value={requestType}
              onChange={onChange}
            >
              <option value='' />
              <option value='childcare'>Childcare</option>
              <option value='shopping'>Errands/Shopping</option>
              <option value='cleaning'>Housecleaning</option>
              <option value='meals'>Meal preparation / delivery</option>
              <option value='laundry'>Laundry</option>
              <option value='lodging'>Lodging</option>
              <option value='supplies'>Supplies</option>
            </Select>
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
