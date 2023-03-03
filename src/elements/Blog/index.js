import styled from '@emotion/styled';

export const ContenedorBlog = styled.div`
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 70%;
  }
  img {
    border-radius: 1.5rem;
  }
`;

export const DescripcionBlog = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .imagen-blog {
      flex-basis: 45%;
    }

    .contenido-blog {
      padding: 1.5rem;
      flex-basis: calc(55% - 2rem);
    }
  }

  .imagen-blog img {
    border-radius: 1.5rem;
  }

  span {
    color: var(--naranja);
    font-weight: bold;
  }
`;
