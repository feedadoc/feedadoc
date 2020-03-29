import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import GatheredDoctors from "../../components/illustrations/GatheredDoctors";
import Container from "@material-ui/core/Container";

const Hero = () => (
  <Box display="flex" alignItems="center" py={10} flexDirection="column">
    <GatheredDoctors />
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography component="h2" variant="h1" align="center" color="primary">
          Healthcare workers need our help to fight COVID-19
        </Typography>
      </Box>
    </Container>
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography component="p" variant="h2" align="center">
          Volunteer your time or request support for meals, pet care, errands,
          and more during the COVID-19 pandemic.
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Hero;
