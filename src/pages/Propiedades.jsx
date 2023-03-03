import { Navegacion } from '../components/Navegacion';
import { Footer } from '../components/Footer';
import { ListaPropiedades } from '../components/Propiedades/ListaPropiedades';

export const Propiedades = () => {
  return (
    <div>
      <Navegacion />
      <ListaPropiedades />
      <Footer />
    </div>
  );
};
