import { Link } from 'react-router-dom';
import { SiteFooter } from '../elements/Principal';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <SiteFooter className="seccion">
      <div className="contenedor contenido">
        <nav>
          <Link to={'/nosotros'}>Nosotros</Link>
          <Link to={'/propiedades'}>Propiedades</Link>
          <Link to={'/blog'}>Blog</Link>
          <Link to={'/contacto'}>Contacto</Link>
        </nav>
        <p>Todos los Derechos Reservados {year} &copy;</p>
      </div>
    </SiteFooter>
  );
};
