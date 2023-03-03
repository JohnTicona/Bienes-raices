import { Navegacion } from '../components/Navegacion';
import { Footer } from '../components/Footer';
import { ListaBlogs } from '../components/Blog/ListaBlogs';

export const Blogs = () => {
  return (
    <div>
      <Navegacion />
      <ListaBlogs />
      <Footer />
    </div>
  );
};
