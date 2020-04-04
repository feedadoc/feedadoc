import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { Link as ReactLink } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import LinkedInIcon from "../../components/icons/LinkedIn";
import FacebookIcon from "../../components/icons/Facebook";
import EmailIcon from "../../components/icons/Email";
import TwitterIcon from "../../components/icons/Twitter";
import * as socialMediaLinks from "../../data/socialMediaLinks";

const useStyles = makeStyles((theme) => ({
  volunteerContainer: {
    marginBottom: theme.spacing(10),
  },
  volunteerButton: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "25px",
    textTransform: "none",
    fontSize: "18px",
    fontWeight: 600,
    padding: "6px 24px",
    margin: theme.spacing(4, 0),
    boxShadow: "none",
  },
  volunteerText: {
    fontSize: "18px",
  },
  volunteerTextContainer: {
    backgroundColor: theme.palette.secondary.lightGray,
    padding: theme.spacing(4),
    textAlign: "center",
  },
  share: {
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: "18px",
    marginBottom: theme.spacing(4),
  },
  buttonLink: {
    textDecoration: "none",
  },
}));

export default function VolunteerInstructions() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.volunteerContainer}>
      <Typography
        component="h1"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Volunteer Now
      </Typography>
      <Container className={classes.volunteerTextContainer}>
        <Typography className={classes.volunteerText}>
          We’re currently building rosters of healthcare workers who are in need
          of help and of volunteers.{" "}
          <strong>Please sign up as a volunteer now</strong> and we’ll notify
          you when new help requests are posted!
        </Typography>
        <ReactLink to="/volunteer/signup" className={classes.buttonLink}>
          <Button
            className={classes.volunteerButton}
            size="large"
            variant="contained"
            color="primary"
            elevation={0}
          >
            Sign Up Now
          </Button>
        </ReactLink>
        <Typography className={classes.share}>Share</Typography>
        <Container maxWidth="xs">
          <Grid container justify="center">
            <Grid container item xs={3} sm={2} justify="center">
              <Link href={socialMediaLinks.FACEBOOK_LINK}>
                <FacebookIcon />
              </Link>
            </Grid>
            <Grid container item xs={3} sm={2} justify="center">
              <Link href={socialMediaLinks.TWITTER_LINK}>
                <TwitterIcon />
              </Link>
            </Grid>
            <Grid container item xs={3} sm={2} justify="center">
              <Link href={socialMediaLinks.LINKEDIN_LINK}>
                <LinkedInIcon />
              </Link>
            </Grid>
            <Grid container item xs={3} sm={2} justify="center">
              <Link href={socialMediaLinks.EMAIL_LINK}>
                <EmailIcon />
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Container>
  );
}
