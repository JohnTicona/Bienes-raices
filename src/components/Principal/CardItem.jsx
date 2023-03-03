import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  ContenidoCard,
  Iconos,
  ListaIconos,
} from '../../elements/Principal';

export const CardItem = (props) => {
  const {
    id,
    imagen,
    nombre,
    descripcion,
    precio,
    wc,
    dormitorios,
    estacionamiento,
  } = props;

  return (
    <>
      <Card>
        <img className="imagenes" src={`/img/${imagen}`} alt={nombre} />
        <ContenidoCard>
          <h3>{nombre}</h3>
          <p>{descripcion}</p>
          <p className="precio">{precio}</p>
          <ListaIconos>
            <Iconos>
              <img src="/img/icono_wc.svg" alt="baño" />
              {wc}
            </Iconos>

            <Iconos>
              <img src="/img/icono_dormitorio.svg" alt="dormitorio" />
              {dormitorios}
            </Iconos>

            <Iconos>
              <img src="/img/icono_estacionamiento.svg" alt="estacionamiento" />
              {estacionamiento}
            </Iconos>
          </ListaIconos>
          <Link to={`/propiedad/${id}`} className="btn btn-naranja d-block">
            Ver Propiedad
          </Link>
        </ContenidoCard>
      </Card>
    </>
  );
};
