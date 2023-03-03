import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Principal } from './pages/Principal';
import { Nosotros } from './pages/Nosotros';
import { Propiedades } from './pages/Propiedades';
import { Contacto } from './pages/Contacto';
import { Propiedad } from './pages/Propiedad';
import { Blogs } from './pages/Blogs';
import { Blog } from './pages/Blog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Principal />} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/propiedades" element={<Propiedades/>} />
        <Route path="/propiedad/:id" element={<Propiedad/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/blog/:id" element={<Blog/>} />
        <Route path="/contacto" element={<Contacto/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;