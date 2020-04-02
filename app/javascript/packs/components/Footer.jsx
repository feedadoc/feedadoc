import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1rem 1rem 5rem",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      padding: "1rem",
    },
  },
  link: {
    display: "block",
    width: "100%",
    color: theme.palette.text.primary,
    marginBottom: "1rem",
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
      marginRight: "1rem",
      display: "inline-block",
      width: "auto",
    },
  },
  disclaimer: {
    marginTop: "20px",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <div>
        <Link
          target="_blank"
          href="mailto:hello@hospitalhero.care"
          className={classes.link}
        >
          Contact Us
        </Link>
        <Link target="_blank" href="/cookie-policy" className={classes.link}>
          Cookie Policy
        </Link>
        <Link target="_blank" href="/privacy-policy" className={classes.link}>
          Privacy Policy
        </Link>
        <Link target="_blank" href="/terms-of-use" className={classes.link}>
          Terms of Use
        </Link>
        <Link target="_blank" href="/disclaimer" className={classes.link}>
          Disclaimer
        </Link>
        &copy; 2020 Impossible Labs Inc.
      </div>

      <Typography
        component="p"
        variant="caption"
        align="center"
        className={classes.disclaimer}
      >
        This site is created by volunteers for informational purposes only.
        Requests and offers are not verified;
        <br />
        please use your own judgment and stay safe! Use at your own risk.
      </Typography>
    </footer>
  );
};

export default Footer;
