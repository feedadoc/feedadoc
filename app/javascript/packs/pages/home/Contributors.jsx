import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const Contributors = () => (
  <Container maxWidth='sm'>
    <Typography
      component="p"
      variant="body"
      align="center"
      style={{marginBottom: '50px'}}
      color="default"
    >
      We welcome new contributors. Current needs include PR, front-end web
      development, and community outreach. Apply here to join.{' '}
    </Typography>
  </Container>
);

export default Contributors;
