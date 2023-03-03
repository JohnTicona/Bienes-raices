import styled from '@emotion/styled';

export const ContenedorContacto = styled.div`
  .imagen-contacto {
    width: 100%;
    height: 55vh;
    background-image: url(/img/destacada3.jpg);
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
  }

  .formulario-contacto {
    margin: 0 auto;

    @media (min-width: 768px) {
      width: 65%;
    }
  }
`;

export const Form = styled.form`
  legend {
    font-size: 2.2rem;
    color: var(--gris);
  }

  label {
    font-weight: bold;
    text-transform: uppercase;
    display: block;
  }

  input:not([type='submit']),
  textarea,
  select {
    padding: 1rem;
    display: block;
    width: 100%;
    background-color: var(--gris-claro);
    margin-bottom: 2rem;
    border: none;
    border-radius: 1rem;
  }

  textarea {
    height: 20rem;
  }

  p {
    font-size: 1.6rem;
    margin: 2rem 0 0 0;
  }

  input[type='radio'] {
    width: auto;
    margin: 0;
  }

  .forma-contacto {
    max-width: 30rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
