import React from "react";
import {
  makeStyles,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  Container
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  requestHeader: {
    backgroundColor: "#E3EAED",
    padding: theme.spacing(2, 0),
  },
  requestHeaderTitle: {
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(2),
    textTransform: "uppercase",
  },
  requestContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0),
    marginBottom: theme.spacing(3),
    textAlign: "center"
  },
  complete: {
    color: "black",
    fontWeight: "bold",
  },
  heroButtons: {
    margin: theme.spacing(4),
  },
  role: {
    fontWeight: 100,
    textTransform: "uppercase",
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
    fontWeight: 100
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
  }
}));

const GET_PROVIDER = gql`
  query Provider($id: ID!) {
    provider(id: $id) {
      id
      firstName
      city,
      state,
      neighborhood
      role,
      facility,
      description,
      active
      requests {
        type,
        satisfied
      }
    }
  }
`;

export default function ProviderPage(props) {
  const classes = useStyles();
  const { match: { params: { id } } } = props;
  const { loading, error, data } = useQuery(GET_PROVIDER, {
    variables: { id },
  });

  if (loading || error || !data.provider) return null;
  const { firstName, city, state, neighborhood, role, facility, description, requests, active } = data.provider;

  return (
    <>
      <Box className={classes.requestHeader}>
        <Typography component="h1" variant="h6" align="center" className={classes.providerHeaderTitle}>
          Volunteer To Help
        </Typography>
        <Typography align="center" variant="h1" component="h2">
          {firstName}
        </Typography>
      </Box>
      <Paper className={classes.requestContent}>
        <Container maxWidth="sm">
          <Typography component="h3" variant="h6" align="center" gutterBottom>
            {neighborhood ? `${neighborhood} / ${city}, ${state}` : `${city}, ${state}`}
          </Typography>
          <Typography component="h3" variant="h6" align="center" gutterBottom className={classes.role}>
            {role}
          </Typography>
          <Typography component="h3" variant="h6" align="center" gutterBottom style={{fontWeight: 100}}>
            {facility}
          </Typography>
          <Typography component="h4" variant="h5" align="center" gutterBottom className={classes.sectionHeaders}>
            Needs
          </Typography>
          { requests.length === 0 ?
            "No needs at this time."
            :
            <List>
              {requests.map((request, index) => {
                return (
                  <ListItem className={[classes.listItem, request.satisfied ? classes.faded : ""].join(" ")} key={index}>
                    {request.satisfied ? `${request.type} - satisfied` : request.type}
                  </ListItem>
                )
              })}
            </List>
          }
          <Typography component="h4" variant="h5" align="center" color="textPrimary" gutterBottom className={classes.sectionHeaders}>
            Details
          </Typography>
          <Typography component="p" variant="h6" align="center" color="textPrimary" gutterBottom className={classes.description}>
            {description}
          </Typography>
          { active ? (
            <Button variant="contained" className={classes.button} href={`/volunteer-signup?provider=${id}`}>
              Offer Help
            </Button>
          ) : (
            <Typography component="h1" align="center" className={classes.complete} gutterBottom>
              The provider has marked this request as complete.
            </Typography>
          )}
        </Container>
      </Paper>
      <Box className={classes.requestHeader}>
        <Typography component="p" variant="h6" align="center">
          Find more care providers to help <Link to="/browse" className={classes.browseLink}>here.</Link>
        </Typography>
      </Box>
    </>
  );
}
