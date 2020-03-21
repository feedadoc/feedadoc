import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2)
  },
  heroButtons: {
    margin: theme.spacing(4)
  }
}));

const TOTAL_PROVIDERS = gql`
  {
    providers {
      totalCount
      nodes {
        id
        city
        firstName
      }
    }

    requests(
      filters: { status: new }
      orderBy: { direction: ASC, sort: CITY }
    ) {
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
          requestType
          provider {
            id
            firstName
            city
            state
            neighborhood
            role
            facility
          }
        }
      }
    }
  }
`;

export default function BrowseRequests() {
  const classes = useStyles();

  const { loading, error, data } = useQuery(TOTAL_PROVIDERS);

  return (
    <>
      <Paper className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {data ? `${data.providers.totalCount} ` : ""} Care Providers in Need
          </Typography>
        </Container>
      </Paper>
      <Paper>
        <Container>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Request type</TableCell>
                <TableCell>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.requests.edges.map(
                  ({
                    node: {
                      id,
                      description,
                      requestType,
                      provider: { firstName, city, state }
                    }
                  }) => {
                    return (
                      <TableRow key={id}>
                        <TableCell component="th" scope="row">
                          {firstName}
                        </TableCell>
                        <TableCell>
                          {city}, {state}
                        </TableCell>
                        <TableCell>{requestType}</TableCell>
                        <TableCell>{description}</TableCell>
                      </TableRow>
                    );
                  }
                )}
            </TableBody>
          </Table>
        </Container>
      </Paper>
    </>
  );
}
