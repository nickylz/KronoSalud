import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Heart, Activity, Compass, ShieldCheck, Smile, Users, BookOpen, Clock } from 'lucide-react';
import img1 from '../img/f1.png';
import img2 from '../img/f2.png';
import img3 from '../img/f3.jpg';
import img4 from '../img/f4.jpg';

export function Inicio({ onSeleccionarBoton, onIrMinijuego }) {
  const imagenesBanner = [img1, img2, img3, img4];
  
  const [indiceActual, setIndiceActual] = useState(0);
  const [tarjetaIdx, setTarjetaIdx] = useState(0);
  const pausaRef = useRef(false);
  const timeoutRef = useRef(null);

  const tarjetasInfo = [
    {
      titulo: "Maternidad Adolescente en Cifras",
      desc: "En América Latina y el Caribe, cada 20 segundos una adolescente se convierte en madre. Nuestra región posee la segunda tasa de fecundidad adolescente más alta del mundo.",
      imagen: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      stat: "2da más alta",
      statLabel: "a nivel mundial"
    },
    {
      titulo: "Embarazos no Intencionales",
      desc: "El 67% de los embarazos en adolescentes en la región no son intencionales, lo que refleja profundas barreras en el acceso a información y servicios de salud reproductiva.",
      imagen: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      stat: "67%",
      statLabel: "no intencionales"
    },
    {
      titulo: "KronoSalud como Primera Respuesta",
      desc: "Ante la ausencia de un profesional disponible de forma inmediata, nuestra plataforma ofrece contención inicial, orientación estructurada y un espacio seguro de desahogo.",
      imagen: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      stat: "24/7",
      statLabel: "soporte digital"
    },
    {
      titulo: "Violencia de Género y Juvenil",
      desc: "Se estima que 1 de cada 3 mujeres y niñas en las Américas ha experimentado violencia física o sexual por parte de su pareja, o violencia sexual a lo largo de su vida.",
      imagen: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      stat: "1 de cada 3",
      statLabel: "afectadas"
    },
    {
      titulo: "Brecha Educativa Crítica",
      desc: "Solo el 6,4% de las mujeres que fueron madres durante la adolescencia logran alcanzar estudios terciarios o superiores debido a la falta de flexibilidad institucional.",
      imagen: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      stat: "6.4%",
      statLabel: "estudios superiores"
    },
    {
      titulo: "Desigualdad en Salud Materna",
      desc: "Las mujeres de los países más pobres de la región tienen casi cuatro veces más probabilidades de morir por complicaciones en el parto que aquellas en países más ricos.",
      imagen: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
      stat: "4x",
      statLabel: "más riesgo"
    },
    {
      titulo: "Construcción de Hábitos Clave",
      desc: "El bienestar sostenible se basa en la constancia. KronoSalud fomenta rutinas de autocuidado, registro de emociones y pausas activas que fortalecen la resiliencia personal.",
      imagen: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80",
      stat: "Hábitos",
      statLabel: "sostenibles"
    },
    {
      titulo: "Alto Costo de la Omisión",
      desc: "El costo anual combinado del embarazo adolescente en 15 países de la región asciende a 15.300 millones de dólares al año (aproximadamente el 1% del PIB combinado).",
      imagen: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      stat: "$15.3B",
      statLabel: "costo anual PIB"
    },
    {
      titulo: "Rentabilidad de la Inversión",
      desc: "Invertir en prevenir el embarazo adolescente es altamente rentable: por cada dólar invertido, se obtienen entre 15 y 40 dólares en beneficios para la sociedad y el Estado.",
      imagen: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
      stat: "15 a 40",
      statLabel: "veces el valor"
    },
    {
      titulo: "Un Espacio Libre de Juicios",
      desc: "Comprendemos el miedo al estigma social. KronoSalud ofrece un entorno completamente confidencial, empático y respetuoso donde cada usuario puede expresarse.",
      imagen: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
      stat: "100%",
      statLabel: "confidencial"
    },
    {
      titulo: "Necesidad Insatisfecha",
      desc: "A pesar de los avances, 3 de cada 10 adolescentes en la región aún no tienen cubiertas sus necesidades de anticoncepción con métodos modernos.",
      imagen: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
      stat: "3 de 10",
      statLabel: "sin cobertura"
    },
    {
      titulo: "Construyendo Futuro Colectivo",
      desc: "Creemos firmemente que al dotar de herramientas de afrontamiento temprano, construimos una generación más consciente, resiliente y preparada para cuidar su salud integral.",
      imagen: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      stat: "Triple",
      statLabel: "dividendo vital"
    }
  ];

  const pilaresSalud = [
    { icon: <Heart className="w-6 h-6 text-pink-500" />, titulo: "Salud Integral", desc: "Equilibrio físico y mental diario." },
    { icon: <Activity className="w-6 h-6 text-teal-500" />, titulo: "Autochequeo", desc: "Monitorea tu bienestar con test rápidos." },
    { icon: <Compass className="w-6 h-6 text-blue-500" />, titulo: "Orientación", desc: "Guía estructurada para adolescentes." },
    { icon: <ShieldCheck className="w-6 h-6 text-indigo-500" />, titulo: "Espacio Seguro", desc: "100% confidencial y sin juicios." }
  ];

  const infoExtra = [
    { icon: <Smile className="text-amber-500 w-7 h-7" />, title: "Empatía Activa", text: "Diseñado pensando en las verdaderas necesidades emocionales y de salud de los jóvenes." },
    { icon: <Users className="text-teal-500 w-7 h-7" />, title: "Comunidad de Apoyo", text: "Fomentamos redes de contención positiva y herramientas de autocuidado accesible." },
    { icon: <BookOpen className="text-blue-500 w-7 h-7" />, title: "Recursos Claros", text: "Información basada en datos reales de América Latina sin lenguaje médico complicado." },
    { icon: <Clock className="text-indigo-500 w-7 h-7" />, title: "Disponible 24/7", text: "Accede a tus módulos de regulación y orientación a cualquier hora del día." }
  ];

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (!pausaRef.current) {
        setTarjetaIdx((prev) => (prev === tarjetasInfo.length - 1 ? 0 : prev + 1));
      }
    }, 4500);

    return () => clearInterval(intervalo);
  }, [tarjetasInfo.length]);

  const cambiarManual = (nuevoIndice) => {
    setTarjetaIdx(nuevoIndice);
    pausaRef.current = true;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => { pausaRef.current = false; }, 6000);
  };

  const siguienteTarjeta = () => cambiarManual(tarjetaIdx === tarjetasInfo.length - 1 ? 0 : tarjetaIdx + 1);
  const anteriorTarjeta = () => cambiarManual(tarjetaIdx === 0 ? tarjetasInfo.length - 1 : tarjetaIdx - 1);

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center font-sans overflow-x-hidden">
      
      {/* BANNER PRINCIPAL */}
      <div className="relative w-full h-[360px] sm:h-[420px] border-b-4 border-[#E36D9B] overflow-hidden flex items-center shadow-md">
        <div className="absolute inset-0">
          {imagenesBanner.map((img, idx) => (
            <img 
              key={idx}
              src={img} 
              alt={`Banner ${idx}`} 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === indiceActual ? 'opacity-100 scale-105' : 'opacity-0 scale-100'} transition-transform duration-1000`} 
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2B4789]/95 via-[#2B4789]/80 to-transparent"></div>
        </div>

        <div className="z-10 px-6 sm:px-16 lg:px-24 flex flex-col gap-3 max-w-3xl">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full w-fit text-white text-xs font-bold">
            <Sparkles size={14} className="text-[#E7DD6A]" /> Bienestar y Regulación Emocional
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">KronoSalud</h1>
          <p className="text-white/90 text-sm sm:text-lg font-medium leading-relaxed">
            Tu plataforma de primera respuesta para la salud mental adolescente, autoevaluación y prevención en América Latina.
          </p>
        </div>
      </div>

      {/* PILARES SUPERIORES */}
      <div className="w-full max-w-6xl px-6 -mt-8 z-20 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pilaresSalud.map((pilar, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl shadow-md border border-slate-100 flex items-center gap-4">
              <div className="p-3 bg-slate-50 rounded-xl">{pilar.icon}</div>
              <div>
                <h4 className="font-extrabold text-slate-800 text-sm">{pilar.titulo}</h4>
                <p className="text-slate-500 text-xs">{pilar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CARRUSEL DE TARJETAS PRINCIPAL */}
      <div className="w-full max-w-4xl py-6 px-4 flex flex-col items-center">
        <h2 className="text-[#2B4789] text-2xl sm:text-3xl font-extrabold mb-2 text-center">
          Realidades y Propósito en la Región
        </h2>
        <p className="text-slate-500 text-sm mb-6 text-center max-w-lg">
          Conoce los datos clave sobre salud adolescente y nuestra misión de apoyo diario.
        </p>
        
        <div className="relative w-full bg-white rounded-3xl border-2 border-[#E36D9B]/30 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[340px]">
          
          <div className="md:col-span-5 relative h-64 md:h-full bg-slate-100 overflow-hidden flex items-center justify-center">
            <img 
              src={tarjetasInfo[tarjetaIdx].imagen} 
              alt={tarjetasInfo[tarjetaIdx].titulo} 
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B4789]/60 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-pink-100 flex flex-col items-center max-w-[150px] text-center">
              <span className="text-[#E36D9B] font-black text-sm sm:text-base tracking-tight leading-none">
                {tarjetasInfo[tarjetaIdx].stat}
              </span>
              <span className="text-slate-600 text-[9px] font-bold uppercase tracking-wider mt-1">
                {tarjetasInfo[tarjetaIdx].statLabel}
              </span>
            </div>
          </div>

          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between relative">
            <div className="absolute top-3 right-5 bg-slate-100 text-[#2B4789] text-xs font-bold px-2.5 py-1 rounded-full">
              {tarjetaIdx + 1} / {tarjetasInfo.length}
            </div>

            <div>
              <h3 className="text-[#10B183] text-xl sm:text-2xl font-extrabold mb-2 leading-snug">
                {tarjetasInfo[tarjetaIdx].titulo}
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                {tarjetasInfo[tarjetaIdx].desc}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-4">
              <button
                onClick={anteriorTarjeta}
                className="bg-[#2B4789] hover:bg-[#20366a] text-[#E7DD6A] px-3.5 py-1.5 rounded-xl font-bold text-xs shadow transition-all cursor-pointer"
              >
                ← Anterior
              </button>

              <div className="hidden sm:flex gap-1 overflow-x-auto max-w-[150px] py-1">
                {tarjetasInfo.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => cambiarManual(i)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${tarjetaIdx === i ? 'bg-[#E36D9B] w-4' : 'bg-slate-200 w-1.5'}`}
                  />
                ))}
              </div>

              <button
                onClick={siguienteTarjeta}
                className="bg-[#2B4789] hover:bg-[#20366a] text-[#E7DD6A] px-3.5 py-1.5 rounded-xl font-bold text-xs shadow transition-all cursor-pointer"
              >
                Siguiente →
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* SECCIÓN DE ESTADÍSTICAS ADICIONALES EN CÍRCULOS */}
      <div className="w-full max-w-6xl py-8 px-6 mt-2">
        <h3 className="text-[#2B4789] text-xl sm:text-2xl font-extrabold text-center mb-6">
          Impacto de la Inversión en Salud Juvenil
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-3xl shadow-md border border-slate-100 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-pink-50 border-4 border-[#E36D9B]/30 flex items-center justify-center mb-4 shadow-inner p-2">
              <span className="text-[#E36D9B] font-black text-xs sm:text-sm">15 a 40x</span>
            </div>
            <h4 className="font-extrabold text-slate-800 text-sm mb-1">Rentabilidad Garantizada</h4>
            <p className="text-slate-500 text-xs leading-relaxed">Por cada dólar invertido en prevención, se obtienen grandes beneficios para el Estado y la sociedad.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-md border border-slate-100 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-teal-50 border-4 border-[#10B183]/30 flex items-center justify-center mb-4 shadow-inner">
              <span className="text-[#10B183] font-black text-xl">67%</span>
            </div>
            <h4 className="font-extrabold text-slate-800 text-sm mb-1">Embarazos No Intencionales</h4>
            <p className="text-slate-500 text-xs leading-relaxed">Refleja las profundas barreras de acceso a información y servicios de salud reproductiva oportuna.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-md border border-slate-100 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-blue-50 border-4 border-[#2B4789]/30 flex items-center justify-center mb-4 shadow-inner">
              <span className="text-[#2B4789] font-black text-xl">3 de 10</span>
            </div>
            <h4 className="font-extrabold text-slate-800 text-sm mb-1">Necesidad Insatisfecha</h4>
            <p className="text-slate-500 text-xs leading-relaxed">Adolescentes que aún no tienen cubiertas sus necesidades con métodos anticonceptivos modernos.</p>
          </div>

        </div>
      </div>

      {/* MÁS INFORMACIÓN EXTRA ABAJO */}
      <div className="w-full max-w-6xl py-6 px-6">
        <h3 className="text-[#2B4789] text-xl sm:text-2xl font-extrabold text-center mb-8">
          ¿Por qué elegir KronoSalud en tu día a día?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoExtra.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/70 flex flex-col gap-3 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center">
                {item.icon}
              </div>
              <h4 className="font-extrabold text-slate-800 text-base">{item.title}</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ZONA INTERACTIVA FINAL */}
      <div className="w-full bg-[#2B4789] py-12 px-6 text-center border-t-4 border-[#E36D9B] mt-8 shadow-inner">
        <h2 className="text-[#E7DD6A] text-2xl sm:text-3xl font-extrabold mb-2.5">Módulos de Regulación Interactivos</h2>
        <p className="text-white/80 mb-6 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed">
          Accede a nuestra zona interactiva para practicar estrategias de afrontamiento y mantener hábitos clave para tu salud mental.
        </p>
        <button 
          onClick={onIrMinijuego}
          className="bg-[#10B183] hover:bg-[#0e9c73] text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all text-sm sm:text-base cursor-pointer hover:scale-105"
        >
          Acceder a Zona Interactiva
        </button>
      </div>

    </div>
  );
}

export default Inicio;