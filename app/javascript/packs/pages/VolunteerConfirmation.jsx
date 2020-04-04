import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import VolunteerAndDoctor from "../components/illustrations/VolunteerAndDoctor";
import BoldLink from "../components/BoldLink";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(10),
    flexDirection: "column",
    textAlign: "center",
  },
  thankyouMessage: {
    fontWeight: 600,
    fontStyle: "normal",
  },
  regularMessage: {
    fontSize: "1.5rem",
  },
  shareMessage: {
    letterSpacing: "0.03rem",
    textTransform: "uppercase",
  },
}));

const VolunteerConfirmation = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container maxWidth="sm">
        <Box my={5}>
          <Typography
            component="h1"
            variant="h1"
            color="primary"
            className={classes.thankyouMessage}
          >
            Thank you for volunteering!
          </Typography>
        </Box>
      </Container>

      <VolunteerAndDoctor />

      <Container maxWidth="md">
        <Box mt={6}>
          <Typography component="p" className={classes.regularMessage}>
            The healthcare worker has received your offer to help and will
            respond to you soon.<span>&nbsp;</span>
            In the meantime, you can<span>&nbsp;</span>
            <BoldLink color="textPrimary" href="/volunteer" underline="none">
              find more providers to help
            </BoldLink>
            <span>&nbsp;</span>or spread the word by sharing with your network.
          </Typography>
        </Box>
      </Container>

      <Box mt={10}>
        <Typography
          component="h1"
          variant="h1"
          className={classes.shareMessage}
        >
          Share with your network
        </Typography>
      </Box>

      <Container maxWidth="md">
        <Box mt={3}>
          <Typography component="p" className={classes.regularMessage}>
            including friends, family, social media networks<span>&nbsp;</span>
            (including Facebook, NextDoor, and other community apps) to help
            build a network of volunteers and healthcare workers.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default VolunteerConfirmation;
