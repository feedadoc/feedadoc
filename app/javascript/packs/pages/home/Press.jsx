import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import Kron4 from "../../images/kron-4.png";
import Guardian from "../../images/the-guardian.png";
import TimeOut from "../../images/time-out.png";
import Eater from "../../images/eater.png";
import FunCheapSF from "../../images/fun-cheap-sf.png";

const press = [
  {
    title: "KRON4",
    imgSrc: Kron4,
    url:
      "https://www.kron4.com/features/kron4-heroes/sf-residents-launch-online-platform-to-connect-volunteers-with-healthcare-workers-in-need/",
  },
  {
    title: "The Guardian",
    imgSrc: Guardian,
    url:
      "https://www.theguardian.com/commentisfree/2020/mar/31/virus-neighbours-covid-19",
  },
  {
    title: "Time Out",
    imgSrc: TimeOut,
    url:
      "https://www.timeout.com/usa/news/you-can-volunteer-to-run-an-errand-for-a-healthcare-worker-using-this-new-online-platform-051520",
  },
  {
    title: "Eater",
    imgSrc: Eater,
    url:
      "https://www.eater.com/2020/3/20/21188046/restaurants-donate-meals-to-health-care-workers-hospitals-fighting-coronavirus",
  },
  {
    title: "FunCheapSF",
    imgSrc: FunCheapSF,
    url:
      "https://sf.funcheap.com/city-guide/online-platform-healthcare-workers/",
  },
];

const useStyles = makeStyles((theme) => ({
  pressTitle: {
    maxWidth: "850px",
    width: "100%",
    marginTop: "20px",
    marginBottom: "20px",
    textAlign: "center",
  },
}));

const Logo = ({ title, imgSrc, url }) => {
  const classes = useStyles();
  let altText = `${title} article`;
  return (
    <>
      <a href={url}>
        <img src={imgSrc} alt={altText} />
      </a>
    </>
  );
};

const Press = () => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      bgcolor="background.lightBlue"
      alignItems="center"
      py={10}
      flexDirection="column"
    >
      <Typography
        component="h2"
        variant="h1"
        p="10"
        color="primary"
        className={classes.pressTitle}
      >
        Featured In
      </Typography>
      <Container maxWidth="lg">
        <Grid container spacing={3} justify="center">
          {press.map((c) => (
            <Grid item xs={12} sm={6} md={4} key={c.title}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                textAlign="center"
                pb={2}
              >
                <Logo title={c.title} imgSrc={c.imgSrc} url={c.url} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Press;
