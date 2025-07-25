import React from 'react';
import './global.css';

export const metadata = {
  title: 'Portfolio Andrés Altamura',
  description:
    'Portafolio de Esteban Andrés Altamura. Desarrollador frontend Next, React, Typescript',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className="font-openSans font-russoFont font-interFont">
        <main>{children}</main>
        <footer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '80px 0', marginTop: '40px', width: '100%', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '100vw', backgroundColor: 'white', height: '2px' }}></div>
          <p style={{ color: 'white' }}>esteban.altamura@gmail.com</p>
          <a href="/claims-and-refunds-policy" style={{ fontSize: '14px', color: 'white', paddingBottom: '2px', borderBottom: '1px solid white' }}>
            Políticas de Disputas y Reembolsos
          </a>
        </footer>
      </body>
    </html>
  );
};

export default Layout;

