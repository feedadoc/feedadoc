import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import BoldLink from '../../components/BoldLink';
import { SUPPORT_EMAIL, CONTACT_US_EMAIL, DONATION_EMAIL } from "../../data/contactEmails";

const Contact = () => (
  <Box
    display="flex"
    color="background.dark"
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
        <strong>Providers and Volunteers</strong>: Contact us at <BoldLink color="inherit" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</BoldLink> for
        support requests and feature suggestions.
      </Typography>
      <Typography
        component="p"
        variant="h6"
        align="center"
        style={{marginBottom: '20px'}}
      >
        <strong>Media Inquiries</strong>: You can reach
        us at <BoldLink color="inherit" href={`mailto:${CONTACT_US_EMAIL}`}>{CONTACT_US_EMAIL}</BoldLink>. Please include your publication name,
        contact info, and deadline (if any). 
      </Typography>
      <Typography
        component="p"
        variant="h6"
        align="center"
      >
        <strong>Funders</strong>: We are currently seeking
        funding to accelerate our roadmap. Please email us at{' '}
        <BoldLink color="inherit" href={`mailto:${CONTACT_US_EMAIL}`}>{CONTACT_US_EMAIL}</BoldLink>. Individiuals can also support us via Paypal at{' '}
        <BoldLink color="inherit" href={`mailto:${DONATION_EMAIL}`}>{DONATION_EMAIL}</BoldLink> (not deductible for tax purposes).
      </Typography>
    </Container>
  </Box>
);

export default Contact;
