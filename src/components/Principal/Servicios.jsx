import { ContenedorServicios } from '../../elements/Principal';

export const Servicios = () => {
  return (
    <section className="contenedor seccion">
      <h2 className="text-center">Más Sobre Nosotros</h2>

      <ContenedorServicios>
        <div>
          <img src="/img/icono1.svg" alt="Icono Seguridad" />
          <h3>Seguridad</h3>
          <p>
            Dolor sit amet consectetur adipisicing elit. Repellendus inventore
            cum, corporis eveniet recusandae rem architecto aspernatur
            laudantium dignissimos consequatur.
          </p>
        </div>

        <div>
          <img src="/img/icono2.svg" alt="Icono Precio" />
          <h3>El Mejor Precio</h3>
          <p>
            Dolor sit amet consectetur adipisicing elit. Repellendus inventore
            cum, corporis eveniet recusandae rem architecto aspernatur
            laudantium dignissimos consequatur.
          </p>
        </div>

        <div>
          <img src="/img/icono3.svg" alt="IconoTiempo" />
          <h3>A Tiempo</h3>
          <p>
            Dolor sit amet consectetur adipisicing elit. Repellendus inventore
            cum, corporis eveniet recusandae rem architecto aspernatur
            laudantium dignissimos consequatur.
          </p>
        </div>
      </ContenedorServicios>
    </section>
  );
};
