import React from "react";
import VolunteerMap from "../../components/VolunteerMap";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import VolunteerPromoLines from "../../components/VolunteerPromoLines";

const Volunteers = () => (
  <>
    <Container>
      <Box pt={6} pb={4}>
        <Typography
          component="h2"
          variant="h1"
          p="10"
          align="center"
          color="primary"
        >
          Volunteers are ready to help
          <br />
          across the country
        </Typography>
      </Box>
    </Container>
    <VolunteerMap />
    <Container>
      <Box pt={6} pb={10}>
        <VolunteerPromoLines />
      </Box>
    </Container>
  </>
);

export default Volunteers;
