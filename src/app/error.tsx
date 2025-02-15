;

import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const [secondsToRedirect, setSecondsToRedirect] = useState<number>(3);
  const router = useNavigate();

  useEffect(() => {
    if (secondsToRedirect === 0) {
      router('/');
    }
  }, [secondsToRedirect, router]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsToRedirect((prev) => {
        if (prev === 1) {
          clearInterval(interval);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Typography
          variant='h1'
          sx={{ fontSize: '36px', fontWeight: '600', color: 'white' }}
        >
          Ocurrio un error
        </Typography>
        <Typography
          variant='body1'
          sx={{ fontSize: '16px', fontWeight: '600', color: 'white' }}
        >
          {secondsToRedirect > 0
            ? `Redirigiendo a la pagina de inicio en ${secondsToRedirect}`
            : 'Redirigiendo...'}
        </Typography>
      </Box>
    </Box>
  );
};

export default Error;
