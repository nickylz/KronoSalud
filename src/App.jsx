import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

// Importación de componentes estructurales
import Navbar from './paginas/Navbar';
import Footer from './paginas/Footer';

// Importación de páginas principales
import Inicio from './paginas/inicio';
import MiSalud from './paginas/miSalud';
import Orientacion from './paginas/orientacion';
import Autochequeo from './paginas/autochequeo';
import Minijuego from './paginas/minijuego';
import MiRed from './paginas/MiRed';
import MiFuturo from './paginas/MiFuturo';
import YoDecido from './paginas/YoDecido';

// Importaciones de las páginas de detalle
import Salud from './paginas/detalle/salud';
import Ejercicio from './paginas/detalle/ejercicio';
import Nutricion from './paginas/detalle/nutricion';
import Em from './paginas/detalle/em';

import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function MiSaludPage() {
  const navigate = useNavigate();

  return (
    <MiSalud
      onIrOrientacion={() => navigate('/orientacion')}
      onNavegarSeccion={(seccion) => navigate(`/detalle/${seccion}`)}
    />
  );
}

function OrientacionPage() {
  const navigate = useNavigate();

  return (
    <Orientacion
      onIrAutochequeo={() => navigate('/autochequeo')}
    />
  );
}

function AutochequeoPage() {
  const navigate = useNavigate();

  return (
    <Autochequeo
      onVolverOrientacion={() => navigate('/orientacion')}
    />
  );
}

function App() {
  const navConfig = {
    items: [
      { text: "Inicio", link: "/" },
      { text: "Mi Salud", link: "/miSalud" },
      { text: "Mi Red", link: "/MiRed" },
      { text: "Mi Futuro", link: "/MiFuturo" },
      { text: "Yo Decido", link: "/yo-decido" },
      { text: "Orientación", link: "/orientacion" },
      { text: "Juegos", link: "/juegos" }
    ]
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 flex flex-col">
        {/* Navbar siempre visible arriba */}
        <Navbar items={navConfig.items} />

        {/* Contenido principal con crecimiento flexible */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/miSalud" element={<MiSaludPage />} />
            <Route path="/MiRed" element={<MiRed />} />
            <Route path="/MiFuturo" element={<MiFuturo />} />
            <Route path="/yo-decido" element={<YoDecido />} />
            <Route path="/orientacion" element={<OrientacionPage />} />
            <Route path="/autochequeo" element={<AutochequeoPage />} />
            <Route path="/juegos" element={<Minijuego />} />
            <Route path="/detalle/salud" element={<Salud />} />
            <Route path="/detalle/ejercicio" element={<Ejercicio />} />
            <Route path="/detalle/nutricion" element={<Nutricion />} />
            <Route path="/detalle/em" element={<Em />} />
          </Routes>
        </main>

        {/* Footer integrado */}
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;