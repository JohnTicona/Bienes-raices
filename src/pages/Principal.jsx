import { BannerContacto } from '../components/Principal/BannerContacto';
import { EntradasBlog } from '../components/Principal/EntradasBlog';
import { BannerPrincipal } from '../components/Principal/BannerPrincipal';
import { Main } from '../components/Principal/Main';
import { Servicios } from '../components/Principal/Servicios';
import { Footer } from '../components/Footer';

export const Principal = () => {
  return (
    <>
      <BannerPrincipal />
      <Servicios />
      <Main />
      <BannerContacto />
      <EntradasBlog />
      <Footer />
    </>
  );
};
