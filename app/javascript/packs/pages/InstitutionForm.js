import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import {makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles(theme => ({
  roleSelect: {
    minWidth: 200
  }
}));

export default function InstitutionForm() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Medical Facility
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="facility"
            name="facility"
            label="Your Medical Facility"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <InputLabel required id="role-select-label">Your Job Title / Role</InputLabel>
            <Select
              required
              labelId="role-select-label"
              id="role"
              name="role"
              className={classes.roleSelect}
              // value={age}
              // onChange={handleChange}
            >
              <MenuItem value="physician">Physician, Nurse Practitioner, Physician Assistant</MenuItem>
              <MenuItem value="nurse">Nurse</MenuItem>
              <MenuItem value="therapist">Respiratory Therapist, Physical Therapist, Occupational Therapist, Speech Therapist</MenuItem>
              <MenuItem value="assistant">Medical assistant, patient care assistant, or other clinical staff</MenuItem>
              <MenuItem value="admin">Admin/support staff or social worker</MenuItem>
            </Select>
          </FormControl>


        </Grid>
      </Grid>
    </React.Fragment>
  );
}
