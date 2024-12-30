import { Box, Typography } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import { stack } from 'JSONs/JSONprojects';

const Stack = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '467px',
        height: 'fit-content',
        padding: '10px 16px 24px 16px',
        alignItems: 'center',
        borderRadius: '16px',
        border: '1px solid #494949',
        color: 'white',
        overflow: 'hidden',
        '@media(min-width: 1200px)': {
          padding: '10px 32px 24px',
          marginTop: '0px',
        },
      }}
    >
      {/*Header*/}
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          minHeight: '55px',
          gap: '11px',
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: '20px', height: '20px' }}>
          <img src='/icons/stackIcon.svg' alt='' />
        </Box>
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: '600',
            color: 'white',
            marginTop: '2px',
          }}
        >
          Stack
        </Typography>
      </Box>
      {/*Stack grid*/}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          maxWidth: '435px',
          height: 'fit-content',
          gap: '10px',
          marginTop: '12px',
        }}
      >
        {stack.map((stackItem, index) => {
          return (
            <Tooltip
  key={index}
  title={stackItem.name}
  placement="bottom"
  arrow
  PopperProps={{
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, -6], // Ajusta la distancia
        },
      },
    ],
  }}
  sx={{
    '& .MuiTooltip-tooltip': {
      backgroundColor: '#6E65A7 !important', // Fondo del Tooltip
      color: 'white !important', // Color del texto
      fontSize: '14px !important', // Tamaño de fuente
      fontWeight: 'bold !important', // Peso del texto
    },
    '& .MuiTooltip-arrow': {
      color: '#6E65A7 !important', // Color de la flecha
    },
  }}
>
  <Box
    sx={{
      height: '60px',
      width: stackItem.doubleWidth
        ? 'calc((100% - 20px) * 0.46)'
        : 'calc((100% - 20px) * 0.27)',
      padding: '10px',
      borderRadius: '8px',
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      '@media(min-width: 450px)': {
        height: '70px',
      },
      '@media(min-width: 1200px)': {
        padding: '15px',
        height: '81px',
        width: stackItem.doubleWidth ? '165px' : '108px',
      },
    }}
  >
    <img
      src={stackItem.iconSrc}
      alt={stackItem.name}
      style={{ width: '100%', height: '100%' }}
    />
  </Box>
</Tooltip>
          );
        })}
      </Box>
    </Box>
  );
};

export default Stack;
