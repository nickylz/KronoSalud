export const situacionesJuego = [
  {
    id: 1,
    titulo: "Situación 1: Presión en la relación",
    narrativa: "Tu pareja te insinúa que si de verdad lo/la amas, no deberían usar métodos anticonceptivos.",
    opciones: [
      {
        tipo: "pasiva",
        texto: "Accedes a tener relaciones sin protección por miedo a que se enoje o termine contigo.",
        cambio: { autonomia: -20, redesApoyo: 0, autoestima: -15 },
        mensaje: "Ceder ante la presión afectiva pone en alto riesgo tu salud sexual y tu bienestar."
      },
      {
        tipo: "agresiva",
        texto: "Lo/la insultas duramente tratándolo/a de manipulador/a y te vas furioso/a.",
        cambio: { autonomia: 5, redesApoyo: -20, autoestima: -5 },
        mensaje: "Reaccionar con agresión bloquea el diálogo, aunque es válido poner límites ante la manipulación."
      },
      {
        tipo: "asertiva",
        texto: "Te mantienes firme, le explicas que la protección es responsabilidad de ambos y exiges respeto a tu decisión.",
        cambio: { autonomia: 20, redesApoyo: 15, autoestima: 20 },
        mensaje: "¡Excelente! Defendiste tus derechos sexuales y pusiste un límite claro ante el chantaje emocional."
      }
    ]
  },
  {
    id: 2,
    titulo: "Situación 2: Control excesivo",
    narrativa: "Tu pareja te exige la contraseña de tus redes sociales y revisa con quién hablas bajo el argumento de que 'si no ocultas nada, no debe importar'.",
    opciones: [
      {
        tipo: "pasiva",
        texto: "Le das tus contraseñas y dejas de hablar con ciertos amigos para evitar discusiones.",
        cambio: { autonomia: -25, redesApoyo: -20, autoestima: -20 },
        mensaje: "Permitir el control y el aislamiento es una señal de alerta temprana de violencia de género."
      },
      {
        tipo: "agresiva",
        texto: "Le quitas el celular a la fuerza y le revisas sus cosas también para vengarte.",
        cambio: { autonomia: 0, redesApoyo: -25, autoestima: -10 },
        mensaje: "Responder con conductas tóxicas solo genera un ciclo de violencia mutua."
      },
      {
        tipo: "asertiva",
        texto: "Estableces que la confianza y la privacidad personal son fundamentales y te niegas a entregar tus claves.",
        cambio: { autonomia: 25, redesApoyo: 15, autoestima: 20 },
        mensaje: "¡Muy bien! El respeto a la privacidad propia es un pilar indispensable en una relación sana."
      }
    ]
  },
  {
    id: 3,
    titulo: "Situación 3: Mitos sobre la anticoncepción",
    narrativa: "Un grupo de amigos asegura en una charla que ciertos métodos caseros o 'métodos naturales' son 100% seguros para evitar embarazos no planificados.",
    opciones: [
      {
        tipo: "pasiva",
        texto: "Te quedas callado/a aunque sabes que están difundiendo información errónea y peligrosa.",
        cambio: { autonomia: -10, redesApoyo: 0, autoestima: -10 },
        mensaje: "Guardar silencio ante información falsa sobre salud sexual puede llevar a riesgos innecesarios."
      },
      {
        tipo: "agresiva",
        texto: "Te burlas de ellos públicamente tratándolos de ignorantes y atrasados.",
        cambio: { autonomia: 0, redesApoyo: -20, autoestima: -5 },
        mensaje: "La burla desincentiva que las personas se acerquen a aprender o consultar."
      },
      {
        tipo: "asertiva",
        texto: "Compartes información verídica sobre la importancia de usar métodos anticonceptivos confiables y acudir a centros de salud.",
        cambio: { autonomia: 20, redesApoyo: 20, autoestima: 20 },
        mensaje: "¡Excelente aporte! Promover educación sexual integral previene mitos y embarazos adolescentes."
      }
    ]
  },
  {
    id: 4,
    titulo: "Situación 4: Celos y expresiones de control",
    narrativa: "Tu pareja se molesta y te reclama de forma agresiva porque saliste a un proyecto escolar con compañeros/as de clase.",
    opciones: [
      {
        tipo: "pasiva",
        texto: "Pides perdón por algo que no hiciste y prometes no volver a salir para calmarle.",
        cambio: { autonomia: -20, redesApoyo: -15, autoestima: -20 },
        mensaje: "Justificar los celos enfermizos y limitar tus salidas afecta directamente tu autonomía."
      },
      {
        tipo: "agresiva",
        texto: "Le gritas insultos y le dices que es un/a tóxico/a insoportable.",
        cambio: { autonomia: 5, redesApoyo: -20, autoestima: -5 },
        mensaje: "La confrontación violenta no soluciona los problemas de celos y posesividad."
      },
      {
        tipo: "asertiva",
        texto: "Conversas con calma, pones límites ante los celos infundados y recuerdas que tienes derecho a tu espacio social.",
        cambio: { autonomia: 20, redesApoyo: 20, autoestima: 20 },
        mensaje: "¡Muy bien! Marcar límites ante los celos excesivos previene conductas de control y violencia."
      }
    ]
  },
  {
    id: 5,
    titulo: "Situación 5: Falta de consentimiento",
    narrativa: "Estás en una reunión y notas que alguien presiona a una compañera para que tome alcohol y aprovecharse de su estado.",
    opciones: [
      {
        tipo: "pasiva",
        texto: "Miras hacia otro lado y decides no intervenir para no meterte en problemas ajenos.",
        cambio: { autonomia: -10, redesApoyo: -10, autoestima: -15 },
        mensaje: "La pasividad ante situaciones de vulneración del consentimiento fomenta la impunidad."
      },
      {
        tipo: "agresiva",
        texto: "Te lanzas a los golpes contra la persona agresora de inmediato.",
        cambio: { autonomia: 0, redesApoyo: -25, autoestima: -5 },
        mensaje: "La violencia física escala el peligro en lugar de proteger a la víctima de forma segura."
      },
      {
        tipo: "asertiva",
        texto: "Intervienes de inmediato, apartas a tu compañera del lugar y pides apoyo a personas confiables.",
        cambio: { autonomia: 20, redesApoyo: 25, autoestima: 25 },
        mensaje: "¡Acción ejemplar! Proteger el consentimiento y la integridad de los demás es clave para prevenir agresiones."
      }
    ]
  },
  {
    id: 6,
    titulo: "Situación 6: Acceso a métodos anticonceptivos",
    narrativa: "Tienes dudas sobre salud sexual y reproductiva, pero te da vergüenza acudir a un centro médico o preguntar en casa por temor a los prejuicios.",
    opciones: [
      {
        tipo: "pasiva",
        texto: "Decides no informarte y arriesgarte a tener relaciones sin protección.",
        cambio: { autonomia: -25, redesApoyo: -10, autoestima: -20 },
        mensaje: "Evitar informarte por pena incrementa de forma crítica el riesgo de infecciones y embarazos no planificados."
      },
      {
        tipo: "agresiva",
        texto: "Te enojas con los adultos y la sociedad criticando lo tabú que es hablar del tema.",
        cambio: { autonomia: 5, redesApoyo: -15, autoestima: -5 },
        mensaje: "El enojo social es comprensible, pero no resuelve tu necesidad de información médica."
      },
      {
        tipo: "asertiva",
        texto: "Buscas consejería profesional confidencial en tu centro de salud o con un especialista capacitado.",
        cambio: { autonomia: 25, redesApoyo: 20, autoestima: 25 },
        mensaje: "¡Excelente decisión! Buscar orientación profesional demuestra madurez y autocuidado responsable."
      }
    ]
  },
  {
    id: 7,
    titulo: "Situación 7: Chantaje emocional digital",
    narrativa: "Una expareja amenaza con publicar fotos íntimas tuyas si no aceptas regresar con él/ella.",
    opciones: [
      {
        tipo: "pasiva",
        texto: "Cedes al chantaje y aceptas volver por el miedo profundo a que expongan tu privacidad.",
        cambio: { autonomia: -30, redesApoyo: -20, autoestima: -25 },
        mensaje: "El chantaje y la difusión no consentida de contenido íntimo son delitos graves de violencia digital."
      },
      {
        tipo: "agresiva",
        texto: "Lo/la amenazaras de vuelta por mensaje con hacerle daño físico.",
        cambio: { autonomia: 0, redesApoyo: -25, autoestima: -10 },
        mensaje: "Responder con amenazas agrava la situación legal y personal."
      },
      {
        tipo: "asertiva",
        texto: "Recopilas pruebas (capturas), bloqueas el contacto y buscas apoyo inmediato en tus padres, docentes o instancias legales.",
        cambio: { autonomia: 25, redesApoyo: 25, autoestima: 20 },
        mensaje: "¡Muy bien! Ante la violencia digital y el chantaje, la denuncia y el resguardo de pruebas son vitales."
      }
    ]
  },
  {
    id: 8,
    titulo: "Situación 8: Presión del grupo de pares",
    narrativa: "Tus amigos te presionan y se burlan diciendo que 'ya deberías haber tenido relaciones sexuales' para encajar en el grupo.",
    opciones: [
      {
        tipo: "pasiva",
        texto: "Finges que ya lo hiciste o buscas apresurar tu primera experiencia solo por presión social.",
        cambio: { autonomia: -25, redesApoyo: -10, autoestima: -25 },
        mensaje: "Tomar decisiones sobre tu cuerpo guiado/a por la presión externa vulnera tu bienestar emocional."
      },
      {
        tipo: "agresiva",
        texto: "Te peleas a insultos con ellos diciéndoles que son unos inmaduros metiches.",
        cambio: { autonomia: 5, redesApoyo: -20, autoestima: -5 },
        mensaje: "Reaccionar a los insultos con agresividad aleja la oportunidad de poner límites sanos."
      },
      {
        tipo: "asertiva",
        texto: "Les aclaras con firmeza que cada persona tiene sus propios tiempos y que esperas respeto a tus decisiones.",
        cambio: { autonomia: 25, redesApoyo: 15, autoestima: 25 },
        mensaje: "¡Excelente! Poner límites a la presión de grupo fortalece tu autonomía y autoestima."
      }
    ]
  },
  {
    id: 9,
    titulo: "Situación 9: Proyecto de vida vs. Embarazo adolescente",
    narrativa: "En un debate escolar sobre prevención del embarazo adolescente, alguien argumenta que tener un hijo a temprana edad no cambia en nada las metas personales.",
    opciones: [
      {
        tipo: "pasiva",
        texto: "Te callas para evitar contradecir al grupo, aunque sabes que trunca muchas oportunidades.",
        cambio: { autonomia: -10, redesApoyo: 0, autoestima: -10 },
        mensaje: "Omitir la realidad sobre el impacto del embarazo temprano en las metas educativas limita la prevención."
      },
      {
        tipo: "agresiva",
        texto: "Descalificas a la persona gritando que no tiene idea de la realidad.",
        cambio: { autonomia: 0, redesApoyo: -15, autoestima: -5 },
        mensaje: "La agresividad verbal arruina un espacio que debe ser de análisis formativo."
      },
      {
        tipo: "asertiva",
        texto: "Expones con argumentos claros cómo la planificación y la prevención protegen el proyecto de vida y la educación.",
        cambio: { autonomia: 20, redesApoyo: 20, autoestima: 20 },
        mensaje: "¡Muy bien! Argumentaste con solidez la importancia de la planificación para el futuro juvenil."
      }
    ]
  },
  {
    id: 10,
    titulo: "Situación 10: Definición del consentimiento",
    narrativa: "Una persona te dice que si estás saliendo con alguien, el consentimiento para cualquier acto íntimo se da por sentado automáticamente.",
    opciones: [
      {
        tipo: "pasiva",
        texto: "Asientes con la cabeza por pena a contradecirle, dudando de cómo funcionan las reglas del consentimiento.",
        cambio: { autonomia: -15, redesApoyo: -5, autoestima: -15 },
        mensaje: "Normalizar ideas erróneas sobre el consentimiento pone en riesgo la autonomía corporal."
      },
      {
        tipo: "agresiva",
        texto: "Lo/la tratas de ignorante de mala manera frente a los demás.",
        cambio: { autonomia: 0, redesApoyo: -20, autoestima: -5 },
        mensaje: "Atacar a los demás no aclara los conceptos correctos sobre relaciones sanas."
      },
      {
        tipo: "asertiva",
        texto: "Explicas firmemente que el consentimiento debe ser claro, libre, entusiasta y revocable en cualquier momento.",
        cambio: { autonomia: 25, redesApoyo: 20, autoestima: 25 },
        mensaje: "¡Excelente definición! Tienes muy claro que el consentimiento es pilar absoluto en las relaciones."
      }
    ]
  },
  {
    id: 11,
    titulo: "Situación 11: Comentarios sexistas o acoso callejero",
    narrativa: "Un grupo de conocidos se ríe y hace comentarios invasivos y sexistas sobre el cuerpo de una persona que pasa por la calle.",
    opciones: [
      {
        tipo: "pasiva",
        texto: "Sonríes incómodamente para no ser el/la único/a que no participa de la 'broma'.",
        cambio: { autonomia: -15, redesApoyo: -10, autoestima: -15 },
        mensaje: "Validar pasivamente el acoso callejero o comentarios sexistas fomenta la violencia de género."
      },
      {
        tipo: "agresiva",
        texto: "Los empujas y amenazas a golpes para que se callen la boca.",
        cambio: { autonomia: 5, redesApoyo: -25, autoestima: -5 },
        mensaje: "La violencia física desata un conflicto mayor y no educa sobre el respeto."
      },
      {
        tipo: "asertiva",
        texto: "Les expresas con firmeza que ese tipo de comentarios son falta de respeto y acoso, retirándote del grupo.",
        cambio: { autonomia: 25, redesApoyo: 15, autoestima: 25 },
        mensaje: "¡Muy bien! Rechazar el acoso y marcar una postura ética demuestra un gran compromiso contra la violencia."
      }
    ]
  },
  {
    id: 12,
    titulo: "Situación 12: Comunicación con la familia sobre sexualidad",
    narrativa: "Sientes que necesitas hablar de prevención y anticoncepción en casa, pero te da muchísima pena sacar el tema con tus padres o tutores.",
    opciones: [
      {
        tipo: "pasiva",
        texto: "Te guardas todas tus dudas y prefieres averiguar en fuentes poco confiables de internet.",
        cambio: { autonomia: -15, redesApoyo: -10, autoestima: -15 },
        mensaje: "El miedo a dialogar con la familia te aísla de obtener orientación médica y de confianza."
      },
      {
        tipo: "agresiva",
        texto: "Les reclamas enojado/a que nunca hablan de estos temas y que son anticuados.",
        cambio: { autonomia: 0, redesApoyo: -20, autoestima: -5 },
        mensaje: "Un reclamo agresivo cierra canales de comunicación que podrían abrirse con diálogo."
      },
      {
        tipo: "asertiva",
        texto: "Das el primer paso buscando un momento adecuado para expresarles tus dudas con madurez o pides apoyo en el colegio.",
        cambio: { autonomia: 25, redesApoyo: 25, autoestima: 25 },
        mensaje: "¡Excelente iniciativa! Abrir canales de comunicación familiar o escolar es clave para la prevención."
      }
    ]
  },
  {
    id: 13,
    titulo: "Situación 13: Uso correcto del condón",
    narrativa: "Tu pareja te sugiere tener relaciones sin protección argumentando que 'así no se siente igual', restándole importancia al riesgo de ITS o embarazo.",
    opciones: [
      {
        tipo: "pasiva",
        texto: "Cedes a la petición por pena a incomodar o arruinar el momento.",
        cambio: { autonomia: -25, redesApoyo: 0, autoestima: -20 },
        mensaje: "Ceder en el uso del preservativo pone en peligro directo tu salud y tu proyecto de vida."
      },
      {
        tipo: "agresiva",
        texto: "Lo/la atacas verbalmente acusándolo/a de querer dañarte a propósito.",
        cambio: { autonomia: 5, redesApoyo: -20, autoestima: -5 },
        mensaje: "La agresividad verbal obstaculiza el acuerdo mutuo sobre el cuidado de la salud."
      },
      {
        tipo: "asertiva",
        texto: "Expones con claridad que la protección es indispensable para ambos y que sin ella no hay relaciones.",
        cambio: { autonomia: 30, redesApoyo: 15, autoestima: 25 },
        mensaje: "¡Impecable! Pusiste tu salud y tus límites asertivos por encima de cualquier presión."
      }
    ]
  },
  {
    id: 14,
    titulo: "Situación 14: Violencia psicológica sutil",
    narrativa: "Notas que tu pareja te critica constantemente cómo te vistes, con quién hablas y qué subes a tus redes, diciendo que 'lo hace por tu bien'.",
    opciones: [
      {
        tipo: "pasiva",
        texto: "Cambias tu forma de vestir y de usar tus redes para evitar que se moleste.",
        cambio: { autonomia: -30, redesApoyo: -20, autoestima: -25 },
        mensaje: "Aceptar críticas sobre tu imagen y tus amistades es una forma de violencia psicológica y control."
      },
      {
        tipo: "agresiva",
        texto: "Le criticas sus defectos físicos e insultas a su familia para lastimarle.",
        cambio: { autonomia: 0, redesApoyo: -25, autoestima: -10 },
        mensaje: "Contestar con ataques personales empeora la dinámica destructiva de la relación."
      },
      {
        tipo: "asertiva",
        texto: "Identificas estas conductas de control como violencia psicológica, se las señalas y evalúas terminar la relación si no cambian.",
        cambio: { autonomia: 30, redesApoyo: 25, autoestima: 30 },
        mensaje: "¡Excelente discernimiento! Detectar la violencia psicológica a tiempo protege tu integridad emocional."
      }
    ]
  },
  {
    id: 15,
    titulo: "Situación 15: Red de apoyo ante una emergencia",
    narrativa: "Tienes una situación de emergencia relacionada con la salud sexual o sospecha de riesgo y necesitas orientación urgente.",
    opciones: [
      {
        tipo: "pasiva",
        texto: "Te encierras en ti mismo/a por miedo al qué dirán y no le dices a nadie, esperando que el problema se resuelva solo.",
        cambio: { autonomia: -25, redesApoyo: -25, autoestima: -25 },
        mensaje: "Aislarte en momentos críticos agrava los problemas de salud y prevención."
      },
      {
        tipo: "agresiva",
        texto: "Culpas a todos los que te rodean de tus problemas con gritos y enojo.",
        cambio: { autonomia: 0, redesApoyo: -30, autoestima: -10 },
        mensaje: "La frustración expresada con agresividad aleja a quienes podrían brindarte ayuda."
      },
      {
        tipo: "asertiva",
        texto: "Acudes a tu red de apoyo confiable (familiares cercanos, psicólogo/a escolar o línea de ayuda) para recibir orientación oportuna.",
        cambio: { autonomia: 30, redesApoyo: 30, autoestima: 30 },
        mensaje: "¡Extraordinario! Saber pedir ayuda a profesionales y redes confiables es la mejor forma de cuidar tu bienestar."
      }
    ]
  }
];