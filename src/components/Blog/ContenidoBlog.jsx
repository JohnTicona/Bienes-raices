import { useParams } from 'react-router-dom';
import { ListBlogs } from '../../data/Blog';
import { DescripcionBlog } from '../../elements/Blog';

export const ContenidoBlog = () => {
  const { id } = useParams();

  const blog = ListBlogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return null;
  }

  const { titulo, imagen, autor, fecha } = blog;

  return (
    <div className="contenedor seccion mb-4 min-height">
      <h1 className="text-center">{titulo}</h1>
      <DescripcionBlog>
        <div className="imagen-blog">
          <img src={`/img/${imagen}`} alt={titulo} />
        </div>
        <div className="contenido-blog">
          <p>
            Escrito el: <span>{fecha}</span> por: <span>{autor}</span>
          </p>
          <p>
            Consectetur adipisicing elit. Praesentium, corporis officia nesciunt
            cum, magnam labore alias earum molestiae repellat sequi porro
            dignissimos quo asperiores nobis quam quasi consequatur, pariatur
            expedita.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sed
            explicabo alias, veritatis rem quo voluptatibus hic reprehenderit
            architecto iusto expedita quia odit fugiat aliquid quidem blanditiis
            quam eius, amet fuga similique adipisci. Harum unde voluptate modi
            mollitia veniam sapiente porro asperiores accusantium rerum
            doloribus.
          </p>
        </div>
      </DescripcionBlog>
    </div>
  );
};
