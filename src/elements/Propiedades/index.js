import styled from '@emotion/styled';

export const ContenedorPropiedad = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .imagen-propiedad {
      flex-basis: 55%;
    }

    .contenido-propiedad {
      flex-basis: calc(45% - 2.5rem);
    }
  }

  .imagen-propiedad img {
    border-radius: 1.5rem;
  }

  .contenido-propiedad .precio {
    color: var(--verde);
    font-weight: bold;
    font-size: 2rem;
  }
`;
