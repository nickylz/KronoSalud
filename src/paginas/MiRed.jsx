import React, { useState } from 'react';
import {
  Scale,
  GraduationCap,
  Briefcase,
  TrendingDown,
  Landmark,
  PieChart,
  Activity,
  Cpu,
  Award,
  HeartPulse,
  History,
  Layers,
  BarChart3,
  Users,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  HeartHandshake
} from 'lucide-react';

const datosMilena = [
  {
    titulo: '1. El Costo de Oportunidad Global',
    sub: 'Impacto macroeconómico y distribución del costo en la región',
    imagen: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80',
    icono: <Scale className="w-6 h-6 text-[#E36D9B]" />,
    texto: 'El embarazo en la adolescencia no es solo un evento de salud; es un fenómeno que drena la economía de las naciones al impedir que las jóvenes alcancen su máximo potencial productivo.',
    puntos: [
      'Impacto Regional: El costo anual acumulado para 15 países de América Latina y el Caribe asciende a 15.357 millones de dólares (1% del PIB combinado).',
      'Distribución: Las mujeres y su entorno asumen el 88,2% (USD 13.538 millones) y el Estado el 11,8% restante (USD 1.818 millones).',
      'Variación severa por país: Panamá (3,49%), Surinam (3,12%), Honduras (2,09%) y Bolivia (1,39%).'
    ]
  },
  {
    titulo: '2. La Trampa de la Brecha Educativa',
    sub: 'Limitación drástica en la formación de capital humano',
    imagen: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    icono: <GraduationCap className="w-6 h-6 text-[#10B183]" />,
    texto: 'La maternidad temprana actúa como un freno al progreso social, obstaculizando de manera permanente la trayectoria académica de las jóvenes.',
    puntos: [
      'Desigualdad Superior: Solo el 6,4% de las madres adolescentes alcanzan estudios terciarios, frente al 19% de quienes postergaron su maternidad.',
      'Probabilidades: Las madres adultas tienen tres veces más oportunidades de obtener un título universitario.',
      'Pérdida Económica: La región pierde 4.524 millones de dólares anuales por la falta de culminación de niveles educativos.'
    ]
  },
  {
    titulo: '3. Penalización Salarial y Brecha de Ingresos',
    sub: 'Menores ingresos durante toda la vida laboral activa',
    imagen: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    icono: <TrendingDown className="w-6 h-6 text-[#2B4789]" />,
    texto: 'El rezago educativo y la inserción precaria se traducen directamente en sueldos reducidos y una pérdida sostenida en la capacidad adquisitiva.',
    puntos: [
      'Ingresos Disminuidos: Las mujeres que fueron madres en la adolescencia ganan en promedio un 24% menos que aquellas que tuvieron hijos a partir de los 20 años.',
      'Casos Extremos: Brechas salariales del 40% en Panamá y 32% en México.',
      'Costo Per Cápita: Una madre temprana deja de ganar en promedio 1.243 dólares anuales.'
    ]
  },
  {
    titulo: '4. Exclusión del Mercado Laboral',
    sub: 'Barreras estructurales para conciliar cuidados y empleo',
    imagen: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    icono: <Briefcase className="w-6 h-6 text-[#E36D9B]" />,
    texto: 'Las responsabilidades del hogar y la falta de redes de apoyo limitan drásticamente las oportunidades de inserción laboral formal.',
    puntos: [
      'Inactividad Laboral: Tasa del 42,7% para madres adolescentes frente al 37,9% de madres adultas.',
      'Desempleo: Registro del 9,6% al buscar empleo, superando el 7% de las madres adultas.',
      'Carga de Cuidados: Alta incidencia del Trabajo Doméstico No Remunerado (TDNR) en sectores de menores recursos.'
    ]
  },
  {
    titulo: '5. Consecuencias para las Finanzas del Estado',
    sub: 'Renuncia fiscal, gastos sanitarios y pérdida de vidas',
    imagen: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    icono: <Landmark className="w-6 h-6 text-[#10B183]" />,
    texto: 'Los gobiernos enfrentan una doble carga: un incremento en el gasto público de salud y una menor recaudación impositiva a futuro.',
    puntos: [
      'Renuncia Fiscal: Los Estados dejan de percibir 1.015 millones de dólares anuales en impuestos (IVA e ISR).',
      'Gastos en Salud: La atención del parto y puerperio adolescente cuesta unos 803 millones de dólares al año.',
      'Vidas Perdidas: La mortalidad materna en adolescentes representa una pérdida de 28.607 años de vida potencial.'
    ]
  },
  {
    titulo: '6. El Costo del Bono Demográfico',
    sub: 'Desperdicio del potencial productivo y de género',
    imagen: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    icono: <PieChart className="w-6 h-6 text-[#2B4789]" />,
    texto: 'Comprometer la ventana de oportunidad demográfica actual limita severamente el desarrollo económico a largo plazo de la región.',
    puntos: [
      'Malogro de Oportunidades: Se desaprovecha el bono de género al excluir prematuramente a las mujeres del sistema productivo.',
      'Dato Clave: Invertir en prevenir el embarazo adolescente no es un gasto, es la inversión más rentable para el Estado.',
      'Retorno Social: Por cada dólar invertido, el retorno económico y social es de hasta 40 dólares.'
    ]
  }
];

