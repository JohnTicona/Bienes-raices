import React from 'react';
import { Header, ContenedorHeader, Barra } from '../../elements/Principal';
import { Link } from 'react-router-dom';

export const BannerPrincipal = () => {
  return (
    <>
      <Header>
        <ContenedorHeader className="contenedor">
          <Barra>
            <Link to={'/'}>
              <img src="/img/logo.svg" alt="Logo Bienes Raices" />
            </Link>

            <nav>
              <Link to={'/nosotros'}>Nosotros</Link>
              <Link to={'/propiedades'}>Propiedades</Link>
              <Link to={'/blogs'}>Blog</Link>
              <Link to={'/contacto'}>Contacto</Link>
            </nav>
          </Barra>

          <h1>Venta de Casas y Departamentos Exclusivos de Lujo</h1>
        </ContenedorHeader>
      </Header>
    </>
  );
};
