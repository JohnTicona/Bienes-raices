import React from 'react';
import { ContenidoBlog } from '../components/Blog/ContenidoBlog';
import { Footer } from '../components/Footer';
import { Navegacion } from '../components/Navegacion';

export const Blog = () => {
  return (
    <div>
      <Navegacion />
      <ContenidoBlog />
      <Footer />
    </div>
  );
};
