import React from 'react';
import { BlogPrincipal } from '../../data/Blog';
import { SeccionInferior, Testimonial } from '../../elements/Principal';
import { ItemBlog } from '../Blog/ItemBlog';

export const EntradasBlog = () => {
  return (
    <SeccionInferior className="contenedor seccion">
      <section className="entrada-blog">
        <h3 className="text-center">Nuestro blog</h3>

        {BlogPrincipal.map((blog) => (
          <ItemBlog
            key={blog.id}
            id={blog.id}
            imagen={blog.imagen}
            titulo={blog.titulo}
            autor={blog.autor}
            fecha={blog.fecha}
            descripcion={blog.descripcion}
          />
        ))}
      </section>

      <section className="testimoniales">
        <h3 className="text-center">Testimoniales</h3>
        <Testimonial>
          <blockquote>
            El personal se comportó de una excelente forma, muy buena atención y
            la casa que me ofrecieron cumple con todas mis expectativas
          </blockquote>
          <p>- Brandon Ticona </p>
        </Testimonial>
      </section>
    </SeccionInferior>
  );
};
