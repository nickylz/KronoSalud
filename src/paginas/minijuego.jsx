import React, { useState } from 'react';
import { situacionesJuego } from '../datos/situacionesJuego';
import { mensajesFinales } from '../datos/mensajesFinales';

export default function Minijuego({ onVolverMenu }) {
  const [pasoActual, setPasoActual] = useState(0);

  // Barras de estado del personaje
  const [autonomia, setAutonomia] = useState(50);
  const [redesApoyo, setRedesApoyo] = useState(50);
  const [autoestima, setAutoestima] = useState(50);

  // Estado para mostrar la retroalimentación
  const [retroalimentacion, setRetroalimentacion] = useState(null);

  const seleccionarOpcion = (opcion) => {
    setAutonomia((prev) => Math.max(0, Math.min(100, prev + opcion.cambio.autonomia)));
    setRedesApoyo((prev) => Math.max(0, Math.min(100, prev + opcion.cambio.redesApoyo)));
    setAutoestima((prev) => Math.max(0, Math.min(100, prev + opcion.cambio.autoestima)));

    setRetroalimentacion(opcion.mensaje);
  };

  const siguienteSituacion = () => {
    setRetroalimentacion(null);
    if (pasoActual + 1 < situacionesJuego.length) {
      setPasoActual((prev) => prev + 1);
    } else {
      setPasoActual(situacionesJuego.length); // Fin del juego
    }
  };

  const reiniciarJuego = () => {
    setPasoActual(0);
    setAutonomia(50);
    setRedesApoyo(50);
    setAutoestima(50);
    setRetroalimentacion(null);
  };

  const situacionActual = situacionesJuego[pasoActual];

  // Calcular mensaje final basado en el promedio de los porcentajes
  const promedioFinal = Math.round((autonomia + redesApoyo + autoestima) / 3);
  const mensajeFinalObtenido = mensajesFinales.find(
    (m) => promedioFinal >= m.min && promedioFinal <= m.max
  ) || mensajesFinales[0];

  return (
    <div className="min-h-screen bg-[#2B4789] flex flex-col items-center justify-center p-4 sm:p-6 font-sans">
      
      {/* Botón de volver */}
      <div className="w-full max-w-4xl mb-4 flex justify-start">
        <button
          onClick={onVolverMenu}
          className="bg-[#E36D9B] hover:bg-[#d65586] text-white font-bold px-5 py-2.5 rounded-xl shadow-lg border-2 border-white/25 transition-all text-sm sm:text-base cursor-pointer flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Volver al Menú
        </button>
      </div>

      {/* Contenedor Principal */}
      <div className="relative w-full max-w-4xl bg-[#E7DD6A] border-4 border-[#E36D9B] rounded-3xl p-6 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.4)] flex flex-col justify-between min-h-[520px] overflow-hidden">
        
        <div className="absolute top-0 left-0 right-0 h-4 bg-[#A0CB75] rounded-t-2xl"></div>

        {/* Título de la sección */}
        <div className="flex items-center justify-between mt-4 mb-4">
          <div className="flex items-center gap-2">
            <svg className="w-7 h-7 text-[#2B4789]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-[#2B4789] font-extrabold text-xl sm:text-2xl tracking-wide">
              PREVENCIÓN Y RELACIONES SANAS
            </h2>
          </div>
          <span className="bg-[#2B4789] text-[#E7DD6A] font-bold text-xs sm:text-sm px-3 py-1 rounded-xl">
            Caso ({Math.min(pasoActual + 1, situacionesJuego.length)}/{situacionesJuego.length})
          </span>
        </div>

        {/* Barras de Estado */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white/70 p-3 sm:p-4 rounded-2xl border-2 border-[#E36D9B]/40 mb-6 shadow-inner">
          
          <div className="flex flex-col">
            <div className="flex justify-between text-xs sm:text-sm font-bold text-[#2B4789]">
              <span>Autonomía</span>
              <span>{autonomia}%</span>
            </div>
            <div className="w-full bg-gray-300 h-2.5 rounded-full mt-1 overflow-hidden">
              <div className="bg-[#10B183] h-full transition-all duration-300" style={{ width: `${autonomia}%` }}></div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between text-xs sm:text-sm font-bold text-[#2B4789]">
              <span>Redes de Apoyo</span>
              <span>{redesApoyo}%</span>
            </div>
            <div className="w-full bg-gray-300 h-2.5 rounded-full mt-1 overflow-hidden">
              <div className="bg-[#2B4789] h-full transition-all duration-300" style={{ width: `${redesApoyo}%` }}></div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between text-xs sm:text-sm font-bold text-[#2B4789]">
              <span>Autoestima</span>
              <span>{autoestima}%</span>
            </div>
            <div className="w-full bg-gray-300 h-2.5 rounded-full mt-1 overflow-hidden">
              <div className="bg-[#E36D9B] h-full transition-all duration-300" style={{ width: `${autoestima}%` }}></div>
            </div>
          </div>

        </div>

        {/* Contenido del Juego */}
        {pasoActual < situacionesJuego.length ? (
          <div className="flex flex-col justify-between flex-grow">
            
            <div className="bg-white/90 border-2 border-[#2B4789]/20 p-5 rounded-2xl shadow-md mb-6">
              <h3 className="text-[#2B4789] font-bold text-base sm:text-lg mb-2">
                {situacionActual.titulo}
              </h3>
              <p className="text-[#2B4789]/90 text-sm sm:text-base leading-relaxed">
                {situacionActual.narrativa}
              </p>
            </div>

            {!retroalimentacion ? (
              <div className="flex flex-col gap-3">
                {situacionActual.opciones.map((opcion, index) => (
                  <button
                    key={index}
                    onClick={() => seleccionarOpcion(opcion)}
                    className="bg-[#2B4789] hover:bg-[#20366a] text-[#E7DD6A] font-bold py-4 px-5 rounded-xl shadow-md border-2 border-white/20 transition-all text-left text-xs sm:text-sm cursor-pointer"
                  >
                    {opcion.texto}
                  </button>
                ))}
              </div>
            ) : (
              <div className="bg-[#10B183]/20 border-2 border-[#10B183] p-5 rounded-2xl text-center flex flex-col items-center justify-center animate-fadeIn">
                <p className="text-[#2B4789] font-bold text-base sm:text-lg mb-4">
                  {retroalimentacion}
                </p>
                <button
                  onClick={siguienteSituacion}
                  className="bg-[#2B4789] hover:bg-[#20366a] text-white font-extrabold px-6 py-2.5 rounded-xl shadow-lg transition-all text-sm cursor-pointer"
                >
                  Continuar →
                </button>
              </div>
            )}

          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-6 my-auto animate-fadeIn">
            <svg className="w-16 h-16 text-[#10B183] mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-[#2B4789] font-extrabold text-2xl sm:text-3xl mb-2">
              {mensajeFinalObtenido.titulo}
            </h3>
            <p className="text-[#2B4789]/90 text-sm sm:text-base max-w-lg mb-6 leading-relaxed">
              {mensajeFinalObtenido.descripcion}
            </p>
            <button
              onClick={reiniciarJuego}
              className="bg-[#2B4789] hover:bg-[#20366a] text-[#E7DD6A] font-extrabold px-6 py-3 rounded-xl shadow-lg border-2 border-white/30 text-sm sm:text-base cursor-pointer"
            >
              🔄 Jugar de Nuevo
            </button>
          </div>
        )}

      </div>

    </div>
  );
}