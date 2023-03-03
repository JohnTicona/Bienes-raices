import { Link, NavLink } from 'react-router-dom';
import { Barra, ContenedorNav, ContenidoNav } from '../elements/Principal';

export const Navegacion = () => {
  return (
    <ContenedorNav>
      <ContenidoNav className="contenedor">
        <Barra>
          <Link to={'/'}>
            <img src="/img/logo.svg" alt="Logo Bienes Raices" />
          </Link>

          <nav>
            <NavLink to={'/nosotros'} activeClassName="activo">
              Nosotros
            </NavLink>
            <NavLink to={'/propiedades'} activeClassName="activo">
              Propiedades
            </NavLink>
            <NavLink to={'/blogs'} activeClassName="activo">
              Blog
            </NavLink>
            <NavLink to={'/contacto'} activeClassName="activo">
              Contacto
            </NavLink>
          </nav>
        </Barra>
      </ContenidoNav>
    </ContenedorNav>
  );
};
