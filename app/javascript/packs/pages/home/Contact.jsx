import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Contact = () => (
  <Box
    display="flex"
    color="text.primary"
    bgcolor="secondary.100"
    alignItems="center"
    py={10}
    flexDirection="column"
  >
    <Container maxWidth='md'>
      <Typography
        component="h2"
        variant="h1"
        align="center"
        style={{marginBottom: '40px'}}
      >
        Contact
      </Typography>
      <Typography
        component="p"
        variant="h6"
        align="center"
        style={{marginBottom: '20px'}}
      >
        <strong>Providers and Volunteers</strong>: Contact us at support@feedadoc.zendesk.com for
        support requests and feature suggestions.
      </Typography>
      <Typography
        component="p"
        variant="h6"
        align="center"
        style={{marginBottom: '20px'}}
      >
        <strong>Media Inquiries</strong>: You can reach
        us at feedadoc@impossiblelabs.io. Please include your publication name,
        contact info, and deadline (if any). 
      </Typography>
      <Typography
        component="p"
        variant="h6"
        align="center"
      >
        <strong>Funders</strong>: We are currently seeking
        funding to accelerate our roadmap. Please email us at
        feedadoc@impossiblelabs.io. Individiuals can also support us via Paypal at
        accounts@impossiblelabs.io (not deductible for tax purposes).
      </Typography>
    </Container>
  </Box>
);

export default Contact;
