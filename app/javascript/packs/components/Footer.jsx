import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1rem 1rem 5rem",
    textAlign: "center",
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
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
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
    </footer>
  );
};

export default Footer;
