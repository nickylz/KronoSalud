import React from 'react';
import { Phone, MapPin, Globe, Users, ShieldCheck, HeartHandshake, Brain, Activity, AlertTriangle, ArrowRight } from 'lucide-react';
import { resourceSections } from '../datos/orientacionData';

const getCategoryIcon = (id) => {
    switch(id) {
        case 'telefonicas': return <Phone className="size-6 text-teal-600" />;
        case 'centros': return <MapPin className="size-6 text-blue-600" />;
        case 'portales': return <Globe className="size-6 text-amber-600" />;
        case 'redes': return <Users className="size-6 text-purple-600" />;
        default: return <ShieldCheck className="size-6 text-slate-600" />;
    }
};

export default function Orientacion({ onIrAutochequeo }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-16">
      
      {/* Encabezado Principal estilo Banner */}
      <section className="w-full bg-gradient-to-r from-[#2B4789] to-[#3a5fa1] py-14 px-4 sm:px-8 text-white shadow-md mb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
                <span className="bg-[#E36D9B] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">Red de Apoyo Segura</span>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Directorio de Ayuda y Protección</h1>
                <p className="text-slate-100 text-base md:text-lg font-medium leading-relaxed">
                    Recursos oficiales, líneas inmediatas y centros especializados diseñados para garantizar tu derecho a la salud y una vida libre de violencia.
                </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 flex flex-col gap-3 w-full md:w-auto">
                <div className="flex items-center gap-3">
                    <ShieldCheck className="size-8 text-[#E7DD6A]" />
                    <div>
                        <h4 className="font-bold text-sm">Atención Confidencial</h4>
                        <p className="text-xs text-slate-200">Espacios seguros y gratuitos</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* NUEVA SECCIÓN: Reconociendo Alertas (Salud Mental y Emociones) */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">Salud Mental y Emociones</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Reconociendo Alertas</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Comprende las situaciones más comunes que afectan a tu edad para identificar cuando es momento de buscar apoyo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Ansiedad y Depresión */}
            <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-t-8 border-teal-500 border-x border-b border-slate-100 flex flex-col justify-between">
              <div>
                <div className="size-14 rounded-2xl bg-teal-50 flex items-center justify-center mb-6 shadow-inner">
                  <Brain className="size-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Ansiedad y Depresión</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Son las principales causas de morbilidad. Es normal sentir miedo o tristeza, pero si interfieren con tu vida diaria (escuela, amigos), es momento de buscar ayuda profesional.
                </p>
              </div>
            </div>

            {/* Trastornos de Conducta */}
            <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-t-8 border-blue-500 border-x border-b border-slate-100 flex flex-col justify-between">
              <div>
                <div className="size-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 shadow-inner">
                  <Activity className="size-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Trastornos de Conducta</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Ayuda a identificar comportamientos agresivos o desafiantes que actúan como señales claras de que algo no anda bien a nivel emocional.
                </p>
              </div>
            </div>

            {/* Autoagresión */}
            <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-t-8 border-rose-500 border-x border-b border-slate-100 flex flex-col justify-between">
              <div>
                <div className="size-14 rounded-2xl bg-rose-50 flex items-center justify-center mb-6 shadow-inner">
                  <AlertTriangle className="size-6 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Autoagresión y Prevención</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Incluye información preventiva sobre lesiones autoinfligidas, las cuales representan un riesgo importante y requieren atención especializada inmediata en la adolescencia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ACCESO A LA HERRAMIENTA DE AUTOCHEQUEO (HEADSSS) */}
        <section className="bg-gradient-to-br from-slate-900 via-[#2B4789] to-[#1f3568] rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="space-y-4 max-w-2xl z-10">
            <span className="bg-[#E36D9B] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">Herramienta Interactiva</span>
            <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">El Mapa "HEADSSS"</h3>
            <p className="text-slate-200 text-sm md:text-base leading-relaxed">
              Realiza una autoevaluación guiada sobre tu hogar, educación, actividades, entorno digital y bienestar general.
            </p>
          </div>
          <button
            onClick={onIrAutochequeo}
            className="z-10 bg-[#10B183] hover:bg-[#0e9c73] text-white font-extrabold px-8 py-4 rounded-2xl shadow-lg transition-all flex items-center gap-3 cursor-pointer text-base flex-shrink-0"
          >
            Iniciar Autochequeo <ArrowRight className="size-5" />
          </button>
        </section>

        {/* Cuadrícula de Secciones de Directorio */}
        <div className="grid md:grid-cols-2 gap-8">
            {resourceSections.map((section) => (
              <div 
                key={section.id} 
                className={`bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border-t-8 ${section.borderColor} border-x border-b border-slate-100 flex flex-col justify-between`}
              >
                <div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className={`size-14 rounded-2xl ${section.bgColor} flex items-center justify-center shadow-inner`}>
                            {getCategoryIcon(section.id)}
                        </div>
                        <h2 className="text-lg md:text-xl font-bold text-slate-900 leading-snug">{section.title}</h2>
                    </div>

                    <div className="space-y-4">
                      {section.items.map((item, index) => (
                        <div key={index} className="bg-slate-50/70 hover:bg-slate-100/80 transition-colors p-4 rounded-2xl border border-slate-100 flex flex-col gap-1">
                            <div className="flex justify-between items-start gap-2">
                                <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                                <span className="text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200/60 px-2.5 py-0.5 rounded-full flex-shrink-0">
                                    {item.contact}
                                </span>
                            </div>
                            <p className="text-slate-600 text-xs leading-relaxed mt-1">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                </div>
              </div>
            ))}
        </div>

        {/* Tarjeta inferior estilo Banner de Acción */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-3 max-w-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E36D9B]">Compromiso ZeUMe</span>
                <h3 className="text-2xl font-extrabold text-slate-900">Tu bienestar es lo primero</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Estos recursos construyen una red de apoyo segura que garantiza al adolescente el ejercicio pleno de su derecho a la salud y a una vida libre de violencia.
                </p>
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="bg-[#2B4789] text-white p-4 rounded-2xl flex items-center gap-3 shadow-lg">
                    <HeartHandshake className="size-8 text-[#E7DD6A]" />
                    <div>
                        <p className="text-xs text-slate-300 font-medium">Soporte Activo</p>
                        <p className="font-bold text-sm">Perú 2026</p>
                    </div>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
}