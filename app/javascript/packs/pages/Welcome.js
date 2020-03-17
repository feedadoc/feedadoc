import React from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {Link} from "react-router-dom";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function Welcome() {
  const classes = useStyles();

  return (
    <Paper className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Volunteer to support your Care Providers
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Something short and leading about the collection below—its contents, the creator, etc.
          Make it short and sweet, but not too short so folks don&apos;t simply skip over it
          entirely.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Link to="/volunteer-signup">
                <Button variant="contained" color="primary">
                  Volunteers
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/provider-signup">
                <Button variant="outlined" color="primary">
                  Providers
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Paper>
  );
}
