// src/data/portfolio.ts
// ─── Centralized portfolio data ───
// All personal, professional, and project information lives here.
// Components import only what they need.

// ── Types ──

export interface Skill {
  name: string;
  color: string;
}

export interface SkillGroup {
  label: string;
  items: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  active: boolean;
  tasks: string[];
}

export interface Education {
  title: string;
  institution: string;
  period: string;
  type: 'university' | 'course';
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  type: 'enterprise' | 'personal';
  image?: string;
  github?: string;
  link?: string;
  featured?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'email' | 'phone';
}

export interface PersonalInfo {
  label: string;
  value: string;
  icon: 'email' | 'location' | 'briefcase' | 'clock';
}

// ── Profile ──

export const profile = {
  name: 'Luis Fernando Torres',
  role: 'Analista de Sistemas & Web Developer',
  photo: '/images/luis-fernando-web-developer.jpg',
  email: 'luisferucla94@gmail.com',
  phone: '+51944109846',
  location: 'Lima, Perú',
  cvPath: '/cv/Luis_Fernando_Torres_CV.pdf',
} as const;

// ── Social Links ──

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/tlfernando', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/luisfernandotr/', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:luisferucla94@gmail.com', icon: 'email' },
  { label: 'Teléfono', href: 'tel:+51944109846', icon: 'phone' },
];

// ── Personal Info ──

export const personalInfo: PersonalInfo[] = [
  { label: 'Email', value: 'luisferucla94@gmail.com', icon: 'email' },
  { label: 'Ubicación', value: 'Lima, Perú', icon: 'location' },
  { label: 'Modalidad', value: 'Remoto / Tiempo Completo', icon: 'briefcase' },
  { label: 'Experiencia', value: '5+ años', icon: 'clock' },
];

// ── Skills ──

export const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend',
    items: [
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Angular', color: '#DD0031' },
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'HTML5', color: '#E34F26' },
      { name: 'CSS3', color: '#1572B6' },
      { name: 'Tailwind', color: '#06B6D4' },
      { name: 'Bootstrap', color: '#7952B3' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: '.NET', color: '#512BD4' },
      { name: 'NestJS', color: '#E0234E' },
      { name: 'Node.js', color: '#339933' },
    ],
  },
  {
    label: 'Base de Datos',
    items: [
      { name: 'PostgreSQL', color: '#4169E1' },
      { name: 'SQL Server', color: '#CC2927' },
      { name: 'MongoDB', color: '#47A248' },
    ],
  },
  {
    label: 'DevOps & Herramientas',
    items: [
      { name: 'Azure', color: '#0089D6' },
      { name: 'Docker', color: '#2496ED' },
      { name: 'Git', color: '#F05032' },
    ],
  },
];

// ── Experience ──

export const experience: Experience[] = [
  {
    role: 'Desarrollador Web',
    company: 'JDM Tecnología y Soluciones Globales SAC',
    period: '2021 — Presente',
    type: 'Fulltime',
    location: 'Lima, Perú',
    active: true,
    tasks: [
      'Lidero el ciclo completo de desarrollo de aplicaciones escalables, desde el análisis de requerimientos técnicos hasta el despliegue, garantizando entregas alienadas al negocio.',
      'Arquitecto e implemento nuevos módulos core sobre sistemas existentes, utilizando <strong style="color: var(--color-white);">Clean Architecture</strong> y patrones N-Capas para asegurar alta cohesión y mantenimiento a largo plazo.',
      'Responsable del cumplimiento e integración de nuevas normativas dispuestas por la <strong style="color: var(--color-white);">SUNAT</strong> (Perú) y la <strong style="color: var(--color-white);">DGII</strong> (República Dominicana).',
      'Administro la infraestructura en la nube y el proceso de despliegue en entornos críticos de producción, gestionando y aprovisionando máquinas virtuales en <strong style="color: var(--color-white);">Azure</strong>.',
    ],
  },
  {
    role: 'Desarrollador Web JR',
    company: 'JDM Tecnología y Soluciones Globales SAC',
    period: '2019 — 2021',
    type: 'Fulltime',
    location: 'Lima, Perú',
    active: false,
    tasks: [
      'Desarrollé el <strong style="color: var(--color-white);">Front</strong> base del ecosistema EsavDoc; un hito de software crítico que nos otorgó la certificación de la DGII, logrando así abrir proactivamente el mercado en República Dominicana.',
      'Transformé el flujo asíncrono de almacenes y despachos integrando WebSockets mediante <strong style="color: var(--color-white);">SignalR</strong>, logrando un tracking en tiempo real que potenció la eficiencia operativa sin comprometer el rendimiento del servidor.',
      'Diseñé y programé <strong style="color: var(--color-white);">APIs REST</strong> de alto rendimiento en el Backend, utilizando Entity Framework para gestionar volúmenes de datos transaccionales.',
    ],
  },
  {
    role: 'Diseñador Web',
    company: 'JDM Tecnología y Soluciones Globales SAC',
    period: '2017 — 2019',
    type: 'Fulltime',
    location: 'Lima, Perú',
    active: false,
    tasks: [
      'Lideré el diseño UI y el maquetado frontend de la plataforma EsavPay desde sus cimientos, garantizando una arquitectura web responsiva y retención del usuario.',
      'Centralicé y desarrollé un motor de plantillas dinámicas mediante HTML5 y CSS avanzado, para la automatización masiva de las representaciones impresas de comprobantes.',
      'Trabajé de cara al cliente identificando cuellos de botella en su operativa diaria para convertirlos en nuevas características, diseñando pantallas mas deductivas y eficientes.',
    ],
  },
];

