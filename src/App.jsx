import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

// Importación de componentes estructurales
import Navbar from './paginas/Navbar';

// Importación de páginas principales
import Inicio from './paginas/inicio';
import MiSalud from './paginas/miSalud';
import Orientacion from './paginas/orientacion';
import Autochequeo from './paginas/autochequeo';
import Minijuego from './paginas/minijuego';

// Importaciones de las páginas de detalle
import Salud from './paginas/detalle/salud';
import Ejercicio from './paginas/detalle/ejercicio';
import Nutricion from './paginas/detalle/nutricion';
import Em from './paginas/detalle/em';

import './App.css';

function App() {
  const navConfig = {
    items: [
      { text: "Inicio", link: "/" },
      { text: "Mi Salud", link: "/mi-salud" },
      { text: "Mi Red", link: "/mi-red" },
      { text: "Mi Futuro", link: "/mi-futuro" },
      { text: "Yo Decido", link: "/yo-decido" },
      { text: "Orientación", link: "/orientacion" },
      { text: "Juegos", link: "/juegos" }
    ]
  };

  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 pb-12">
        {/* Navbar siempre visible arriba */}
        <Navbar 
          items={navConfig.items}
        />

        <main className="mt-6">
          <Routes>
            {/* Rutas Principales */}
            <Route path="/" element={<Inicio />} />
            <Route path="/mi-salud" element={<MiSalud />} />
            <Route path="/orientacion" element={<Orientacion />} />
            <Route path="/autochequeo" element={<Autochequeo />} />
            <Route path="/juegos" element={<Minijuego />} />

            {/* Vistas de la carpeta detalle */}
            <Route path="/detalle/salud" element={<Salud />} />
            <Route path="/detalle/ejercicio" element={<Ejercicio />} />
            <Route path="/detalle/nutricion" element={<Nutricion />} />
            <Route path="/detalle/em" element={<Em />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;