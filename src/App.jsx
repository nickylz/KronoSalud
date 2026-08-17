import React, { useState } from 'react';
import Navbar from './paginas/Navbar';
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

function App() {
  const [paginaActual, setPaginaActual] = useState('/');

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

  const manejarNavegacion = (linkRuta) => {
    setPaginaActual(linkRuta);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const manejarSeccionDetalle = (seccion) => {
    const rutasDetalle = {
      salud: '/detalle/salud',
      ejercicio: '/detalle/ejercicio',
      nutricion: '/detalle/nutricion',
      em: '/detalle/em'
    };

    manejarNavegacion(rutasDetalle[seccion] || '/mi-salud');
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      <Navbar 
        items={navConfig.items}
        onSeleccionarBoton={manejarNavegacion} 
        onIrMinijuego={() => manejarNavegacion('/juegos')} 
        onIrInicio={() => manejarNavegacion('/')} 
      />

      <main className="mt-6">
        {paginaActual === '/' && (
          <Inicio 
            onSeleccionarBoton={manejarNavegacion} 
            onIrMinijuego={() => manejarNavegacion('/juegos')} 
          />
        )}

        {paginaActual === '/mi-salud' && (
          <MiSalud 
            onIrOrientacion={() => manejarNavegacion('/orientacion')} 
            onNavegarSeccion={manejarSeccionDetalle} 
          />
        )}

        {paginaActual === '/orientacion' && (
          <Orientacion onIrAutochequeo={() => setPaginaActual('/autochequeo')} />
        )}

        {paginaActual === '/autochequeo' && (
          <Autochequeo onVolverOrientacion={() => setPaginaActual('/orientacion')} />
        )}

        {paginaActual === '/juegos' && (
          <Minijuego onVolverMenu={() => manejarNavegacion('/')} />
        )}

        {/* Vistas de la carpeta detalle */}
        {paginaActual === '/detalle/salud' && (
          <Salud onVolver={() => manejarNavegacion('/mi-salud')} />
        )}
        {paginaActual === '/detalle/ejercicio' && (
          <Ejercicio onVolver={() => manejarNavegacion('/mi-salud')} />
        )}
        {paginaActual === '/detalle/nutricion' && (
          <Nutricion onVolver={() => manejarNavegacion('/mi-salud')} />
        )}
        {paginaActual === '/detalle/em' && (
          <Em onVolver={() => manejarNavegacion('/mi-salud')} />
        )}
      </main>
    </div>
  );
}

export default App;