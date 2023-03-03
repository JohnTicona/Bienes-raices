import { ContenedorBlog } from '../../elements/Blog';
import { ItemBlog } from './ItemBlog';
import { ListBlogs } from '../../data/Blog';

export const ListaBlogs = () => {
  return (
    <div className="contenedor seccion mb-4">
      <h1 className="text-center fw-300">Nuestro Blog</h1>
      <ContenedorBlog>
        {ListBlogs.map((blog) => (
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
      </ContenedorBlog>
    </div>
  );
};
