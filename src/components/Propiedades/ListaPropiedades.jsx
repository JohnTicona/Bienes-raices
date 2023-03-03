import { Propiedades } from '../../data/Propiedades';
import { Cards } from '../../elements/Principal';
import { CardItem } from '../Principal/CardItem';

export const ListaPropiedades = () => {
  return (
    <div className="contenedor seccion">
      <h1 className="text-center fw-300">Casas y Depas en Venta</h1>
      <Cards>
        {Propiedades.map((casa) => (
          <CardItem
            key={casa.id}
            id={casa.id}
            imagen={casa.imagen}
            nombre={casa.nombre}
            descripcion={casa.descripcion}
            precio={casa.precio}
            wc={casa.wc}
            dormitorios={casa.dormitorios}
            estacionamiento={casa.estacionamiento}
          />
        ))}
      </Cards>
    </div>
  );
};
