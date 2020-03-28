import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import DoctorsPassingBy from "../../components/illustrations/DoctorsPassingBy";
import Volunteers from "../../components/illustrations/Volunteers";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Fab";
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
  actionButton: {
    boxShadow: "none",
    fontSize: "20px",
    lineHeight: "28px",
    padding: "10px 20px",
  },
  buttonLink: {
    textDecoration: "none",
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
        <Box
          alignSelf="center"
          style={{ maxWidth: "500px", textAlign: "center" }}
        >
          <DoctorsPassingBy />
          <Typography
            component="h2"
            variant="h1"
            align="center"
            color="primary"
            style={{
              marginBottom: "20px",
              marginTop: "20px",
              textTransform: "uppercase",
            }}
          >
            Care Providers
          </Typography>
          <Typography
            component="p"
            variant="h2"
            style={{ marginBottom: "40px" }}
          >
            Make requests for meals, supplies, or anything else you need. Share
            a link with your friends and family.
          </Typography>
          <Link to="/provider-signup" className={classes.buttonLink}>
            <Button
              className={classes.actionButton}
              size="large"
              variant="contained"
              color="primary"
              elevation={0}
            >
              Request Help
            </Button>
          </Link>
        </Box>
      </Box>
      <Box bgcolor={"secondary.800"} display="flex">
        <Box
          alignSelf="center"
          style={{ maxWidth: "500px", textAlign: "center" }}
        >
          <Volunteers />
          <Typography
            component="h2"
            variant="h1"
            color="secondary"
            align="center"
            style={{
              marginBottom: "20px",
              marginTop: "20px",
              textTransform: "uppercase",
            }}
          >
            Volunteers
          </Typography>
          <Typography
            component="p"
            variant="h2"
            style={{ marginBottom: "40px" }}
          >
            Offer your support to local doctors, nurses, and hospital workers.
            You choose who and how to help.
          </Typography>
          <Link to="/browse" className={classes.buttonLink}>
            <Button
              className={classes.actionButton}
              size="large"
              variant="contained"
              color="secondary"
              elevation={0}
            >
              Volunteer Now
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default SplitSection;
