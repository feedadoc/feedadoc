import React from "react";
import {
  makeStyles,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  Container,
} from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { SUPPORT_EMAIL } from "../data/contactEmails";
import theme from "../theme";
import ProviderConfirmationPage from "./ProviderConfirmationPage";

const useStyles = makeStyles((theme) => ({
  requestHeader: {
    backgroundColor: "#E3EAED",
    padding: theme.spacing(2, 0),
  },
  requestHeaderTitle: {
    color: theme.palette.secondary.main,
    fontSize: "20px",
    letterSpacing: "0.5px",
    marginBottom: theme.spacing(2),
    textTransform: "uppercase",
  },
  name: {
    fontSize: "48px",
  },
  requestContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 2),
    marginBottom: theme.spacing(3),
    textAlign: "center",
  },
  complete: {
    color: "black",
    fontWeight: "bold",
  },
  heroButtons: {
    margin: theme.spacing(4),
  },
  role: {
    color: "#00000099",
    fontSize: "24px",
    fontWeight: 100,
    textTransform: "capitalize",
  },
  facility: {
    color: "#00000099",
    fontWeight: 100,
    letterSpacing: "0.25px",
  },
  sectionHeaders: {
    fontSize: "1.75rem",
    fontWeight: 600,
    marginTop: theme.spacing(6),
    textTransform: "uppercase",
  },
  listItem: {
    justifyContent: "center",
    padding: 0,
    fontSize: "1.25rem",
    textTransform: "capitalize",
  },
  faded: {
    opacity: 0.4,
  },
  description: {
    fontWeight: 100,
  },
  button: {
    backgroundColor: "#545B8E",
    borderRadius: "25px",
    color: "white",
    fontSize: "20px",
    fontWeight: 600,
    letterSpacing: "0.5px",
    marginTop: theme.spacing(6),
    textTransform: "none",
  },
  browseLink: {
    color: theme.palette.text.primary,
    fontWeight: "bold",
    textDecoration: "none",
  },
  footer: {
    fontSize: "20px",
    padding: theme.spacing(0, 1, 6, 1),
  },
  expiredRequest: {
    textAlign: "center",
  },
  expiredHeader: {
    marginBottom: theme.spacing(3),
  },
}));

const GET_PROVIDER = gql`
  query Provider($id: ID!) {
    provider(id: $id) {
      id
      firstName
      city
      state
      neighborhood
      role
      facility
      description
      active
      createdAt
      requests {
        type
        satisfied
      }
    }
  }
`;

export default function ProviderPage({ location, match }) {
  const classes = useStyles();
  const {
    params: { id },
  } = match;
  const { state: { providerCreation, editLink } = {} } = location;
  const { loading, error, data } = useQuery(GET_PROVIDER, {
    variables: { id },
  });

  if (loading || error || !data.provider) return null;
  const {
    firstName,
    city,
    state,
    neighborhood,
    role,
    facility,
    description,
    requests,
    active,
    createdAt,
  } = data.provider;

  const FOURTEEN_DAYS = 1000 * 60 * 60 * 24 * 14;
  let creationTime = Date.parse(createdAt);
  let today = Date.now();

  if (!active || today - creationTime > FOURTEEN_DAYS) {
    return (
      <Container maxWidth="sm" className={classes.expiredRequest}>
        <Typography
          align="center"
          component="p"
          variant="h2"
          className={classes.expiredHeader}
        >
          This request has expired or been deleted.
        </Typography>
        <Typography align="center" component="p">
          You can find someone else to help here:
        </Typography>
        <Button
          variant="contained"
          className={classes.button}
          href={`/volunteer`}
        >
          Browse Requests
        </Button>
      </Container>
    );
  }

  const roleLookup = {
    physician: "Doctor / NP / PA",
    nurse: "Nurse",
    therapist: "RT / PT / OT / ST / Nutrition",
    paramedic: "EMT / paramedic",
    assistant: "Patient Care Assistant / MA",
    social: "Social Worker / Chaplain",
    admin: "Admin / Support Staff",
  };

  return (
    <>
      {providerCreation ? (
        <ProviderConfirmationPage
          provider={data.provider}
          editLink={editLink}
        />
      ) : (
        <>
          <Box className={classes.requestHeader}>
            <Typography
              component="h1"
              variant="h6"
              align="center"
              className={classes.requestHeaderTitle}
            >
              Volunteer To Help
            </Typography>
            <Typography
              align="center"
              variant="h1"
              component="h2"
              className={classes.name}
            >
              {firstName}
            </Typography>
          </Box>
          <Container maxWidth="sm" className={classes.requestContent}>
            <Typography component="h3" variant="h6" align="center" gutterBottom>
              {neighborhood
                ? `${neighborhood} / ${city}, ${state}`
                : `${city}, ${state}`}
            </Typography>
            <Typography
              component="h3"
              variant="h6"
              align="center"
              gutterBottom
              className={classes.role}
            >
              {roleLookup[role] || "Healthcare Worker"}
            </Typography>
            <Typography
              component="h3"
              variant="h6"
              align="center"
              className={classes.facility}
            >
              {facility}
            </Typography>
            <Typography
              component="h4"
              variant="h5"
              align="center"
              gutterBottom
              className={classes.sectionHeaders}
            >
              Needs
            </Typography>
            {requests.length === 0 ? (
              "No needs at this time."
            ) : (
              <List>
                {requests.map((request, index) => {
                  return (
                    <ListItem
                      className={[
                        classes.listItem,
                        request.satisfied ? classes.faded : "",
                      ].join(" ")}
                      key={index}
                    >
                      {request.satisfied
                        ? `${request.type} - satisfied`
                        : request.type}
                    </ListItem>
                  );
                })}
              </List>
            )}
            <Typography
              component="h4"
              variant="h5"
              align="center"
              color="textPrimary"
              gutterBottom
              className={classes.sectionHeaders}
            >
              Details
            </Typography>
            <Typography
              component="p"
              variant="h6"
              align="center"
              color="textPrimary"
              gutterBottom
              className={classes.description}
            >
              {description}
            </Typography>
            {!providerCreation && active && (
              <Button
                variant="contained"
                className={classes.button}
                href={`/volunteer-signup?provider=${id}`}
              >
                Offer Help
              </Button>
            )}
            {!providerCreation && !active && (
              <Typography
                component="h1"
                align="center"
                className={classes.complete}
                gutterBottom
              >
                The provider has marked this request as complete.
              </Typography>
            )}
          </Container>

          {/*
          @NOTE: Hiding this link until after MVP release
         */}
          {/* <Box className={classes.requestHeader}>
          <Typography component="p" variant="h6" align="center">
            Find more healthcare workers to help <Link to="/volunteer" className={classes.browseLink}>here.</Link>
          </Typography>
        </Box> */}
          <Box className={classes.footer}>
            <Typography component="p" align="center" gutterBottom>
              <b>Need help editing or removing a request?</b>
            </Typography>
            <Typography component="p" align="center" gutterBottom>
              Please email{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> to report
              requests that should be updated or removed.
            </Typography>
          </Box>
        </>
      )}
    </>
  );
}
