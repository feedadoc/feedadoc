import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import ProviderList from "./ProviderList";
import VolunteerInstructions from "./VolunteerInstructions";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useLocation } from "react-router-dom";

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
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  successText: {
    color: "#d50000",
  },
}));

const TOTAL_PROVIDERS = gql`
  query Providers(
    $first: Int
    $after: String
    $last: Int
    $before: String
    $city: String
  ) {
    providers(
      first: $first
      after: $after
      last: $last
      before: $before
      filters: { active: true, activeRequests: true, city: $city }
      orderBy: { direction: ASC, sort: CITY }
    ) {
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
          firstName
          role
          facility
          neighborhood
          city
          state
          responseCount
          requests {
            type
            satisfied
          }
        }
      }
    }
  }
`;

export default function BrowseRequests() {
  const classes = useStyles();
  const [pageType, setPageType] = React.useState("forward");
  const [endCursor, setEndCursor] = React.useState("");
  const [startCursor, setStartCursor] = React.useState("");
  const [searchValue, setSearchValue] = React.useState("");

  const { search } = useLocation();
  const isSuccess = search.includes("success=true");
  const resultsPerPage = 6;

  const { loading, error, data } = useQuery(TOTAL_PROVIDERS, {
    variables: {
      first: pageType === "forward" ? resultsPerPage : null,
      after: pageType === "forward" ? endCursor : null,
      last: pageType === "back" ? resultsPerPage : null,
      before: pageType === "back" ? startCursor : null,
      city: searchValue,
    },
  });

  const pageNext = (endCursor) => {
    setPageType("forward");
    setEndCursor(endCursor);
  };

  const pagePrevious = (startCursor) => {
    setPageType("back");
    setStartCursor(startCursor);
  };

  const changeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <Box mb={6} mt={10}>
      {isSuccess && (
        <Container className={classes.heroContent}>
          <Box mb={4} textAlign="center">
            <Typography
              variant="h5"
              gutterBottom
              className={classes.successText}
            >
              Thank you so much for volunteering!
            </Typography>
            <Typography variant="subtitle1" className={classes.successText}>
              You should hear back from the medical provider soon.
            </Typography>
          </Box>
        </Container>
      )}
      <VolunteerInstructions />
      <Container className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search by city..."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search by city" }}
          value={searchValue}
          onChange={changeSearchValue}
        />
      </Container>
      <ProviderList
        providers={(data && data.providers.edges) || []}
        pageInfo={data && data.providers.pageInfo}
        onNext={pageNext}
        onPrevious={pagePrevious}
      />
    </Box>
  );
}
