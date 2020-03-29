import React from "react";
import { Box, makeStyles, Paper, Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
  },
}));

export default function VolunteerSignupPlaceholder() {
  const classes = useStyles();
  const { search } = useLocation();
  const isSuccess = search.includes("success=true");

  return (
    <Paper className={classes.heroContent}>
      {isSuccess ? (
        <Box mb={4}>
          <Typography variant="h5" gutterBottom>
            Thank you so much for volunteering!
          </Typography>
          <Typography variant="subtitle1">
            You should hear back from the medical provider soon.
          </Typography>
        </Box>
      ) : (
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script><iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shr3okipJzPefgm2X?backgroundColor=cyan" frameborder="0" onmousewheel="" width="100%" height="1603" style="background: transparent; border: 1px solid #ccc;"></iframe>',
          }}
        />
      )}
    </Paper>
  );
}
