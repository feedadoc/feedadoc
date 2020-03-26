import React from "react";
import {
  makeStyles,
  Typography,
  Button,
  List,
  ListItem,
  Grid,
  Container
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(8, 2),
    textAlign: "center"
  },
  complete: {
    color: "black",
    fontWeight: "bold",
  },
  heroButtons: {
    margin: theme.spacing(4),
  },
  heading: {
    fontSize: "2rem",
    marginTop: theme.spacing(4)
  },
  sectionHeaders: {
    marginTop: theme.spacing(6),
    fontWeight: 500,
    fontSize: "1.75rem"
  },
  listItem: {
    justifyContent: "center",
    padding: 0,
    fontSize: "1.25rem"
  },
  faded: {
    opacity: 0.4,
  },
  description: {
    color: "#747474",
    fontWeight: 100
  },
  button: {
    marginTop: theme.spacing(6),
    borderRadius: "25px",
    color: "white",
    backgroundColor: "#0f2e32"
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

export default function ProviderPage({ location, match }) {
  const classes = useStyles();
  const { params: { id } } = match;
  const { search } = location;
  const { loading, error, data } = useQuery(GET_PROVIDER, {
    variables: { id },
  });

  if (loading || error || !data.provider) return null;
  const { firstName, city, state, neighborhood, role, facility, description, requests, active } = data.provider;

  const renderSuccessMsg = search.includes('success')

  return (
    <Paper className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="subtitle1" align="center" color="textSecondary" gutterBottom>
          Provider Request
        </Typography>
        <Typography component="h2" variant="h6" align="center" color="textPrimary" gutterBottom className={classes.heading}>
          {firstName}
        </Typography>
        <Typography component="h3" variant="h6" align="center" color="textPrimary" gutterBottom>
          {neighborhood ? `${neighborhood} / ${city}, ${state}` : `${city}, ${state}`}
        </Typography>
        <Typography component="h3" variant="h6" align="center" color="textPrimary" gutterBottom style={{fontWeight: 100}}>
          {role}
        </Typography>
        <Typography component="h3" variant="h6" align="center" color="textPrimary" gutterBottom style={{fontWeight: 100}}>
          {facility}
        </Typography>
        <Typography component="h4" variant="h5" align="center" color="textPrimary" gutterBottom className={classes.sectionHeaders}>
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
        <Container>
          <Typography component="p" variant="h6" align="center" color="textPrimary" gutterBottom className={classes.description}>
            {description}
          </Typography>
        </Container>
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
  );
}
