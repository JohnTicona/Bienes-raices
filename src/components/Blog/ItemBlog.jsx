import React from 'react';
import { Link } from 'react-router-dom';
import { Blog } from '../../elements/Principal';

export const ItemBlog = (props) => {
  const { id, imagen, titulo, autor, fecha, descripcion } = props;
  return (
    <Blog>
      <div className="imagen-blog">
        <img src={`/img/${imagen}`} alt={titulo} />
      </div>
      <div className="contenido-blog">
        <Link to={`/blog/${id}`}>
          <h4>{titulo}</h4>
        </Link>
        <p>
          Escrito el: <span>{fecha}</span> por: <span>{autor}</span>
        </p>
        <p>{descripcion}</p>
      </div>
    </Blog>
  );
};
