import React from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import HospitalStaff from "../components/illustrations/HospitalStaff";
import VolunteerMap from "../components/VolunteerMap";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: "36px",
    marginBottom: "2rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "56px",
      marginBottom: 0,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate3d(-50%, -50%, 0)",
    },
  },
  button: {
    borderRadius: "25px",
    fontSize: "18px",
    display: "inline-block",
    fontWeight: 600,
    padding: "14px 24px",
    textDecoration: "none",

    margin: theme.spacing(4, 0),
    boxShadow: "none",
    ...theme.buttons.medical,
  },
  callout: {
    textTransform: "none",
    marginBottom: "3rem",
    marginTop: "1rem",
  },
  blue: {
    color: theme.palette.secondary.main,
  },
  subtext: {
    marginBottom: "3rem",
    marginTop: "3rem",
  },
  headerContent: {
    position: "relative",
  },
  introText: {
    fontSize: "20px",
    lineHeight: "28px",
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  textCenter: {
    textAlign: "center",
  },
}));

const ProviderLandingPage = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md" className={classes.textCenter}>
        <Box mt={10}>
          <Grid container>
            <Grid item xs="12" md="6" className={classes.headerContent}>
              <Typography
                component="h1"
                variant="h1"
                align="center"
                className={classes.header}
                color="primary"
              >
                Request
                <br />
                Help
              </Typography>
            </Grid>
            <Grid item xs="12" md="6">
              <HospitalStaff />
            </Grid>
          </Grid>
        </Box>
        <Box mb="6">
          <Typography
            component="p"
            variant="p"
            align="center"
            className={classes.introText}
          >
            Are you a healthcare worker or support staff working on the
            frontlines of COVID-19? Our worldwide corps of volunteers are ready
            to assist by running errands like picking up groceries, offering
            lodging, providing meals for you or your team, or taking care of
            your pet.
          </Typography>

          <Typography
            component="p"
            variant="p"
            align="center"
            className={classes.introText}
          >
            Our team of volunteer coordinators will manage your request to
            manage details and match you with a volunteer who can help.
          </Typography>
        </Box>
        <Link className={classes.button} to={`/provider-signup`}>
          Make a Request
        </Link>

        <Typography
          component="h2"
          variant="h3"
          align="center"
          className={classes.callout}
        >
          Over <span className={classes.blue}>300</span> volunteers are ready to
          help
        </Typography>
      </Container>
      <VolunteerMap />
      <Container maxWidth="md" className={classes.textCenter}>
        <Box pt={6} pb={3}>
          <Link className={classes.button} to={`/provider-signup`}>
            Make a Request
          </Link>
        </Box>
        <Box mb={6}>
          <Typography variant="h6" component="p" className={classes.subtext}>
            Need more details? Visit our{" "}
            <Link to="/how-it-works">How It Works</Link> page.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default ProviderLandingPage;
