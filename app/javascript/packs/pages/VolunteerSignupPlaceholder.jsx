import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
  }
}));

export default function VolunteerSignupPlaceholder() {
  const classes = useStyles();

  return (
    <Paper className={classes.heroContent}>
      <div dangerouslySetInnerHTML={{__html: '<script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script><iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shr3okipJzPefgm2X?backgroundColor=cyan" frameborder="0" onmousewheel="" width="100%" height="1603" style="background: transparent; border: 1px solid #ccc;"></iframe>'}} />
    </Paper>
  );
}
