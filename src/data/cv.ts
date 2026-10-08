// Contenido de la hoja de vida. Edite este archivo para actualizar el sitio.

export const profile = {
  name: 'Jesús Andrés Silva Plazas',
  role: 'Ingeniero de Sistemas · Magíster en Gestión de la Tecnología Educativa',
  location: 'Garzón, Huila, Colombia',
  email: 'jesus.silvap@gmail.com',
  phone: '+57 311 454 3876',
  license: 'Tarjeta profesional 70255-229147 TLM',
  summary: [
    'Ingeniero de Sistemas y Magíster en Gestión de la Tecnología Educativa, con trayectoria docente desde 2012 como docente de Tecnología e Informática e instructor SENA en la especialidad de Software. Combina la formación por proyectos y la evaluación por resultados de aprendizaje con experiencia actual en el desarrollo y puesta en producción de sistemas de información para entidades públicas.',
    'Integrante del grupo de investigación <strong>INNOVAGRO</strong>, reconocido por Minciencias, y fundador del semillero <strong>MetaTIC</strong>. Cuenta con cinco artículos publicados, ponencias en congresos internacionales, cinco proyectos de investigación liderados en SENNOVA y experiencia como par evaluador de RedCOLSI. Recibió la Exaltación al Mérito Investigativo de la Universidad Cooperativa de Colombia (2020).',
  ],
  purpose:
    'Su propósito es llevar al aula universitaria una formación en ingeniería conectada con problemas reales del territorio.',
};

export const stats = [
  { label: 'Docencia desde', value: '2012' },
  { label: 'Artículos publicados', value: '5' },
  { label: 'Proyectos SENNOVA liderados', value: '5' },
  { label: 'Ponencias internacionales', value: '2' },
];

export type Entry = {
  when: string;
  title: string;
  org: string;
  intro?: string;
  points?: string[];
  current?: boolean;
};

export const education = [
  {
    tag: 'Maestría · 2016 – 2020',
    title: 'Magíster en Gestión de la Tecnología Educativa',
    org: 'Universidad de Santander (UDES), Bucaramanga',
    meta: 'SNIES 91341 · Grado: 22 de julio de 2020',
    note: 'Trabajo de grado: <em>Google Classroom como herramienta de colaboración y productividad en el curso de ofimática de formación complementaria.</em>',
  },
  {
    tag: 'Especialización tecnológica · 2015 – 2016',
    title: 'Desarrollo de Aplicaciones para Dispositivos Móviles',
    org: 'SENA, Garzón',
  },
  {
    tag: 'Pregrado · 2007 – 2012',
    title: 'Ingeniero de Sistemas',
    org: 'Universidad Cooperativa de Colombia, Neiva',
    note: 'Trabajo de grado: <em>Sistemas de clientes livianos para entornos universitarios con licenciamiento libre.</em>',
  },
];

export const teaching: Entry[] = [
  {
    when: '2015 – 2025',
    title: 'Instructor – Especialidad Software',
    org: 'SENA – Centro Agroempresarial y Desarrollo Pecuario del Huila, Garzón',
    intro: 'Formación profesional titulada y complementaria, presencial y virtual, en el área de software.',
    points: [
      'Planeación, ejecución y evaluación de la formación por resultados de aprendizaje, según los diseños curriculares asignados.',
      'Participación en jornadas de diseño y desarrollo curricular de programas de formación profesional integral.',
      'Gestión académica en SOFIA Plus y documentación de procesos formativos en plataformas LMS (guías de aprendizaje, material de apoyo, portafolio de evidencias).',
      'Apoyo a procesos de registro calificado y autoevaluación de programas.',
      'Participación en proyectos de investigación técnica y pedagógica y en semilleros de investigación.',
      'Aplicación de la ruta de prevención de la deserción y seguimiento a etapa productiva.',
    ],
  },
  {
    when: 'feb. – nov. 2022',
    title: 'Maestro por hora cátedra – Tecnología e Informática',
    org: 'Gimnasio Minuto de Dios, Garzón',
    points: [
      'Orientación de Tecnología e Informática en básica secundaria y media académica.',
      'Planeación del área, evaluación del proceso de enseñanza-aprendizaje y aplicación de estrategias metodológicas según resultados.',
      'Dirección de grupo y participación en comités institucionales.',
    ],
  },
  {
    when: 'jun. 2018 – sep. 2019',
    title: 'Docente por hora cátedra – Módulo de TIC',
    org: 'CESALUD – Centro de Educación para el Trabajo y el Desarrollo Humano, Garzón',
    points: [
      'Módulo de Tecnologías de la Información y la Comunicación (20 horas) en los programas técnicos laborales por competencias en Auxiliar en Enfermería, Auxiliar en Servicios Farmacéuticos, Auxiliar en Salud Oral y Auxiliar Administrativo en Salud.',
    ],
  },
  {
    when: 'nov. 2012 – feb. 2015',
    title: 'Docente de Tecnología e Informática',
    org: 'Institución Educativa Jenaro Díaz Jordán – Secretaría de Educación del Huila, Garzón',
    points: [
      'Docente de tiempo completo del área de Tecnología e Informática en básica secundaria (nombramiento provisional, Magisterio).',
      'Apoyo al Programa de Articulación del SENA con la Media Técnica.',
    ],
  },
];

