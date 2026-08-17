import React, { useState } from 'react';
import { Menu as MenuIcon, X, Sparkles } from 'lucide-react';

export default function Navbar({ items, onSeleccionarBoton, onIrMinijuego, onIrInicio }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="w-full bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Marca */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={onIrInicio}>
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-teal-500 flex items-center justify-center shadow-md shadow-blue-500/20">
              <Sparkles className="text-white w-5 h-5" />
            </div>
            <span className="text-slate-800 font-extrabold text-2xl tracking-tight">Calma Mia</span>
          </div>

          {/* Menú Desktop (Estilo pestañas limpias) */}
          <div className="hidden lg:flex items-center bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80 shadow-inner">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => onSeleccionarBoton(item.link)}
                className="px-4 py-2 rounded-xl text-xs xl:text-sm font-bold text-slate-600 hover:text-blue-600 hover:bg-white/60 transition-all cursor-pointer"
              >
                {item.text}
              </button>
            ))}
          </div>

          {/* Botón Menú Móvil */}
          <div className="lg:hidden flex items-center">
            <button 
              className="text-slate-700 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors" 
              onClick={() => setMenuAbierto(!menuAbierto)}
            >
              {menuAbierto ? <X size={22} /> : <MenuIcon size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Desplegable Móvil */}
      {menuAbierto && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-2 shadow-xl">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => { onSeleccionarBoton(item.link); setMenuAbierto(false); }}
              className="block w-full text-left font-bold text-slate-700 hover:text-blue-600 hover:bg-slate-50 py-3 px-4 rounded-xl transition-all"
            >
              {item.text}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}