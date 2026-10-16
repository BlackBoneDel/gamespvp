/* ═══════════════════════════════════════════════════════════════
   Games PvP — i18n.js
   Diccionario ES/EN. SOLO se traduce texto descriptivo, instrucciones
   y textos de interfaz. NUNCA se traducen: nombres de técnicas, de
   videojuegos/categorías ("Minecraft PVP", "Cuphead"…), nombres de
   periféricos/marcas/modelos ni nombres de creadores (viven fijos en
   data.js). Las etiquetas genéricas de categoría (Introducción,
   Recomendaciones, Periféricos, Fuentes) sí son texto de interfaz.
   ═══════════════════════════════════════════════════════════════ */

const STRINGS = {
  es: {
    /* Interfaz general */
    skipToContent: 'Saltar al contenido principal',
    splashTag: 'Cargando experiencia #1…',
    openSearch: 'Abrir buscador',
    searchPlaceholder: 'Buscar… (Ctrl + K)',
    searchAria: 'Buscar en todo el sitio',
    searchNoResults: 'Sin resultados para',
    openSettings: 'Abrir configuración',
    closeSettings: 'Cerrar configuración',
    settingsAria: 'Configuración',
    settingsTitle: 'Configuración',
    openMenu: 'Abrir menú',
    footerTagline: 'Mecánicas creadas por la comunidad, explicadas por los mejores jugadores.',
    footerRights: 'Todos los derechos reservados.',
    navIntroduccion: 'Introducción',
    navRecomendaciones: 'Recomendaciones',
    navPerifericos: 'Periféricos',
    navFuentes: 'Fuentes',

    /* Configuración */
    typographyTitle: 'Tipografía',
    fontDefault: 'Fuente predeterminada (según categoría)',
    fontCustom: 'Fuente personalizada',
    fontSelectLabel: 'Fuente personalizada',
    previewTitle: 'Vista previa',
    previewBody: 'Los veloces zorros marrones saltan sobre el perro perezoso. Guías y técnicas.',
    colorsTitle: 'Esquema de colores',
    themeClassic: 'Clásico',
    themeDark: 'Oscuro Morado',
    themeContrast: 'Alto Contraste',
    themeCustom: 'Personalizado',
    colorPrimary: 'Primario',
    colorSecondary: 'Secundario',
    colorAccent: 'Acento',
    langTitle: 'Idioma',
    langNote: 'Solo se traduce el texto descriptivo y de interfaz. Los nombres de técnicas, categorías, productos y creadores se mantienen siempre en su idioma original.',
    resetDefaults: 'Restaurar valores predeterminados',
    resetDone: 'Configuración restaurada ✓',

    /* Componentes */
    btnViewProduct: 'Ver producto',
    btnDownload: 'Descargar',
    btnSoon: 'Próximamente',
    byCreator: 'por',
    sourceLabel: '[Fuente]',
    anchorNav: 'Navegación interna',
    videoCount: 'videos',
    accordionHint: 'Toca para ver la descripción',

    /* Contenido por página */
    introLead: 'Bienvenido a Games PvP',
    introText: 'Games PvP fue creado para ayudar a nuevos gamers y experimentados a conocer las mecánicas creadas por la comunidad, como técnicas y ayudas para superar diferentes situaciones en videojuegos, y cuenta con diferentes videojuegos y videos e información creada por los mayores jugadores de cada videojuego. Especializado en Minecraft PvP.',
    pvpLead: 'Técnicas, configuraciones y guías de los mejores jugadores de Minecraft PvP: sword, UHC, axe, mace, SMP y texture packs.',
    pvpIntroDesc: 'Empieza aquí: una visión completa del PvP moderno de Minecraft (versiones 1.9 a 1.21).',
    pvpKeybindsDesc: 'La distribución de teclas es la base de tu velocidad de reacción y consistencia.',
    pvpConfigsDesc: 'Configuraciones y ajustes usados por jugadores reconocidos.',
    pvpSwordDesc: 'Técnicas fundamentales y avanzadas de combate cuerpo a cuerpo con espada.',
    pvpUhcAxeDesc: 'Escudos, stun, cooldown y trucos de entorno para UHC y combate con hacha.',
    pvpSmpDesc: 'Kits y preparación para supervivencia multijugador.',
    pvpMaceDesc: 'Domina el mace: guías avanzadas, errores comunes y cómo esquivar divebombs.',
    pvpPacksDesc: 'Texture packs recomendados por la comunidad para ver mejor el combate.',
    packBy: 'por',
    speedrunLead: 'Las técnicas esenciales del speedrun de Minecraft, explicadas por la comunidad.',
    techniquesTitle: 'Técnicas de Speedrun',
    videosTitle: 'Videos',
    cupheadLead: 'Guías de speedrun para Cuphead y su DLC, de lo básico a lo avanzado.',
    cupheadSection: 'Speedrun Main Game',
    hollowLead: 'Guías rápidas y rutas de speedrun para Hollow Knight.',
    hollowSection: 'Hollow Knight Crazy Guides',
    recomendacionesLead: 'Cuida tu cuerpo mientras juegas: postura, vista y descansos basados en fuentes médicas.',
    perifericosLead: 'Periféricos recomendados por juego, con especificaciones clave y enlaces oficiales.',
    fuentesLead: 'Todas las URLs y créditos usados en Games PvP, organizados por categoría de origen.',
    refsYoutube: 'Videos de YouTube',
    refsPacks: 'Texture Packs',
    refsHealth: 'Fuentes médicas y de ergonomía',
    refsProducts: 'Periféricos (enlaces oficiales)',
    refsAccessed: 'Consulta',

    /* Salud */
    healthGroupPostura: 'Postura y Ergonomía',
    healthGroupVision: 'Salud Visual',
    healthGroupDescansos: 'Descansos y Articulaciones',
    tipEspalda: 'Espalda recta y apoyada',
    tipEspaldaDesc: 'Mantén la columna alineada con el respaldo de la silla; evita encorvarte durante las partidas.',
    tipMonitor: 'Monitor a la altura de los ojos',
    tipMonitorDesc: 'La pantalla debe estar a la altura de los ojos y aproximadamente a un brazo de distancia.',
    tipBrazos: 'Brazos a 90 grados',
    tipBrazosDesc: 'Apoya los antebrazos en el escritorio y mantén los codos cerca del cuerpo en ángulo recto.',
    tip2020: 'Regla 20-20-20',
    tip2020Desc: 'Cada 20 minutos, mira algo a unos 20 pies (6 metros) de distancia durante al menos 20 segundos.',
    tipLuz: 'Iluminación ambiental',
    tipLuzDesc: 'Evita jugar a oscuras: una buena iluminación del ambiente reduce la fatiga visual.',
    tipParpadeo: 'Parpadeo consciente',
    tipParpadeoDesc: 'Parpadea a propósito y con frecuencia para mantener los ojos hidratados frente a la pantalla.',
    tipPausas: 'Pausas activas de 5-10 min',
    tipPausasDesc: 'Levántate y muévete al menos unos minutos cada hora de juego.',
    tipEstiramientos: 'Estiramientos de muñeca y dedos',
    tipEstiramientosDesc: 'Estira muñecas y dedos con frecuencia para prevenir el síndrome del túnel carpiano.',
    tipHidratacion: 'Hidratación constante',
    tipHidratacionDesc: 'Bebe agua regularmente: la deshidratación causa dolores de cabeza y baja el rendimiento.',
  },

  en: {
    /* General UI */
    skipToContent: 'Skip to main content',
    splashTag: 'Loading the #1 experience…',
    openSearch: 'Open search',
    searchPlaceholder: 'Search… (Ctrl + K)',
    searchAria: 'Search the whole site',
    searchNoResults: 'No results for',
    openSettings: 'Open settings',
    closeSettings: 'Close settings',
    settingsAria: 'Settings',
    settingsTitle: 'Settings',
    openMenu: 'Open menu',
    footerTagline: 'Community-created mechanics, explained by the best players.',
    footerRights: 'All rights reserved.',
    navIntroduccion: 'Introduction',
    navRecomendaciones: 'Recommendations',
    navPerifericos: 'Peripherals',
    navFuentes: 'Sources',

    /* Settings */
    typographyTitle: 'Typography',
    fontDefault: 'Default font (per category)',
    fontCustom: 'Custom font',
    fontSelectLabel: 'Custom font',
    previewTitle: 'Live preview',
    previewBody: 'The quick brown fox jumps over the lazy dog. Guides and techniques.',
    colorsTitle: 'Color scheme',
    themeClassic: 'Classic',
    themeDark: 'Dark Purple',
    themeContrast: 'High Contrast',
    themeCustom: 'Custom',
    colorPrimary: 'Primary',
    colorSecondary: 'Secondary',
    colorAccent: 'Accent',
    langTitle: 'Language',
    langNote: 'Only descriptive and interface text is translated. Technique names, categories, products and creators always keep their original language.',
    resetDefaults: 'Restore default settings',
    resetDone: 'Settings restored ✓',

    /* Components */
    btnViewProduct: 'View product',
    btnDownload: 'Download',
    btnSoon: 'Coming soon',
    byCreator: 'by',
    sourceLabel: '[Source]',
    anchorNav: 'Internal navigation',
    videoCount: 'videos',
    accordionHint: 'Tap to see the description',

    /* Page content */
    introLead: 'Welcome to Games PvP',
    introText: 'Games PvP was created to help new and experienced gamers discover community-created mechanics, such as techniques and aids to overcome different situations in video games, and it features different video games along with videos and information created by the top players of each game. Specialized in Minecraft PvP.',
    pvpLead: 'Techniques, settings and guides from the best Minecraft PvP players: sword, UHC, axe, mace, SMP and texture packs.',
    pvpIntroDesc: 'Start here: a complete overview of modern Minecraft PvP (versions 1.9 to 1.21).',
    pvpKeybindsDesc: 'Your keybind layout is the base of your reaction speed and consistency.',
    pvpConfigsDesc: 'Settings and configurations used by recognized players.',
    pvpSwordDesc: 'Fundamental and advanced melee techniques with the sword.',
    pvpUhcAxeDesc: 'Shields, stun, cooldown and environment tricks for UHC and axe combat.',
    pvpSmpDesc: 'Kits and preparation for multiplayer survival.',
    pvpMaceDesc: 'Dominate the mace: advanced guides, common mistakes and how to dodge divebombs.',
    pvpPacksDesc: 'Texture packs recommended by the community to see combat better.',
    packBy: 'by',
    speedrunLead: 'The essential Minecraft speedrun techniques, explained by the community.',
    techniquesTitle: 'Speedrun Techniques',
    videosTitle: 'Videos',
    cupheadLead: 'Speedrun guides for Cuphead and its DLC, from beginner to advanced.',
    cupheadSection: 'Speedrun Main Game',
    hollowLead: 'Quick guides and speedrun routes for Hollow Knight.',
    hollowSection: 'Hollow Knight Crazy Guides',
    recomendacionesLead: 'Take care of your body while gaming: posture, eyesight and breaks based on medical sources.',
    perifericosLead: 'Recommended peripherals per game, with key specs and official links.',
    fuentesLead: 'All URLs and credits used in Games PvP, organized by source category.',
    refsYoutube: 'YouTube videos',
    refsPacks: 'Texture Packs',
    refsHealth: 'Medical and ergonomics sources',
    refsProducts: 'Peripherals (official links)',
    refsAccessed: 'Accessed',

    /* Health */
    healthGroupPostura: 'Posture & Ergonomics',
    healthGroupVision: 'Visual Health',
    healthGroupDescansos: 'Breaks & Joints',
    tipEspalda: 'Straight, supported back',
    tipEspaldaDesc: 'Keep your spine aligned with the chair backrest; avoid slouching during games.',
    tipMonitor: 'Monitor at eye level',
    tipMonitorDesc: 'The screen should be at eye level and about an arm’s length away.',
    tipBrazos: 'Arms at 90 degrees',
    tipBrazosDesc: 'Rest your forearms on the desk and keep your elbows close to your body at a right angle.',
    tip2020: '20-20-20 rule',
    tip2020Desc: 'Every 20 minutes, look at something about 20 feet (6 meters) away for at least 20 seconds.',
    tipLuz: 'Ambient lighting',
    tipLuzDesc: 'Avoid playing in the dark: good ambient lighting reduces eye strain.',
    tipParpadeo: 'Conscious blinking',
    tipParpadeoDesc: 'Blink on purpose and often to keep your eyes hydrated in front of the screen.',
    tipPausas: 'Active breaks of 5-10 min',
    tipPausasDesc: 'Stand up and move for at least a few minutes every hour of play.',
    tipEstiramientos: 'Wrist and finger stretches',
    tipEstiramientosDesc: 'Stretch your wrists and fingers often to prevent carpal tunnel syndrome.',
    tipHidratacion: 'Constant hydration',
    tipHidratacionDesc: 'Drink water regularly: dehydration causes headaches and lowers performance.',
  },
};

let currentLang = 'es';

/** Cambia el idioma activo (ES/EN). */
export function setLang(lang) {
  currentLang = STRINGS[lang] ? lang : 'es';
}

/** Idioma activo. */
export function getLang() {
  return currentLang;
}

/** Traduce una clave del diccionario (fallback: la propia clave). */
export function t(key) {
  return STRINGS[currentLang][key] ?? STRINGS.es[key] ?? key;
}

/** Aplica las traducciones a los elementos estáticos del DOM ([data-i18n*]). */
export function applyStaticI18n() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
    el.setAttribute('placeholder', t(el.dataset.i18nPh));
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria));
  });
}
