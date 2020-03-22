import React from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {Link} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
  },
  heroButtons: {
    margin: theme.spacing(4),
  },
}));

const TOTAL_PROVIDERS = gql`
  {
    providers(filters: {
      active: true
      updatedWithinDays: 15
    }, orderBy: { direction: ASC, sort: CITY }) {
      totalCount

      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }

      edges {
        cursor
        node {
          id
          description
          requests { type, satisfied }
          id, firstName
          city, state, neighborhood
          role, facility
          updatedAt
        }
      }
    }
  }
`;

export default function BrowseRequests() {
  const classes = useStyles();

  const { loading, error, data } = useQuery(TOTAL_PROVIDERS);

  return (
    <Paper className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          { data ? `${data.providers.totalCount} ` : ''} Care Providers in Need
        </Typography>
      </Container>
    </Paper>
  );
}
