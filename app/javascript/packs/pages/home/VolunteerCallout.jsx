import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import InstagramIcon from '../../components/icons/Instagram';
import LinkedInIcon from '../../components/icons/LinkedIn';
import FacebookIcon from '../../components/icons/Facebook';
import EmailIcon from '../../components/icons/Email';
import TwitterIcon from '../../components/icons/Twitter';

const VolunteerCallout = () => (
  <Box display="flex" alignItems="center" py={10} flexDirection="column">
    <Container maxWidth='md'>
      <Typography
        component="h2"
        variant="h1"
        p="10"
        align="center"
        color="primary"
      >
        Help us build an army of local volunteers to support our front line of
        defense against the COVID-19 pandemic.
      </Typography>
      <Typography
        component="p"
        variant="h2"
        align="center"
        style={{marginTop: '20px'}}
      >
        Share with friends, family, Facebook, and NextDoor to make sure every care
        provider gets the support they need.
      </Typography>
    </Container>
    <Container maxWidth='xs' style={{marginTop: "40px"}}>
      <Grid container spacing={4}>        
        <Grid item xs={12} sm={1}>
          {/* Intentionally empty to create an even number of columns */}
        </Grid> 
        <Grid item xs={4} sm={2}>
          <Link href=""><FacebookIcon /></Link>
        </Grid> 
        <Grid item xs={4} sm={2}>
          <Link href=""><TwitterIcon /></Link>
        </Grid> 
        <Grid item xs={4} sm={2}>
          <Link href=""><InstagramIcon /></Link>
        </Grid> 
        <Grid item xs={4} sm={2}>
          <Link href=""><LinkedInIcon /></Link>
        </Grid> 
        <Grid item xs={4} sm={2}>
          <Link href=""><EmailIcon /></Link>
        </Grid> 
        <Grid item xs={12} sm={1}>
          {/* Intentionally empty to create an even number of columns */}
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default VolunteerCallout;
