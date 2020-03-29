import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import BoldLink from "../../components/BoldLink";

const Contributors = () => (
  <Container maxWidth="sm">
    <Typography component="p" variant="body" className="contributor-text">
      We welcome new contributors. Current needs include PR, front-end web
      development, and community outreach.{" "}
      <BoldLink
        color="textPrimary"
        href="https://docs.google.com/forms/d/e/1FAIpQLSeAXlls9dtfW8Eu6OBvfNT1J8nhOHJ4nC2QrryNlsVogRGsFA/viewform"
      >
        Apply here to join
      </BoldLink>
      .{" "}
    </Typography>
  </Container>
);

export default Contributors;
