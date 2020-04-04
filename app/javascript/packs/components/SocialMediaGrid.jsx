import React from "react";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import LinkedInIcon from "./icons/LinkedIn";
import FacebookIcon from "./icons/Facebook";
import EmailIcon from "./icons/Email";
import TwitterIcon from "./icons/Twitter";
import * as socialMediaLinks from "../data/socialMediaLinks";

const SocialMediaGrid = () => {
  return (
    <Grid container spacing={4}>
      <Grid container item xs={6} sm={3} justify="center">
        <Link href={socialMediaLinks.FACEBOOK_LINK}>
          <FacebookIcon />
        </Link>
      </Grid>
      <Grid container item xs={6} sm={3} justify="center">
        <Link href={socialMediaLinks.TWITTER_LINK}>
          <TwitterIcon />
        </Link>
      </Grid>
      <Grid container item xs={6} sm={3} justify="center">
        <Link href={socialMediaLinks.LINKEDIN_LINK}>
          <LinkedInIcon />
        </Link>
      </Grid>
      <Grid container item xs={6} sm={3} justify="center">
        <Link href={socialMediaLinks.EMAIL_LINK}>
          <EmailIcon />
        </Link>
      </Grid>
    </Grid>
  );
};

export default SocialMediaGrid;
