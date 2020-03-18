import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import {makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles(theme => ({
  roleSelect: {
    minWidth: 200
  }
}));

export default function InstitutionForm({ facility, role, onChange }) {
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
            value={facility}
            onChange={onChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <InputLabel required id="role-select-label">Your Job Title / Role</InputLabel>
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
              <option value="physician">Physician, Nurse Practitioner, Physician Assistant</option>
              <option value="nurse">Nurse</option>
              <option value="therapist">Respiratory Therapist, Physical Therapist, Occupational Therapist, Speech Therapist</option>
              <option value="assistant">Medical assistant, patient care assistant, or other clinical staff</option>
              <option value="admin">Admin/support staff or social worker</option>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
