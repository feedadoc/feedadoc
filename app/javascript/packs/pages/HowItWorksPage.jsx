import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  Typography,
  Box,
  Grid,
  Hidden,
  Container,
  ThemeProvider,
} from "@material-ui/core";
import theme from "../theme";
import DoctorWithDevice from "../../packs/components/illustrations/DoctorWithDevice";
import Volunteer from "../../packs/components/illustrations/Volunteer";
import Email from "../../packs/components/illustrations/Email";
import RequestCompleted from "../../packs/components/illustrations/RequestCompleted";
import Disclaimer from "../components/Disclaimer";

const useStyles = makeStyles((theme) => ({
  header: {
    margin: theme.spacing(3),
  },
  videoContainer: {
    textAlign: "center",
    marginBottom: theme.spacing(6),
  },
  introCopy: {
    marginBottom: theme.spacing(2),
  },
  stepContainer: {
    marginTop: theme.spacing(1),
  },
  step: {
    padding: theme.spacing(4),
  },
  stepHeader: {
    marginBottom: theme.spacing(0),
    textTransform: "none",
  },
  stepDetails: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1, 0),
  },
  circleContainer: {
    paddingBottom: theme.spacing(2),
  },
  circle: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    textAlign: "center",
    width: 50,
    height: 50,
    borderRadius: "50%",
  },
  number: {
    fontSize: "1.6rem",
    fontWeight: "bold",
    lineHeight: "50px",
  },
  embedContainer: {
    position: "relative",
    paddingBottom: "56.25%",
    height: "0",
    overflow: "hidden",
    maxWidth: "100%",
    "& > iframe, & > object, & > embed": {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
    },
  },
}));

const HowItWorks = () => {
  const classes = useStyles();

  const renderStep = (number, header, content, customContent) => {
    let detailsContent =
      content.length < 1
        ? customContent
        : content.map((copy, i) => <p key={i}>{copy}</p>);
    return (
      <Container className={classes.step}>
        <Container align="center" className={classes.circleContainer}>
          <div className={clsx(classes.circle)}>
            <Typography className={classes.number} variant="body1">
              {number}
            </Typography>
          </div>
        </Container>
        <Typography align="center" variant="h3" className={classes.stepHeader}>
          {header}
        </Typography>
        <Typography
          align="center"
          variant="body1"
          component="div"
          className={classes.stepDetails}
        >
          {detailsContent}
        </Typography>
      </Container>
    );
  };

  let stepOneCustomContent = (
    <>
      <p>
        for help with meals, child care, pet care, errands and more on
        HospitalHero. <b>Share the link</b> to your request on social media so
        your friends can respond!
      </p>
      <p>
        We will also <b>publish your request on HospitalHero</b> so volunteers
        in your community can find it. (Don't worry, your contact information
        stays private.)
      </p>
      <Typography component="p" variant="caption" align="center">
        *This includes nurses, doctors, EMTs, admins, support staff, cleaning
        staff, and anyone else who is helping during this crisis.
      </Typography>
    </>
  );
  const content = {
    stepTwo: [
      "to see who can help. When we find a good match, the volunteer uses a unique link to respond privately.",
      "As a volunteer, your contact information is only shared with a provider when you respond to their request.",
    ],
    stepThree: [
      "to optionally share on social media. Sometimes the best person to help may already be in your network!",
    ],
    stepFour: [
      "when volunteers offer to help. They can choose which offers to respond to and coordinate directly with volunteers.",
      "You can update or remove a request at any time using the private link in your original confirmation email.",
    ],
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Box mt={4}>
          <Typography
            component="h1"
            variant="h1"
            align="center"
            color="primary"
            className={classes.header}
          >
            How it Works
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Grid container spacing={10} className={classes.stepContainer}>
          <Hidden xsDown>
            <Grid item sm={4}>
              <DoctorWithDevice />
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={8}>
            {renderStep(
              "1",
              "Healthcare workers* post a request",
              [],
              stepOneCustomContent
            )}
          </Grid>
        </Grid>
        <Grid container spacing={10} className={classes.stepContainer}>
          <Grid item xs={12} sm={8}>
            {renderStep(
              "2",
              "HospitalHero contacts local volunteers",
              content.stepTwo
            )}
          </Grid>
          <Hidden xsDown>
            <Grid item sm={4}>
              <Volunteer />
            </Grid>
          </Hidden>
        </Grid>
        <Grid container spacing={10} className={classes.stepContainer}>
          <Hidden xsDown>
            <Grid item sm={4}>
              <Email />
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={8}>
            {renderStep(
              "3",
              "Healthcare worker receives a link",
              content.stepThree
            )}
          </Grid>
        </Grid>
        <Grid container spacing={10} className={classes.stepContainer}>
          <Grid item xs={12} sm={8}>
            {renderStep(
              "4",
              "Healthcare workers are notified",
              content.stepFour
            )}
          </Grid>
          <Hidden xsDown>
            <Grid item sm={4}>
              <RequestCompleted />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
      <Disclaimer />
    </ThemeProvider>
  );
};

export default HowItWorks;
