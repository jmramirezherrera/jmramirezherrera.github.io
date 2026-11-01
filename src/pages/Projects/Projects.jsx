import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import { Paper, Container, Box, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const Item = styled(Paper)(({ image, isPoster }) => ({
  textAlign: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundImage: image ? `url(${image})` : 'none',
  backgroundSize: 'cover',
  backgroundPosition: isPoster ? 'bottom' : 'center',
  minHeight: '300px',
  width: '100%',
  borderRadius: '0px',
  boxShadow: 'none',
  '&:hover': {
    cursor: 'pointer',
    '& .item-hover': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'opacity 0.3s ease-in-out',
      opacity: 1,
    },
  },
}));

const ItemHover = styled(Box)(() => ({
  display: 'none',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.25)',
  backdropFilter: 'blur(2px)',
  opacity: 0,
  '&:hover': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
  },
}));

function Projects({ projects }) {
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <Stack gap={2} my={2} mt={14}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
            sx={{ justifyContent: 'center' }}
          >
            {projects?.map((project, index) => (
              <Grid
                key={index}
                size={{ xs: 6 }}
                sx={{ position: 'relative', minHeight: '300px' }}
              >
                <a
                  href={`/projects/${project?.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <Item
                    image={project?.mainImage}
                    isPoster={project?.images?.length == 1}
                  >
                    <ItemHover className="item-hover">
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#fff',
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                        }}
                      >
                        {project?.name}
                      </Typography>
                      {project?.year && (
                        <Typography
                          variant="h6"
                          sx={{
                            color: '#fff',
                            fontWeight: 'light',
                          }}
                        >
                          ({project?.year})
                        </Typography>
                      )}
                    </ItemHover>
                  </Item>
                </a>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
}

export default Projects;
