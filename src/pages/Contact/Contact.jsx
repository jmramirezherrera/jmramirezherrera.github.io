import React from 'react';
import { Typography, Stack, Container } from '@mui/material';

function Contact() {
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <Typography
        variant="h4"
        component="div"
        sx={{ color: 'black', textAlign: 'center', fontWeight: 'light' }}
        my={2}
        mt={18}
      >
        DIRECCIÓN DE CINE/GUIÓN
      </Typography>
      <Typography
        variant="h4"
        component="div"
        sx={{ color: 'black', textAlign: 'center', fontWeight: 'light' }}
      >
        (+34) 639 77 10 79
      </Typography>
      <a
        href="mailto:josemramirezherrera@gmail.com"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{ color: 'black', textAlign: 'center', fontWeight: 'light' }}
        >
          josemramirezherrera@gmail.com
        </Typography>
      </a>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{
          margin: '16px auto',
          gap: '8px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <a
          href="mailto:josemramirezherrera@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <i class="fa fa-envelope" style={{ fontSize: '24px' }}></i>
        </a>
        <a
          href="https://www.instagram.com/chemaramirezh/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <i class="fa fa-instagram" style={{ fontSize: '24px' }}></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jos%C3%A9-mar%C3%ADa-ram%C3%ADrez-herrera/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <i class="fa fa-linkedin" style={{ fontSize: '24px' }}></i>
        </a>
      </Stack>
    </Container>
  );
}

export default Contact;
