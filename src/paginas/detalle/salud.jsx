import React, { useState } from 'react';
import { Brain, ArrowLeft, CheckCircle2, ShieldAlert, Sparkles, Heart, Activity, AlertTriangle, PhoneCall, Lock, BookOpen } from 'lucide-react';

export default function Salud({ onVolver }) {
  // Estado para la interactividad de un test rápido de bienestar mental al final
  const [respuestasBienestar, setRespuestasBienestar] = useState({});
  const [resultadoBienestar, setResultadoBienestar] = useState(null);

  const manejarRespuesta = (preguntaId, valor) => {
    setRespuestasBienestar(prev => ({ ...prev, [preguntaId]: valor }));
  };

  const calcularBienestar = () => {
    const valores = Object.values(respuestasBienestar);
    if (valores.length < 3) {
      alert("Por favor responde todas las preguntas para ver tu resultado.");
      return;
    }
    const positivas = valores.filter(v => v === true).length;
    setResultadoBienestar(positivas);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20 animate-fadeIn">
      
      {/* HEADER DE LA PÁGINA */}
      <div className="w-full bg-gradient-to-r from-teal-700 to-indigo-800 py-12 px-4 sm:px-8 text-white shadow-md mb-10">
        <div className="max-w-5xl mx-auto space-y-4">
          <button
            onClick={onVolver}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs px-4 py-2 rounded-xl backdrop-blur-md transition-all cursor-pointer"
          >
            <ArrowLeft className="size-4" /> Volver a Mi Salud
          </button>
          <div className="flex items-center gap-4 pt-2">
            <div className="size-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-inner flex-shrink-0">
              <Brain className="size-8" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-100 text-teal-900 px-3 py-1 rounded-full">
                Salud Mental y Bienestar Integral
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-2">Salud Mental: Un Pilar Fundamental</h1>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* INTRODUCCIÓN Y NEUROPLASTICIDAD */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-slate-100 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">Ventana de Oportunidad</span>
            <h2 className="text-2xl font-extrabold text-slate-900">¿Qué pasa en tu mente en esta etapa?</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Los trastornos mentales representan el 13% de la carga mundial de morbilidad en personas de 10 a 19 años. Sin embargo, durante esta etapa tu cerebro experimenta una neuroplasticidad acelerada, lo que la convierte en una <strong>"segunda ventana de oportunidad"</strong> para fortalecer la resiliencia y el autocontrol.
            </p>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-indigo-50 p-6 rounded-2xl border border-teal-100 flex flex-col items-center text-center gap-3">
            <div className="size-14 rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-md">
              <Sparkles className="size-7" />
            </div>
            <h4 className="font-bold text-slate-900 text-base">Cerebro en Desarrollo</h4>
            <p className="text-xs text-slate-600">Herramientas poderosas para regular tus emociones y potenciar tu futuro.</p>
          </div>
        </section>

        {/* DATOS Y PANORAMA CRÍTICO */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">Evidencia Científica</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Panorama Crítico de la Salud Mental</h2>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm max-w-md">
              Cifras reales sobre el impacto emocional, la brecha de género y los factores que influyen en el bienestar adolescente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Tarjeta 1: Prevalencia por Edad */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all">
              <div className="space-y-4">
                <div className="size-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600">
                  <Activity className="size-6" />
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900 tracking-tight">13.5% - 14.7%</div>
                  <p className="text-xs font-medium text-rose-600 mt-1">Viven con un trastorno diagnosticado</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  Se estima que el 13.5% de los adolescentes de 10 a 14 años y el 14.7% de los de 15 a 19 años enfrentan trastornos mentales diagnosticados.
                </p>
              </div>
            </div>

            {/* Tarjeta 2: Pandemia y Ansiedad */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all">
              <div className="space-y-4">
                <div className="size-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
                  <AlertTriangle className="size-6" />
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900 tracking-tight">1 de cada 4</div>
                  <p className="text-xs font-medium text-amber-600 mt-1">Afectados por ansiedad y depresión</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  Durante el primer año del COVID-19, los síntomas de ansiedad y depresión se duplicaron, afectando profundamente a 1 de cada 4 jóvenes en todo el mundo.
                </p>
              </div>
            </div>

            {/* Tarjeta 3: Suicidio y Género */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all">
              <div className="space-y-4">
                <div className="size-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <ShieldAlert className="size-6" />
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900 tracking-tight">Riesgo y Género</div>
                  <p className="text-xs font-medium text-indigo-600 mt-1">Impacto diferencial en mujeres y varones</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  Las lesiones autoinfligidas son la 4ta causa de muerte (3ra en mujeres de 15 a 19 años). Ellas sufren más ansiedad por estigmas; los varones en entornos más equitativos muestran menor depresión.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ACTIVIDADES PARA ROMPER EL CICLO */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-slate-100 space-y-6">
          <div className="flex items-center gap-4">
            <div className="size-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 shadow-inner">
              <Heart className="size-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-600 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">Estrategias Prácticas</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">Actividades para Romper el "Ciclo"</h3>
            </div>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed">
            Para evitar caer en el ciclo de la violencia o la exclusión, las fuentes recomiendan estrategias basadas en aprendizaje socioemocional:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="size-4 text-teal-600" /> Mindfulness:
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Práctica de conciencia plena para prestar atención al presente sin juzgar, induciendo cambios cerebrales que favorecen el autocontrol.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="size-4 text-teal-600" /> Diario Íntimo:
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Espacio digital o físico para escribir libremente sobre sentimientos, procesar contradicciones emocionales y desnaturalizar violencias.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="size-4 text-teal-600" /> Las "5 C":
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fomentar Competencia, Confianza, Conexión, Carácter y Cuidado para fortalecer tu identidad frente a la presión social.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="size-4 text-teal-600" /> Mediación entre Pares:
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Participar en grupos donde los propios jóvenes resuelven conflictos de forma asertiva, mejorando la autoestima y autonomía.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="size-4 text-teal-600" /> Actividad Física:
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                60 minutos diarios de ejercicio moderado a intenso que aportan beneficios psicosociales directos y reducen el estrés digital.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="size-4 text-teal-600" /> Cuestionar Mandatos:
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reflexionar sobre el "amor romántico" y roles hegemónicos para identificar conductas controladoras (celos, vigilancia) como violencia.
              </p>
            </div>

          </div>
        </section>

        {/* RECURSOS DE APOYO EN PERÚ */}
        <section className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl space-y-6">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="bg-teal-500 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">Red de Ayuda Oficial</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">¿Sientes que necesitas orientación profesional?</h3>
            <p className="text-slate-300 text-xs sm:text-sm">Si el miedo o la tristeza interfieren con tu vida diaria, buscar ayuda es un acto absoluto de valentía.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto pt-2">
            
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 space-y-3">
              <div className="flex items-center gap-3">
                <PhoneCall className="size-6 text-teal-400" />
                <h4 className="font-bold text-base text-white">Línea 113 (Opción 3)</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Central telefónica totalmente gratuita del Ministerio de Salud (MINSA) especializada en brindar orientación psicológica y en salud mental de manera confidencial.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 space-y-3">
              <div className="flex items-center gap-3">
                <Lock className="size-6 text-teal-400" />
                <h4 className="font-bold text-base text-white">Servicios Diferenciados</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Espacios exclusivos y confidenciales para adolescentes de 12 a 17 años en centros de salud del Perú, donde puedes acudir de forma independiente y sin compañía de tus padres.
              </p>
            </div>

          </div>
        </section>

        {/* TEST INTERACTIVO RÁPIDO DE BIENESTAR */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-slate-100 space-y-6">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">Autoevaluación</span>
            <h3 className="text-2xl font-extrabold text-slate-900">Test Rápido de Bienestar Emocional</h3>
            <p className="text-slate-500 text-xs sm:text-sm">Responde estas preguntas breves para reflexionar sobre tu estado emocional actual.</p>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto bg-slate-50 p-6 rounded-2xl border border-slate-100">
            
            {/* Pregunta 1 */}
            <div className="space-y-2 pb-4 border-b border-slate-200">
              <p className="text-sm font-medium text-slate-800">1. ¿Has dormido bien y sentido suficiente energía la mayor parte de esta semana?</p>
              <div className="flex gap-4">
                <button 
                  onClick={() => manejarRespuesta('sm1', true)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${respuestasBienestar.sm1 === true ? 'bg-teal-600 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'}`}
                >
                  Sí, la mayoría de días
                </button>
                <button 
                  onClick={() => manejarRespuesta('sm1', false)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${respuestasBienestar.sm1 === false ? 'bg-rose-500 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'}`}
                >
                  Me cuesta descansar
                </button>
              </div>
            </div>

            {/* Pregunta 2 */}
            <div className="space-y-2 pb-4 border-b border-slate-200">
              <p className="text-sm font-medium text-slate-800">2. ¿Cuentas con al menos una persona de confianza (amigo, familiar, mentor) con quien hablar si te sientes abrumado/a?</p>
              <div className="flex gap-4">
                <button 
                  onClick={() => manejarRespuesta('sm2', true)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${respuestasBienestar.sm2 === true ? 'bg-teal-600 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'}`}
                >
                  Sí, tengo apoyo
                </button>
                <button 
                  onClick={() => manejarRespuesta('sm2', false)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${respuestasBienestar.sm2 === false ? 'bg-rose-500 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'}`}
                >
                  Me siento solo/a
                </button>
              </div>
            </div>

            {/* Pregunta 3 */}
            <div className="space-y-2 pb-2">
              <p className="text-sm font-medium text-slate-800">3. ¿Practicas alguna actividad (ejercicio, arte, escritura, mindfulness) para desconectarte del estrés diario?</p>
              <div className="flex gap-4">
                <button 
                  onClick={() => manejarRespuesta('sm3', true)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${respuestasBienestar.sm3 === true ? 'bg-teal-600 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'}`}
                >
                  Sí, lo practico
                </button>
                <button 
                  onClick={() => manejarRespuesta('sm3', false)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${respuestasBienestar.sm3 === false ? 'bg-rose-500 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'}`}
                >
                  Casi nunca
                </button>
              </div>
            </div>

            <div className="pt-4 text-center">
              <button
                onClick={calcularBienestar}
                className="bg-teal-600 hover:bg-teal-700 text-white font-extrabold px-6 py-3 rounded-xl shadow-lg transition-all cursor-pointer text-sm w-full sm:w-auto"
              >
                Ver Mi Resultado 🧠
              </button>
            </div>

            {/* Resultado Dinámico */}
            {resultadoBienestar !== null && (
              <div className="mt-6 p-4 rounded-2xl bg-teal-50 border border-teal-200 text-center space-y-2 animate-fadeIn">
                <h4 className="font-bold text-teal-800 text-base">
                  Puntaje de bienestar: {resultadoBienestar} de 3 indicadores positivos.
                </h4>
                <p className="text-xs text-teal-900 leading-relaxed">
                  {resultadoBienestar === 3 
                    ? "¡Excelente! Cuentas con herramientas sólidas de autocuidado emocional. Mantén tus redes de apoyo activas." 
                    : "Parece que estás cargando con tensión acumulada. Recuerda que puedes utilizar técnicas de respiración, escribir lo que sientes o acudir a la Línea 113 (opción 3) si necesitas conversar con un profesional."}
                </p>
              </div>
            )}

          </div>
        </section>

      </main>
    </div>
  );
}