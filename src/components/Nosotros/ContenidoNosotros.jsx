import React from 'react';
import { ContenedorNosotros } from '../../elements/Nosotros';

export const ContenidoNosotros = () => {
  return (
    <main className="contenedor seccion">
      <h1 className="text-center fw-300">Conoce sobre Nosotros</h1>
      <ContenedorNosotros>
        <div className="imagen-nosotros">
          <img src="/img/nosotros.jpg" alt="nosotros" />
        </div>
        <div className="contenido-nosotros">
          <h2>25 años de experiencia</h2>
          <p>
            Sit amet consectetur adipisicing elit. Quos nostrum facere dolore
            quam, quis perspiciatis, dignissimos deleniti veritatis soluta quas
            excepturi, corporis nemo recusandae nihil molestiae nam tenetur
            corrupti dolor temporibus aliquam sapiente culpa doloribus ipsam.
            Sequi eligendi adipisci velit?
          </p>
          <p>
            Amet consectetur adipisicing elit. Et iusto consectetur optio animi
            excepturi molestiae incidunt accusantium, sapiente corrupti ullam
            eius culpa provident quasi. Dolorem exercitationem nobis illo
            reprehenderit maxime eaque pariatur iure, blanditiis atque
            recusandae, voluptates repudiandae beatae itaque ratione enim alias
            cumque sed, fugit vitae praesentium nesciunt tempora?
          </p>
        </div>
      </ContenedorNosotros>
    </main>
  );
};
