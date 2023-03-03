import { Navegacion } from '../components/Navegacion';
import { Footer } from '../components/Footer';
import { ContenidoNosotros } from '../components/Nosotros/ContenidoNosotros';
import { Servicios } from '../components/Principal/Servicios';

export const Nosotros = () => {
  return (
    <>
      <Navegacion />
      <ContenidoNosotros />
      <Servicios />
      <Footer />
    </>
  );
};
