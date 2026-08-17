import React, { useState } from 'react';
import { Home, BookOpen, Smile, ShieldAlert, Heart, Activity, AlertCircle, ArrowLeft, CheckCircle2, Sparkles, RefreshCw, PhoneCall, ShieldCheck, ExternalLink } from 'lucide-react';

export default function Autochequeo({ onVolverOrientacion }) {
  const [paso, setPaso] = useState(0);
  const [respuestas, setRespuestas] = useState({});
  const [completado, setCompletado] = useState(false);

  const preguntasHeadsss = [
    {
      letra: "H",
      titulo: "Hogar y Familia",
      pregunta: "¿Cómo es la relación con tu familia y el ambiente en tu casa?",
      icon: <Home className="size-6 text-teal-600" />,
      opciones: [
        { texto: "Me siento apoyado/a y hay buena comunicación.", valor: "bien" },
        { texto: "Hay discusiones frecuentes pero se puede sobrellevar.", valor: "regular" },
        { texto: "Me siento incomprendido/a o hay situaciones difíciles.", valor: "alerta" }
      ]
    },
    {
      letra: "E",
      titulo: "Educación y Colegio",
      pregunta: "¿Cómo te va en el colegio y con tus responsabilidades académicas?",
      icon: <BookOpen className="size-6 text-blue-600" />,
      opciones: [
        { texto: "Me va bien y manejo mis tareas con normalidad.", valor: "bien" },
        { texto: "Me siento algo estresado/a por la carga o las notas.", valor: "regular" },
        { texto: "Siento mucha presión, bajo rendimiento o deseo dejarlo.", valor: "alerta" }
      ]
    },
    {
      letra: "A",
      titulo: "Actividades y Tiempo Libre",
      pregunta: "¿Qué haces en tu tiempo libre y cómo disfrutas tus pasatiempos?",
      icon: <Smile className="size-6 text-amber-600" />,
      opciones: [
        { texto: "Tengo tiempo para descansar, hobbies y amigos.", valor: "bien" },
        { texto: "A veces me falta tiempo o paso demasiado tiempo en pantallas.", valor: "regular" },
        { texto: "Casi no tengo tiempo libre o ya nada me divierte.", valor: "alerta" }
      ]
    },
    {
      letra: "D",
      titulo: "Drogas y Sustancias",
      pregunta: "¿Tienes información clara sobre los riesgos del alcohol y sustancias?",
      icon: <Activity className="size-6 text-purple-600" />,
      opciones: [
        { texto: "Comprendo los riesgos y sé cómo decir que no ante presiones.", valor: "bien" },
        { texto: "Tengo algunas dudas sobre el tema o curiosidad ocasional.", valor: "regular" },
        { texto: "Siento presión cercana o consumo habitual en mi entorno.", valor: "alerta" }
      ]
    },
    {
      letra: "S",
      titulo: "Sexualidad y Afecto",
      pregunta: "¿Cómo percibes tu derecho a vivir una sexualidad segura y sin presiones?",
      icon: <Heart className="size-6 text-rose-600" />,
      opciones: [
        { texto: "Me siento informado/a y respetado/a en mis decisiones.", valor: "bien" },
        { texto: "Tengo algunas dudas o inquietudes sobre el respeto mutuo.", valor: "regular" },
        { texto: "He sentido presiones, desinformación o situaciones incómodas.", valor: "alerta" }
      ]
    },
    {
      letra: "S",
      titulo: "Estado de Ánimo y Salud Mental",
      pregunta: "¿Has tenido pensamientos negativos profundos o desesperanza?",
      icon: <AlertCircle className="size-6 text-red-600" />,
      opciones: [
        { texto: "No, mantengo estabilidad emocional en general.", valor: "bien" },
        { texto: "A veces me siento muy triste o abrumado/a temporalmente.", valor: "regular" },
        { texto: "Sí, frecuentemente experimento pensamientos muy oscuros.", valor: "alerta" }
      ]
    },
    {
      letra: "S",
      titulo: "Seguridad (Safety)",
      pregunta: "¿Sufres de bullying, acoso escolar o violencia en línea?",
      icon: <ShieldAlert className="size-6 text-indigo-600" />,
      opciones: [
        { texto: "Me siento seguro/a tanto en persona como en internet.", valor: "bien" },
        { texto: "He presenciado situaciones tensas o algún comentario molesto.", valor: "regular" },
        { texto: "Sí, sufro o he sufrido de bullying, ciberacoso o violencia.", valor: "alerta" }
      ]
    }
  ];

  const seleccionarOpcion = (valor) => {
    setRespuestas({ ...respuestas, [paso]: valor });
    if (paso + 1 < preguntasHeadsss.length) {
      setPaso(paso + 1);
    } else {
      setCompletado(true);
    }
  };

  const reiniciarTest = () => {
    setPaso(0);
    setRespuestas({});
    setCompletado(false);
  };

  // Conteo de alertas y estados regulares
  const totalAlertas = Object.values(respuestas).filter(val => val === 'alerta').length;
  const totalRegulares = Object.values(respuestas).filter(val => val === 'regular').length;

  // Lógica limpia separada en constantes
  let mensajeResultado = "¡Excelente! Tus respuestas reflejan un entorno equilibrado y buenas herramientas de afrontamiento personal.";
  if (totalAlertas > 0) {
    mensajeResultado = "Hemos detectado algunas áreas de atención importante donde podrías beneficiarte de apoyo profesional o consejería confidencial.";
  } else if (totalRegulares > 0) {
    mensajeResultado = "Identificamos algunos puntos de tensión moderada. Es normal pasar por retos, pero hablar de ellos a tiempo marca la diferencia.";
  }

  const actual = preguntasHeadsss[paso];

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-16">
      
      {/* Banner Superior Estilizado */}
      <div className="w-full bg-gradient-to-r from-[#2B4789] to-[#3a5fa1] py-12 px-4 sm:px-8 text-white shadow-md mb-10">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onVolverOrientacion}
            className="bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 text-sm cursor-pointer border border-white/20 shadow-sm"
          >
            <ArrowLeft className="size-4" /> Volver a Orientación
          </button>
          <div className="flex items-center gap-2 bg-[#E36D9B] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm">
            <Sparkles className="size-4" /> Autochequeo HEADSSS
          </div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4">
        {!completado ? (
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 space-y-8 relative overflow-hidden">
            
            {/* Barra de Progreso y Cabecera */}
            <div className="space-y-4 border-b border-slate-100 pb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-14 rounded-2xl bg-blue-50 flex items-center justify-center font-black text-blue-600 text-2xl shadow-inner border border-blue-100">
                    {actual.letra}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200/60 px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                      {actual.titulo}
                    </span>
                    <h4 className="font-bold text-slate-500 text-xs mt-1.5">Pregunta {paso + 1} de {preguntasHeadsss.length}</h4>
                  </div>
                </div>
              </div>

              {/* Barra lineal moderna */}
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-[#10B183] h-full transition-all duration-500 rounded-full" 
                  style={{ width: `${((paso + 1) / preguntasHeadsss.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Texto de Pregunta */}
            <div className="space-y-2 py-2">
              <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 leading-snug">
                {actual.pregunta}
              </h2>
              <p className="text-xs text-slate-500">Selecciona la opción que mejor refleje tu situación actual con total honestidad.</p>
            </div>

            {/* Opciones Interactivas */}
            <div className="space-y-3.5 pt-2">
              {actual.opciones.map((opcion, index) => (
                <button
                  key={index}
                  onClick={() => seleccionarOpcion(opcion.valor)}
                  className="w-full text-left bg-slate-50/80 hover:bg-blue-50/70 border border-slate-200/80 hover:border-blue-400 p-5 rounded-2xl font-medium text-slate-700 hover:text-blue-950 transition-all cursor-pointer shadow-sm flex items-center justify-between group"
                >
                  <span className="text-sm md:text-base leading-relaxed pr-4">{opcion.texto}</span>
                  <span className="size-8 rounded-xl bg-slate-200/80 group-hover:bg-[#10B183] group-hover:text-white flex items-center justify-center text-sm font-bold transition-all shadow-inner flex-shrink-0">
                    →
                  </span>
                </button>
              ))}
            </div>

          </div>
        ) : (
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 space-y-8">
            
            <div className="text-center space-y-4">
              <div className="size-20 rounded-3xl bg-teal-50 text-teal-600 mx-auto flex items-center justify-center shadow-inner border border-teal-100">
                <CheckCircle2 className="size-10" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E36D9B] bg-pink-50 border border-pink-200 px-3 py-1 rounded-full">Resultado del Autochequeo</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">¡Gracias por completar tu mapa HEADSSS!</h2>
              <p className="text-slate-600 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                {mensajeResultado}
              </p>
            </div>

            {/* SECCIÓN DE CONSEJOS Y NÚMEROS DE ORIENTACIÓN DINÁMICOS */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-4">
              <h3 className="font-bold text-slate-900 flex items-center gap-2 text-base">
                <ShieldCheck className="size-5 text-teal-600" /> Canales de Apoyo Recomendados para Ti:
              </h3>

              <div className="grid gap-3">
                <div className="bg-white p-4 rounded-xl border border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 shadow-sm">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Línea 113 (MINSA) - Opción 5</h4>
                    <p className="text-xs text-slate-600">Orientación en salud mental gratuita y confidencial las 24 horas.</p>
                  </div>
                  <span className="bg-teal-50 text-teal-700 font-extrabold text-xs px-3 py-1.5 rounded-lg border border-teal-200 flex items-center gap-1.5">
                    <PhoneCall className="size-3.5" /> Llama al 113
                  </span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 shadow-sm">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Línea 100 (MIMP)</h4>
                    <p className="text-xs text-slate-600">Apoyo especializado frente a situaciones de violencia familiar o escolar.</p>
                  </div>
                  <span className="bg-pink-50 text-pink-700 font-extrabold text-xs px-3 py-1.5 rounded-lg border border-pink-200 flex items-center gap-1.5">
                    <PhoneCall className="size-3.5" /> Llama al 100
                  </span>
                </div>

                {totalAlertas > 0 && (
                  <div className="bg-amber-50/80 p-4 rounded-xl border border-amber-200 text-amber-900 text-xs leading-relaxed">
                    <strong>Recomendación personalizada:</strong> Debido a que señalaste algunas áreas con retos importantes, te sugerimos compartirlo con un tutor de confianza en tu colegio, un familiar o comunicarte directamente con los centros de apoyo detallados en el directorio principal.
                  </div>
                )}
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={reiniciarTest}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-6 py-3.5 rounded-2xl transition-all cursor-pointer text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <RefreshCw className="size-4" /> Volver a realizar
              </button>
              <button
                onClick={onVolverOrientacion}
                className="bg-[#2B4789] hover:bg-[#20366a] text-white font-bold px-6 py-3.5 rounded-2xl transition-all cursor-pointer text-sm shadow-lg flex items-center justify-center gap-2"
              >
                Ver Directorio Completo <ExternalLink className="size-4" />
              </button>
            </div>

          </div>
        )}
      </main>
    </div>
  );
}