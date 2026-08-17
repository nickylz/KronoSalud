import React from 'react';
import { HeartPulse, Brain, Apple, ShieldCheck, Lock, Activity, ArrowRight, Sparkles, CheckCircle2, Users, ExternalLink, ShieldAlert, ArrowLeft, Dumbbell, Flame, Utensils } from 'lucide-react';

// ==========================================
// PÁGINA DE DETALLE (SUB-VISTA / COMPONENTE)
// ==========================================
export function DetalleSalud({ temaId, onVolver }) {
  // Configuración de contenidos detallados para cada tema con gráficos y opciones avanzadas
  const contenidoDetalle = {
    mental: {
      titulo: "Salud Mental: Fortaleciendo la Resiliencia",
      badge: "Salud Mental",
      colorBadge: "bg-rose-100 text-rose-700",
      gradiente: "from-rose-500 to-pink-600",
      icono: <Brain className="size-8" />,
      resumen: "La salud mental es una de las principales áreas de bienestar, ya que los trastornos mentales representan el 13% de la carga mundial de morbilidad en adolescentes.",
      datosClave: [
        "Los trastornos de ansiedad y depresión son las causas predominantes de malestar.",
        "Se estima que 1 de cada 5 adolescentes enfrenta un desafío de salud mental cada año."
      ],
      herramienta: {
        nombre: "Práctica de Conciencia Plena (Mindfulness)",
        descripcion: "Definida como prestar atención al momento presente sin juzgar. Esta técnica induce una neuroplasticidad que ayuda a mejorar el autocontrol y la regulación emocional."
      },
      alerta: "Si el miedo o la tristeza interfieren con el sueño, los estudios o las amistades, es fundamental buscar ayuda profesional."
    },
    ejercicio: {
      titulo: "Ejercicio: Actívate por tu Bienestar",
      badge: "Actividad Física",
      colorBadge: "bg-amber-100 text-amber-700",
      gradiente: "from-amber-500 to-orange-600",
      icono: <Activity className="size-8" />,
      resumen: "No necesitas un gimnasio costoso para mantenerte activo. Lograr los 60 minutos diarios recomendados es muy fácil si divides tu tiempo en rutinas exprés y dinámicas.",
      datosClave: [
        "Más del 80% de los adolescentes a nivel mundial no realiza suficiente actividad física.",
        "El movimiento constante mejora drásticamente la concentración y la calidad del sueño."
      ],
      esEjercicio: true, // Indicador especial para renderizar rutinas y gráficos
      rutinas: [
        {
          id: 1,
          titulo: "⏱️ Rutina 1: Cardio Express (15 Minutos)",
          subtitulo: "Ideal para despertar el cuerpo por la mañana.",
          imagen: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
          ejercicios: [
            "40 segundos de Jumping Jacks (Polichinelas).",
            "40 segundos de rodillas arriba (Skipping).",
            "40 segundos de saltos de tijera.",
            "Descansa 20 segundos entre cada uno y repite el circuito 3 veces."
          ]
        },
        {
          id: 2,
          titulo: "💪 Rutina 2: Fuerza en Casa (Sin pesas)",
          subtitulo: "Ideal para fortalecer músculos y postura.",
          imagen: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80",
          ejercicios: [
            "15 Sentadillas (espalda recta, bajando lentamente).",
            "10 Flexiones de brazos (puedes apoyar las rodillas si estás empezando).",
            "30 segundos de plancha (Plank) abdominal.",
            "Realiza 3 series de este bloque completo."
          ]
        },
        {
          id: 3,
          titulo: "🧘‍♀️ Rutina 3: Relajación y Estiramiento",
          subtitulo: "Perfecto después de estar mucho tiempo sentado estudiando.",
          imagen: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
          ejercicios: [
            "Estiramiento de cuello (15 segundos a cada lado).",
            "Tocar la punta de los pies sin doblar rodillas (20 segundos).",
            "Respiración profunda estirando los brazos hacia el techo (5 repeticiones lentas)."
          ]
        }
      ],
      alerta: "Mantén una rutina diaria activa para mejorar tu rendimiento académico y bienestar general."
    },
    nutricion: {
      titulo: "Nutrición: Energía para Crecer",
      badge: "Nutrición",
      colorBadge: "bg-emerald-100 text-emerald-700",
      gradiente: "from-emerald-500 to-teal-600",
      icono: <Apple className="size-8" />,
      resumen: "Mantener una alimentación balanceada no tiene por qué ser aburrido. Explora estas 4 opciones de menús diseñadas para darte energía, concentración y vitalidad en tu día a día.",
      datosClave: [
        "La anemia ferropénica (deficiencia de hierro) es la principal causa de morbilidad nutricional en adolescentes.",
        "Consumir alimentos variados asegura un crecimiento óptimo y previene fatiga."
      ],
      esNutricion: true, // Indicador especial para mostrar las 4 opciones de dietas con diseño bonito
      dietas: [
        {
          titulo: "El Menú del Estudiante",
          subtag: "Máxima Concentración 🧠",
          color: "bg-blue-50 border-blue-200 text-blue-900",
          badgeColor: "bg-blue-100 text-blue-800",
          imagen: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=80",
          objetivo: "Mantener la mente alerta para estudiar.",
          items: [
            "Desayuno: Avena con manzana y nueces.",
            "Almuerzo: Pescado a la plancha con quinua y ensalada de espinaca.",
            "Cena: Crema de verduras ligera."
          ]
        },
        {
          titulo: "El Menú Deportivo",
          subtag: "Alta Energía ⚡",
          color: "bg-amber-50 border-amber-200 text-amber-900",
          badgeColor: "bg-amber-100 text-amber-800",
          imagen: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=500&q=80",
          objetivo: "Recuperar músculos y dar energía rápida.",
          items: [
            "Desayuno: Huevos revueltos con unas tiras de tocino crujiente y pan integral.",
            "Almuerzo: Pasta con salsa de tomate y trozos de pollo a la parrilla.",
            "Cena: Batido de plátano con mantequilla de maní."
          ]
        },
        {
          titulo: "El Menú Ligero",
          subtag: "Fácil Digestión 🥗",
          color: "bg-emerald-50 border-emerald-200 text-emerald-900",
          badgeColor: "bg-emerald-100 text-emerald-800",
          imagen: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80",
          objetivo: "Sentirse ágil y sin pesadez.",
          items: [
            "Desayuno: Yogur natural con frutas picadas.",
            "Almuerzo: Sopa de verduras con pechuga de pollo deshilachada.",
            "Cena: Ensalada fresca con palta (aguacate) y huevo duro."
          ]
        },
        {
          titulo: "El Menú Plant-Based",
          subtag: "Poder Verde 🌱",
          color: "bg-purple-50 border-purple-200 text-purple-900",
          badgeColor: "bg-purple-100 text-purple-800",
          imagen: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=500&q=80",
          objetivo: "Llenarse de fibra y nutrientes naturales.",
          items: [
            "Desayuno: Batido verde (espinaca, plátano, manzana).",
            "Almuerzo: Guiso de lentejas con arroz integral y ensalada de tomate.",
            "Cena: Tacos de garbanzos con guacamole."
          ]
        }
      ],
      alerta: "En Perú, los centros de salud ofrecen suplementación gratuita de hierro más ácido fólico para adolescentes con el fin de prevenir la anemia."
    },
    sexual: {
      titulo: "Salud Sexual y Uso de Anticonceptivos",
      badge: "Salud Reproductiva",
      colorBadge: "bg-indigo-100 text-indigo-700",
      gradiente: "from-indigo-600 to-purple-600",
      icono: <ShieldCheck className="size-8" />,
      resumen: "Garantizar que la demanda de anticonceptivos sea satisfecha con métodos modernos es un indicador crítico de salud reproductiva.",
      datosClave: [
        "En América Latina y el Caribe, aprox. el 72% de las adolescentes tienen cubiertas sus necesidades de planificación familiar.",
        "Tienes derecho a una atención confidencial, empática y sin prejuicios en cualquier centro de salud."
      ],
      herramienta: {
        nombre: "Derechos y Privacidad",
        descripcion: "En Perú, los adolescentes de 14 a 17 años pueden acceder de forma autónoma a servicios de planificación familiar y pruebas de VIH."
      },
      alerta: "Puedes consultar de forma gratuita y confidencial llamando a la Línea 113, opción 3 del MINSA."
    }
  };

  const info = contenidoDetalle[temaId] || contenidoDetalle.mental;

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-16 animate-fadeIn">
      {/* Header tipo página */}
      <div className={`w-full bg-gradient-to-r ${info.gradiente} py-12 px-4 sm:px-8 text-white shadow-md mb-10`}>
        <div className="max-w-4xl mx-auto space-y-4">
          <button
            onClick={onVolver}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs px-4 py-2 rounded-xl backdrop-blur-md transition-all cursor-pointer"
          >
            <ArrowLeft className="size-4" /> Volver a Mi Salud
          </button>
          <div className="flex items-center gap-4 pt-2">
            <div className="size-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-inner flex-shrink-0">
              {info.icono}
            </div>
            <div>
              <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${info.colorBadge} bg-white text-slate-900`}>
                {info.badge}
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-2">{info.titulo}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido detallado de la página */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Resumen Principal */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-100 space-y-4">
          <h3 className="text-lg font-bold text-slate-900">Panorama General y Evidencia Científica</h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {info.resumen}
          </p>
        </section>

        {/* CONTENIDO ESPECIAL PARA NUTRICIÓN (4 Opciones de Dietas Bonitas) */}
        {info.esNutricion && (
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">Planes Alimenticios</span>
              <h3 className="text-2xl font-extrabold text-slate-900">4 Opciones de Dietas para tu Día a Día</h3>
              <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto">Selecciona la combinación que mejor se adapte a tus gustos y objetivos de energía.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {info.dietas.map((dieta, index) => (
                <div key={index} className={`rounded-3xl border p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between ${dieta.color}`}>
                  <div className="space-y-4">
                    <div className="relative h-44 rounded-2xl overflow-hidden shadow-inner">
                      <img src={dieta.imagen} alt={dieta.titulo} className="w-full h-full object-cover" />
                      <div className="absolute top-3 right-3">
                        <span className={`text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-md ${dieta.badgeColor}`}>
                          {dieta.subtag}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-extrabold text-lg text-slate-900">{dieta.titulo}</h4>
                      <p className="text-xs font-medium text-slate-600 mt-1 italic">🎯 {dieta.objetivo}</p>
                    </div>
                    <ul className="space-y-2 pt-2 border-t border-slate-200/60">
                      {dieta.items.map((item, idx) => (
                        <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CONTENIDO ESPECIAL PARA EJERCICIOS (Imágenes y Rutinas) */}
        {info.esEjercicio && (
          <section className="space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">Rutinas Exprés</span>
              <h3 className="text-2xl font-extrabold text-slate-900">Entrena en Casa sin Complicaciones</h3>
              <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto">Sigue estas rutinas visuales para mantener tu cuerpo fuerte y activo.</p>
            </div>

            <div className="space-y-6">
              {info.rutinas.map((rutina) => (
                <div key={rutina.id} className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-100 grid md:grid-cols-3 gap-6 items-center">
                  <div className="relative h-48 md:h-full min-h-[160px] rounded-2xl overflow-hidden shadow-inner">
                    <img src={rutina.imagen} alt={rutina.titulo} className="w-full h-full object-cover" />
                  </div>
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <h4 className="text-lg font-extrabold text-slate-900">{rutina.titulo}</h4>
                      <p className="text-xs font-medium text-amber-600 mt-0.5">{rutina.subtitulo}</p>
                    </div>
                    <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      {rutina.ejercicios.map((ej, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="size-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span>{ej}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Datos Clave (Para otras secciones) */}
        {!info.esNutricion && !info.esEjercicio && (
          <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-100 space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Datos Clave a Considerar</h3>
            <div className="grid gap-3">
              {info.datosClave.map((dato, index) => (
                <div key={index} className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <CheckCircle2 className="size-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{dato}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Herramienta / Recomendación (Si aplica) */}
        {info.herramienta && (
          <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-100 space-y-3">
            <h3 className="text-lg font-bold text-slate-900">Enfoque y Herramienta Práctica</h3>
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-2">
              <h4 className="font-bold text-blue-950 text-sm">💡 {info.herramienta.nombre}</h4>
              <p className="text-xs sm:text-sm text-blue-900 leading-relaxed">{info.herramienta.descripcion}</p>
            </div>
          </section>
        )}

        {/* Alerta o Nota Importante */}
        <section className="bg-gradient-to-br from-slate-900 to-[#2B4789] rounded-3xl p-6 sm:p-8 text-white shadow-xl space-y-3">
          <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
            <ShieldAlert className="size-5" /> Nota Importante / Alerta Temprana
          </div>
          <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
            {info.alerta}
          </p>
        </section>

      </main>
    </div>
  );
}