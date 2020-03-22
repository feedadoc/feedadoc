import React from "react";
import { makeStyles, Typography, List, ListItem, ListItemText, Grid, Container } from "@material-ui/core";
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
  description: {
    color: "#747474",
    fontWeight: 100
  }
}));

const GET_PROVIDER = gql`
  query Provider($id: ID) {
    providers(filters: { id: $id }, orderBy: { direction: ASC, sort: CITY }) {
      edges {
        node {
          id,
          firstName
          city,
          state,
          neighborhood
          role,
          facility,
          description,
          requests {
            type,
            satisfied
          }
        }
      }
    }
  }
`;

export default function ProviderPage(props) {
  const classes = useStyles();
  const { match: { params: { id } } } = props
  const { loading, error, data } = useQuery(GET_PROVIDER, {
    variables: { id },
  });

  if (loading || error || data.providers.edges.length === 0) return null;
  const { firstName, city, state, neighborhood, role, facility, description, requests } = data.providers.edges[0].node

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
            {requests.map((request) => {
              return (
                <ListItem className={classes.listItem}>
                  {request.satisfied ? `${request.type} - completed` : request.type}
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
      </Container>
    </Paper>
  );
}
