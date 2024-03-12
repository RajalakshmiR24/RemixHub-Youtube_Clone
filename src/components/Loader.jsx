import React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';

const Loader = () =>  (
  <Box minHeight="100vh">
    <Stack direction='row' justifyContent='center' alignItems='center' height='100vh' >
      <CircularProgress />
    </Stack>
  </Box>
);

export default Loader;
