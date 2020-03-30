import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import MedicalIcon from "../../components/icons/Medical";
import ClockIcon from "../../components/icons/Clock";
import FoodIcon from "../../components/icons/Food";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  helpCalloutText: {
    color: "text.white",
    marginTop: "20px",
    textAlign: "center",
  },
  helpCalloutTitle: {
    color: "text.white",
    maxWidth: "800px",
    width: "100%",
    marginBottom: "40px",
    textAlign: "center",
  },
}));

const HelpCallout = () => {
  const classes = useStyles();
  return (
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
        className={classes.helpCalloutTitle}
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
                className={classes.helpCalloutText}
              >
                COVID-19 will overwhelm hospitals with critically-ill patients
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
                className={classes.helpCalloutText}
              >
                Healthcare workers will be working long hours in brutal
                conditions
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
                className={classes.helpCalloutText}
              >
                We can help them stay healthy and focused on saving lives
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HelpCallout;
