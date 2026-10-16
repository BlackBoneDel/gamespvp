/* ═══════════════════════════════════════════════════════════════
   Games PvP — data.js
   Catálogo central de contenido: categorías, videos (IDs de YouTube
   extraídos de las URLs originales), técnicas, packs, salud y productos.

   NOTA DE IDIOMA: los nombres de técnicas, categorías, videos,
   periféricos, marcas y creadores se guardan como texto FIJO (nunca
   se traducen). Solo los campos con `{ es, en }` son traducibles.
   ═══════════════════════════════════════════════════════════════ */

/** Construye la URL de embed de YouTube a partir del ID. */
export const ytEmbed = (id, start = 0) =>
  `https://www.youtube.com/embed/${id}${start ? `?start=${start}` : ''}`;

/** URL de visualización (para la página de Fuentes). */
export const ytWatch = (id, start = 0) =>
  `https://www.youtube.com/watch?v=${id}${start ? `&t=${start}s` : ''}`;

/* ── Categorías (orden exacto del menú; nombres NUNCA se traducen) ── */
export const CATEGORIES = [
  { id: 'introduccion',       path: '/introduccion',       label: 'Introducción',        key: 'navIntroduccion' },
  { id: 'minecraft-pvp',      path: '/minecraft-pvp',      label: 'Minecraft PVP' },
  { id: 'minecraft-speedrun', path: '/minecraft-speedrun', label: 'Minecraft Speedrun' },
  { id: 'cuphead',            path: '/cuphead',            label: 'Cuphead' },
  { id: 'hollow-knight',      path: '/hollow-knight',      label: 'Hollow Knight' },
  { id: 'recomendaciones',    path: '/recomendaciones',    label: 'Recomendaciones',     key: 'navRecomendaciones' },
  { id: 'perifericos',        path: '/perifericos',        label: 'Periféricos',         key: 'navPerifericos' },
  /* Categoría final (también accesible desde el footer) */
  { id: 'fuentes',            path: '/fuentes',            label: 'Fuentes',             key: 'navFuentes' },
];

/* ══════════════════════════ MINECRAFT PVP ══════════════════════════ */

/** Subsecciones con anclas internas (sidebar/tabs). */
export const PVP_SECTIONS = [
  {
    id: 'pvp-intro',
    label: 'Introducción',
    videos: [
      {
        title: 'How to DOMINATE Minecraft PvP! (1.9-1.21) Intel Edits',
        yt: 'rA_7wmPG_bg',
        creator: 'Intel Edits',
      },
    ],
  },
  {
    id: 'pvp-keybinds',
    label: 'KeyBinds',
    videos: [
      { title: 'TheoBaldTheBird Keybinds Guide', yt: '471bVlFOpwY', creator: 'TheoBaldTheBird' },
    ],
  },
  {
    id: 'pvp-configs',
    label: 'Configs and Settings',
    videos: [
      { title: 'Coldified Settings', yt: 'vtZ7yLvIVPg', creator: 'Coldified' },
      { title: 'Swight Settings', yt: 'sfFolsqcrXI', creator: 'Swight' },
      { title: 'Marlowww Settings', yt: 'qHxhd84fnLI', creator: 'Marlowww' },
    ],
  },
  {
    id: 'pvp-sword',
    label: 'Sword PVP',
    emph: true, // título en negrita
    videos: [
      { title: 'Melee', yt: 'G_-FqCxdnAE' },
      { title: 'Conexion Sword Tutorial 1.9', yt: '5HhAeUU3AvU' },
      { title: 'ADVANCED Sword PvP Tutorial | Every Technique Explained! (1.20+)', yt: 'NinYq0LcqS8' },
      { title: 'Why Your Minecraft Combos Suck', yt: 'fOvafhkcmzk' },
      { title: 'Crit Chain Guide', yt: '96FUKq_IZFg' },
    ],
  },
  {
    id: 'pvp-uhc-axe',
    label: 'UHC AND AXE',
    emph: true, // título en negrita
    videos: [
      { title: 'Shield Guide', yt: 'mLZ5vtzO93Y' },
      { title: 'How to Stun', yt: 'HRZDGVCrDh4' },
      { title: 'Cooldown Trick', yt: 'oeIcNlftXTQ' },
      { title: 'UHC GUIDE', yt: '22wS7Kl8xAQ', start: 546 },
      { title: 'Cobwebs and Lava Tricks', yt: 'omvr8KKsbPg' },
    ],
  },
  {
    id: 'pvp-smp',
    label: 'SMP Guide',
    videos: [
      { title: 'SMP KIT GUIDE', yt: 'pgrROsKOb5w' },
    ],
  },
  {
    id: 'pvp-mace',
    label: 'Mace PVP',
    videos: [
      {
        title: 'Advanced Guide On How To Dominate Minecraft Mace PVP',
        yt: 'OJIvD1x1juE',
        creator: 'EnchantedSky, KhalithMortimer',
      },
      {
        title: 'Common Mace PvP Mistakes & How to Avoid Them',
        yt: 'YoK3K9HHFSo',
        creator: 'AlexOinks',
      },
      { title: 'How to Dodge EVERY Divebomb in Mace PvP', yt: 'M_8fjxpA2wk' },
    ],
  },
  {
    id: 'pvp-packs',
    label: 'Texture Packs',
    packs: true, // renderiza tarjetas de descarga en vez de videos
  },
];

