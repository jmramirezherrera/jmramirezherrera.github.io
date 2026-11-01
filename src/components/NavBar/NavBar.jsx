import * as React from 'react';
import { AppBar, Toolbar, Typography, CssBaseline, Stack } from '@mui/material';

export default function NavBar(props) {
  return (
    <>
      <CssBaseline />
      <AppBar
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0)',
          backdropFilter: 'blur(5px)',
        }}
      >
        <Toolbar sx={{ padding: '16px 0px' }}>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{ border: '3px solid rgb(0, 0, 0)' }}
            py={2}
            px={1.5}
          >
            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography
                variant="h1"
                component="div"
                sx={{ color: 'black', fontWeight: 'bold' }}
              >
                J.M. RAMÍREZ HERRERA
              </Typography>
            </a>
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{ marginLeft: 'auto', gap: '16px' }}
          >
            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ color: 'black', fontWeight: 'bold' }}
              >
                Inicio
              </Typography>
            </a>
            <a
              href="/projects"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ color: 'black', fontWeight: 'bold' }}
              >
                Proyectos
              </Typography>
            </a>
            <a
              href="/about-me"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ color: 'black', fontWeight: 'bold' }}
              >
                Sobre mí
              </Typography>
            </a>
            <a
              href="/contact"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ color: 'black', fontWeight: 'bold' }}
              >
                Contacto
              </Typography>
            </a>
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
