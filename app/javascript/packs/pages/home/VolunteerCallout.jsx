import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import SocialMediaGrid from "../../components/SocialMediaGrid";

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
        <SocialMediaGrid />
      </Container>
    </Box>
  );
};

export default VolunteerCallout;
