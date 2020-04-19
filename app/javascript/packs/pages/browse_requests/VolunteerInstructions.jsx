import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import BoldLink from "../../components/BoldLink";
import BusinessDonations from "../../components/illustrations/BusinessDonations";
import Errands from "../../components/illustrations/Errands";
import Lodging from "../../components/illustrations/Lodging";
import Meals from "../../components/illustrations/Meals";
import PetCare from "../../components/illustrations/PetCare";
import DoctorAndVolunteer from "../../components/illustrations/DoctorAndVolunteer";
import VolunteerMap from "../../components/VolunteerMap";

const SIGNUP_PATH = "/volunteer/signup";
const volunteerBlue = "#1F28CF"; // TODO: Didn't find this color in the MUI theme
const offerTypes = [
  { OfferComponent: Errands, offerText: "Errands" },
  { OfferComponent: Meals, offerText: "Meals" },
  { OfferComponent: PetCare, offerText: "Pet Care" },
  { OfferComponent: Lodging, offerText: "Lodging" },
  { OfferComponent: BusinessDonations, offerText: "Business Donations" },
];
const promoLines = [
  { titleText: "300+", smallerText: "volunteers" },
  { titleText: "48", smallerText: "states" },
  { titleText: "5", smallerText: "countries" },
];

const useStyles = makeStyles((theme) => ({
  alignCenter: {
    textAlign: "center",
  },
  upperVolunteerContainer: {
    marginTop: theme.spacing(7),
  },
  button: {
    ...theme.buttons.volunteer,
    paddingLeft: theme.spacing(7),
    paddingRight: theme.spacing(7),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  buttonText: {
    ...theme.buttons.text,
  },
  volunteerContainer: {
    marginBottom: theme.spacing(10),
  },
  volunteerTitleText: {
    color: volunteerBlue,
    fontSize: "56px",
    fontWeight: "bold",
    lineHeight: "67px",
    letterSpacing: 0.25,
    textAlign: "center",
    padding: 28,
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
      lineHeight: "52px",
    },
  },
  volunteerTitleLink: {
    textDecoration: "none",
    "&:visited": {
      textDecoration: "none",
      color: volunteerBlue,
    },
  },
  volunteerInfoText: {
    textAlign: "center",
    fontSize: "1.35rem",
    padding: theme.spacing(2),
  },
  offerGridItem: {
    textAlign: "center",
    marginBottom: theme.spacing(3),
  },
  promoLineContainer: {
    paddingTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(2),
    },
  },
  promoTitleText: {
    color: volunteerBlue,
    fontSize: 56,
    fontWeight: "bold",
    lineHeight: "67px",
    letterSpacing: 0.25,
    textAlign: "center",
    display: "inline",
    margin: `0 ${theme.spacing(1)}px 0 0`,
    [theme.breakpoints.down("sm")]: {
      display: "block",
      margin: 0,
    },
  },
  promoText: {
    fontSize: 32,
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  andGrowingText: {
    fontSize: 32,
    textAlign: "center",
  },
}));

export default function VolunteerInstructions() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md" className={classes.upperVolunteerContainer}>
        <Grid container alignItems="flex-end">
          <Grid item xs={12} md={6}>
            <Typography variant="h1" className={classes.volunteerTitleText}>
              <NavLink className={classes.volunteerTitleLink} to={SIGNUP_PATH}>
                Offer Help
                <br />
                Now
              </NavLink>
            </Typography>
          </Grid>
          <Hidden smDown>
            <Grid item md={6}>
              <DoctorAndVolunteer />
            </Grid>
          </Hidden>
        </Grid>
        <Box mb={4}>
          <Typography className={classes.volunteerInfoText} variant="body1">
            As a volunteer or a business donor, you will provide essential
            support through hands-on help, outreach, or donations of products or
            services. You can offer to help in a variety of ways, including:
          </Typography>
        </Box>
        <Grid container>
          {offerTypes.map(({ OfferComponent, offerText }) => (
            <Grid
              key={offerText.replace(/\s/g, "_")}
              item
              className={classes.offerGridItem}
              xs
            >
              <OfferComponent />
              <Typography>{offerText}</Typography>
            </Grid>
          ))}
        </Grid>
        <Hidden smDown>
          <Box mt={6}>
            <Typography className={classes.volunteerInfoText} variant="body1">
              Our volunteer coordinators will match you with healthcare workers
              in your area who need help.
            </Typography>
          </Box>
        </Hidden>
        <Box className={classes.alignCenter} mt={4} pb={6}>
          <Button
            className={classes.button}
            variant="contained"
            elevation={0}
            href={SIGNUP_PATH}
          >
            <div className={classes.buttonText}>Offer Help</div>
          </Button>
        </Box>
        <Box pt={6} mb={1} className={classes.alignCenter}>
          <Hidden smDown>
            <Typography variant="h5">CURRENT COUNT</Typography>
          </Hidden>
        </Box>
      </Container>
      <VolunteerMap />
      <Container maxWidth="md" className={classes.volunteerContainer}>
        {promoLines.map(({ titleText, smallerText }) => (
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.promoLineContainer}
            key={`${titleText}_${smallerText}`.replace(/\s/g, "_")}
          >
            <p className={classes.promoTitleText}>{titleText}</p>
            <span className={classes.promoText}>{smallerText}</span>
          </Grid>
        ))}
        <Typography variant="body1" className={classes.andGrowingText}>
          ...and growing
        </Typography>
        <Hidden smDown>
          <Box mt={4} mb={4} className={classes.alignCenter}>
            <Typography variant="body1">
              Need more details? Visit our&nbsp;
              <BoldLink
                color="textPrimary"
                href="/how-it-works"
                underline="none"
              >
                How It Works
              </BoldLink>
              &nbsp;page.
            </Typography>
          </Box>
        </Hidden>
      </Container>
    </>
  );
}
