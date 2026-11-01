import React from 'react';
import { Box, Container, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';

function Project({ project }) {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 14,
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          lineHeight: '1.1',
          fontSize: '90px',
          margin: 0,
          marginTop: '24px',
        }}
      >
        {project?.name}
      </h1>
      <p style={{ fontSize: '32px', margin: 0 }}>{project?.category}</p>
      {project?.description && (
        <p style={{ fontSize: '24px', margin: 0 }}>{project?.description}</p>
      )}
      {project?.year && (
        <p style={{ fontSize: '24px', margin: 0, color: 'rgb(76, 71, 71)' }}>
          {project?.year}
        </p>
      )}
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 2,
        }}
      >
        {project?.prizes?.map((prize, index) => (
          <img
            key={index}
            src={prize}
            alt={`${project?.name} - Premio ${index + 1}`}
            style={{ maxWidth: '20%', height: 'fit-content' }}
          />
        ))}
      </Container>
      {project?.video && (
        <iframe
          width="100%"
          height="620"
          src={project?.video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      )}
      {project?.images && project.images.length > 0 && (
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 2, sm: 8, md: 12 }}
              sx={{ justifyContent: 'center' }}
            >
              {project?.images.map((image, index) => (
                <Grid key={index} size={{ xs: 6 }}>
                  <img
                    key={index}
                    src={image}
                    alt={`${project?.name} - ${index + 1}`}
                    style={{ maxWidth: '100%' }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      )}
    </Container>
  );
}

export default Project;
