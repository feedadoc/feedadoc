import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '10px 0 !important',
    marginBottom: '10px',
  },
  navItem: {
    textDecoration: 'none',
    borderBottom: "3px solid transparent",
    paddingBottom: "3px",
    textTransform: 'uppercase',
    fontSize: '18px',
    letterSpacing: '1px',
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      fontSize: '.75rem',
    },
    color: theme.palette.text.primary,
    '&:visited': {
      color: theme.palette.text.primary,
    },
    '&:hover': {
      color: theme.palette.primary,
      borderBottomColor: theme.palette.primary.main
    },
    '&:nth-of-type(1n+1)': {
      marginLeft: theme.spacing(4),
      [theme.breakpoints.down('sm')]: {
        marginLeft: theme.spacing(1),
      }
    }
  },
  active: {
    color: `${theme.palette.primary.main} !important`,
    borderBottomColor: theme.palette.primary.main
  }
}));

export default function Links() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <NavLink to="/browse" className={classes.navItem} activeClassName={classes.active}>
        Volunteer
      </NavLink>
      <NavLink to="/provider-signup" className={classes.navItem} activeClassName={classes.active}>
        Request Help
      </NavLink>
    </Box>
  );
}