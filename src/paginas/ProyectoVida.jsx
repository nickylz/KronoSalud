import React, { useState } from 'react';
import { Sparkles, Heart, Activity, Compass, ShieldCheck, Smile, Users, BookOpen, Clock, Trophy, ArrowRight, RotateCcw, CheckCircle2 } from 'lucide-react';
import img1 from '../img/f1.png';
import img2 from '../img/f2.png';
import img3 from '../img/f3.jpg';
import img4 from '../img/f4.jpg';

export function Inicio({ onSeleccionarBoton, onIrMinijuego }) {
  const imagenesBanner = [img1, img2, img3, img4];
  const [indiceActual, setIndiceActual] = useState(0);

  // Estados para el minijuego de "Proyecto de Vida"
  const [pasoJuego, setPasoJuego] = useState(0);
  const [puntosVida, setPuntosVida] = useState(100);
  const [inventario, setInventario] = useState([]);
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const [mensajeFeedback, setMensajeFeedback] = useState("");

  const decisionesVida = [
    {
      titulo: "Escenario 1: Planificación y Educación",
      pregunta: "Te enfrentas a una decisión clave sobre tu continuidad de estudios superiores y metas a largo plazo. ¿Qué camino eliges?",
      opciones: [
        {
          texto: "Buscar orientación vocacional y acceder a redes de apoyo institucional (Metodología AHSBA).",
          impactoSalud: 15,
          item: "Beca de Bienestar",
          feedback: "¡Excelente decisión! Te alineas con las herramientas de apoyo estructural para no quedar atrás."
        },
        {
          texto: "Postergar los estudios indefinidamente sin buscar consejería ni redes de respaldo.",
          impactoSalud: -25,
          item: "Riesgo de Deserción",
          feedback: "Cuidado: La falta de apoyo y orientación temprana incrementa la vulnerabilidad educativa."
        }
      ]
    },
    {
      titulo: "Escenario 2: Salud Integral y Autocuidado",
      pregunta: "Sientes una alta carga de estrés debido a las exigencias académicas y personales diarias. ¿Cómo manejas tu bienestar?",
      opciones: [
        {
          texto: "Implementar rutinas de autocuidado, pausas activas y registrar emociones de forma constante.",
          impactoSalud: 20,
          item: "Hábito Sostenible",
          feedback: "¡Muy bien! Fomentas la resiliencia y el equilibrio físico y mental diario."
        },
        {
          texto: "Ignorar las señales de agotamiento y aislarte de tu entorno de confianza.",
          impactoSalud: -30,
          item: "Fatiga Crónica",
          feedback: "El aislamiento y la falta de regulación emocional deterioran la salud mental de forma acelerada."
        }
      ]
    },
    {
      titulo: "Escenario 3: Prevención y Redes de Apoyo",
      pregunta: "Te invitan a un taller sobre salud reproductiva y prevención en tu comunidad. ¿Qué actitud tomas?",
      opciones: [
        {
          texto: "Participar activamente para informarte con datos confiables y libres de juicios.",
          impactoSalud: 20,
          item: "Información Segura",
          feedback: "¡Genial! La información basada en datos reales es tu mejor escudo preventivo."
        },
        {
          texto: "Desinteresarte por completo y dejar tu salud en manos del azar o mitos.",
          impactoSalud: -25,
          item: "Desinformación",
          feedback: "La falta de acceso oportuno a información clara aumenta la vulnerabilidad frente a embarazos no intencionales."
        }
      ]
    }
  ];

  const tomarDecision = (opcion) => {
    const nuevoPuntaje = Math.max(0, Math.min(100, puntosVida + opcion.impactoSalud));
    setPuntosVida(nuevoPuntaje);
    setInventario([...inventario, opcion.item]);
    setMensajeFeedback(opcion.feedback);

    if (pasoJuego < decisionesVida.length - 1) {
      setTimeout(() => {
        setPasoJuego(pasoJuego + 1);
        setMensajeFeedback("");
      }, 2500);
    } else {
      setTimeout(() => {
        setJuegoTerminado(true);
      }, 2500);
    }
  };

  const reiniciarJuego = () => {
    setPasoJuego(0);
    setPuntosVida(100);
    setInventario([]);
    setJuegoTerminado(false);
    setMensajeFeedback("");
  };

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

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center font-sans overflow-x-hidden">
      
      {/* BANNER PLANO / SIN IMAGEN */}
      <div className="w-full max-w-5xl bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm mt-8 mb-6 flex flex-col gap-3 relative overflow-hidden mx-6">
        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-full blur-2xl -z-10"></div>
        <div className="absolute bottom-0 left-1/3 w-32 h-32 bg-blue-50 rounded-full blur-2xl -z-10"></div>
        
        <span className="text-[#E36D9B] text-xs font-bold uppercase tracking-wider bg-pink-50 px-3.5 py-1 rounded-full border border-pink-100 w-fit">
          Simulador de Decisiones
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2B4789] tracking-tight">
          KronoSalud: Tu Proyecto de Vida
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
          Toma decisiones estratégicas y descubre cómo el autocuidado, la educación y las redes de apoyo moldean un futuro con bienestar sostenible.
        </p>
      </div>

      {/* PILARES SUPERIORES */}
      <div className="w-full max-w-6xl px-6 mb-8">
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

      {/* MINIJUEGO INTERACTIVO DE PROYECTO DE VIDA */}
      <div className="w-full max-w-4xl px-4 mb-12">
        <div className="bg-white rounded-3xl border-2 border-[#2B4789]/20 shadow-xl overflow-hidden p-6 sm:p-8 relative">
          
          {/* Barra de Estado del Minijuego */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
            <div>
              <span className="text-[#10B183] text-xs font-bold uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                {!juegoTerminado ? `Escenario ${pasoJuego + 1} de ${decisionesVida.length}` : "Simulación Finalizada"}
              </span>
              <h2 className="text-[#2B4789] text-xl sm:text-2xl font-extrabold mt-1">
                {!juegoTerminado ? decisionesVida[pasoJuego].titulo : "Tu Reporte de Bienestar"}
              </h2>
            </div>
            
            {/* Indicador de Bienestar / Puntos de Vida */}
            <div className="flex items-center gap-3 bg-slate-50 px-4 py-2.5 rounded-2xl border border-slate-200">
              <div className="text-right">
                <span className="block text-[10px] uppercase font-bold text-slate-400">Índice de Bienestar</span>
                <span className={`text-lg font-black ${puntosVida > 50 ? 'text-[#10B183]' : 'text-[#E36D9B]'}`}>
                  {puntosVida}%
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
                <Activity className={`w-5 h-5 ${puntosVida > 50 ? 'text-[#10B183]' : 'text-[#E36D9B]'}`} />
              </div>
            </div>
          </div>

          {/* Contenido del Minijuego */}
          {!juegoTerminado ? (
            <div className="space-y-6">
              <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed">
                {decisionesVida[pasoJuego].pregunta}
              </p>

              {mensajeFeedback ? (
                <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl flex items-center gap-3 text-[#2B4789] animate-pulse">
                  <CheckCircle2 className="w-6 h-6 text-[#10B183] shrink-0" />
                  <p className="text-sm font-bold">{mensajeFeedback}</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {decisionesVida[pasoJuego].opciones.map((opcion, idx) => (
                    <button
                      key={idx}
                      onClick={() => tomarDecision(opcion)}
                      className="text-left bg-slate-50 hover:bg-[#2B4789] hover:text-white p-5 rounded-2xl border border-slate-200/80 transition-all flex items-center justify-between group cursor-pointer shadow-sm"
                    >
                      <span className="text-sm sm:text-base font-medium leading-relaxed pr-4">
                        {opcion.texto}
                      </span>
                      <ArrowRight className="w-5 h-5 text-[#E36D9B] group-hover:text-[#E7DD6A] shrink-0 transition-transform group-hover:translate-x-1" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Pantalla de Resultados del Minijuego */
            <div className="text-center py-6 space-y-6">
              <div className="w-20 h-20 bg-pink-50 border-4 border-[#E36D9B]/30 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <Trophy className="w-10 h-10 text-[#E36D9B]" />
              </div>
              
              <div>
                <h3 className="text-2xl font-extrabold text-[#2B4789] mb-2">¡Simulación Completada!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  {puntosVida >= 70 
                    ? "¡Excelente desempeño! Has demostrado que la toma de decisiones informada, el autocuidado y el uso de redes de apoyo garantizan un alto bienestar sostenible." 
                    : "Has finalizado el recorrido. Recuerda que la prevención, la educación y el apoyo institucional son claves fundamentales para evitar brechas y proteger tu proyecto de vida."}
                </p>
              </div>

              {/* Logros / Inventario obtenido */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 max-w-md mx-auto text-left">
                <span className="block text-xs font-bold text-[#2B4789] uppercase tracking-wider mb-2">Logros y Herramientas Obtenidas:</span>
                <div className="flex flex-wrap gap-2">
                  {inventario.map((item, i) => (
                    <span key={i} className="bg-white text-slate-700 text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                      ✨ {item}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={reiniciarJuego}
                className="bg-[#2B4789] hover:bg-[#20366a] text-[#E7DD6A] font-bold py-3 px-6 rounded-xl shadow transition-all inline-flex items-center gap-2 text-sm cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" /> Volver a Jugar
              </button>
            </div>
          )}

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