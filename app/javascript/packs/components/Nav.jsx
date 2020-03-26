import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '10px 0 !important',
    marginBottom: '10px',
    '& > * + *': {
      marginLeft: theme.spacing(4),
      [theme.breakpoints.down('sm')]: {
        marginLeft: theme.spacing(2),
      }
    },
    '& > [href="/"]': {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    '& > *': {
      textDecoration: 'none',
      borderBottom: "3px solid transparent",
      paddingBottom: "10px",
      textTransform: 'uppercase',
      fontSize: '18px',
      letterSpacing: '1px',
      fontWeight: 'bold',
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.6rem'
      },
      '&:visited': {
        color: theme.palette.text.primary
      },
      '&:hover': {
        color: theme.palette.primary,
        borderBottomColor: theme.palette.primary.main
      }
    },
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
      <NavLink to="/" exact activeClassName={classes.active}>
        Home
      </NavLink>
      <NavLink to="/browse" activeClassName={classes.active}>
        Volunteer
      </NavLink>
      <NavLink to="/provider-signup" activeClassName={classes.active}>
        Request Help
      </NavLink>
    </Box>
  );
}