export const work: Entry[] = [
  {
    when: 'may. 2025 – actual',
    current: true,
    title: 'Profesional Universitario, Código 219, Grado 04',
    org: 'Alcaldía de Garzón – Secretaría de Tránsito y Transporte',
    points: [
      'Lidera el desarrollo y la puesta en marcha del <strong>SITT Garzón</strong>, sistema de información multimódulo que centraliza trámites RNA y RNC, certificados de libertad y tradición con generación automática en PDF, inmovilizaciones, asignación de placas, PQRSD y control de carpetas físicas.',
      'Enlace técnico con las plataformas RUNT, SIMIT y Ministerio de Transporte.',
      'Administración de servidores, red interna, direccionamiento IP, seguridad de la red y copias de respaldo.',
      'Documentación técnica de los sistemas y promoción de la integración de las TIC e innovaciones en la entidad.',
    ],
  },
  {
    when: 'feb. 2024 – may. 2025',
    title: 'Profesional en Ingeniería de Sistemas (prestación de servicios)',
    org: 'Empresas Públicas de Garzón – EMPUGAR E.S.P.',
    points: [
      'Desarrollo de interfaces, bases de datos y del sitio web institucional (HTML5, CSS3, JavaScript, frameworks, SQL), conforme a la Ley 1712 de 2014 y la Resolución 1519 de 2020.',
      'Formulación de políticas de ciberseguridad y apoyo al PETI, al Plan de Seguridad y Privacidad de la Información y al plan de tratamiento de riesgos.',
      'Implementación de controles de seguridad a nivel de base de datos y de soluciones de infraestructura TI.',
      'Capacitación a funcionarios en el uso de herramientas tecnológicas.',
    ],
  },
  {
    when: 'abr. 2019 – sep. 2021',
    title: 'Desarrollador de software web y móvil (freelance)',
    org: 'TNT Developers S.A.S., Garzón',
    points: [
      'Levantamiento y estructuración de requerimientos, diseño y arquitectura de aplicaciones web y móviles.',
      'Administración y despliegue de ambientes de calidad y producción.',
      'Proyectos para Garzón Market, Surcap, Celutecn, Prevent SGSST y Colegio Gimnasio Minuto de Dios.',
    ],
  },
  { when: 'feb. 2012 – ene. 2014', title: 'Desarrollador', org: 'JJ System & Netw@re, Garzón' },
  { when: 'oct. 2010 – oct. 2011', title: 'Jefe de soporte', org: 'Computosystem.net, Neiva' },
];

