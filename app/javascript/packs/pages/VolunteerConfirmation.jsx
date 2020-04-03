import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import VolunteerAndDoctor from "../components/illustrations/VolunteerAndDoctor";

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
  confirmationMessage: {
    fontSize: "1.5rem",
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
          <Typography component="p" className={classes.confirmationMessage}>
            The healthcare worker has received your offer to help and will
            respond to you soon.<span>&nbsp;</span>
            In the meantime, you can find more providers to help or spread the
            word by sharing with your network.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default VolunteerConfirmation;
