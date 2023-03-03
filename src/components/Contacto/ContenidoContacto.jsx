import { ContenedorContacto } from '../../elements/Contacto';
import { FormularioContacto } from './FormularioContacto';

export const ContenidoContacto = () => {
  return (
    <div className="seccion">
      <h1 className="text-center fw-300">Contacto</h1>

      <ContenedorContacto>
        <div className="imagen-contacto"></div>
        <div className="contenedor seccion">
          <main>
            <h2 className="text-center">Llena el Formulario de Contacto</h2>
            <div className="formulario-contacto">
              <FormularioContacto />
            </div>
          </main>
        </div>
      </ContenedorContacto>
    </div>
  );
};
