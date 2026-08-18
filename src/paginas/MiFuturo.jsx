import React, { useState } from 'react';
import {
  GraduationCap,
  Briefcase,
  Landmark,
  PieChart,
  Activity,
  Compass,
  Trophy,
  RotateCcw,
  CheckCircle2,
  TrendingDown,
  AlertTriangle,
  DollarSign,
  HeartPulse,
  Globe2,
  ShieldAlert,
  ArrowRight,
  BarChart3
} from 'lucide-react';

export default function MiRed() {
  const [pasoJuego, setPasoJuego] = useState(0);
  const [puntosVida, setPuntosVida] = useState(100);
  const [inventario, setInventario] = useState([]);
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const [mensajeFeedback, setMensajeFeedback] = useState("");

  const decisionesVida = [
    {
      titulo: "Escenario 1: Planificación y Educación",
      pregunta: "Te enfrentas a una decisión clave sobre tu continuidad de estudios superiores, autonomía y metas a largo plazo. ¿Qué camino eliges?",
      opciones: [
        {
          texto: "Buscar orientación vocacional, redes de apoyo y priorizar mi educación como llave al bienestar.",
          impactoSalud: 20,
          item: "Llave Educativa",
          feedback: "¡Excelente decisión! Estudiar te brinda herramientas de pensamiento crítico y asegura tu estabilidad futura."
        },
        {
          texto: "Postergar los estudios indefinidamente sin buscar consejería ni respaldo.",
          impactoSalud: -30,
          item: "Riesgo de Deserción",
          feedback: "Cuidado: La falta de apoyo y educación temprana incrementa la vulnerabilidad y limita tus opciones vitales."
        }
      ]
    },
    {
      titulo: "Escenario 2: Salud Mental y Resiliencia",
      pregunta: "Sientes una alta carga de estrés debido a las exigencias académicas y personales. ¿Cómo manejas tu salud mental?",
      opciones: [
        {
          texto: "Practicar Mindfulness, establecer rutinas de autocuidado y buscar espacios seguros y confidenciales.",
          impactoSalud: 20,
          item: "Hábito Sostenible",
          feedback: "¡Muy bien! Cuidar tu salud mental fortalece tu bienestar y equilibrio emocional."
        },
        {
          texto: "Ignorar las señales de agotamiento y aislarte por miedo al juicio social.",
          impactoSalud: -30,
          item: "Carga Invisible",
          feedback: "El aislamiento y la falta de regulación emocional deterioran tu calidad de vida."
        }
      ]
    },
    {
      titulo: "Escenario 3: Proyecto de Vida y Futuro",
      pregunta: "Visualizas tu futuro y el impacto de tus decisiones actuales en tu desarrollo a largo plazo. ¿Qué enfoque adoptas?",
      opciones: [
        {
          texto: "Construir hábitos sólidos hoy para proteger mi desarrollo personal y alcanzar las metas trazadas.",
          impactoSalud: 20,
          item: "Visión Clara",
          feedback: "¡Genial! Invertir en tu bienestar hoy asegura un futuro brillante y lleno de logros."
        },
        {
          texto: "Dejar el futuro al azar sin definir un proyecto de vida claro.",
          impactoSalud: -25,
          item: "Falta de Horizonte",
          feedback: "Definir un horizonte claro te ayuda a potenciar al máximo tus capacidades."
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

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-16">
      
      {/* BANNER PRINCIPAL */}
      <section className="w-full bg-gradient-to-r from-[#2B4789] to-[#3a5fa1] py-14 px-4 sm:px-8 text-white shadow-md mb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="bg-[#E36D9B] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
              Kronosalud • Análisis y Cifras
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              La Realidad del Embarazo Adolescente en América Latina
            </h1>
            <p className="text-slate-100 text-base md:text-lg font-medium leading-relaxed">
              Evidencia técnica, estadística y económica sobre la magnitud del problema, el impacto macroeconómico y los riesgos críticos en la región.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 flex flex-col gap-3 w-full md:w-auto">
            <div className="flex items-center gap-3">
              <Globe2 className="size-8 text-[#E7DD6A]" />
              <div>
                <h4 className="font-bold text-sm">América Latina y el Caribe</h4>
                <p className="text-xs text-slate-200">Segunda tasa más alta del mundo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* SECCIÓN INTERACTIVA: PROYECTO DE VIDA */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#10B183] bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">Zona Interactiva</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Proyecto de Vida: Simulador</h2>
            <p className="text-slate-600 text-sm">
              Toma decisiones estratégicas sobre salud mental, educación y futuro para descubrir el impacto de tus elecciones.
            </p>
          </div>

          <div className="bg-white rounded-3xl border-2 border-[#2B4789]/20 shadow-xl overflow-hidden p-6 sm:p-10 relative max-w-4xl mx-auto">
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
              <div>
                <span className="text-[#10B183] text-xs font-bold uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                  {!juegoTerminado ? `Escenario ${pasoJuego + 1} de ${decisionesVida.length}` : "Simulación Finalizada"}
                </span>
                <h3 className="text-[#2B4789] text-xl sm:text-2xl font-extrabold mt-1">
                  {!juegoTerminado ? decisionesVida[pasoJuego].titulo : "Tu Reporte de Bienestar y Futuro"}
                </h3>
              </div>
              
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
                        className="text-left bg-slate-50 hover:bg-[#2B4789] hover:text-white p-5 rounded-2xl border border-slate-200/85 transition-all flex items-center justify-between group cursor-pointer shadow-sm"
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
              <div className="text-center py-6 space-y-6">
                <div className="w-20 h-20 bg-pink-50 border-4 border-[#E36D9B]/30 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <Trophy className="w-10 h-10 text-[#E36D9B]" />
                </div>
                
                <div>
                  <h4 className="text-2xl font-extrabold text-[#2B4789] mb-2">¡Simulación Completada!</h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    {puntosVida >= 70 
                      ? "¡Excelente desempeño! Has demostrado que la educación, el autocuidado emocional y la agencia personal garantizan un futuro brillante." 
                      : "Has finalizado el recorrido. Recuerda que invertir en tu bienestar emocional hoy es la clave para asegurar tu autonomía."}
                  </p>
                </div>

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
        </section>

        {/* SECCIÓN 1: LA MAGNITUD DEL PROBLEMA */}
        <section className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/70 items-center">
          <div className="lg:col-span-5 relative bg-slate-100 aspect-square overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80" 
              alt="Magnitud del problema" 
              className="w-full h-full object-cover aspect-square hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B4789]/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow border border-slate-100 flex items-center gap-2">
              <AlertTriangle className="size-5 text-[#E36D9B]" />
              <span className="text-[#2B4789] font-extrabold text-xs">Crisis Regional</span>
            </div>
          </div>
          <div className="lg:col-span-7 p-8 md:p-12 space-y-6">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-2xl bg-rose-50 flex items-center justify-center shadow-inner shrink-0">
                <AlertTriangle className="size-6 text-[#E36D9B]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E36D9B] bg-pink-50 border border-pink-200 px-3 py-1 rounded-full">Magnitud del Problema</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2">Un Nacimiento Cada 20 Segundos</h2>
              </div>
            </div>

            <p className="text-slate-700 text-base leading-relaxed">
              América Latina y el Caribe (ALC) enfrenta una crisis de maternidad temprana persistente que afecta gravemente el desarrollo social de la región.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Frecuencia</span>
                <p className="text-xl font-black text-[#2B4789] my-1">Cada 20s</p>
                <p className="text-slate-600 text-xs">Una adolescente se convierte en madre en la región.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Ranking Mundial</span>
                <p className="text-xl font-black text-[#E36D9B] my-1">2.° Lugar</p>
                <p className="text-slate-600 text-xs">Superados únicamente por el África subsahariana en TEFA.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Cifras 2024</span>
                <p className="text-xl font-black text-[#10B183] my-1">50.6 / 2.3</p>
                <p className="text-slate-600 text-xs">Por cada 1,000 jóvenes (15-19) y niñas (10-14 años).</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Volumen Anual</span>
                <p className="text-xl font-black text-[#2B4789] my-1">1.6 Millones</p>
                <p className="text-slate-600 text-xs">Adolescentes que dan a luz cada año en ALC.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: LA ANOMALÍA DE LA REGIÓN */}
        <section className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/70 items-center">
          <div className="lg:col-span-7 p-8 md:p-12 space-y-6 order-2 lg:order-1">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-2xl bg-teal-50 flex items-center justify-center shadow-inner shrink-0">
                <TrendingDown className="size-6 text-[#10B183]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#10B183] bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">Resistencia Estructural</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2">La "Anomalía" de la Fecundidad Adolescente</h2>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                <h3 className="text-base font-extrabold text-[#2B4789] mb-1">Descenso Lento y Desigual</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Mientras que la tasa de hijos por mujer adulta ha disminuido drásticamente en América Latina, la fecundidad en adolescentes muestra una resistencia notable al descenso, cayendo de forma muy lenta y desigual entre los diferentes países de la zona.
                </p>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                <h3 className="text-base font-extrabold text-[#E36D9B] mb-1">Fecundidad No Deseada (67%)</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  ALC se posiciona como la región con el porcentaje más alto de embarazos no intencionales en adolescentes de todo el mundo, alcanzando un alarmante 67% de los casos totales.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative bg-slate-100 aspect-square overflow-hidden order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
              alt="Anomalía de la región" 
              className="w-full h-full object-cover aspect-square hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B4789]/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow border border-slate-100 flex items-center gap-2">
              <TrendingDown className="size-5 text-[#10B183]" />
              <span className="text-[#2B4789] font-extrabold text-xs">Tendencias Regionales</span>
            </div>
          </div>
        </section>

        {/* SECCIÓN 3: EL COSTO ECONÓMICO DEL SILENCIO */}
        <section className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/70 items-center">
          <div className="lg:col-span-5 relative bg-slate-100 aspect-square overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" 
              alt="Costo económico" 
              className="w-full h-full object-cover aspect-square hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B4789]/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow border border-slate-100 flex items-center gap-2">
              <DollarSign className="size-5 text-[#2B4789]" />
              <span className="text-[#2B4789] font-extrabold text-xs">Impacto Financiero</span>
            </div>
          </div>
          <div className="lg:col-span-7 p-8 md:p-12 space-y-6">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-2xl bg-blue-50 flex items-center justify-center shadow-inner shrink-0">
                <DollarSign className="size-6 text-[#2B4789]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2B4789] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">Impacto Financiero</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2">El Costo Económico del Silencio</h2>
              </div>
            </div>

            <p className="text-slate-700 text-base leading-relaxed">
              No actuar frente al embarazo adolescente drena sistemáticamente la economía de las naciones de la región, acumulando pérdidas masivas en el PIB y salud pública.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Impacto en el PIB</span>
                <p className="text-lg font-black text-[#2B4789] my-1">USD 15.3B</p>
                <p className="text-slate-600 text-xs">1% del PIB combinado en 15 países.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Pérdida Fiscal</span>
                <p className="text-lg font-black text-[#E36D9B] my-1">USD 1.0B</p>
                <p className="text-slate-600 text-xs">Dejados de percibir anualmente en impuestos.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Gasto en Salud</span>
                <p className="text-lg font-black text-[#10B183] my-1">USD 803M</p>
                <p className="text-slate-600 text-xs">Destinados a atención médica materno-infantil.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 4: LA INVERSIÓN CON MAYOR RETORNO */}
        <section className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/70 items-center">
          <div className="lg:col-span-7 p-8 md:p-12 space-y-6 order-2 lg:order-1">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-2xl bg-emerald-50 flex items-center justify-center shadow-inner shrink-0">
                <Trophy className="size-6 text-[#10B183]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#10B183] bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">Rentabilidad Social</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2">La Inversión con Mayor Retorno Social</h2>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                <h3 className="text-base font-extrabold text-[#2B4789] mb-1">Rentabilidad Garantizada (15 a 40x)</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Invertir en prevención no es un gasto, es la decisión financiera más inteligente: por cada dólar invertido en prevenir el embarazo adolescente, se estima un retorno de entre 15 y 40 dólares en beneficios para la sociedad y el Estado.
                </p>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                <h3 className="text-base font-extrabold text-[#10B183] mb-1">El "Dividendo Triple"</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Las intervenciones en salud adolescente generan beneficios escalonados en tres etapas críticas: salud para los jóvenes hoy, salud para su vida adulta futura y bienestar directo para la próxima generación.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative bg-slate-100 aspect-square overflow-hidden order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80" 
              alt="Inversión con mayor retorno" 
              className="w-full h-full object-cover aspect-square hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B4789]/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow border border-slate-100 flex items-center gap-2">
              <Trophy className="size-5 text-[#10B183]" />
              <span className="text-[#2B4789] font-extrabold text-xs">Alto Retorno</span>
            </div>
          </div>
        </section>

        {/* SECCIÓN 5: MORTALIDAD Y RIESGOS CRÍTICOS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/70 items-center">
          <div className="lg:col-span-5 relative bg-slate-100 aspect-square overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80" 
              alt="Riesgos críticos" 
              className="w-full h-full object-cover aspect-square hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B4789]/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow border border-slate-100 flex items-center gap-2">
              <HeartPulse className="size-5 text-[#E36D9B]" />
              <span className="text-[#2B4789] font-extrabold text-xs">Salud Crítica</span>
            </div>
          </div>
          <div className="lg:col-span-7 p-8 md:p-12 space-y-6">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-2xl bg-rose-50 flex items-center justify-center shadow-inner shrink-0">
                <HeartPulse className="size-6 text-[#E36D9B]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E36D9B] bg-pink-50 border border-pink-200 px-3 py-1 rounded-full">Riesgos Críticos</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2">Mortalidad y Peligros para la Salud</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <h4 className="font-extrabold text-[#2B4789] text-sm mb-1">Mortalidad Materna</h4>
                <p className="text-slate-600 text-xs">Principal causa de muerte en adolescentes de 15 a 19 años.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <h4 className="font-extrabold text-[#E36D9B] text-sm mb-1">Riesgo Multiplicado</h4>
                <p className="text-slate-600 text-xs">Niñas menores de 15 años tienen 2x-3x más riesgo de muerte.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <h4 className="font-extrabold text-[#10B183] text-sm mb-1">Años de Vida Perdidos</h4>
                <p className="text-slate-600 text-xs">28,607 años potenciales perdidos anualmente en la región.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 6: EL IMPACTO DE LA PANDEMIA */}
        <section className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/70 items-center">
          <div className="lg:col-span-7 p-8 md:p-12 space-y-6 order-2 lg:order-1">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-2xl bg-amber-50 flex items-center justify-center shadow-inner shrink-0">
                <ShieldAlert className="size-6 text-amber-600" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">Retroceso Histórico</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2">El Impacto de la Pandemia</h2>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                <h3 className="text-base font-extrabold text-[#2B4789] mb-1">Efecto Involutivo (5 a 8 Años)</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Se estima que la crisis del COVID-19 provocó un retroceso de entre 5 y 8 años en los logros conseguidos previamente sobre la reducción de la tasa de fecundidad adolescente en ALC.
                </p>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                <h3 className="text-base font-extrabold text-[#E36D9B] mb-1">500,000 Casos Adicionales</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Se calculan alrededor de medio millón de embarazos adolescentes adicionales vinculados de forma directa a las restricciones de acceso a servicios de salud y al incremento de la violencia durante los periodos de confinamiento.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative bg-slate-100 aspect-square overflow-hidden order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=800&q=80" 
              alt="Impacto de la pandemia" 
              className="w-full h-full object-cover aspect-square hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B4789]/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow border border-slate-100 flex items-center gap-2">
              <ShieldAlert className="size-5 text-amber-600" />
              <span className="text-[#2B4789] font-extrabold text-xs">Retroceso Histórico</span>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}