import React, { useState, useEffect, useRef } from 'react';
import img1 from '../img/f1.png';
import img2 from '../img/f2.png';
import img3 from '../img/f3.jpg';
import img4 from '../img/f4.jpg';

export function Inicio({ onSeleccionarBoton, onIrMinijuego }) {
  const imagenes = [img1, img2, img3, img4];
  
  const [indiceActual, setIndiceActual] = useState(0);
  const [tarjetaIdx, setTarjetaIdx] = useState(0);
  const pausaRef = useRef(false);
  const timeoutRef = useRef(null);

  // 12 Tarjetas informativas
  const tarjetasInfo = [
    {
      titulo: "La Realidad de la Salud Mental",
      desc: "En nuestro contexto actual, el bienestar emocional de los jóvenes suele ser relegado a un segundo plano. Sin embargo, las presiones cotidianas académicas y sociales generan niveles de estrés acumulativo que no deben ignorarse, siendo vital reconocer las señales tempranas de fatiga mental antes de que escalen a situaciones complejas."
    },
    {
      titulo: "Brecha Crítica de Especialistas",
      desc: "Las estadísticas nacionales revelan una preocupante realidad: una gran mayoría de adolescentes carece de acceso directo a un psicólogo u orientador profesional debido a la escasez de recursos económicos y a la alta saturación de los centros de atención médica públicos, dejando un vacío institucional significativo."
    },
    {
      titulo: "Calma Mia como Primera Respuesta",
      desc: "Ante la ausencia de un profesional disponible de forma inmediata, nuestra plataforma se posiciona como una herramienta de primera respuesta accesible y confiable, diseñada específicamente para ofrecer contención inicial, orientación estructurada y un espacio seguro de desahogo."
    },
    {
      titulo: "El Rol de la Tecnología",
      desc: "Aprovechando que un abrumador porcentaje de jóvenes utiliza dispositivos tecnológicos de forma cotidiana, transformamos la pantalla de tu celular en un puente de apoyo emocional, facilitando el acceso a dinámicas de autocuidado sin barreras geográficas ni económicas."
    },
    {
      titulo: "Gamificación para el Bienestar",
      desc: "Implementamos dinámicas basadas en la gamificación para hacer que el proceso de regulación emocional sea interactivo, dinámico y amigable, reduciendo la resistencia tradicional que generan los métodos de autoayuda escritos o monótonos."
    },
    {
      titulo: "Regulación de la Ansiedad Diaria",
      desc: "A través de ejercicios prácticos guiados en los módulos interactivos, ayudamos a los usuarios a identificar episodios de ansiedad cotidiana, permitiéndoles desacelerar el ritmo, recuperar la calma y gestionar de manera saludable sus impulsos emocionales."
    },
    {
      titulo: "Construcción de Hábitos Clave",
      desc: "El bienestar sostenible se basa en la constancia. Calma Mia fomenta rutinas de autocuidado, registro de emociones y pausas activas que fortalecen la resiliencia personal y previenen el desgaste emocional a mediano y largo plazo."
    },
    {
      titulo: "Prevención Activa de Crisis",
      desc: "Al intervenir de forma temprana ante los primeros indicios de desbordamiento emocional, ayudamos a los jóvenes a cortar el ciclo del estrés severo, evitando que lleguen a puntos críticos de crisis donde el soporte profesional urgente sea indispensable."
    },
    {
      titulo: "Un Espacio Libre de Juicios",
      desc: "Comprendemos el miedo al estigma social que muchas veces frena a los adolescentes al buscar ayuda. Calma Mia ofrece un entorno completamente confidencial, empático y respetuoso donde cada usuario puede expresarse con total libertad."
    },
    {
      titulo: "Educación Emocional Accesible",
      desc: "Democratizamos el conocimiento sobre salud mental mediante explicaciones claras, infografías y dinámicas sencillas que educan al usuario sobre la importancia de entender sus propias emociones y validar lo que siente todos los días."
    },
    {
      titulo: "Acompañamiento Constante",
      desc: "Aunque nuestra aplicación no busca ni puede reemplazar un proceso de terapia clínica profesional, funciona como un acompañante diario incondicional que está disponible las veinticuatro horas del soporte digital para recordarte que no estás solo."
    },
    {
      titulo: "Construyendo Comunidad y Futuro",
      desc: "Creemos firmemente que al dotar a los jóvenes de herramientas de afrontamiento temprano, construimos una generación más consciente, resiliente y preparada para cuidar de su salud mental y la de quienes los rodean."
    }
  ];

  // Efecto para el avance automático cada 2 segundos (respetando la pausa manual)
  useEffect(() => {
    const intervalo = setInterval(() => {
      if (!pausaRef.current) {
        setTarjetaIdx((prev) => (prev === tarjetasInfo.length - 1 ? 0 : prev + 1));
      }
    }, 2000);

    return () => clearInterval(intervalo);
  }, [tarjetasInfo.length]);

  // Función al hacer clic manual en los botones o indicadores
  const cambiarManual = (nuevoIndice) => {
    setTarjetaIdx(nuevoIndice);
    pausaRef.current = true;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Pausa el avance automático por 5 segundos
    timeoutRef.current = setTimeout(() => {
      pausaRef.current = false;
    }, 5000);
  };

  const siguienteTarjeta = () => {
    const siguiente = tarjetaIdx === tarjetasInfo.length - 1 ? 0 : tarjetaIdx + 1;
    cambiarManual(siguiente);
  };

  const anteriorTarjeta = () => {
    const anterior = tarjetaIdx === 0 ? tarjetasInfo.length - 1 : tarjetaIdx - 1;
    cambiarManual(anterior);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center font-sans overflow-x-hidden">
      
      {/* BANNER PRINCIPAL */}
      <div className="relative w-full h-[450px] border-b-4 border-[#E36D9B] overflow-hidden flex items-center shadow-lg">
        <div className="absolute inset-0">
          <img src={imagenes[indiceActual]} alt="Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#2B4789]/85"></div>
        </div>

        <div className="z-10 px-8 sm:px-24 flex flex-col gap-4">
          <h1 className="text-6xl font-extrabold text-white tracking-tighter">Calma Mia</h1>
          <p className="text-white/90 text-xl max-w-xl font-medium leading-relaxed">
            Herramienta de primera respuesta para la regulación emocional y el bienestar adolescente.
          </p>
        </div>
      </div>

      {/* SECCIÓN DE TARJETAS (Tamaño controlado, rectangular y estilizado) */}
      <div className="w-full max-w-4xl py-10 px-6 flex flex-col items-center">
        <h2 className="text-[#2B4789] text-3xl font-extrabold mb-6 text-center">
          Nuestro Compromiso y Propósito
        </h2>
        
        {/* Contenedor con tamaño físico fijo y controlado (h-[380px] en pantallas medianas/grandes) */}
        <div className="relative w-full h-[400px] bg-white rounded-3xl border-2 border-[#E36D9B]/40 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          
          {/* MITAD IZQUIERDA: Imagen con altura fija del contenedor */}
          <div className="relative w-full h-36 lg:h-full bg-[#2B4789]/10 flex items-center justify-center border-b lg:border-b-0 lg:border-r-2 border-[#E36D9B]/30 overflow-hidden">
            <img 
              src={imagenes[(tarjetaIdx) % imagenes.length]} 
              alt="Ilustración provisional" 
              className="w-full h-full object-cover opacity-90 transition-all duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#2B4789]/20"></div>
            <span className="absolute bottom-3 left-3 bg-white/90 text-[#2B4789] text-[10px] font-bold px-2 py-0.5 rounded shadow">
              Imagen provisional
            </span>
          </div>

          {/* MITAD DERECHA: Texto estructurado dentro del espacio fijo */}
          <div className="p-6 flex flex-col justify-between h-full relative">
            
            {/* Número indicador */}
            <div className="absolute top-3 right-5 text-[11px] font-bold text-[#2B4789]/60">
              {tarjetaIdx + 1} / {tarjetasInfo.length}
            </div>

            <div>
              <h3 className="text-[#10B183] text-xl sm:text-2xl font-extrabold mb-2">
                {tarjetasInfo[tarjetaIdx].titulo}
              </h3>
              <p className="text-[#2B4789] text-lg sm:text-base leading-relaxed font-medium">
                {tarjetasInfo[tarjetaIdx].desc}
              </p>
            </div>

            {/* Controles de navegación */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
              <button
                onClick={anteriorTarjeta}
                className="bg-[#2B4789] hover:bg-[#20366a] text-[#E7DD6A] px-3.5 py-1 rounded-lg font-bold text-xs shadow transition-all cursor-pointer"
              >
                ← Anterior
              </button>

              {/* Puntos indicadores */}
              <div className="hidden sm:flex gap-1 overflow-x-auto max-w-[100px] py-1">
                {tarjetasInfo.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => cambiarManual(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${tarjetaIdx === i ? 'bg-[#E36D9B] w-3.5' : 'bg-gray-300'}`}
                  />
                ))}
              </div>

              <button
                onClick={siguienteTarjeta}
                className="bg-[#2B4789] hover:bg-[#20366a] text-[#E7DD6A] px-3.5 py-1 rounded-lg font-bold text-xs shadow transition-all cursor-pointer"
              >
                Siguiente →
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* ZONA INTERACTIVA */}
      <div className="w-full bg-[#2B4789] py-12 px-6 text-center border-t-4 border-[#E36D9B]">
        <h2 className="text-[#E7DD6A] text-2xl sm:text-3xl font-bold mb-2.5">Módulos de Regulación</h2>
        <p className="text-white/80 mb-5 max-w-2xl mx-auto text-xs sm:text-sm">
          Accede a nuestra zona interactiva para practicar estrategias de afrontamiento y mantener hábitos clave para tu salud mental.
        </p>
        <button 
          onClick={onIrMinijuego}
          className="bg-[#10B183] hover:bg-[#0e9c73] text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all text-sm sm:text-base cursor-pointer"
        >
          Acceder a Zona Interactiva
        </button>
      </div>

    </div>
  );
}

export default Inicio;