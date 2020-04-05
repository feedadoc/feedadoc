import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import GatheredDoctors from "../../components/illustrations/GatheredDoctors";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  centeredBox: {
    textAlign: "center",
  },
  button: {
    backgroundColor: "#545B8E",
    borderRadius: "25px",
    color: "white",
    fontSize: "20px",
    fontWeight: 600,
    letterSpacing: "0.5px",
    marginTop: theme.spacing(6),
    textTransform: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="center" py={10} flexDirection="column">
      <GatheredDoctors />
      <Container maxWidth="sm">
        <Box mt={4}>
          <Typography
            component="h1"
            variant="h1"
            align="center"
            color="primary"
          >
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
          <Box className={classes.centeredBox}>
            <Button
              variant="contained"
              className={classes.button}
              href={`/how-it-works`}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