// ── Education ──

export const education: Education[] = [
  {
    title: 'Análisis de Sistemas',
    institution: 'Universidad Centroccidental Lisandro Alvarado',
    period: '2012 — 2016',
    type: 'university',
  },
  {
    title: 'Bachiller en Ciencias',
    institution: 'U.E. Hermano Juan',
    period: '2006 - 2011',
    type: 'university',
  },
  {
    title: 'Azure Para Developers .NET | Web Apis con Azure services',
    institution: 'Udemy',
    period: '2025',
    type: 'course',
  },
  {
    title: 'Nest: Desarrollo backend escalable con Node',
    institution: 'Udemy',
    period: '2024',
    type: 'course',
  },
  {
    title: 'Angular de cero a experto',
    institution: 'Udemy',
    period: '2024',
    type: 'course',
  },
  {
    title: 'Clean Architecture y Domain Driven Design en ASP.NET Core 8',
    institution: 'Udemy',
    period: '2024',
    type: 'course',
  },
  {
    title: 'ASP.NET Core 7 & Angular | Docker | SQL Server & MySQL',
    institution: 'Udemy',
    period: '2023',
    type: 'course',
  },
  {
    title: 'Master en programación fullstack JavaScript Angular Node',
    institution: 'Udemy',
    period: '2023',
    type: 'course',
  },
];

// ── Projects ──

export const projects: Project[] = [
  // ── Empresariales ──
  {
    title: 'EsavDoc - Perú',
    description: 'Plataforma validada por SUNAT que permite a las empresas cumplir con los requisitos legales de facturación electrónica en Perú. Garantiza la legalidad y autenticidad de cada transacción comercial. Actualmente cuenta con más de 10,000 usuarios activos.',
    stack: ['HTML5', 'JavaScript', '.NET Core', 'Azure'],
    type: 'enterprise',
    image: '/images/projects/Esavdoc.png',
  },
  {
    title: 'EsavRest - Perú',
    description: 'Sistema de gestión para restaurantes y clubes. Cuenta con módulos de pedidos en línea, control de platos, delivery, cuadre de caja y reportes contables, integrado a Facturación Electrónica. (En construcción - 70%).',
    stack: ['Vue.js', 'JavaScript', '.NET Core', 'Azure'],
    type: 'enterprise',
    image: '/images/projects/EsavRest.png',
  },
  {
    title: 'EsavDoc - República Dominicana',
    description: 'Plataforma validada por la DGII para cumplir con los requisitos legales de facturación electrónica en República Dominicana. Un reto clave fue conseguir la certificación como proveedores autorizados ante la DGII.',
    stack: ['Vue.js', 'JavaScript', '.NET Core', 'Azure'],
    type: 'enterprise',
    image: '/images/projects/EsavdocRD.png',
  },
  {
    title: 'EsavPay - Perú y Rep. Dominicana',
    description: 'Solución multiplataforma para gestionar el cobro electrónico de comprobantes emitidos desde EsavDoc, brindando un alto grado de seguridad en las operaciones de pago de los clientes.',
    stack: ['Angular', 'JavaScript', '.NET Core', 'Azure'],
    type: 'enterprise',
    image: '/images/projects/EsavPay.png',
  },
  {
    title: 'Tablero de Control',
    description: 'Plataforma de monitoreo en tiempo real del procesamiento de comprobantes electrónicos para integradores. Permite además la gestión de tickets de soporte técnico según los SLA establecidos.',
    stack: ['Angular', 'JavaScript', '.NET Core', 'Azure'],
    type: 'enterprise',
    image: '/images/projects/TableroControl.png',
  },
  // ── Personales ──
  {
    title: 'openCash',
    description: 'App de finanzas personales con módulos de gastos, recurrentes y ahorros.',
    stack: ['NestJS', 'PostgreSQL', 'Angular'],
    type: 'personal',
    featured: true,
  },
];
