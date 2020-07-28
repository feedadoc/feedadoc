import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import HospitalStaff from "../../components/illustrations/HospitalStaff";
import Volunteers from "../../components/illustrations/Volunteers";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "100%",
      alignSelf: "center",
      justifyContent: "center",
      padding: theme.spacing(4, 2),
      [theme.breakpoints.up("md")]: {
        width: "50%",
        minHeight: "650px",
      },
    },
    "& > *:first-child": {
      [theme.breakpoints.up("md")]: {
        paddingRight: "80px",
        justifyContent: "flex-end",
      },
    },
    "& > *:last-child": {
      [theme.breakpoints.up("md")]: {
        paddingLeft: "80px",
        justifyContent: "flex-start",
      },
      "& > *:first-child": {
        [theme.breakpoints.up("md")]: {
          paddingTop: "15px",
        },
      },
    },
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  requestButton: {
    ...theme.buttons.medical,
  },
  volunteerButton: {
    ...theme.buttons.volunteer,
  },
  buttonText: {
    ...theme.buttons.text,
  },
  buttonLink: {
    textDecoration: "none",
  },
  splitSectionContent: {
    alignSelf: "center",
    maxWidth: "500px",
    textAlign: "center",
  },
  splitSectionText: {
    marginBottom: "40px",
  },
  splitSectionTitle: {
    marginTop: "20px",
    marginBottom: "20px",
    textAlign: "center",
    textTransform: "uppercase",
  },
}));

const SplitSection = () => {
  const classes = useStyles();
  return (
    <Box
      p={0}
      m={0}
      display="flex"
      className={classes.root}
      alignItems="center"
    >
      <Box bgcolor={"secondary.500"} display="flex">
        <Box className={classes.splitSectionContent}>
          <HospitalStaff />
          <Typography
            component="h2"
            variant="h1"
            color="primary"
            className={classes.splitSectionTitle}
          >
            Healthcare Workers
          </Typography>
          <Typography
            component="p"
            variant="h2"
            className={classes.splitSectionText}
          >
            Make requests for meals, supplies, or anything else you need. Share
            a link with your friends and family.
          </Typography>
          {/*<Link to="/providers" className={classes.buttonLink}>*/}
          {/*  <Button*/}
          {/*    className={classes.requestButton}*/}
          {/*    variant="contained"*/}
          {/*    elevation={0}*/}
          {/*  >*/}
          {/*    <div className={classes.buttonText}>Request Help</div>*/}
          {/*  </Button>*/}
          {/*</Link>*/}
        </Box>
      </Box>
      <Box bgcolor={"secondary.800"} display="flex">
        <Box className={classes.splitSectionContent}>
          <Volunteers />
          <Typography
            component="h2"
            variant="h1"
            color="secondary"
            align="center"
            className={classes.splitSectionTitle}
          >
            Volunteers
          </Typography>
          <Typography
            component="p"
            variant="h2"
            className={classes.splitSectionText}
          >
            Offer your support to local doctors, nurses, and hospital workers.
            You choose who and how to help.
          </Typography>
          {/*<Link to="/volunteer" className={classes.buttonLink}>*/}
          {/*  <Button*/}
          {/*    className={classes.volunteerButton}*/}
          {/*    variant="contained"*/}
          {/*    elevation={0}*/}
          {/*  >*/}
          {/*    <div className={classes.buttonText}>Volunteer Now</div>*/}
          {/*  </Button>*/}
          {/*</Link>*/}
        </Box>
      </Box>
    </Box>
  );
};

export default SplitSection;
