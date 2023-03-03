import React from 'react';
import { Footer } from '../components/Footer';
import { Navegacion } from '../components/Navegacion';
import { ContenidoPropiedad } from '../components/Propiedades/ContenidoPropiedad';

export const Propiedad = () => {
  return (
    <div>
      <Navegacion />
      <ContenidoPropiedad />
      <Footer />
    </div>
  );
};