export const research = {
  intro:
    'Integrante del grupo de investigación <strong>INNOVAGRO C.A.D.P.H</strong> (código COL0150674, reconocido por Minciencias) desde junio de 2016, líder del semillero <strong>MetaTIC</strong> desde 2017 y par evaluador de RedCOLSI.',
  awards: [
    {
      tag: '4 de diciembre de 2020',
      title: 'Exaltación al Mérito Investigativo',
      org: 'Universidad Cooperativa de Colombia, Campus Neiva',
      note: 'Por liderar y apoyar durante 10 años el desarrollo científico y tecnológico de Colombia.',
    },
    {
      tag: '2024',
      title: 'Responsable de Centro en SENASoft 2024',
      org: 'Competencia nacional de software del SENA',
      note: 'En representación del Centro Agroempresarial y Desarrollo Pecuario del Huila.',
    },
  ],
  // Agregue `url` a cada artículo para enlazarlo.
  articles: [
    { year: '2019', title: 'Aplicación móvil para el aprendizaje del inglés en el sector caficultor del Huila', authors: 'Silva Plazas, J. A.; Conde Urueña, C. L.; Cubillos Martínez, A.', ref: 'v. 6, pp. 47–57', url: '' },
    { year: '2018', title: 'Sistema de información geográfico del Centro Agroempresarial y Desarrollo Pecuario del Huila para el análisis cartográfico de sus unidades productivas (SIGCADPH)', authors: 'Silva Plazas, J. A.', ref: 'v. 5, pp. 60–70', url: '' },
    { year: '2017', title: 'Evolución del turismo como apuesta potencial para el centro del Huila', authors: 'Manrique Cortés, A. M.; Silva Plazas, J. A.', ref: 'v. 4, pp. 30–42', url: '' },
    { year: '2017', title: 'Automatización de invernadero para producción agrícola con tecnología de punta a bajo costo', authors: 'Rincón Vieda, P. A.; Silva Plazas, J. A.; Torres Camacho, A. F.', ref: 'v. 3, pp. 9–23', url: '' },
    { year: '2016', title: 'Mipymes de Garzón ingresan al negocio del comercio electrónico', authors: 'Rincón Vieda, P. A.; Silva Plazas, J. A.', ref: 'v. 2, pp. 92–104', url: '' },
  ],
  projects: [
    { when: '2021', text: 'Actualización e implementación de una aplicación móvil para la promoción de destinos turísticos del Huila – CenturHuila 3.0' },
    { when: '2019 – 2021', text: 'Aplicación móvil para el aprendizaje del inglés en el sector caficultor del Huila (línea de innovación, código 3825-2018)' },
    { when: '2018', text: 'Análisis cartográfico aplicando modelos vectoriales o ráster en el sector agropecuario del centro del Huila con asistencia de aplicaciones web' },
    { when: '2017', text: 'CENTURHUILA – Evolución del turismo como apuesta potencial para el centro del Huila' },
    { when: '2016', text: 'Sistema de automatización y monitoreo para ambientes controlados para producción agrícola y pecuaria' },
  ],
  talks: [
    '<em>Evolución del turismo como apuesta potencial para el centro del Huila</em> (con A. M. Manrique) — I Congreso Internacional de Innovación Turística y Desarrollo Regional CINTUDER, Santa Marta, 16 y 17 de noviembre de 2017.',
    '<em>Sistema de automatización y monitoreo para ambientes controlados para producción agrícola y pecuaria</em> (póster) — Congreso Internacional de Investigación TEINNOVA, Pereira, 28 y 29 de septiembre de 2017.',
  ],
  reviewer: [
    { when: 'oct. 2023', text: 'Comité Académico Evaluador – XXVI Encuentro Nacional y XX Encuentro Internacional de Semilleros de Investigación ENISI, RedCOLSI Nodo Bolívar, Cartagena.' },
    { when: 'nov. 2020', text: 'Evaluador – Encuentro Internacional de Semilleros “Resiliencia Organizacional y Transformación Digital en Tiempos de Crisis”, Semillero Prexia, Universidad Nacional de Colombia, Medellín.' },
    { when: 'oct. 2019', text: 'Par evaluador de proyectos – RedCOLSI Nodo Cesar.' },
  ],
  software: [
    { tag: '2026', title: 'SITT Garzón', note: 'Sistema de información de la Secretaría de Tránsito y Transporte de Garzón.' },
    { tag: '2016 · v3.0 en 2020', title: 'CenturHuila', note: 'Aplicación móvil de turismo del Huila, publicada en Google Play.' },
    { tag: 'ArcGIS', title: 'SIGCADPH', note: 'Sistema de información geográfica web para el análisis cartográfico de unidades productivas.' },
    { tag: '2018 · CvLAC', title: 'Software a la medida para las mipymes de Garzón', note: 'Aplicativo registrado como producción técnica en CvLAC.' },
  ],
};

