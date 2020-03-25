import React from 'react';
import Box from '@material-ui/core/Box';
import {makeStyles} from "@material-ui/core/styles";
import DoctorsPassingBy from '../../components/illustrations/DoctorsPassingBy';
import Volunteers from '../../components/illustrations/Volunteers';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Fab";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      width: "100%",
      paddingTop: '80px',
      paddingBottom: '80px',
      justifyContent: "center",
      [theme.breakpoints.up('md')]: {
        width: "50%",
        minHeight: '600px'
      },
    },
    '& > *:first-child': {
      [theme.breakpoints.up('md')]: {
        paddingRight: '80px',
        justifyContent: "flex-end"
      }
    },
    '& > *:last-child': {
      [theme.breakpoints.up('md')]: {
        paddingLeft: '80px',
        justifyContent: "flex-start"
      }
    },
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row'
    },
  },
  actionButton: {
    fontSize: '20px',
    padding: '10px 20px',
    boxShadow: 'none'
  }
}));

const SplitSection = () => {
  const classes = useStyles();
  return (
    <Box p={0} m={0} display="flex"  className={classes.root}  alignItems="center">
      <Box bgcolor={'secondary.500'} display="flex">
        <Box style={{maxWidth: '500px', textAlign: 'center'}}>
          <DoctorsPassingBy />
          <Typography
            component="h2"
            variant="h1"
            align="center"
            color="primary"
            style={{marginBottom: '20px', marginTop: '20px', textTransform: 'uppercase'}}
          >
            Care Providers
          </Typography>
          <Typography
            component="p"
            variant="h2"
            style={{marginBottom: '40px'}}
          >
            Make requests for meals, supplies, or anything else you need. Share a link with your friends and family.
          </Typography>
          <Button className={classes.actionButton} size="large" variant="contained" color="primary" elevation={0} component={Link}>Request Help</Button>
        </Box>
      </Box>
      <Box bgcolor={'secondary.800'} display="flex">
        <Box style={{maxWidth: '500px', paddingTop: '15px', textAlign: 'center'}}>
          <Volunteers />
          <Typography
            component="h2"
            variant="h1"
            color="secondary"
            align="center"
            style={{marginBottom: '20px', marginTop: '20px', textTransform: 'uppercase'}}
          >
            Volunteers
          </Typography>
          <Typography
            component="p"
            variant="h2"
            style={{marginBottom: '40px'}}
          >
            Offer your support to local doctors, nurses, and hospital workers in your community. You choose who and how to help.
          </Typography>
          <Button className={classes.actionButton} size="large" variant="contained" color="secondary" elevation={0} component={Link}>Volunteer Now</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default SplitSection;