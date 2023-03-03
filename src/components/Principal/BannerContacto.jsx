import React from 'react';
import { BannerInfo } from '../../elements/Principal';

export const BannerContacto = () => {
  return (
    <BannerInfo>
      <div className="contenedor">
        <h2>Encuentra la casa de tus sueños</h2>
        <p>
          Llena el formulario de contacto y un asesor se pondra en contacto
          contigo a la brevedad.
        </p>

        <a href="da" className="btn btn-naranja">
          Contáctanos
        </a>
      </div>
    </BannerInfo>
  );
};