/**
 * Texture Packs.
 * ⚠ Enlaces de Google Drive: sustituir `url` por el enlace exacto del
 * proyecto (basta con editar este array). Mientras sea `null`, la tarjeta
 * muestra el botón "Próximamente" deshabilitado.
 */
export const TEXTURE_PACKS = [
  { name: 'Vanilla Crystal by Marlowww', author: 'Marlowww', url: null },
  { name: 'Swight V3', author: 'Swight', url: null },
  { name: 'All in one overlay', author: '—', url: null },
  { name: 'BBCGOONKEBABJELQ', author: '—', url: null },
  { name: 'Birria Pack Edit V2', author: '—', url: null },
];

/* ══════════════════════ MINECRAFT SPEEDRUN ══════════════════════ */

/** Técnicas (los nombres se mantienen siempre en su idioma original). */
export const SPEEDRUN_TECHNIQUES = [
  {
    name: 'Fast Resets',
    desc: {
      es: 'Reinicia la partida de forma casi instantánea y vuelve a generar el mundo en segundos para buscar semillas óptimas. Mantener un ritmo de resets alto es clave para empezar runs competitivas.',
      en: 'Restart the run almost instantly and regenerate the world in seconds to fish for optimal seeds. Keeping a high reset pace is key to competitive runs.',
    },
  },
  {
    name: 'Loteo Estructurado',
    desc: {
      es: 'Ruta planificada de recolección inicial: prioriza madera, comida y herramientas en un orden fijo para minimizar la improvisación y los tiempos muertos.',
      en: 'A planned early-game looting route: prioritize wood, food and tools in a fixed order to minimize improvisation and downtime.',
    },
  },
  {
    name: 'Portal de Magma / Lava Bucket',
    desc: {
      es: 'Construye el portal al Nether sin minar obsidiana: usa bloques de magma y cubos de lava para formar el marco y actívalo con agua sobre la lava en la posición correcta.',
      en: 'Build the Nether portal without mining obsidian: use magma blocks and lava buckets to form the frame and ignite it with water over lava in the right spot.',
    },
  },
  {
    name: 'Portal Flintless',
    desc: {
      es: 'Activa el portal sin pedernal ni yesca: genera fuego dentro del marco con lava y materiales combustibles, ahorrando el tiempo de conseguir pedernal.',
      en: 'Light the portal without flint and steel: create fire inside the frame using lava and flammable blocks, saving the time of getting flint.',
    },
  },
  {
    name: 'Uso del Menú F3 (Pie-Ray y E-Ray)',
    desc: {
      es: 'La pantalla de depuración F3 revela coordenadas, bioma y orientación. El Pie-Ray (datos del pie de página) y el E-Ray (entidades) permiten leer pistas para localizar estructuras y portales.',
      en: 'The F3 debug screen reveals coordinates, biome and facing direction. Pie-Ray (footer data) and E-Ray (entities) expose clues to locate structures and portals.',
    },
  },
  {
    name: 'Rutas de Bastión (Housing, Bridge, Treasure, Stables)',
    desc: {
      es: 'Identifica el tipo de bastión al que entras y aplica su ruta: Housing para cofres y oro, Bridge para cruces rápidos, Treasure para el cofre del tesoro y Stables para bartering y salida.',
      en: 'Identify which bastion type you entered and run its route: Housing for chests and gold, Bridge for fast crossings, Treasure for the treasure room, Stables for bartering and exit.',
    },
  },
  {
    name: 'Bartering con Piglins',
    desc: {
      es: 'Intercambia lingotes de oro con Piglins para obtener ender pearls, obsidiana y cuerdas. Gestiona tu oro y tu posición para no ser rodeado mientras haces trueque.',
      en: 'Trade gold ingots with Piglins for ender pearls, obsidian and string. Manage your gold and positioning so you do not get surrounded while bartering.',
    },
  },
  {
    name: 'Navegación de Fortaleza',
    desc: {
      es: 'Reconoce el layout de la fortaleza: corredores, escaleras y salas. Usa F3 para no perder el rumbo y llegar rápido a la sala del portal.',
      en: 'Recognize the fortress layout: corridors, stairs and rooms. Use F3 to keep your heading and reach the portal room fast.',
    },
  },
  {
    name: 'Triangulación de Ojos de Ender',
    desc: {
      es: 'Lanza ojos de Ender desde dos posiciones distintas y cruza las direcciones para estimar la ubicación del stronghold con muy pocos ojos.',
      en: 'Throw eyes of Ender from two different positions and cross the directions to estimate the stronghold location with very few eyes.',
    },
  },
  {
    name: 'Regla 8,8 / Perfect Triangulation',
    desc: {
      es: 'Regla empírica de triangulación: con las coordenadas de dos lanzamientos y sus ángulos se puede clavar la posición del stronghold, ahorrando ojos de Ender.',
      en: 'Empirical triangulation rule: with the coordinates of two throws and their angles you can pinpoint the stronghold, saving eyes of Ender.',
    },
  },
  {
    name: 'Navegación Interna de Fortaleza',
    desc: {
      es: 'Movimiento eficiente dentro de la stronghold: saltos, lectura de pasillos y decisiones rápidas para encontrar la sala del portal sin explorar de más.',
      en: 'Efficient movement inside the stronghold: jumps, corridor reading and quick decisions to find the portal room without over-exploring.',
    },
  },
  {
    name: 'Dragon Bed One-Cycle',
    desc: {
      es: 'Coloca camas junto al portal del End y explótalas al despertar al dragón para infligir daño masivo y matarlo en un solo ciclo.',
      en: 'Place beds next to the End portal and explode them as the dragon wakes to deal massive damage and kill it in a single cycle.',
    },
  },
  {
    name: 'Respawn Anchor One-Cycle',
    desc: {
      es: 'Usa Respawn Anchors cargados con glowstone en lugar de camas (ideal en situaciones sin camas) para ejecutar el one-cycle del dragón.',
      en: 'Use Respawn Anchors charged with glowstone instead of beds (ideal when beds are unavailable) to perform the dragon one-cycle.',
    },
  },
];

