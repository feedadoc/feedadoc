import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
  },
  heroButtons: {
    margin: theme.spacing(4),
  },
  request: {
    display: "inline-block",
    paddingLeft: theme.spacing(1),
  },
  requests: {
    "& > *:first-child": {
      paddingLeft: 0,
      textTransform: "capitalize",
    },
  },
  background: {
    backgroundColor: theme.palette.secondary.lightGray,
  },
  buttonContainer: {
    textAlign: "center",
  },
  providerInfoText: {
    color: "inherit",
    textDecoration: "inherit",
  },
}));

export default function ProviderList({
  providers,
  onNext,
  onPrevious,
  pageInfo,
}) {
  const classes = useStyles();
  return (
    <Paper>
      <Container>
        <Box>
          {providers.map(
            (
              {
                node: {
                  id,
                  firstName,
                  neighborhood,
                  city,
                  state,
                  requests,
                  responseCount,
                },
              },
              index
            ) => {
              const className = index % 2 == 0 ? "background" : "";
              return (
                <Box
                  key={index}
                  p={2}
                  className={index % 2 == 0 && classes.background}
                >
                  <Link
                    to={`/providers/${id}`}
                    className={classes.providerInfoText}
                  >
                    <Grid container spacing={1}>
                      <Grid item xs={6} spacing={2}>
                        <Typography component="th" scope="row">
                          {firstName}
                        </Typography>
                        {neighborhood ? (
                          <Typography>
                            {neighborhood}, {city}, {state}
                          </Typography>
                        ) : (
                          <Typography>
                            {city}, {state}
                          </Typography>
                        )}
                        <Typography className={classes.requests}>
                          {requests.map((request, index) => {
                            if (index === requests.length - 1) {
                              return (
                                <span key={index} className={classes.request}>
                                  {request.type}
                                </span>
                              );
                            }
                            return (
                              <span key={index} className={classes.request}>
                                {request.type},
                              </span>
                            );
                          })}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} spacing={2}>
                        <Typography>{`${responseCount} ${
                          responseCount == 1 ? "Offer" : "Offers"
                        }`}</Typography>
                      </Grid>
                    </Grid>
                  </Link>
                </Box>
              );
            }
          )}
        </Box>
      </Container>
      <Container className={classes.buttonContainer}>
        {pageInfo && pageInfo.hasPreviousPage && (
          <Button onClick={() => onPrevious(pageInfo.startCursor)}>
            Previous Page
          </Button>
        )}
        {pageInfo && pageInfo.hasNextPage && (
          <Button onClick={() => onNext(pageInfo.endCursor)}>Next Page</Button>
        )}
      </Container>
    </Paper>
  );
}
