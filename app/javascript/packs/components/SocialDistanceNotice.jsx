import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.lightGray,
  },
  heading: {
    color: theme.palette.primary.main,
    fontWeight: "600",
    letterSpacing: theme.spacing(0.03),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    textTransform: "uppercase",
  },
  message: {
    lineHeight: "1.5rem",
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
  },
  cdcLink: {
    color: theme.palette.text.primary,
    fontWeight: "bold",
  },
}));

const SocialDistanceNotice = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Box className={classes.root}>
        <Typography align="center" variant="body1" className={classes.heading}>
          Notice for volunteers
        </Typography>

        <Typography align="center" variant="body1" className={classes.message}>
          <b>
            Please follow all COVID-19 guidance from federal, state, and local
            officials.
            <br />
          </b>
          Make sure to maintain social/physical distancing and safety guidelines
          when fulfilling
          <br />
          requests. To learn more, visit the{" "}
          <a
            target="_blank"
            href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html"
            className={classes.cdcLink}
          >
            CDC.gov
          </a>{" "}
          resource page.
        </Typography>
      </Box>
    </Container>
  );
};

export default SocialDistanceNotice;