const datos = [
  {
    titulo: 'Brecha Educativa',
    descripcion: 'Solo el 6.4% de madres adolescentes alcanzan estudios superiores.',
    color: 'from-blue-50 to-indigo-50',
    chip: 'Educación'
  },
  {
    titulo: 'Impacto en Ingresos',
    descripcion: 'Las madres tempranas ganan un 24% menos en su vida adulta.',
    color: 'from-rose-50 to-pink-50',
    chip: 'Economía'
  },
  {
    titulo: 'Inversión Inteligente',
    descripcion: 'Por cada $1 invertido en prevención, el Estado recibe hasta $40 de retorno.',
    color: 'from-emerald-50 to-teal-50',
    chip: 'Prevención'
  }
];

const pilares = [
  {
    titulo: 'Protección y acceso',
    texto: 'Garantizar servicios seguros, confidenciales y cercanos a la adolescencia reduce riesgos de embarazo temprano y mejora la calidad de atención.'
  },
  {
    titulo: 'Educación sexual integral',
    texto: 'La información oportuna y sin tabúes ayuda a tomar decisiones informadas, libres y responsables.'
  },
  {
    titulo: 'Red de apoyo',
    texto: 'Familias, docentes, profesionales y comunidades fortalecen la capacidad de decisión y el bienestar emocional.'
  }
];