export const SPEEDRUN_VIDEOS = [
  { title: 'The Ultimate Guide to Minecraft Speedrunning', yt: 'qo475jHhxGg' },
  {
    title: 'How to setup Minecraft (and Boateye) for Speedrunning - Full comprehensive guide [2026]',
    yt: 'l-q-_4R8_6M',
    creator: 'Boateye',
  },
];

/* ══════════════════════════════ CUPHEAD ══════════════════════════════ */

export const CUPHEAD_VIDEOS = [
  { title: 'Legacy Edition', yt: 'RBrYUA1CDK4', start: 15 },
  {
    title: 'Beginner/Intermediate Speedrunning Tutorial for V1.1+ - All Bosses - Regular Category',
    yt: 'AV1DOVWb8YI',
  },
  { title: 'Cuphead DLC Any% Advanced Speedrun Tutorial', yt: 'BvFqD8km254' },
  {
    title: 'Cuphead - Beginner/Intermediate Speedrun Tutorial for DLC Any% [Lobber/Spread Route]',
    yt: '9O05ljtzDsg',
  },
];

/* ════════════════════════════ HOLLOW KNIGHT ════════════════════════════ */

export const HOLLOW_VIDEOS = [
  { title: 'How to Beat Hollow Knight in Under 5 Hours', yt: 'mkRKZHJXZRE' },
  {
    title: 'Speedrun of Hollow Knight (SPEEDRUN EXPLAINED - Any% [No Major Glitches])',
    yt: 'fOSYnHelFe8',
  },
  { title: '5-minute CRAZY GUIDE', yt: 'BKYV5Og0ld8' },
];

/* ══════════════════════ RECOMENDACIONES (SALUD) ══════════════════════ */

