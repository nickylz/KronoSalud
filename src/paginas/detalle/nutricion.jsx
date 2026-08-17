import React, { useState } from 'react';
import { Apple, ArrowLeft, CheckCircle2, ShieldAlert, Activity, Sparkles, Utensils, HeartPulse, HelpCircle, AlertTriangle } from 'lucide-react';

export default function Nutricion({ onVolver }) {
  // Estado para la interactividad del test de hábitos alimenticios al final
  const [respuestasTest, setRespuestasTest] = useState({});
  const [resultadoTest, setResultadoTest] = useState(null);

  // Manejador de respuestas del test
  const manejarRespuesta = (preguntaId, valor) => {
    setRespuestasTest(prev => ({ ...prev, [preguntaId]: valor }));
  };

  // Calcular puntaje del test
  const calcularTest = () => {
    const valores = Object.values(respuestasTest);
    if (valores.length < 4) {
      alert("Por favor responde todas las preguntas para ver tu resultado.");
      return;
    }
    const buenosHabitos = valores.filter(v => v === true).length;
    setResultadoTest(buenosHabitos);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20 animate-fadeIn">
      
      {/* HEADER DE LA PÁGINA */}
      <div className="w-full bg-gradient-to-r from-emerald-600 to-teal-700 py-12 px-4 sm:px-8 text-white shadow-md mb-10">
        <div className="max-w-5xl mx-auto space-y-4">
          <button
            onClick={onVolver}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs px-4 py-2 rounded-xl backdrop-blur-md transition-all cursor-pointer"
          >
            <ArrowLeft className="size-4" /> Volver a Mi Salud
          </button>
          <div className="flex items-center gap-4 pt-2">
            <div className="size-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-inner flex-shrink-0">
              <Apple className="size-8" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full">
                Nutrición y Autocuidado
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-2">Nutrición: Energía para Crecer y Aprender</h1>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* INTRODUCCIÓN Y CONCEPTO */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-slate-100 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">Bases para el Futuro</span>
            <h2 className="text-2xl font-extrabold text-slate-900">¿Por qué importa tanto la nutrición adolescente?</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              La nutrición en esta etapa no solo permite un crecimiento compensatorio por deficiencias previas, sino que establece las bases definitivas para la salud adulta. Invertir en tu alimentación es una de las estrategias más costo-eficaces: aunque a menudo se invierte mucho en educación, descuidar la salud limita directamente tu capacidad de concentración y aprendizaje en el colegio.
            </p>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-100 flex flex-col items-center text-center gap-3">
            <div className="size-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
              <Sparkles className="size-7" />
            </div>
            <h4 className="font-bold text-slate-900 text-base">Alimentación Inteligente</h4>
            <p className="text-xs text-slate-600">Combustible real para tu mente y tus músculos.</p>
          </div>
        </section>

        {/* DATOS CLAVE DE SALUD NUTRICIONAL (ESTADÍSTICAS GLOBALES) */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">Evidencia Científica</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Datos Clave de Salud Nutricional</h2>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm max-w-md">
              Panorama actual sobre los desafíos nutricionales que enfrentan los adolescentes a nivel global y regional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Tarjeta 1: Anemia */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all">
              <div className="space-y-4">
                <div className="size-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600">
                  <AlertTriangle className="size-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 tracking-tight">La Anemia: Gran Desafío</div>
                  <p className="text-xs font-medium text-rose-600 mt-1">Principal causa de AVD a nivel mundial</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  La anemia ferropénica (deficiencia de hierro) es la principal causa de años de vida perdidos por discapacidad en adolescentes de ambos sexos. En África y Asia Sudoriental representa hasta el 50% de la carga de morbilidad nutricional.
                </p>
              </div>
            </div>

            {/* Tarjeta 2: Sobrepeso y Obesidad */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all">
              <div className="space-y-4">
                <div className="size-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
                  <Activity className="size-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 tracking-tight">1 de cada 6</div>
                  <p className="text-xs font-medium text-amber-600 mt-1">Adolescentes con sobrepeso en el mundo</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  A nivel mundial, 1 de cada 6 adolescentes tiene sobrepeso. En la región de las Américas la situación es alarmante, superando ampliamente el 30% de prevalencia en población joven.
                </p>
              </div>
            </div>

            {/* Tarjeta 3: Impacto de la Pobreza */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all">
              <div className="space-y-4">
                <div className="size-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600">
                  <HelpCircle className="size-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 tracking-tight">Vulnerabilidad</div>
                  <p className="text-xs font-medium text-purple-600 mt-1">Desigualdad en el acceso alimentario</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  Los adolescentes de hogares con menores recursos presentan alimentaciones más inadecuadas. Especialmente las mujeres jóvenes, quienes requieren mayores ingestas específicas de vitamina A y hierro.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* GUÍA ALIMENTARIA DIARIA (RECOMENDACIONES OMS) */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-slate-100 space-y-6">
          <div className="flex items-center gap-4">
            <div className="size-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-inner">
              <Utensils className="size-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">Estándares Internacionales</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">Guía Alimentaria Diaria (Recomendaciones OMS)</h3>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 pt-2">
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-600" /> Frutas y Verduras:
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Consumir al menos <strong>5 raciones diarias</strong> (equivalente a entre 400 y 500 gramos) para asegurar fibra, vitaminas y defensas óptimas.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-600" /> Sal (Sodio):
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Restringir la ingesta total a <strong>menos de 2 gramos por día</strong> y evitar el uso excesivo de saleros o condimentos procesados al cocinar.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-600" /> Azúcares Libres:
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Limitar los azúcares añadidos a <strong>menos del 10% del consumo total de energía</strong> (idealmente menos del 5%, es decir, unas 6 cucharaditas al día).
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-600" /> Grasas Saludables:
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sustituir grasas saturadas por aceites vegetales de oliva, soja, maíz o colza, prefiriendo siempre carnes magras como el pollo sin piel.
              </p>
            </div>

          </div>
        </section>

        {/* 4 OPCIONES DE MENÚS SALUDABLES */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">Planes Alimenticios</span>
            <h3 className="text-2xl font-extrabold text-slate-900">4 Opciones de Menús para tu Día a Día</h3>
            <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto">Diseñados para darte energía, concentración y vitalidad según tus objetivos personales.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            
            {/* Menú 1 */}
            <div className="rounded-3xl border border-blue-200 bg-blue-50/60 p-6 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="relative h-44 rounded-2xl overflow-hidden shadow-inner">
                  <img src="https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=80" alt="Estudiante" className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-md bg-blue-100 text-blue-800">
                      Máxima Concentración 🧠
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-extrabold text-lg text-slate-900">El Menú del Estudiante</h4>
                  <p className="text-xs font-medium text-slate-600 mt-1 italic">🎯 Objetivo: Mantener la mente alerta para estudiar.</p>
                </div>
                <ul className="space-y-2 pt-2 border-t border-blue-200">
                  <li className="text-xs text-slate-700 flex items-start gap-2"><span className="text-blue-600 font-bold">•</span> Desayuno: Avena con manzana y nueces.</li>
                  <li className="text-xs text-slate-700 flex items-start gap-2"><span className="text-blue-600 font-bold">•</span> Almuerzo: Pescado a la plancha con quinua y ensalada de espinaca.</li>
                  <li className="text-xs text-slate-700 flex items-start gap-2"><span className="text-blue-600 font-bold">•</span> Cena: Crema de verduras ligera.</li>
                </ul>
              </div>
            </div>

            {/* Menú 2 */}
            <div className="rounded-3xl border border-amber-200 bg-amber-50/60 p-6 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="relative h-44 rounded-2xl overflow-hidden shadow-inner">
                  <img src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=500&q=80" alt="Deportivo" className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-md bg-amber-100 text-amber-800">
                      Alta Energía ⚡
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-extrabold text-lg text-slate-900">El Menú Deportivo</h4>
                  <p className="text-xs font-medium text-slate-600 mt-1 italic">🎯 Objetivo: Recuperar músculos y dar energía rápida.</p>
                </div>
                <ul className="space-y-2 pt-2 border-t border-amber-200">
                  <li className="text-xs text-slate-700 flex items-start gap-2"><span className="text-amber-600 font-bold">•</span> Desayuno: Huevos revueltos con tocino y pan integral.</li>
                  <li className="text-xs text-slate-700 flex items-start gap-2"><span className="text-amber-600 font-bold">•</span> Almuerzo: Pasta con salsa de tomate y trozos de pollo a la parrilla.</li>
                  <li className="text-xs text-slate-700 flex items-start gap-2"><span className="text-amber-600 font-bold">•</span> Cena: Batido de plátano con mantequilla de maní.</li>
                </ul>
              </div>
            </div>

            {/* Menú 3 */}
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-6 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="relative h-44 rounded-2xl overflow-hidden shadow-inner">
                  <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80" alt="Ligero" className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-md bg-emerald-100 text-emerald-800">
                      Fácil Digestión 🥗
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-extrabold text-lg text-slate-900">El Menú Ligero</h4>
                  <p className="text-xs font-medium text-slate-600 mt-1 italic">🎯 Objetivo: Sentirse ágil y sin pesadez.</p>
                </div>
                <ul className="space-y-2 pt-2 border-t border-emerald-200">
                  <li className="text-xs text-slate-700 flex items-start gap-2"><span className="text-emerald-600 font-bold">•</span> Desayuno: Yogur natural con frutas picadas.</li>
                  <li className="text-xs text-slate-700 flex items-start gap-2"><span className="text-emerald-600 font-bold">•</span> Almuerzo: Sopa de verduras con pechuga de pollo deshilachada.</li>
                  <li className="text-xs text-slate-700 flex items-start gap-2"><span className="text-emerald-600 font-bold">•</span> Cena: Ensalada fresca con palta y huevo duro.</li>
                </ul>
              </div>
            </div>

            {/* Menú 4 */}
            <div className="rounded-3xl border border-purple-200 bg-purple-50/60 p-6 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="relative h-44 rounded-2xl overflow-hidden shadow-inner">
                  <img src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=500&q=80" alt="Plant-Based" className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-md bg-purple-100 text-purple-800">
                      Poder Verde 🌱
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-extrabold text-lg text-slate-900">El Menú Plant-Based</h4>
                  <p className="text-xs font-medium text-slate-600 mt-1 italic">🎯 Objetivo: Llenarse de fibra y nutrientes naturales.</p>
                </div>
                <ul className="space-y-2 pt-2 border-t border-purple-200">
                  <li className="text-xs text-slate-700 flex items-start gap-2"><span className="text-purple-600 font-bold">•</span> Desayuno: Batido verde (espinaca, plátano, manzana).</li>
                  <li className="text-xs text-slate-700 flex items-start gap-2"><span className="text-purple-600 font-bold">•</span> Almuerzo: Guiso de lentejas con arroz integral y ensalada.</li>
                  <li className="text-xs text-slate-700 flex items-start gap-2"><span className="text-purple-600 font-bold">•</span> Cena: Tacos de garbanzos con guacamole casero.</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* INTERVENCIONES Y RECURSOS EN PERÚ */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-slate-100 space-y-6">
          <div className="flex items-center gap-4">
            <div className="size-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 shadow-inner">
              <ShieldAlert className="size-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-600 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">Apoyo Estatal</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">Intervenciones y Servicios en Perú</h3>
            </div>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed">
            Es vital que sepas que existen recursos gratuitos a tu disposición respaldados por el MINSA y programas sociales:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm">💊 Suplementación Gratuita</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                En establecimientos de salud puedes recibir suplementos de hierro y ácido fólico para prevenir la anemia, especialmente clave en mujeres en edad menstrual.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm">🩺 Consejería Nutricional</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Los Servicios Diferenciados ofrecen orientación personalizada para mejorar la calidad de tu dieta y prevenir trastornos alimentarios severos.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm">📞 Línea 113 (Opción 3)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Puedes llamar de forma totalmente gratuita y confidencial para recibir asesoría nutricional inmediata por parte de profesionales del MINSA.
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN INTERACTIVA: TEST DE HÁBITOS ALIMENTICIOS */}
        <section className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl space-y-6">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">Autoevaluación</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">¿Qué tan buenos son tus hábitos alimenticios?</h3>
            <p className="text-slate-300 text-xs sm:text-sm">Responde este test rápido para descubrir si vas por buen camino o qué puedes mejorar hoy.</p>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
            
            {/* Pregunta 1 */}
            <div className="space-y-2 pb-4 border-b border-white/10">
              <p className="text-sm font-medium text-slate-200">1. ¿Consumes al menos 3 a 5 porciones de frutas o verduras al día?</p>
              <div className="flex gap-4">
                <button 
                  onClick={() => manejarRespuesta('p1', true)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${respuestasTest.p1 === true ? 'bg-emerald-500 text-white' : 'bg-white/10 hover:bg-white/20 text-slate-300'}`}
                >
                  Sí, casi siempre
                </button>
                <button 
                  onClick={() => manejarRespuesta('p1', false)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${respuestasTest.p1 === false ? 'bg-rose-500 text-white' : 'bg-white/10 hover:bg-white/20 text-slate-300'}`}
                >
                  Rara vez
                </button>
              </div>
            </div>

            {/* Pregunta 2 */}
            <div className="space-y-2 pb-4 border-b border-white/10">
              <p className="text-sm font-medium text-slate-200">2. ¿Evitas bebidas azucaradas o gaseosas en tu día a día?</p>
              <div className="flex gap-4">
                <button 
                  onClick={() => manejarRespuesta('p2', true)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${respuestasTest.p2 === true ? 'bg-emerald-500 text-white' : 'bg-white/10 hover:bg-white/20 text-slate-300'}`}
                >
                  Sí, prefiero agua
                </button>
                <button 
                  onClick={() => manejarRespuesta('p2', false)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${respuestasTest.p2 === false ? 'bg-rose-500 text-white' : 'bg-white/10 hover:bg-white/20 text-slate-300'}`}
                >
                  Consumo seguido
                </button>
              </div>
            </div>

            {/* Pregunta 3 */}
            <div className="space-y-2 pb-4 border-b border-white/10">
              <p className="text-sm font-medium text-slate-200">3. ¿Desayunas todos los días antes de ir a estudiar o entrenar?</p>
              <div className="flex gap-4">
                <button 
                  onClick={() => manejarRespuesta('p3', true)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${respuestasTest.p3 === true ? 'bg-emerald-500 text-white' : 'bg-white/10 hover:bg-white/20 text-slate-300'}`}
                >
                  Siempre desayuno
                </button>
                <button 
                  onClick={() => manejarRespuesta('p3', false)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${respuestasTest.p3 === false ? 'bg-rose-500 text-white' : 'bg-white/10 hover:bg-white/20 text-slate-300'}`}
                >
                  A veces lo salto
                </button>
              </div>
            </div>

            {/* Pregunta 4 */}
            <div className="space-y-2 pb-2">
              <p className="text-sm font-medium text-slate-200">4. ¿Conoces y revisas los octógonos de advertencia en los snacks empaquetados?</p>
              <div className="flex gap-4">
                <button 
                  onClick={() => manejarRespuesta('p4', true)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${respuestasTest.p4 === true ? 'bg-emerald-500 text-white' : 'bg-white/10 hover:bg-white/20 text-slate-300'}`}
                >
                  Sí, los reviso
                </button>
                <button 
                  onClick={() => manejarRespuesta('p4', false)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${respuestasTest.p4 === false ? 'bg-rose-500 text-white' : 'bg-white/10 hover:bg-white/20 text-slate-300'}`}
                >
                  No les tomo atención
                </button>
              </div>
            </div>

            <div className="pt-4 text-center">
              <button
                onClick={calcularTest}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold px-6 py-3 rounded-xl shadow-lg transition-all cursor-pointer text-sm w-full sm:w-auto"
              >
                Ver Mi Resultado 📊
              </button>
            </div>

            {/* Resultado Dinámico */}
            {resultadoTest !== null && (
              <div className="mt-6 p-4 rounded-2xl bg-white/10 border border-emerald-500/40 text-center space-y-2 animate-fadeIn">
                <h4 className="font-bold text-emerald-400 text-base">
                  Obtuviste {resultadoTest} de 4 hábitos saludables.
                </h4>
                <p className="text-xs text-slate-200">
                  {resultadoTest >= 3 
                    ? "¡Excelente trabajo! Tienes bases muy sólidas de autocuidado nutricional. Sigue así." 
                    : "Tienes gran margen de mejora. Intenta incorporar más frutas, agua y recuerda la importancia de no saltarte el desayuno."}
                </p>
              </div>
            )}

          </div>
        </section>

      </main>
    </div>
  );
}