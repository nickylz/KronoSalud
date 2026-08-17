import React, { useState } from 'react';
import { ShieldAlert, ArrowLeft, CheckCircle2, AlertTriangle, Heart, Lock, BookOpen, Users, Activity, HelpCircle } from 'lucide-react';

export default function EM({ onVolver }) {
  // Estado para la interactividad de un quiz o autoevaluación rápida
  const [respuestasQuiz, setRespuestasQuiz] = useState({});
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const manejarRespuesta = (preguntaId, esVerdadera) => {
    setRespuestasQuiz(prev => ({ ...prev, [preguntaId]: esVerdadera }));
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20 animate-fadeIn">
      
      {/* HEADER DE LA PÁGINA */}
      <div className="w-full bg-gradient-to-r from-rose-700 to-pink-800 py-12 px-4 sm:px-8 text-white shadow-md mb-10">
        <div className="max-w-5xl mx-auto space-y-4">
          <button
            onClick={onVolver}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs px-4 py-2 rounded-xl backdrop-blur-md transition-all cursor-pointer"
          >
            <ArrowLeft className="size-4" /> Volver a Mi Salud
          </button>
          <div className="flex items-center gap-4 pt-2">
            <div className="size-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-inner flex-shrink-0">
              <ShieldAlert className="size-8" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-900 px-3 py-1 rounded-full">
                Salud Sexual y Reproductiva
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-2">Necesidad Insatisfecha y Prevención</h1>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* INTRODUCCIÓN Y ESTADÍSTICA CLAVE */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-slate-100 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">Panorama Global</span>
            <h2 className="text-2xl font-extrabold text-slate-900">Una brecha crítica en la adolescencia</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              En los países de ingresos bajos y medianos (PIBM), la necesidad insatisfecha de métodos anticonceptivos modernos afecta al <strong>43% de las adolescentes</strong> de entre 15 y 19 años que desean evitar un embarazo, una cifra significativamente superior al 24% registrado para el total de mujeres en edad reproductiva en esas mismas regiones.
            </p>
          </div>
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-2xl border border-rose-100 flex flex-col items-center text-center gap-3">
            <div className="size-14 rounded-2xl bg-rose-600 text-white flex items-center justify-center shadow-md text-2xl font-black">
              43%
            </div>
            <h4 className="font-bold text-slate-900 text-base">Adolescentes Afectadas</h4>
            <p className="text-xs text-slate-600">Sin acceso real a anticoncepción moderna en PIBM.</p>
          </div>
        </section>

        {/* ¿QUÉ IMPLICA ESTA NECESIDAD INSATISFECHA? */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-pink-600 bg-pink-50 border border-pink-200 px-3 py-1 rounded-full">Análisis Regional</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">¿Qué implica esta carencia?</h2>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm max-w-md">
              La brecha entre el deseo de posponer un embarazo y el acceso real a métodos eficaces en América Latina y el Caribe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 space-y-4">
              <div className="size-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600">
                <Users className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Realidad en América Latina</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Aunque el promedio de demanda satisfecha es mayor que el global, todavía <strong>3 de cada 10 adolescentes</strong> no ven cubiertas sus necesidades de planificación familiar. Esta carencia es el principal factor de riesgo para los embarazos no intencionales, los cuales representan el <strong>67% de los embarazos adolescentes</strong> en la región.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 space-y-4">
              <div className="size-12 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-600">
                <AlertTriangle className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Impacto de Crisis Externas</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Eventos como la pandemia de COVID-19 exacerbaron estas brechas. Las interrupciones en los servicios de salud provocaron que millones de mujeres discontinuaran el uso de anticonceptivos, siendo las adolescentes las más afectadas debido a las restricciones de movilidad y la caída de ingresos familiares.
              </p>
            </div>

          </div>
        </section>

        {/* ¿POR QUÉ OCURRE? BARRERAS PRINCIPALES */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-slate-100 space-y-6">
          <div className="flex items-center gap-4">
            <div className="size-14 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600 shadow-inner">
              <ShieldAlert className="size-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-600 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">Obstáculos Estructurales</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">¿Por qué ocurre? (Barreras Principales)</h3>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="size-4 text-rose-600" /> Barreras Legales:
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Leyes que restringen el acceso por edad o estado civil. El requisito de <strong>consentimiento parental</strong> frena por completo la autonomía de las jóvenes.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="size-4 text-rose-600" /> Sesgos en Salud:
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Falta de voluntad o prejuicios del personal médico hacia las adolescentes sexualmente activas, generando un entorno estigmatizador.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="size-4 text-rose-600" /> Falta de ESI:
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Desconocimiento sobre dónde obtener métodos y cómo usarlos correctamente. La Educación Sexual Integral suele ser insuficiente o poco práctica.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="size-4 text-rose-600" /> Economía y Geografía:
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Falta de recursos para pagar insumos o transporte, sumado al desabastecimiento crónico en centros de salud de zonas rurales y remotas.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="size-4 text-rose-600" /> Desigualdad de Género:
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Relaciones de poder desiguales que dificultan negociar el uso de anticonceptivos. El matrimonio infantil acelera estas limitaciones.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="size-4 text-rose-600" /> Soluciones Clave:
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Eliminar barreras legales, asegurar gratuidad de insumos y fortalecer <strong>Servicios Diferenciados</strong> que garanticen confidencialidad total.
              </p>
            </div>

          </div>
        </section>

        {/* CONSECUENCIAS CRÍTICAS */}
        <section className="bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl space-y-6">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="bg-rose-500 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">Costo Humano y Social</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Consecuencias Críticas del Problema</h3>
            <p className="text-slate-300 text-xs sm:text-sm">El impacto de la falta de acceso se refleja en graves riesgos para la vida y el futuro de las jóvenes.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 pt-2">
            
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 space-y-3">
              <div className="text-rose-400 font-black text-2xl">15%</div>
              <h4 className="font-bold text-base text-white">Abortos Inseguros</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Se estima que el 15% de los abortos en condiciones de riesgo en países en desarrollo son practicados en adolescentes.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 space-y-3">
              <div className="text-rose-400 font-black text-2xl">2 a 3x</div>
              <h4 className="font-bold text-base text-white">Mortalidad Materna</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                El riesgo de morir por complicaciones del embarazo es dos o tres veces mayor en menores de 15 años que en adolescentes mayores.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 space-y-3">
              <div className="text-rose-400 font-black text-2xl">Pobreza</div>
              <h4 className="font-bold text-base text-white">Pérdida de Oportunidades</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                El embarazo temprano fuerza el abandono escolar, reduciendo la empleabilidad y perpetuando el círculo intergeneracional de la pobreza.
              </p>
            </div>

          </div>
        </section>

        {/* MITOS Y REALIDADES INTERACTIVO */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-slate-100 space-y-6">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">Verificación de Datos</span>
            <h3 className="text-2xl sm:text-xl font-extrabold text-slate-900">Quiz Rápido: Mitos sobre la Anticoncepción</h3>
            <p className="text-slate-500 text-xs sm:text-sm">Pon a prueba tus conocimientos sobre los datos oficiales de salud reproductiva.</p>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto bg-slate-50 p-6 rounded-2xl border border-slate-100">
            
            {/* Pregunta 1 */}
            <div className="space-y-2 pb-4 border-b border-slate-200">
              <p className="text-sm font-medium text-slate-800">1. ¿El 43% de las adolescentes en países de ingresos bajos y medianos tienen una necesidad insatisfecha de anticonceptivos modernos?</p>
              <div className="flex gap-4">
                <button 
                  onClick={() => manejarRespuesta('em1', true)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${respuestasQuiz.em1 === true ? 'bg-rose-600 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'}`}
                >
                  Verdadero (Correcto)
                </button>
                <button 
                  onClick={() => manejarRespuesta('em1', false)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${respuestasQuiz.em1 === false ? 'bg-slate-700 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'}`}
                >
                  Falso
                </button>
              </div>
              {respuestasQuiz.em1 === true && (
                <p className="text-xs text-rose-600 font-semibold pt-1">¡Exacto! Es la cifra oficial para este grupo etario que desea evitar embarazos.</p>
              )}
            </div>

            {/* Pregunta 2 */}
            <div className="space-y-2 pb-2">
              <p className="text-sm font-medium text-slate-800">2. ¿Los Servicios Diferenciados que garantizan confidencialidad ayudan a reducir las barreras de atención?</p>
              <div className="flex gap-4">
                <button 
                  onClick={() => manejarRespuesta('em2', true)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${respuestasQuiz.em2 === true ? 'bg-rose-600 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'}`}
                >
                  Verdadero (Correcto)
                </button>
                <button 
                  onClick={() => manejarRespuesta('em2', false)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${respuestasQuiz.em2 === false ? 'bg-slate-700 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'}`}
                >
                  Falso
                </button>
              </div>
              {respuestasQuiz.em2 === true && (
                <p className="text-xs text-rose-600 font-semibold pt-1">¡Correcto! Son esenciales para que las y los jóvenes acudan sin temor al juicio o la falta de privacidad.</p>
              )}
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}