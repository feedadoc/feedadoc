import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import LinkedInIcon from "../../components/icons/LinkedIn";
import FacebookIcon from "../../components/icons/Facebook";
import EmailIcon from "../../components/icons/Email";
import TwitterIcon from "../../components/icons/Twitter";
import { makeStyles } from "@material-ui/core/styles";
import * as socialMediaLinks from "../../data/socialMediaLinks";

const useStyles = makeStyles((theme) => ({
  volunteerCalloutText: {
    marginTop: "20px",
    textAlign: "center",
  },
  socialMediaIcons: {
    marginTop: "40px",
  },
}));

const VolunteerCallout = () => {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="center" py={10} flexDirection="column">
      <Container maxWidth="md">
        <Typography
          component="h2"
          variant="h1"
          p="10"
          align="center"
          color="primary"
        >
          Help us make sure every healthcare worker gets the support they need
          to fight COVID-19
        </Typography>
        <Typography
          component="p"
          variant="h2"
          align="center"
          className={classes.volunteerCalloutText}
        >
          Share #HospitalHero with family, friends, and on social media to help
          spread the word.
        </Typography>
      </Container>
      <Container maxWidth="xs" className={classes.socialMediaIcons}>
        <Grid container spacing={4}>
          <Grid container item xs={6} sm={3} justify="center">
            <Link href={socialMediaLinks.FACEBOOK_LINK}>
              <FacebookIcon source="homepage" />
            </Link>
          </Grid>
          <Grid container item xs={6} sm={3} justify="center">
            <Link href={socialMediaLinks.TWITTER_LINK}>
              <TwitterIcon source="homepage" />
            </Link>
          </Grid>
          <Grid container item xs={6} sm={3} justify="center">
            <Link href={socialMediaLinks.LINKEDIN_LINK}>
              <LinkedInIcon source="homepage" />
            </Link>
          </Grid>
          <Grid container item xs={6} sm={3} justify="center">
            <Link href={socialMediaLinks.EMAIL_LINK}>
              <EmailIcon source="homepage" />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default VolunteerCallout;
