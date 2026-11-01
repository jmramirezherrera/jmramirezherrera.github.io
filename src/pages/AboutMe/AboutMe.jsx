import React from 'react';
import { Typography, Stack, Container } from '@mui/material';

function AboutMe() {
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <Stack
        gap={1}
        my={2}
        mt={18}
        sx={{ display: 'flex', flexDirection: 'row' }}
      >
        <Stack gap={1} sx={{ maxWidth: '60%' }}>
          <Typography variant="h3" sx={{ fontWeight: 'light' }}>
            Guionista y director andaluz. Licenciado en Comunicación Audiovisual
            por la Universidad de Sevilla. Tras casi una década de experiencia
            en producciones audiovisuales españolas, me desempeñé en el
            departamento de Arte, entre las que destacan:
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 'light' }}>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
              <li>Veneno (2020)</li>
              <li>Fuimos canciones (2021)</li>
              <li>El pueblo (2019)</li>
              <li>Asalto al Banco Central (2024)</li>
              <li>La última (2022)</li>
              <li>Sin límites (2022)</li>
              <li>Dos años y un día (2022)</li>
            </ul>
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 'light' }}>
            Concluido el máster de Dirección de Cine en el Instituto de Cine
            Madrid (ICM) en 2024, me encuentro actualmente escribiendo,
            dirigiendo y desarrollando mis propios proyectos.
          </Typography>
        </Stack>
        <img
          src="/src/assets/chema.jpeg"
          alt="Profile Image"
          style={{ maxWidth: '40%', height: 'fit-content' }}
        />
      </Stack>
    </Container>
  );
}

export default AboutMe;
