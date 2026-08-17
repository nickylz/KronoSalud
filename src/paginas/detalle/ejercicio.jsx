import React, { useState } from 'react';
import { Activity, ArrowLeft, CheckCircle2, ShieldAlert, Sparkles, Flame, Clock, Play, Trophy, Heart } from 'lucide-react';

export default function Ejercicio({ onVolver }) {
  // Estado interactivo para sumar minutos de actividad en el día
  const [minutosRegistrados, setMinutosRegistrados] = useState(0);
  const metaDiaria = 60;

  const agregarMinutos = (mins) => {
    setMinutosRegistrados(prev => Math.min(prev + mins, 180));
  };

  const reiniciarMinutos = () => {
    setMinutosRegistrados(0);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20 animate-fadeIn">
      
      {/* HEADER DE LA PÁGINA */}
      <div className="w-full bg-gradient-to-r from-amber-600 to-orange-700 py-12 px-4 sm:px-8 text-white shadow-md mb-10">
        <div className="max-w-5xl mx-auto space-y-4">
          <button
            onClick={onVolver}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs px-4 py-2 rounded-xl backdrop-blur-md transition-all cursor-pointer"
          >
            <ArrowLeft className="size-4" /> Volver a Mi Salud
          </button>
          <div className="flex items-center gap-4 pt-2">
            <div className="size-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-inner flex-shrink-0">
              <Activity className="size-8" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 px-3 py-1 rounded-full">
                Actividad Física y Movimiento
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-2">Activa tu Cuerpo: Muévete por Tu Salud</h1>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* INTRODUCCIÓN Y CONCEPTO */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-slate-100 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">Reto Global</span>
            <h2 className="text-2xl font-extrabold text-slate-900">¿Por qué es vital mantenernos activos?</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              La inactividad física es un problema persistente y generalizado en la adolescencia. A nivel global, transformar tus hábitos de movimiento no solo fortalece tus músculos y huesos, sino que mejora drásticamente la calidad de tu sueño, reduce el estrés y protege tu visión frente al sedentarismo digital.
            </p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-100 flex flex-col items-center text-center gap-3">
            <div className="size-14 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-md">
              <Flame className="size-7" />
            </div>
            <h4 className="font-bold text-slate-900 text-base">Energía en Movimiento</h4>
            <p className="text-xs text-slate-600">Activa tu metabolismo y despeja tu mente todos los días.</p>
          </div>
        </section>

        {/* ESTADÍSTICAS GLOBALES DE INACTIVIDAD */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">Evidencia Científica</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">La Realidad de la Inactividad Física</h2>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm max-w-md">
              Datos clave sobre el sedentarismo y cómo afecta de manera distinta a los jóvenes alrededor del mundo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Tarjeta 1: 81% Inactividad */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all">
              <div className="space-y-4">
                <div className="size-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600">
                  <Activity className="size-6" />
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900 tracking-tight">81%</div>
                  <p className="text-xs font-medium text-rose-600 mt-1">Adolescentes insuficientemente activos (2016)</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  El 81% de los jóvenes entre 11 y 17 años no realiza suficiente actividad física. Esta tendencia ha variado muy poco desde 2001, demostrando que es un problema estructural global.
                </p>
              </div>
            </div>

            {/* Tarjeta 2: Brecha de Género */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all">
              <div className="space-y-4">
                <div className="size-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
                  <ShieldAlert className="size-6" />
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900 tracking-tight">85% vs 78%</div>
                  <p className="text-xs font-medium text-amber-600 mt-1">Mujeres vs Varones inactivos</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  La disparidad de género es constante en todas las regiones del mundo: el 85% de las mujeres adolescentes no cumple con las metas, frente al 78% de los varones.
                </p>
              </div>
            </div>

            {/* Tarjeta 3: Sedentarismo Digital */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all">
              <div className="space-y-4">
                <div className="size-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600">
                  <Clock className="size-6" />
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900 tracking-tight">Pantallas</div>
                  <p className="text-xs font-medium text-purple-600 mt-1">Ocio sedentario y salud visual</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  El uso excesivo de celulares, consolas y TV para fines distintos al estudio genera inactividad estática, lo que está directamente vinculado a trastornos del sueño y miopía.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* LA META: RECOMENDACIONES OFICIALES */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-slate-100 space-y-6">
          <div className="flex items-center gap-4">
            <div className="size-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 shadow-inner">
              <Trophy className="size-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">Estándares OMS</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">¿Cuánto ejercicio debes hacer al día?</h3>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 pt-2">
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="size-4 text-amber-600" /> 60 Minutos Diarios:
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Realizar en promedio al menos <strong>60 minutos diarios</strong> de actividad física cuya intensidad vaya de moderada a intensa.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="size-4 text-amber-600" /> 3 Veces por Semana:
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Incorporar actividades aeróbicas de alta intensidad y ejercicios específicos para <strong>fortalecer músculos y huesos</strong> al menos 3 días por semana.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="size-4 text-amber-600" /> Variedad de Movimiento:
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                No solo es deporte formal; incluye juegos activos, desplazamientos en bicicleta, caminatas largas o clases de educación física escolar.
              </p>
            </div>

          </div>
        </section>

        {/* CONTADOR INTERACTIVO DE 60 MINUTOS */}
        <section className="bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="bg-amber-500 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">Medidor Diario</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Tu Meta: 60 Minutos Hoy</h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-md">Registra tus bloques de movimiento para completar el objetivo diario recomendado por la OMS.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center min-w-[200px]">
              <div className="text-4xl font-black text-amber-400">{minutosRegistrados} / {metaDiaria} min</div>
              <p className="text-xs text-slate-200 mt-1">{minutosRegistrados >= metaDiaria ? "¡Meta cumplida! 🎉" : "Sigue sumando movimiento"}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button 
              onClick={() => agregarMinutos(15)}
              className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-4 py-3 rounded-xl border border-white/10 transition-all cursor-pointer"
            >
              +15 min (Caminata/Bici)
            </button>
            <button 
              onClick={() => agregarMinutos(30)}
              className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold px-4 py-3 rounded-xl shadow-md transition-all cursor-pointer"
            >
              +30 min (Rutina / Deporte)
            </button>
            <button 
              onClick={() => agregarMinutos(60)}
              className="bg-white text-slate-900 hover:bg-slate-100 text-xs font-bold px-4 py-3 rounded-xl shadow-md transition-all cursor-pointer"
            >
              +60 min (Entrenamiento Completo)
            </button>
            <button 
              onClick={reiniciarMinutos}
              className="bg-rose-500/30 hover:bg-rose-500/50 text-rose-200 text-xs font-bold px-3 py-3 rounded-xl border border-rose-500/40 transition-all cursor-pointer"
            >
              Reiniciar
            </button>
          </div>
        </section>

        {/* RUTINAS DE EJERCICIO RECOMENDADAS */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">Guía Práctica</span>
            <h3 className="text-2xl font-extrabold text-slate-900">Rutinas de Ejercicio Recomendadas</h3>
            <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto">Opciones diseñadas para realizar en casa, en el colegio o al aire libre según tu tiempo disponible.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            
            {/* Rutina 1: Exprés */}
            <div className="rounded-3xl border border-amber-200 bg-amber-50/50 p-6 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="relative h-40 rounded-2xl overflow-hidden shadow-inner">
                  <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=500&q=80" alt="Rutina Exprés" className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-md bg-amber-100 text-amber-800">
                      15 - 20 min ⚡
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-extrabold text-lg text-slate-900">Activa-T Exprés</h4>
                  <p className="text-xs font-medium text-slate-600 mt-1 italic">🎯 Ideal para pausas activas o mañanas ocupadas.</p>
                </div>
                <ul className="space-y-2 pt-2 border-t border-amber-200 text-xs text-slate-700">
                  <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">•</span> 3 series de 10 sentadillas libres.</li>
                  <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">•</span> 2 series de 15 segundos de plancha abdominal.</li>
                  <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">•</span> 1 minuto de saltos de tijera (jumping jacks).</li>
                </ul>
              </div>
            </div>

            {/* Rutina 2: Resistencia y Fuerza */}
            <div className="rounded-3xl border border-orange-200 bg-orange-50/50 p-6 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="relative h-40 rounded-2xl overflow-hidden shadow-inner">
                  <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=500&q=80" alt="Fuerza" className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-md bg-orange-100 text-orange-800">
                      30 - 45 min 💪
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-extrabold text-lg text-slate-900">Fuerza y Huesos Sólidos</h4>
                  <p className="text-xs font-medium text-slate-600 mt-1 italic">🎯 Ideal 3 veces por semana para ganar resistencia.</p>
                </div>
                <ul className="space-y-2 pt-2 border-t border-orange-200 text-xs text-slate-700">
                  <li className="flex items-start gap-2"><span className="text-orange-600 font-bold">•</span> Flexiones de pecho modificadas (o estándar).</li>
                  <li className="flex items-start gap-2"><span className="text-orange-600 font-bold">•</span> Zancadas alternadas (lunges) x 12 repeticiones.</li>
                  <li className="flex items-start gap-2"><span className="text-orange-600 font-bold">•</span> Puente de glúteos en suelo x 15 repeticiones.</li>
                </ul>
              </div>
            </div>

            {/* Rutina 3: Cardio al Aire Libre */}
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50/50 p-6 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="relative h-40 rounded-2xl overflow-hidden shadow-inner">
                  <img src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=500&q=80" alt="Cardio" className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-md bg-emerald-100 text-emerald-800">
                      45 - 60 min 🌳
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-extrabold text-lg text-slate-900">Cardio y Descanso Visual</h4>
                  <p className="text-xs font-medium text-slate-600 mt-1 italic">🎯 Ideal para salir de pantallas y oxigenar la mente.</p>
                </div>
                <ul className="space-y-2 pt-2 border-t border-emerald-200 text-xs text-slate-700">
                  <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold">•</span> Caminata rápida o trote ligero al aire libre.</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold">•</span> Paseo en bicicleta protegiendo la visión con luz natural.</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-600 font-bold">•</span> Deportes colectivos (fútbol, básquet o vóley).</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}