export const courses = {
  pedagogy: [
    { year: '2021', name: 'Formación en ambientes virtuales de aprendizaje', inst: 'SENA', hours: '48' },
    { year: '2018', name: 'Train-the-Trainer: Innovación, emprendimiento y protección basados en conocimiento', inst: 'Universidad Nacional de Colombia', hours: '80' },
    { year: '2017', name: 'Competencia laboral: Orientar formación presencial de acuerdo con procedimientos técnicos y normativa (nivel avanzado)', inst: 'SENA', hours: '—' },
    { year: '2016', name: 'Orientación de la formación profesional', inst: 'SENA', hours: '80' },
    { year: '2016', name: 'Diseño de estrategias didácticas para la formación profesional integral', inst: 'SENA', hours: '50' },
    { year: '2016', name: 'Manejo de ambientes virtuales de aprendizaje', inst: 'SENA', hours: '30' },
    { year: '2015', name: 'Orientación de procesos de formación por proyectos con técnicas didácticas activas', inst: 'SENA', hours: '220' },
    { year: '2015', name: 'Competencia laboral: Orientar procesos formativos presenciales con base en planes de formación concertados', inst: 'SENA', hours: '—' },
    { year: '2014', name: 'Diplomado TIC y Educación', inst: 'Fundación Universitaria Católica del Norte', hours: '162' },
    { year: '2014', name: 'Formación tecnopedagógica en ambientes virtuales de aprendizaje Blackboard 9.1', inst: 'SENA', hours: '60' },
  ],
  tech: [
    { year: '2024', name: 'CCNA v7: Switching, Routing and Wireless Essentials (credencial de nivel instructor)', inst: 'Cisco Networking Academy – SENA, Centro de Entrenamiento de Instructores', hours: '—' },
    { year: '2024', name: 'CCNA v7: Introducción a Redes (credencial de nivel instructor)', inst: 'Cisco Networking Academy – SENA, Centro de Entrenamiento de Instructores', hours: '—' },
    { year: '2024', name: 'Análisis exploratorio de datos en Python', inst: 'SENA', hours: '48' },
    { year: '2022', name: 'Fundamentos de arquitectura de software', inst: 'Platzi', hours: '12' },
    { year: '2022', name: 'Patrones y componentes en sistemas de diseño', inst: 'Platzi', hours: '9' },
    { year: '2021', name: 'Desarrollo de habilidades digitales: gestión de la información, construcción de contenido digital, comunicación y colaboración en línea, y experiencias seguras en línea (4 cursos de 48 h)', inst: 'SENA', hours: '192' },
    { year: '2021', name: 'Estructuración de proyectos de investigación', inst: 'SENA', hours: '80' },
    { year: '2018', name: 'Introducción a los sistemas de información geográfica', inst: 'SENA', hours: '80' },
    { year: '2016', name: 'Herramientas metodológicas en investigación: procesos de ciencia, tecnología e innovación', inst: 'SENA', hours: '40' },
    { year: '2015', name: 'Ciudadano Digital', inst: 'Ministerio TIC', hours: '48' },
  ],
};

export const skills = [
  { group: 'Desarrollo web y móvil', items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'PHP', 'Laravel', 'HTML5', 'CSS3', 'Tailwind CSS', 'Flutter', 'Python (análisis de datos)'] },
  { group: 'Bases de datos', items: ['MySQL', 'PostgreSQL', 'Supabase'] },
  { group: 'Infraestructura', items: ['Windows Server', 'Active Directory', 'Linux', 'Docker', 'Redes Cisco (CCNA)', 'MikroTik', 'Hosting y dominios'] },
  { group: 'Inteligencia artificial', items: ['Integración de modelos de lenguaje mediante API en sistemas de información'] },
  { group: 'SIG', items: ['ArcGIS', 'ArcGIS Survey123'] },
  { group: 'Educación virtual', items: ['SOFIA Plus', 'Blackboard', 'Plataformas LMS'] },
  { group: 'Gestión TI pública', items: ['PETI', 'Seguridad y privacidad de la información', 'Ley 1712 de 2014', 'RUNT', 'SIMIT'], wide: true },
];

export const nav = [
  { id: 'perfil', label: 'Perfil' },
  { id: 'formacion', label: 'Formación' },
  { id: 'docencia', label: 'Docencia' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'investigacion', label: 'Investigación' },
  { id: 'complementaria', label: 'Cursos' },
  { id: 'competencias', label: 'Competencias' },
];
