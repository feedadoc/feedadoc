import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.lightGray,
  },
  heading: {
    color: theme.palette.primary.main,
    fontSize: "1.1rem",
    fontWeight: "bold",
    letterSpacing: "0.1rem",
    paddingTop: theme.spacing(2),
  },
  message: {
    fontSize: "1.2rem",
    lineHeight: "1.5rem",
    paddingBottom: theme.spacing(2),
  },
  cdcLink: {
    color: theme.palette.text.primary,
    fontWeight: "bold",
  },
}));

const SocialDistanceNotice = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography align="center" component="h3" className={classes.heading}>
        NOTICE FOR VOLUNTEERS
      </Typography>

      <Typography align="center" component="p" className={classes.message}>
        <b>
          Please follow all COVID-19 guidance from federal, state, and local
          officials.
          <br />
        </b>
        Make sure to maintain social/physical distancing and safety guidelines
        when fulfilling requests.<span>&nbsp;</span>
        To learn more, visit the<span>&nbsp;</span>
        <a
          target="_blank"
          href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html"
          className={classes.cdcLink}
        >
          CDC.gov
        </a>
        <span>&nbsp;</span>resource page.
      </Typography>
    </Box>
  );
};

export default SocialDistanceNotice;