export default function MiRed() {
  const [seccionActiva, setSeccionActiva] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-16">
      <section className="w-full bg-gradient-to-r from-[#2B4789] to-[#3a5fa1] py-14 px-4 sm:px-8 text-white shadow-md mb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="bg-[#E36D9B] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">Mi Red</span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">El Impacto en Cifras</h1>
            <p className="text-slate-100 text-base md:text-lg font-medium leading-relaxed">
              América Latina y el Caribe tiene la segunda tasa de fecundidad adolescente más alta del mundo. Entender los datos es el primer paso para cambiar nuestra realidad.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 flex flex-col gap-3 w-full md:w-auto">
            <div className="flex items-center gap-3">
              <BarChart3 className="size-8 text-[#E7DD6A]" />
              <div>
                <h4 className="font-bold text-sm">Datos clave</h4>
                <p className="text-xs text-slate-200">Situación real y urgente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">Evidencia</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2">El precio de la desigualdad</h2>
            </div>
            <p className="text-slate-500 text-xs md:text-sm max-w-md">
              Las decisiones, políticas y redes de apoyo marcan una gran diferencia en la vida de las adolescentes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {datos.map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${item.color} rounded-3xl p-8 shadow-md border border-slate-100 hover:shadow-xl transition-all`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="size-12 rounded-2xl bg-white/80 flex items-center justify-center text-lg font-black text-slate-800 shadow-sm">
                      {index + 1}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white/80 text-slate-700 px-2.5 py-1 rounded-full">{item.chip}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 leading-tight">{item.titulo}</h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">{item.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-slate-100">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="size-14 rounded-2xl bg-pink-50 flex items-center justify-center shadow-inner">
                <Scale className="size-6 text-[#E36D9B]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E36D9B] bg-pink-50 border border-pink-200 px-3 py-1 rounded-full">Metodología</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2">El costo real de la desigualdad</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden">
              <div className="xl:col-span-5 relative h-72 sm:h-80 xl:h-auto bg-slate-100 overflow-hidden">
                <img
                  src={datosMilena[seccionActiva].imagen}
                  alt={datosMilena[seccionActiva].titulo}
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B4789]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow border border-slate-100 flex items-center gap-2">
                  {datosMilena[seccionActiva].icono}
                  <span className="text-[#2B4789] font-extrabold text-xs">Punto {seccionActiva + 1} de 6</span>
                </div>
              </div>

              <div className="xl:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    {datosMilena[seccionActiva].icono}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#2B4789] leading-snug">
                      {datosMilena[seccionActiva].titulo}
                    </h3>
                  </div>
                  <p className="text-[#10B183] text-xs font-bold uppercase tracking-wide mb-3">
                    {datosMilena[seccionActiva].sub}
                  </p>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                    {datosMilena[seccionActiva].texto}
                  </p>

                  <div className="space-y-2 border-t border-slate-100 pt-4">
                    {datosMilena[seccionActiva].puntos.map((punto, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <span className="text-[#E36D9B] font-bold mt-0.5">•</span>
                        <span className="leading-relaxed">{punto}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => setSeccionActiva(prev => (prev === 0 ? datosMilena.length - 1 : prev - 1))}
                    className="bg-[#2B4789] hover:bg-[#20366a] text-[#E7DD6A] px-4 py-2 rounded-xl font-bold text-xs shadow transition cursor-pointer"
                  >
                    ← Anterior
                  </button>

                  <div className="flex gap-1.5">
                    {datosMilena.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setSeccionActiva(index)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${seccionActiva === index ? 'bg-[#E36D9B] w-5' : 'bg-slate-200 w-2'}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setSeccionActiva(prev => (prev === datosMilena.length - 1 ? 0 : prev + 1))}
                    className="bg-[#2B4789] hover:bg-[#20366a] text-[#E7DD6A] px-4 py-2 rounded-xl font-bold text-xs shadow transition cursor-pointer"
                  >
                    Siguiente →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-slate-100 space-y-6">
          <div className="flex items-center gap-4">
            <div className="size-14 rounded-2xl bg-blue-50 flex items-center justify-center shadow-inner">
              <ShieldCheck className="size-6 text-blue-600" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">Alertas clave</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2">No dejar a nadie atrás</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pilares.map((pilar, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-900 text-base mb-3">{pilar.titulo}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{pilar.texto}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-md border-t-8 border-blue-500 border-x border-b border-slate-100 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="size-14 rounded-2xl bg-blue-50 flex items-center justify-center shadow-inner">
                <Users className="size-6 text-blue-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">Impacto en la adolescencia</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                El embarazo en niñas menores de 15 años está vinculado a situaciones de violencia sexual. En Perú, menos del 30% de los embarazos adolescentes son planificados.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md border-t-8 border-emerald-500 border-x border-b border-slate-100 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="size-14 rounded-2xl bg-emerald-50 flex items-center justify-center shadow-inner">
                <TrendingUp className="size-6 text-emerald-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">Inversión social rentable</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Invertir en prevención no es un gasto; es una estrategia de desarrollo con retorno social y económico sostenido para la población.
              </p>
            </div>
          </div>
        </div>

        <section className="bg-gradient-to-br from-slate-900 via-[#2B4789] to-[#1f3568] rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="space-y-3 max-w-xl">
            <span className="bg-[#E36D9B] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">Acción</span>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">#165MillonesDeRazones para invertir en el futuro.</h3>
            <p className="text-slate-200 text-sm md:text-base leading-relaxed">
              Fortalecer la salud, la educación y la protección es clave para construir una adolescencia segura y con oportunidades reales.
            </p>
          </div>
          <button className="z-10 bg-[#10B183] hover:bg-[#0e9c73] text-white font-extrabold px-8 py-4 rounded-2xl shadow-lg transition-all flex items-center gap-3 cursor-pointer text-base flex-shrink-0">
            Accede a nuestra red de servicios <ArrowRight className="size-5" />
          </button>
        </section>

        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-slate-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="size-14 rounded-2xl bg-pink-50 flex items-center justify-center shadow-inner">
              <HeartHandshake className="size-6 text-pink-600" />
            </div>
            <div>
              <span className="text-xs font-bold text-pink-600 bg-pink-50 border border-pink-200 px-3 py-1 rounded-full">Conclusión</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2">La prevención es la mejor inversión</h3>
            </div>
          </div>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            “Invertir en prevenir el embarazo adolescente no es un gasto; es la inversión más rentable para el Estado. Por cada dólar invertido, el retorno social y económico puede llegar hasta 40 dólares.”
          </p>
        </section>

        <div className="w-full space-y-12">
          <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-200/80">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-pink-50 rounded-2xl text-[#E36D9B]">
                <Activity size={24} />
              </div>
              <div>
                <span className="text-[#E36D9B] text-xs font-bold uppercase tracking-wider">Salud Integral</span>
                <h2 className="text-[#2B4789] text-xl sm:text-2xl font-extrabold">Más allá del embarazo: panorama adolescente</h2>
              </div>
            </div>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
              Es fundamental mostrar que la salud de los jóvenes es integral. Estos datos complementan la visión de prevención:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <h4 className="font-extrabold text-[#2B4789] text-sm mb-1">Carga de Enfermedad</h4>
                <p className="text-slate-600 text-xs leading-relaxed">Trastornos depresivos, ansiedad y anemia ferropénica entre las 5 principales causas de años vividos con discapacidad (AVD).</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <h4 className="font-extrabold text-[#2B4789] text-sm mb-1">Mortalidad No Materna</h4>
                <p className="text-slate-600 text-xs leading-relaxed">Traumatismos por el tránsito lideran en varones adolescentes; en mujeres de mayor edad destaca la incidencia de tuberculosis.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <h4 className="font-extrabold text-[#2B4789] text-sm mb-1">Riesgo Ambiental</h4>
                <p className="text-slate-600 text-xs leading-relaxed">Agua no apta, saneamiento inadecuado y contaminación por partículas afectan de forma desproporcionada su desarrollo.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-200/80">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-50 rounded-2xl text-[#2B4789]">
                <Cpu size={24} />
              </div>
              <div>
                <span className="text-[#2B4789] text-xs font-bold uppercase tracking-wider">Metodologías y Metadatos</span>
                <h2 className="text-[#2B4789] text-xl sm:text-2xl font-extrabold">Herramientas de vanguardia para decisores</h2>
              </div>
            </div>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
              Kronosalud se posiciona como referente empleando metodologías internacionales de evaluación:
            </p>
            <div className="space-y-3">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="font-extrabold text-[#2B4789] text-sm">AHSBA (Manual de Evaluación de Obstáculos)</h4>
                  <p className="text-slate-600 text-xs">Herramienta OPS para determinar qué adolescentes se quedan atrás en acceso a servicios y por qué razones estructurales.</p>
                </div>
                <span className="text-[10px] bg-blue-100 text-[#2B4789] font-bold px-2.5 py-1 rounded-full w-fit">OPS / Acceso</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="font-extrabold text-[#2B4789] text-sm">MEMI (Modelo de Estimación de Metas de Impacto)</h4>
                  <p className="text-slate-600 text-xs">Modelo matemático paramétrico para predecir embarazos prevenibles y vidas salvadas invirtiendo en anticonceptivos.</p>
                </div>
                <span className="text-[10px] bg-teal-100 text-[#10B183] font-bold px-2.5 py-1 rounded-full w-fit">Paramétrico</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="font-extrabold text-[#2B4789] text-sm">Cuestionario iScreen</h4>
                  <p className="text-slate-600 text-xs">Herramienta orientada a detectar factores de riesgo sociales y ambientales que afectan a cuidadores y la infancia.</p>
                </div>
                <span className="text-[10px] bg-pink-100 text-[#E36D9B] font-bold px-2.5 py-1 rounded-full w-fit">Social / Riesgo</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-200/80">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-teal-50 rounded-2xl text-[#10B183]">
                <Award size={24} />
              </div>
              <div>
                <span className="text-[#10B183] text-xs font-bold uppercase tracking-wider">Políticas Exitosas</span>
                <h2 className="text-[#2B4789] text-xl sm:text-2xl font-extrabold">Casos de éxito: ¿qué políticas funcionan?</h2>
              </div>
            </div>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
              Ejemplos concretos de impacto regional que demuestran soluciones reales:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <span className="text-xs font-bold text-[#10B183]">Argentina (Plan ENIA)</span>
                <h4 className="font-extrabold text-slate-800 text-sm mb-1">Reducción del 49%</h4>
                <p className="text-slate-600 text-xs">Logró una caída histórica en la tasa de fecundidad adolescente (2018-2021) mediante estrategia intersectorial.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <span className="text-xs font-bold text-[#2B4789]">Chile</span>
                <h4 className="font-extrabold text-slate-800 text-sm mb-1">Reducción del 45%</h4>
                <p className="text-slate-600 text-xs">Disminución sostenida de la maternidad en jóvenes de 15 a 19 años entre 2018 y 2021 gracias a políticas integradas.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <span className="text-xs font-bold text-[#E36D9B]">Jamaica (Programa PAM)</span>
                <h4 className="font-extrabold text-slate-800 text-sm mb-1">Retorno Escolar del 73%</h4>
                <p className="text-slate-600 text-xs">Modelo pionero logrando que el 73% de madres adolescentes vuelvan a estudiar y el 90% adopte anticonceptivos.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <span className="text-xs font-bold text-[#2B4789]">México (ENAPEA)</span>
                <h4 className="font-extrabold text-slate-800 text-sm mb-1">Cero Nacimientos &lt; 15 años</h4>
                <p className="text-slate-600 text-xs">Estrategia enfocada en erradicar la maternidad infantil mediante educación integral y centros especializados.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <HeartPulse className="text-[#E36D9B]" size={22} />
                  <h3 className="text-lg font-extrabold text-[#2B4789]">Salud y Discapacidad</h3>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
                  Los menores con discapacidad tienen un riesgo casi 3 veces mayor de sufrir violencia sexual y entre 27% y 33% más probabilidades de abandonar la secundaria si los entornos no son inclusivos.
                </p>
              </div>
              <span className="text-[10px] bg-pink-50 text-[#E36D9B] font-bold px-2.5 py-1 rounded-full w-fit">Vulnerabilidad Extrema</span>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <History className="text-[#2B4789]" size={22} />
                  <h3 className="text-lg font-extrabold text-[#2B4789]">Retroceso Post-COVID</h3>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
                  La pandemia provocó medio millón de embarazos adicionales por interrupción de servicios, representando un retroceso de entre 4 y 8 años en los logros regionales.
                </p>
              </div>
              <span className="text-[10px] bg-blue-50 text-[#2B4789] font-bold px-2.5 py-1 rounded-full w-fit">Urgencia Aumentada</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-200/80">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-50 rounded-2xl text-[#2B4789]">
                <Layers size={24} />
              </div>
              <div>
                <span className="text-[#2B4789] text-xs font-bold uppercase tracking-wider">Abordaje Sistémico</span>
                <h2 className="text-[#2B4789] text-xl sm:text-2xl font-extrabold">El Modelo Ecológico: más allá de una decisión individual</h2>
              </div>
            </div>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
              El embarazo adolescente es un fenómeno multidimensional que Kronosalud aborda en cuatro niveles clave:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-slate-50 p-3 rounded-2xl text-center border border-slate-100">
                <span className="block font-black text-[#2B4789] text-xs mb-1">Individual</span>
                <span className="text-[11px] text-slate-600">Creencias y educación</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-2xl text-center border border-slate-100">
                <span className="block font-black text-[#10B183] text-xs mb-1">Interpersonal</span>
                <span className="text-[11px] text-slate-600">Padres, docentes y pares</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-2xl text-center border border-slate-100">
                <span className="block font-black text-[#E36D9B] text-xs mb-1">Institucional</span>
                <span className="text-[11px] text-slate-600">Servicios y escuelas</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-2xl text-center border border-slate-100">
                <span className="block font-black text-[#2B4789] text-xs mb-1">Estructural</span>
                <span className="text-[11px] text-slate-600">Leyes y pobreza</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#2B4789] via-[#3a5fa1] to-[#2B4789] p-8 rounded-3xl text-center text-white shadow-xl relative overflow-hidden">
            <span className="bg-[#E7DD6A] text-[#2B4789] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              Visión Kronosalud
            </span>
            <blockquote className="text-lg sm:text-2xl font-extrabold mt-3 max-w-2xl mx-auto leading-snug">
              “Invertir en la salud adolescente hoy genera un dividendo triple: beneficios inmediatos para el joven, salud para su vida adulta futura y bienestar para la próxima generación.”
            </blockquote>
          </div>
        </div>
      </main>
    </div>
  );
}
