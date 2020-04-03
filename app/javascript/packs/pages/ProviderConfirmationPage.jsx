import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  Container,
  ThemeProvider,
  Badge,
} from "@material-ui/core";
import theme from "../theme";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  confirmationContainer: {
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(6),
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(10),
      marginTop: theme.spacing(10),
    },
  },
  successHeader: {
    margin: theme.spacing(3),
  },
  successCopy: {
    marginBottom: theme.spacing(4),
    fontWeight: "bold",
  },
  step: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(8),
    },
  },
  stepDetails: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2, 0),
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
  thankYou: {
    color: theme.palette.primary.main,
    fontSize: "1.2rem",
    fontWeight: "bold",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.8rem",
    },
  },
  sharingLinkText: {
    color: theme.palette.primary.main,
    fontSize: "1.4rem",
    fontWeight: "bold",
    padding: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.6rem",
    },
  },
  sharingLink: {
    color: theme.palette.primary.main,
    fontSize: "1rem",
    fontWeight: "bold",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.8rem",
    },
  },
  linkContainer: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(10),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(10),
    },
  },
  link: {
    padding: theme.spacing(2),
    color: "black",
    fontSize: "1rem",
    fontWeight: "bold",
  },
}));

export default function ProviderConfirmationPage({ provider, editLink }) {
  const classes = useStyles();
  const {
    id,
    firstName,
    city,
    state,
    neighborhood,
    role,
    facility,
    description,
    requests,
    active,
  } = provider;

  const renderStep = (number, header, content) => (
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
        className={classes.stepDetails}
      >
        {content}
      </Typography>
    </Container>
  );

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" className={classes.confirmationContainer}>
        <Typography
          align="center"
          variant="h1"
          className={classes.successHeader}
        >
          Thank you for submitting your request!
        </Typography>
        <Typography variant="h2" align="center" className={classes.successCopy}>
          Here's what to do next:
        </Typography>
        {renderStep(
          "1",
          "Share this unique link",
          "Share this unique link for your request on social media. Friends can view your request and offer to help. (Don't worry, your contact info will remain hidden.)"
        )}
        <Typography
          align="center"
          variant="body1"
          className={classes.sharingLinkText}
        >
          MY SHARING LINK:
        </Typography>
        <Link
          className={classes.sharingLink}
          to={`/providers/${id}`}
          target="_blank"
        >{`https://hospitalhero.care/providers/${id}`}</Link>
        <Typography
          align="center"
          variant="body1"
          className={classes.stepDetails}
        >
          Your request will also appear on a public directory where volunteers
          in your community can see it. Again, we'll hide your contact info.
        </Typography>
        {renderStep(
          "2",
          "We'll send you an email",
          "Check your email for a message from HospitalHero. This email includes your Sharing Link and a Private Link for editing/removing your request. (If you don't see the email, please check your spam folder.)"
        )}
        {renderStep(
          "3",
          "You'll get an email from a volunteer",
          "When someone responds to your request, you'll receive an email with their offer. Use your best judgment when deciding which offers to take."
        )}
        {renderStep(
          "4",
          "Your request will expire after 14 days",
          "Your request will expire automatically after 14 days. We'll give you a chance to renew it before that happens."
        )}
        <Container maxWidth="sm">
          <Typography
            align="center"
            variant="body1"
            className={clsx(classes.thankYou, classes.step)}
          >
            Thank you for everything you're doing to fight COVID-19!
          </Typography>
        </Container>
        <Container className={classes.linkContainer}>
          <Link className={classes.link} to={`/providers/${id}`}>
            View my request
          </Link>
          <Link className={classes.link} to={editLink}>
            Edit my request
          </Link>
        </Container>
      </Container>
    </ThemeProvider>
  );
}
