import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function ProviderSignupReview() {
  const classes = useStyles();
  const user = {};

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Review
      </Typography>

      <Grid container spacing={2}>
        <Grid item container direction="column" xs={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Your Request
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography gutterBottom>{user.firstName}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{user.lastName}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
