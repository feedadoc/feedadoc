import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import BoldLink from "../../components/BoldLink";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  contributorText: {
    marginBottom: "50px",
    textAlign: "center",
  },
}));

const Contributors = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Typography
        component="p"
        variant="body"
        className={classes.contributorText}
      >
        {/*We welcome new contributors. Current needs include PR, front-end web*/}
        {/*development, and community outreach.{" "}*/}
        {/*<BoldLink*/}
        {/*  color="textPrimary"*/}
        {/*  href="https://docs.google.com/forms/d/e/1FAIpQLSeAXlls9dtfW8Eu6OBvfNT1J8nhOHJ4nC2QrryNlsVogRGsFA/viewform"*/}
        {/*  underline="none"*/}
        {/*>*/}
        {/*  Apply here to join*/}
        {/*</BoldLink>*/}
        {/*.{" "}*/}
      </Typography>
    </Container>
  );
};

export default Contributors;
