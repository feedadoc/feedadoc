import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MedicalIcon from '../../components/icons/Medical';
import ClockIcon from '../../components/icons/Clock';
import FoodIcon from '../../components/icons/Food';

const HelpCallout = () => (
  <Box
    display="flex"
    color="text.white"
    bgcolor="background.dark"
    alignItems="center"
    py={10}
    flexDirection="column"
  >
    <Typography
      component="h2"
      variant="h1"
      align="center"
      style={{ maxWidth: '800px', width: '100%', marginBottom: '40px' }}
      color="text.white"
    >
      Why we need your help
    </Typography>
    <Container maxWidth="lg">
      <Grid container spacing={10}>
        <Grid item xs={12} sm={4}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <MedicalIcon />
            <Typography
              component="p"
              variant="h6"
              align="center"
              style={{ marginTop: '20px' }}
              color="text.white"
            >
              COVID-19 will overwhelm  hospitals with critically-ill patients
              </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <ClockIcon />
            <Typography
              component="p"
              variant="h6"
              align="center"
              style={{ marginTop: '20px' }}
              color="text.white"
            >
              Care providers will be working long hours in brutal conditions
              </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={2}
            flexDirection="column"
          >
            <FoodIcon />
            <Typography
              component="p"
              variant="h6"
              align="center"
              style={{ marginTop: '20px' }}
              color="text.white"
            >
              We can help them stay healthy and focused on saving lives
              </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default HelpCallout;
