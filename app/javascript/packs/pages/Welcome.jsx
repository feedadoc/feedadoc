import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { CONTACT_EMAIL } from "../data/contactEmails";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
  },
  heroButtons: {
    margin: theme.spacing(4),
  },
}));

export default function Welcome() {
  const classes = useStyles();

  return (
    <Paper className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Volunteer to support your Healthcare Workers
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          This website connects health care workers with volunteers who can
          provide basic needs during the COVID-19 pandemic response. Please
          share with anyone you know who needs assistance!
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Link to="/provider-signup">
                <Button variant="contained" color="primary">
                  Providers, Post a Request
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/volunteer-form">
                <Button variant="outlined" color="primary">
                  Volunteer, Sign up to Help Out
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
        <Typography paragraph>
          This site is created and maintained by volunteers. You can contact us
          by emailing <a href={"mailto:" + CONTACT_EMAIL}>{CONTACT_EMAIL}</a>.
        </Typography>
      </Container>
    </Paper>
  );
}