/** Fuentes médicas/ergonómicas verificadas. */
export const SOURCES = {
  mayo: {
    name: 'Mayo Clinic',
    url: 'https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/office-ergonomics/art-20046169',
  },
  aao: {
    name: 'American Academy of Ophthalmology',
    url: 'https://www.aao.org/eye-health/tips-prevention/computer-usage',
  },
  aaoDry: {
    name: 'American Academy of Ophthalmology',
    url: 'https://www.aao.org/eye-health/diseases/what-is-dry-eye',
  },
  cdc: {
    name: 'CDC',
    url: 'https://www.cdc.gov/physical-activity-basics/guidelines/adults.html',
  },
  cdcWater: {
    name: 'CDC',
    url: 'https://www.cdc.gov/healthy-weight-growth/water-healthy-drinks/index.html',
  },
  harvard: {
    name: 'Harvard Health',
    url: 'https://www.health.harvard.edu/pain/carpal-tunnel-syndrome',
  },
};

export const HEALTH_GROUPS = [
  {
    id: 'postura',
    titleKey: 'healthGroupPostura',
    items: [
      {
        icon: 'chair',
        titleKey: 'tipEspalda',
        descKey: 'tipEspaldaDesc',
        source: SOURCES.mayo,
      },
      {
        icon: 'monitor',
        titleKey: 'tipMonitor',
        descKey: 'tipMonitorDesc',
        source: SOURCES.mayo,
      },
      {
        icon: 'arm',
        titleKey: 'tipBrazos',
        descKey: 'tipBrazosDesc',
        source: SOURCES.mayo,
      },
    ],
  },
  {
    id: 'vision',
    titleKey: 'healthGroupVision',
    items: [
      {
        icon: 'eye',
        titleKey: 'tip2020',
        descKey: 'tip2020Desc',
        source: SOURCES.aao,
      },
      {
        icon: 'sun',
        titleKey: 'tipLuz',
        descKey: 'tipLuzDesc',
        source: SOURCES.aao,
      },
      {
        icon: 'droplet',
        titleKey: 'tipParpadeo',
        descKey: 'tipParpadeoDesc',
        source: SOURCES.aaoDry,
      },
    ],
  },
  {
    id: 'descansos',
    titleKey: 'healthGroupDescansos',
    items: [
      {
        icon: 'clock',
        titleKey: 'tipPausas',
        descKey: 'tipPausasDesc',
        source: SOURCES.cdc,
      },
      {
        icon: 'stretch',
        titleKey: 'tipEstiramientos',
        descKey: 'tipEstiramientosDesc',
        source: SOURCES.harvard,
      },
      {
        icon: 'bottle',
        titleKey: 'tipHidratacion',
        descKey: 'tipHidratacionDesc',
        source: SOURCES.cdcWater,
      },
    ],
  },
];

/* ══════════════════════════════ PERIFÉRICOS ══════════════════════════════ */

/**
 * Productos (nombres y marcas NUNCA se traducen; specs = texto fijo
 * técnico, descripciones = `{ es, en }`).
 */
