import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "10px",
    marginBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
      display: "flex",
      width: "100%",
      position: "-webkit-sticky",
      position: "sticky",
    },
  },
  navItem: {
    textDecoration: "none",
    borderBottom: "3px solid transparent",
    paddingBottom: "3px",
    textTransform: "uppercase",
    fontSize: "18px",
    letterSpacing: "1px",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".75rem",
    },
    color: theme.palette.text.primary,
    "&:visited": {
      color: theme.palette.text.primary,
    },
    "&:hover": {
      color: theme.palette.primary,
      borderBottomColor: theme.palette.primary.main,
    },
    "&:not(:last-child)": {
      marginRight: "1.5rem",
    },
    "&:nth-of-type(1n+1)": {
      marginLeft: theme.spacing(4),
      [theme.breakpoints.down("sm")]: {
        marginLeft: "0",
      },
    },
  },
  active: {
    color: `${theme.palette.primary.main} !important`,
    borderBottomColor: theme.palette.primary.main,
  },
}));

export default function Links({ className }) {
  const classes = useStyles();

  return (
    <Box className={`${classes.root} ${className}`}>
      {/*<NavLink*/}
      {/*  to="/volunteer"*/}
      {/*  className={classes.navItem}*/}
      {/*  activeClassName={classes.active}*/}
      {/*>*/}
      {/*  Offer Help*/}
      {/*</NavLink>*/}
      {/*<NavLink*/}
      {/*  to="/providers"*/}
      {/*  className={classes.navItem}*/}
      {/*  activeClassName={classes.active}*/}
      {/*>*/}
      {/*  Request Help*/}
      {/*</NavLink>*/}
      <NavLink
        to="/how-it-works"
        className={classes.navItem}
        activeClassName={classes.active}
      >
        How It Works
      </NavLink>
    </Box>
  );
}
