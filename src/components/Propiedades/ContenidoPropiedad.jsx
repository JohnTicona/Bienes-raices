import { Link, useParams } from 'react-router-dom';
import { Propiedades } from '../../data/Propiedades';
import { Iconos, ListaIconos } from '../../elements/Principal';
import { ContenedorPropiedad } from '../../elements/Propiedades';
export const ContenidoPropiedad = () => {
  const { id } = useParams();

  const propiedad = Propiedades.find(
    (propiedad) => propiedad.id === parseInt(id)
  );

  if (!propiedad) {
    return null;
  }

  const { imagen, nombre, precio, wc, dormitorios, estacionamiento } =
    propiedad;

  return (
    <div className="contenedor seccion mb-4 min-height">
      <h1 className="text-center">{nombre}</h1>

      <ContenedorPropiedad>
        <div className="imagen-propiedad">
          <img src={`/img/${imagen}`} alt={nombre} />
        </div>
        <div className="contenido-propiedad">
          <p>
            <strong>Precio:</strong>
            <span className="precio"> {precio}</span>
          </p>

          <ListaIconos className="mt-3">
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

          <p className="mt-3">
            Optio dolor ad quasi nam asperiores. Illum maxime et quo ipsa dicta
            modi debitis! Ullam officia dolorum asperiores a ut consequuntur
            voluptate maxime soluta, maiores, blanditiis sunt, amet corporis.
            Similique officia saepe suscipit veritatis, quia dolorem facilis
            cumque eum! Inventore, nihil. Maiores!
          </p>
          <Link to={'/propiedades'} className="btn btn-verde">
            Volver
          </Link>
        </div>
      </ContenedorPropiedad>
    </div>
  );
};
