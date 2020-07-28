import React from "react";
import { makeStyles, Container, Typography } from "@material-ui/core";
import { SUPPORT_EMAIL } from "../data/contactEmails";

const useStyles = makeStyles((theme) => ({
  disclaimerContainer: {
    marginTop: "1.5rem",
  },
  header: {
    margin: "1rem",
  },
  copy: {
    marginBottom: "1rem",
  },
  emailLink: {
    color: "inherit",
    textDecoration: "none",
    ...theme.links.tertiary,
  },
}));

const Disclaimer = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.disclaimerContainer}>
      <Typography
        component="h1"
        variant="h1"
        align="center"
        color="primary"
        className={classes.header}
      >
        Disclaimer
      </Typography>
      <Typography
        component="p"
        variant="body1"
        align="center"
        className={classes.copy}
      >
        It's important for both parties to take responsibility for evaluating
        which requests and offers to accept. HospitalHero is run by volunteers,
        and we're not able to evaluate or verify the accuracy of any
        request/offer.
      </Typography>
      <Typography
        component="p"
        variant="body1"
        align="center"
        className={classes.copy}
      >
        To report a request that should be removed, email{" "}
        <b>
          <a className={classes.emailLink} href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>
        </b>
        .
      </Typography>
    </Container>
  );
};

export default Disclaimer;
