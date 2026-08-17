import React from 'react';
import { HeartPulse, Brain, Apple, ShieldCheck, Lock, Activity, ArrowRight, Sparkles, CheckCircle2, BarChart3, PieChart, Users, AlertTriangle } from 'lucide-react';

export default function MiSalud({ onIrOrientacion, onNavegarSeccion }) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-16">
      
      {/* Banner Superior Estilizado */}
      <section className="w-full bg-gradient-to-r from-[#2B4789] to-[#3a5fa1] py-14 px-4 sm:px-8 text-white shadow-md mb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="bg-[#E36D9B] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">Salud Integral</span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Tu Bienestar, Tu Espacio</h1>
            <p className="text-slate-100 text-base md:text-lg font-medium leading-relaxed">
              Descubre recursos, herramientas y tus derechos fundamentales para cuidar de tu salud física, mental y emocional en esta etapa de grandes cambios.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 flex flex-col gap-3 w-full md:w-auto">
            <div className="flex items-center gap-3">
              <HeartPulse className="size-8 text-[#E7DD6A]" />
              <div>
                <h4 className="font-bold text-sm">Desarrollo Pleno</h4>
                <p className="text-xs text-slate-200">Información confiable y sin juicios</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* BLOQUE 1: ¿Qué es el Bienestar? */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-slate-100 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">Concepto Clave</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">¿Qué es el Bienestar?</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              El bienestar adolescente no es solo la ausencia de enfermedad, sino el estado en el que tienes el apoyo, la confianza y los recursos necesarios para prosperar, desarrollar tu pleno potencial y ejercer tus derechos. Tu salud integral incluye sentirte bien físicamente, estar en calma mentalmente y tener una nutrición que te dé energía para tus proyectos.
            </p>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-2xl border border-teal-100 flex flex-col items-center text-center gap-3">
            <div className="size-14 rounded-2xl bg-teal-500 text-white flex items-center justify-center shadow-md">
              <Sparkles className="size-7" />
            </div>
            <h4 className="font-bold text-slate-900 text-base">Cuerpo, Mente y Energía</h4>
            <p className="text-xs text-slate-600">Un equilibrio fundamental para alcanzar todas tus metas.</p>
          </div>
        </section>

        {/* ================= PANEL DE ESTADÍSTICAS GLOBALES ================= */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">Evidencia Científica</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2">La Realidad en Cifras</h2>
            </div>
            <p className="text-slate-500 text-xs md:text-sm max-w-md">
              Datos clave a escala global sobre los retos que enfrentan los adolescentes en salud mental, actividad, nutrición y protección.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Tarjeta Estadística 1: Salud Mental -> Clicable para ir a salud.jsx */}
            <div 
              onClick={() => onNavegarSeccion && onNavegarSeccion('salud')}
              className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="size-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600 group-hover:scale-110 transition-transform">
                    <Brain className="size-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-700 px-2.5 py-1 rounded-full">Salud Mental</span>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900 tracking-tight">Top 6</div>
                  <p className="text-xs font-medium text-slate-500 mt-1">Factores principales de pérdida de años saludables</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  Los trastornos depresivos y de ansiedad figuran entre los seis principales factores que generan pérdida de años de vida saludable en adolescentes.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-rose-600">
                <span>Ver detalles en Salud</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Tarjeta Estadística 2: Actividad Física -> Clicable para ir a ejercicio.jsx */}
            <div 
              onClick={() => onNavegarSeccion && onNavegarSeccion('ejercicio')}
              className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="size-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                    <Activity className="size-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full">&lt; 20%</span>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900 tracking-tight">&lt; 20%</div>
                  <p className="text-xs font-medium text-slate-500 mt-1">Cumplen la meta global de ejercicio</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  Menos del 20% de los adolescentes a nivel mundial cumple con la meta de 60 minutos diarios de actividad moderada a intensa.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-amber-600">
                <span>Ver detalles de Ejercicio</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Tarjeta Estadística 3: Nutrición -> Clicable para ir a nutricion.jsx */}
            <div 
              onClick={() => onNavegarSeccion && onNavegarSeccion('nutricion')}
              className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="size-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                    <Apple className="size-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full">Nutrición</span>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900 tracking-tight">&lt; 2g / 5x</div>
                  <p className="text-xs font-medium text-slate-500 mt-1">Límites diarios de sal y raciones de frutas</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  La alimentación saludable implica restringir la sal a menos de 2g diarios y los azúcares libres a menos del 10% de la energía total, además de consumir 5 raciones de frutas o verduras al día.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-emerald-600">
                <span>Ver detalles de Nutrición</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Tarjeta Estadística 4: Salud Sexual -> Clicable para ir a em.jsx */}
            <div 
              onClick={() => onNavegarSeccion && onNavegarSeccion('em')}
              className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="size-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                    <Users className="size-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-700 px-2.5 py-1 rounded-full">43%</span>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900 tracking-tight">43%</div>
                  <p className="text-xs font-medium text-slate-500 mt-1">Necesidad insatisfecha en países de ingresos bajos/medianos</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  Existe una necesidad insatisfecha de métodos anticonceptivos modernos que alcanza al 43% de las adolescentes de 15 a 19 años en países de ingresos bajos y medianos.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-indigo-600">
                <span>Ver detalles de Salud Reproductiva</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>
        </section>

        {/* BLOQUE 2: Tu Cerebro y BLOQUE 4: Salud Mental */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Tu Cerebro */}
          <div className="bg-white rounded-3xl p-8 shadow-md border-t-8 border-blue-500 border-x border-b border-slate-100 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="size-14 rounded-2xl bg-blue-50 flex items-center justify-center shadow-inner">
                <Brain className="size-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Tu Cerebro: Una Ventana de Oportunidad</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Durante la adolescencia, tu cerebro experimenta cambios rápidos (neuroplasticidad) que te permiten aprender nuevas habilidades y adaptarte a situaciones cambiantes. Es normal sentir emociones intensas o tener ganas de experimentar cosas nuevas debido al desarrollo de tu cerebro.
              </p>
              <div className="bg-blue-50/70 p-4 rounded-xl border border-blue-100 text-xs text-blue-900 space-y-1">
                <strong>💡 Tip:</strong> Puedes canalizar esa energía hacia actividades constructivas como el arte, el deporte o la práctica de la conciencia plena (mindfulness), que ayuda a mejorar el autocontrol y reducir el estrés.
              </div>
            </div>
          </div>

          {/* Salud Mental y Alertas */}
          <div className="bg-white rounded-3xl p-8 shadow-md border-t-8 border-teal-500 border-x border-b border-slate-100 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="size-14 rounded-2xl bg-teal-50 flex items-center justify-center shadow-inner">
                <Activity className="size-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Salud Mental y Alertas</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Los problemas de salud mental, como la ansiedad y la depresión, son causas comunes de malestar en esta etapa. No estás solo/a: se estima que <strong>1 de cada 5 adolescentes</strong> enfrenta algún desafío de salud mental cada año.
              </p>
              <div className="bg-teal-50/70 p-4 rounded-xl border border-teal-100 text-xs text-teal-900 space-y-2">
                <p><strong>⚠️ Busca ayuda si:</strong> El miedo o la tristeza interfieren con tus estudios, tus amistades o tu sueño.</p>
                <p><strong>✨ Recuerda:</strong> Pedir apoyo es un acto de valentía y el primer paso para recuperar tu equilibrio emocional.</p>
              </div>
            </div>
          </div>

        </div>

        {/* BLOQUE 5: Nutrición y Autocuidado */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-md border-t-8 border-amber-500 border-x border-b border-slate-100 space-y-6">
          <div className="flex items-center gap-4">
            <div className="size-14 rounded-2xl bg-amber-50 flex items-center justify-center shadow-inner">
              <Apple className="size-6 text-amber-600" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">Nutrición y Energía</span>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mt-2">Nutrición y Autocuidado</h3>
            </div>
          </div>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Para que tu cuerpo crezca sano, es fundamental una alimentación balanceada. La deficiencia de hierro (anemia) es uno de los mayores riesgos de salud en adolescentes y puede causarte cansancio o falta de concentración.
          </p>

          <div className="grid md:grid-cols-2 gap-6 pt-2">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="size-4 text-amber-600" /> En el centro de salud puedes recibir:
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Consejería nutricional y suplementos de hierro más ácido fólico para prevenir la anemia.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="size-4 text-amber-600" /> Actividad física recomendada:
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Intenta realizar al menos 60 minutos diarios de actividad física (jugar, correr o caminar) para fortalecer tus huesos y mejorar tu estado de ánimo.
              </p>
            </div>
          </div>
        </section>

        {/* BLOQUE 6 y 7: Salud Sexual y Privacidad */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Salud Sexual y Reproductiva */}
          <div className="bg-white rounded-3xl p-8 shadow-md border-t-8 border-rose-500 border-x border-b border-slate-100 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="size-14 rounded-2xl bg-rose-50 flex items-center justify-center shadow-inner">
                <ShieldCheck className="size-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Salud Sexual y Reproductiva</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Tienes derecho a recibir información clara, científica y sin prejuicios sobre tu sexualidad.
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">•</span> Puedes acceder a orientación en planificación familiar, métodos anticonceptivos gratuitos y pruebas de VIH/ITS.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">•</span> <strong>Tu autonomía:</strong> En Perú, los adolescentes de 14 a 17 años pueden acceder a pruebas rápidas de VIH de forma voluntaria e independiente. No es obligatorio acudir con tus padres para recibir atención en los servicios diferenciados.
                </li>
              </ul>
            </div>
          </div>

          {/* Privacidad y Confidencialidad */}
          <div className="bg-white rounded-3xl p-8 shadow-md border-t-8 border-indigo-500 border-x border-b border-slate-100 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="size-14 rounded-2xl bg-indigo-50 flex items-center justify-center shadow-inner">
                <Lock className="size-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Privacidad y Confidencialidad</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Tu información de salud es privada. Los profesionales de salud tienen la obligación de respetar tu confidencialidad y asegurar un espacio donde no seas juzgado/a.
              </p>
              <div className="bg-indigo-50/70 p-4 rounded-xl border border-indigo-100 text-xs text-indigo-950">
                <strong>🔒 Derecho garantizado:</strong> Siempre tienes derecho a solicitar un momento de consulta a solas, incluso si vas acompañado/a por un adulto.
              </div>
            </div>
          </div>

        </div>

        <section className="bg-gradient-to-br from-slate-900 via-[#2B4789] to-[#1f3568] rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="space-y-3 max-w-xl">
            <span className="bg-[#E36D9B] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">Red de Apoyo</span>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">¿Necesitas orientación profesional?</h3>
            <p className="text-slate-200 text-sm md:text-base leading-relaxed">
              Explora nuestro directorio completo de líneas gratuitas, centros de salud especializados y canales confidenciales en Perú.
            </p>
          </div>
          <button
            onClick={onIrOrientacion}
            className="z-10 bg-[#10B183] hover:bg-[#0e9c73] text-white font-extrabold px-8 py-4 rounded-2xl shadow-lg transition-all flex items-center gap-3 cursor-pointer text-base flex-shrink-0"
          >
            Ir a Orientación <ArrowRight className="size-5" />
          </button>
        </section>

      </main>
    </div>
  );
}