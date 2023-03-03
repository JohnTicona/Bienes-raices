import { Form } from '../../elements/Contacto';

export const FormularioContacto = () => {
  return (
    <Form>
      <fieldset>
        <legend>Información Personal</legend>
        <label htmlFor="nombre">Nombre: </label>
        <input type="text" id="nombre" placeholder="Tu nombre" required />

        <label htmlFor="email">E-mail: </label>
        <input
          type="email"
          id="email"
          placeholder="Tu correo electrónico"
          required
        />

        <label htmlFor="telefono">Teléfono: </label>
        <input type="tel" id="telefono" placeholder="Tu teléfono" required />

        <label htmlFor="mensaje">Mensaje: </label>
        <textarea id="mensaje"></textarea>
      </fieldset>

      <fieldset>
        <legend>Información sobre Propiedad</legend>
        <label htmlFor="opciones">Vende o Compra: </label>
        <select id="opciones" defaultValue={'DEFAULT'}>
          <option defaultValue="DEFAULT" disabled selected>
            -- Seleccione --
          </option>
          <option value="Compra">Compra</option>
          <option value="Vende">Vende</option>
        </select>

        <label htmlFor="cantidad">cantidad</label>
        <input type="number" min="0" />
      </fieldset>

      <fieldset>
        <legend>Contacto</legend>
        <p>Como desa ser Contactado: </p>

        <div className="forma-contacto">
          <label htmlFor="tel">Teléfono</label>
          <input type="radio" id="tel" name="contacto" value="telefono" />

          <label htmlFor="correo">E-mail</label>
          <input type="radio" id="correo" name="contacto" value="correo" />
        </div>

        <p>Si eligió Teléfono, elija la fecha y la hora</p>
        <label htmlFor="fecha">Fecha: </label>
        <input type="date" id="fecha" />

        <label htmlFor="hora">Hora: </label>
        <input type="time" id="hora" />
      </fieldset>

      <input className="btn btn-verde" type="submit" value="Enviar" />
    </Form>
  );
};
