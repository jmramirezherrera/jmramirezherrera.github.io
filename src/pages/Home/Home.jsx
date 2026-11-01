import React from 'react';
import { Typography, Stack, Container } from '@mui/material';

function Home() {
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <Stack gap={1} my={2} mt={14} mb={4}>
        <iframe
          width="100%"
          height="620"
          src="https://www.youtube.com/embed/l-bAQQcx0zI?si=IHcuZijbtFCBNpWC"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Stack>
    </Container>
  );
}

export default Home;
