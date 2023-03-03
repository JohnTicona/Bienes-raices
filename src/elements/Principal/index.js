import styled from '@emotion/styled';

// HEADER
export const Header = styled.header`
  background-image: url(/img/header1.jpg);
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  height: 82vh;
  min-height: 60rem;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.48);
    z-index: 1;
  }
`;

export const ContenedorHeader = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

  h1 {
    color: var(--blanco);
    margin-bottom: 7rem;
    width: 100%;
    font-size: 3.5rem;
    z-index: 100;

    @media (min-width: 768px) {
      width: 60%;
      font-size: 4rem;
    }
  }
`;

export const Barra = styled.div`
  padding: 3rem 0;
  z-index: 100;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav a {
    color: var(--blanco);
    font-size: 2.2rem;
    display: block;

    @media (min-width: 768px) {
      display: inline-block;
      margin-right: 2rem;
      font-size: 2rem;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }

  nav a:last-of-type {
    margin-right: 0;
  }

  nav a:hover {
    color: var(--verde);
  }
`;

// SERVICIOS
export const ContenedorServicios = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    text-align: center;

    div {
      flex-basis: calc(33.3% - 1rem);
    }
  }

  h3 {
    text-transform: uppercase;
    margin-top: 1rem;
  }
`;

// MAIN
export const Cards = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const Card = styled.div`
  background-color: var(--plomo2);
  border: 1px solid var(--plomo);
  border-radius: 1rem;
  flex-basis: calc(33.3% - 1rem);
  overflow: hidden;
  margin-bottom: 2rem;

  img {
    object-fit: cover;
  }
`;

export const ContenidoCard = styled.div`
  padding: 1rem 1.5rem;

  h3,
  p {
    margin: 0 0 1rem 0;
  }

  p.precio {
    color: var(--verde);
    font-weight: bold;
  }
`;

export const ListaIconos = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const Iconos = styled.li`
  display: flex;
  align-items: center;

  img {
    margin-right: 0.8rem;
  }
`;

// BANNER CONTACTO
export const BannerInfo = styled.section`
  background-image: url(/img/encuentra.jpg);
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  height: 35rem;
  display: flex;
  align-items: center;
  color: white;
`;

// BLOG Y TESTIMONIALES
export const SeccionInferior = styled.section`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    .entrada-blog {
      flex-basis: 60%;
    }

    .testimoniales {
      flex-basis: calc(40% - 1rem);
    }
  }
`;

export const Blog = styled.article`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 3rem;

  img {
    border-radius: 1rem;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    .imagen-blog {
      flex-basis: 40%;
    }

    .contenido-blog {
      flex-basis: calc(60% - 3rem);
    }
  }

  a {
    color: black;
    text-decoration: none;
  }

  h4 {
    margin: 0;
    line-height: 1.2;
    font-weight: 300;
  }

  h4::after {
    content: '';
    display: block;
    width: 15rem;
    height: 0.5rem;
    margin-top: 1rem;
    background-color: var(--verde);
  }

  span {
    color: var(--naranja);
    font-weight: bold;
  }
`;

export const Testimonial = styled.div`
  background-color: var(--verde);
  font-size: 2.2rem;
  padding: 0.5rem;
  color: var(--blanco);
  border-radius: 2.5rem;

  p {
    text-align: right;
    font-size: 2rem;
    margin-right: 1.5rem;
  }

  blockquote {
    position: relative;
    padding-top: 3.5rem;
    padding-left: 2.5rem;
  }

  blockquote::before {
    position: absolute;
    content: '';
    background-image: url(/img/comilla.svg);
    background-position: center center;
    background-size: cover;
    display: block;
    width: 4rem;
    height: 4rem;
    top: 0;
    left: 0;
  }
`;

export const SiteFooter = styled.footer`
  background-color: var(--gris);
  margin: 0;
  padding: 3rem 0;
  color: var(--blanco);
  text-align: center;

  .contenido {
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  nav {
    margin-bottom: 2rem;
    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  nav a {
    color: var(--blanco);
    font-size: 1.8rem;
    display: block;
    font-size: 2.2rem;

    @media (min-width: 768px) {
      display: inline-block;
      margin-right: 2rem;
      font-size: 2rem;
      nav a:last-of-type {
        margin-right: 0;
      }
    }
  }

  nav a:hover {
    color: var(--verde);
  }

  p {
    margin: 0;
    font-size: 1.8rem;
  }
`;

// NAVEGACION
export const ContenedorNav = styled.div`
  background-color: var(--gris);
`;

export const ContenidoNav = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  text-align: center;
`;
