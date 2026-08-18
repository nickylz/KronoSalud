import React from 'react';

const Footer = () => {
  const lineasAyuda = [
    { nombre: "Línea 113 (Opción 3)", desc: "Orientación en Salud Mental" },
    { nombre: "Línea 100", desc: "Violencia familiar y sexual" },
    { nombre: "Línea 105", desc: "Emergencias Policía Nacional" },
  ];

  return (
    <footer className="bg-[#1e293b] text-white pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        
        {/* Columna 1: Branding */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Kronosalud</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Plataforma comprometida con la equidad en salud para adolescentes en ALC. 
            Impulsamos intervenciones basadas en evidencia científica.
          </p>
          <p className="text-blue-300 font-semibold italic">#TodoASuTiempo</p>
        </div>

        {/* Columna 2: Recursos */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Recursos</h3>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition">Guías de salud AA-HA!</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Protocolos de atención</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Participación juvenil</a></li>
          </ul>
        </div>

        {/* Columna 3: Líneas de ayuda (Expandida a 6 números) */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Líneas de Ayuda</h3>
          <div className="grid grid-cols-1 gap-3">
            {lineasAyuda.map((item, index) => (
              <div key={index} className="text-sm">
                <span className="text-blue-400 font-bold block">{item.nombre}</span>
                <span className="text-slate-400 text-xs">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Columna 4: Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Aviso Legal</h3>
          <p className="text-slate-400 text-[11px] leading-tight">
            Contenido informativo. No sustituye consulta médica profesional. 
            © 2026 Kronosalud. Adaptación de obras de la OPS/UNFPA. 
            Las opiniones son responsabilidad de los autores.
          </p>
        </div>
      </div>

      {/* Pie inferior */}
      <div className="max-w-7xl mx-auto border-t border-slate-700 pt-6 mt-4 text-center text-slate-500 text-xs">
        <p>© 2026 Kronosalud - Comprometidos con tu bienestar.</p>
      </div>
    </footer>
  );
};

export default Footer;