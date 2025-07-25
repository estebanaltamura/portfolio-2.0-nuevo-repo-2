import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ClaimsAndRefundsPolicy = () => {
    const router = useNavigate();

    const backToHomeButtonHandler = () => {
      router('/');
    };
  
    useEffect(() => {
      scrollTo(0, 0);
    }, []);
  return (
    <Box
    sx={{
      display: 'flex',
      position: 'relative',
      top: '-30px',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
    }}
  >
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '850px',
        marginTop: '60px',
        '@media(min-width: 1200px)': {
          marginTop: '0px',
        },
      }}
    >
      <Box
        onClick={backToHomeButtonHandler}
        sx={{
          display: 'flex',
          position: 'absolute',
          width: '40px',
          height: '40px',
          justifyContent: 'center',
          alignItems: 'center',
          top: '-50px',
          left: '0px',
          borderRadius: '100px',
          border: '1px solid #8C8C8C',
          cursor: 'pointer',
          '@media(min-width: 1200px)': {
            top: '25px',
            left: '-160px',
          },
        }}
      >
        <svg
          width='17'
          height='17'
          color='white'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='m12 19-7-7 7-7'></path>
          <path d='M19 12H5'></path>
        </svg>
      </Box>

      <Typography
        variant='h1'
        sx={{
          fontSize: '30px',
          color: 'white',
          fontWeight: '600',
          marginTop: '25px',
        }}
      >
        Políticas de Disputas y Reembolsos
      </Typography> 
      

      <h2 style={{ fontSize: '1.8em', marginTop: '40px', marginBottom: '15px', color: 'white' }}>1. Alcance y Aceptación</h2>
      <p style={{ color: '#BABABA' }}>
        Estas políticas rigen la relación comercial con nuestros clientes en lo que respecta a la gestión de disputas y las condiciones para reembolsos. Al contratar nuestros servicios, usted acepta y se compromete a cumplir con los términos aquí descritos. Nuestro principal objetivo es la transparencia y la satisfacción del cliente.
      </p>

      <h2 style={{ fontSize: '1.8em', marginTop: '40px', marginBottom: '15px', color: 'white' }}>2. Proceso para la Resolución de Disputas</h2>
      <p style={{ color: '#BABABA' }}>
        Entendemos que pueden surgir desacuerdos. Si no está conforme con el servicio, le invitamos a iniciar un proceso de disputa formal dentro de los <strong>14 días naturales</strong> posteriores a la entrega del hito o la finalización del proyecto.
      </p>
      <p style={{ color: '#BABABA' }}>
        Para ello, debe enviar un correo electrónico a <strong>esteban.altamura@gmail.com</strong> con el asunto &quot;Notificación de Disputa - [Nombre del Proyecto]&quot;. El correo debe incluir:
      </p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#BABABA' }}>
        <li>Identificación completa del cliente y del proyecto.</li>
        <li>Una exposición clara y detallada de los motivos de la insatisfacción, especificando los puntos del acuerdo que considera no cumplidos.</li>
        <li>Documentación de soporte relevante (contratos, correos, capturas de pantalla, etc.) que respalde su reclamación.</li>
      </ul>
      <p style={{ color: '#BABABA' }}>
        Nos comprometemos a acusar recibo de su disputa en un plazo de 3 días hábiles y a realizar un análisis exhaustivo para proponer una solución equitativa en un máximo de 10 días hábiles.
      </p>

      <h2 style={{ fontSize: '1.8em', marginTop: '40px', marginBottom: '15px', color: 'white' }}>3. Criterios para Reembolsos</h2>
      <p style={{ color: '#BABABA' }}>
        La naturaleza intangible del desarrollo de software requiere una política de reembolsos clara. Los reembolsos se evalúan individualmente y no se garantizan de forma incondicional.
      </p>
      <p style={{ color: '#BABABA' }}>
        Se podrá considerar un <strong>reembolso parcial o total</strong> exclusivamente en los siguientes casos:
      </p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#BABABA' }}>
        <li><strong>Incumplimiento grave del servicio:</strong> Si las funcionalidades entregadas no se corresponden con las especificaciones técnicas acordadas y firmadas en el contrato inicial.</li>
        <li><strong>Defectos críticos no resueltos:</strong> Si el software presenta errores críticos que impiden su funcionamiento básico y no somos capaces de ofrecer una solución en un plazo de 30 días.</li>
        <li><strong>Cancelación unilateral por nuestra parte:</strong> Si por motivos internos nos vemos obligados a cancelar el proyecto sin haber completado los hitos acordados.</li>
      </ul>
      <p style={{ color: '#BABABA' }}>
        <strong>Exclusiones:</strong> No se realizarán reembolsos por cambios de opinión del cliente, modificaciones en el alcance del proyecto no formalizadas por escrito, o por expectativas subjetivas no incluidas en los requisitos. Los pagos correspondientes a hitos ya entregados y validados por el cliente no son reembolsables.
      </p>

      <h2 style={{ fontSize: '1.8em', marginTop: '40px', marginBottom: '15px', color: 'white' }}>4. Cancelación del Proyecto</h2>
      <p style={{ color: '#BABABA' }}>
        Cualquiera de las partes puede solicitar la cancelación del proyecto mediante una notificación por escrito. Si la cancelación es iniciada por el cliente, este deberá abonar el importe correspondiente a todas las horas y trabajos realizados hasta la fecha de la notificación, según las tarifas acordadas.
      </p>

      <h2 style={{ fontSize: '1.8em', marginTop: '40px', marginBottom: '15px', color: 'white' }}>5. Contacto y Modificaciones</h2>
      <p style={{ color: '#BABABA' }}>
        Para cualquier consulta sobre estas políticas, puede contactarnos en <strong>esteban.altamura@gmail.com</strong>. Nos reservamos el derecho de modificar estas políticas en cualquier momento, notificando a los clientes activos de cualquier cambio sustancial.
      </p>
    </Box>
    </Box>
  );
};

export default ClaimsAndRefundsPolicy;
