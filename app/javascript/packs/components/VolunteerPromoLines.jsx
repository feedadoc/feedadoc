import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  promoLineContainer: {
    paddingTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(2),
    },
  },
  promoTitleText: {
    color: theme.palette.secondary.main,
    fontSize: 56,
    fontWeight: "bold",
    lineHeight: "67px",
    letterSpacing: 0.25,
    textAlign: "center",
    display: "inline",
    margin: `0 ${theme.spacing(1)}px 0 0`,
    [theme.breakpoints.down("sm")]: {
      display: "block",
      margin: 0,
    },
  },
  promoText: {
    fontSize: 32,
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  andGrowingText: {
    fontSize: 32,
    marginTop: "1.5rem",
    textAlign: "center",
  },
}));

const promoLines = [
  { titleText: "300+", smallerText: "volunteers" },
  { titleText: "48", smallerText: "states" },
  { titleText: "5", smallerText: "countries" },
];

const VolunteerPromoLines = () => {
  const classes = useStyles();
  return (
    <>
      {promoLines.map(({ titleText, smallerText }) => (
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.promoLineContainer}
          key={`${titleText}_${smallerText}`.replace(/\s/g, "_")}
        >
          <p className={classes.promoTitleText}>{titleText}</p>
          <span className={classes.promoText}>{smallerText}</span>
        </Grid>
      ))}

      <Typography variant="body1" className={classes.andGrowingText}>
        ...and growing
      </Typography>
    </>
  );
};

export default VolunteerPromoLines;