export const PERIPHERAL_BLOCKS = [
  {
    id: 'block-minecraft',
    title: 'Minecraft',
    groups: [
      {
        id: 'mc-mouses',
        labelKey: 'groupMouses',
        icon: 'mouse',
        products: [
          {
            name: 'Bloody A70 II',
            tag: 'Bloody',
            spec: 'Interruptores ópticos Light Strike — ideales para drag click / butterfly click',
            desc: {
              es: 'Mouse orientado al PvP clásico de Minecraft: sus interruptores ópticos y superficie lo hacen especialmente apto para drag click y butterfly click.',
              en: 'A mouse aimed at classic Minecraft PvP: its optical switches and surface make it especially suitable for drag click and butterfly click.',
            },
            url: 'https://www.bloody.com/',
          },
          {
            name: 'Razer Viper V3 Pro',
            tag: 'Razer',
            spec: '54 g — polling rate de 8000 Hz',
            desc: {
              es: 'Ultraligero (54 g) con polling de 8000 Hz: seguimiento preciso y latencia mínima para intercambios rápidos.',
              en: 'Ultra-light (54 g) with 8000 Hz polling: precise tracking and minimal latency for fast exchanges.',
            },
            url: 'https://www.razer.com/gaming-mice/razer-viper-v3-pro',
          },
          {
            name: 'Logitech G PRO X Superlight 2',
            tag: 'Logitech G',
            spec: 'Sensor HERO 2 — interruptores híbridos óptico-mecánicos (LIGHTFORCE)',
            desc: {
              es: 'El estándar competitivo: sensor HERO 2, interruptores híbridos óptico-mecánicos y hasta 95 h de batería.',
              en: 'The competitive standard: HERO 2 sensor, hybrid optical-mechanical switches and up to 95h battery life.',
            },
            url: 'https://www.logitechg.com/en-us/shop/p/pro-x2-superlight-wireless-mouse',
          },
        ],
      },
      {
        id: 'mc-keyboards',
        labelKey: 'groupKeyboards',
        icon: 'keyboard',
        products: [
          {
            name: 'Wooting 60HE+',
            tag: 'Wooting',
            spec: 'Switches magnéticos Hall Effect (Lekker L60) — Rapid Trigger',
            desc: {
              es: 'Teclado magnético compacto con Rapid Trigger: registra el punto de reposo en tiempo real, ideal para strafes y w-taps.',
              en: 'Compact magnetic keyboard with Rapid Trigger: registers the reset point in real time, ideal for strafes and w-taps.',
            },
            url: 'https://wooting.io/wooting-60he',
          },
          {
            name: 'SteelSeries Apex Pro Mini',
            tag: 'SteelSeries',
            spec: 'Punto de actuación ajustable desde 0.1 mm (OmniPoint 2.0)',
            desc: {
              es: 'Formato 60% con switches magnéticos OmniPoint 2.0 y actuación ajustable desde 0.1 mm.',
              en: '60% form factor with OmniPoint 2.0 magnetic switches and actuation adjustable from 0.1 mm.',
            },
            url: 'https://steelseries.com/gaming-keyboards/apex-pro-mini',
          },
        ],
      },
    ],
  },
  {
    id: 'block-hk-cuphead',
    title: 'Hollow Knight & Cuphead',
    groups: [
      {
        id: 'hk-mouses',
        labelKey: 'groupMouses',
        icon: 'mouse',
        products: [
          {
            name: 'Logitech G PRO X Superlight 2',
            tag: 'Logitech G',
            spec: 'Ergonómico y ligero (60 g)',
            desc: {
              es: 'Ergonomía y peso mínimo para sesiones largas de platforming y speedruns sin fatiga.',
              en: 'Ergonomics and minimal weight for long platforming sessions and speedruns without fatigue.',
            },
            url: 'https://www.logitechg.com/en-us/shop/p/pro-x2-superlight-wireless-mouse',
          },
          {
            name: 'Razer Viper V3 Pro',
            tag: 'Razer',
            spec: 'Latencia ultrabaja en clics (8000 Hz)',
            desc: {
              es: 'Latencia ultrabaja en los clics: inputs exactos para dash, parry y ráfagas de ataques.',
              en: 'Ultra-low click latency: exact inputs for dash, parry and attack bursts.',
            },
            url: 'https://www.razer.com/gaming-mice/razer-viper-v3-pro',
          },
        ],
      },
      {
        id: 'hk-keyboards',
        labelKey: 'groupKeyboards',
        icon: 'keyboard',
        products: [
          {
            name: 'Wooting 60HE+',
            tag: 'Wooting',
            spec: 'Rapid Trigger — saltos y dash precisos',
            desc: {
              es: 'Rapid Trigger para saltos y dashes precisos en Hollow Knight y Cuphead.',
              en: 'Rapid Trigger for precise jumps and dashes in Hollow Knight and Cuphead.',
            },
            url: 'https://wooting.io/wooting-60he',
          },
          {
            name: 'Razer Huntsman V3 Pro',
            tag: 'Razer',
            spec: 'Switches óptico-analógicos Gen-2 — Snap Tap',
            desc: {
              es: 'Switches óptico-analógicos Gen-2 con Snap Tap: movimiento y técnicas avanzadas de input.',
              en: 'Gen-2 analog optical switches with Snap Tap: movement and advanced input techniques.',
            },
            url: 'https://www.razer.com/gaming-keyboards/razer-huntsman-v3-pro',
          },
          {
            name: 'SteelSeries Apex Pro Mini',
            tag: 'SteelSeries',
            spec: 'Formato 60% — actuación magnética',
            desc: {
              es: 'Formato compacto 60% con actuación magnética para respuestas inmediatas.',
              en: 'Compact 60% form factor with magnetic actuation for immediate responses.',
            },
            url: 'https://steelseries.com/gaming-keyboards/apex-pro-mini',
          },
        ],
      },
    ],
  },
];
