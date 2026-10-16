/* ═══════════════════════════════════════════════════════════════
   Games PvP — settings.js
   Panel de configuración (drawer) 100% funcional y persistente vía
   localStorage: tipografía, esquema de colores, idioma y restaurar.
   ═══════════════════════════════════════════════════════════════ */

import { setLang, getLang, t, applyStaticI18n } from './i18n.js';

const STORAGE_KEY = 'gamespvp.settings.v1';

export const DEFAULTS = {
  theme: 'classic',            // classic | dark-purple | high-contrast | custom
  fontMode: 'default',         // default | custom
  customFont: 'roboto',        // ver FONT_STACKS
  lang: 'es',                  // es | en
  customColors: {
    primary: '#6a0dad',
    secondary: '#ffffff',
    accent: '#8b00ff',
  },
};

/* Mapa valor de fuente → stack CSS.
   "Trajan Pro" es comercial (no redistribuible): se ofrece "Cinzel"
   (Google Fonts, licencia OFL) como sustituto con estética romana similar.
   "Minecraft (Monocraft)" usa la fuente local Monocraft (SIL OFL 1.1). */
const FONT_STACKS = {
  arial: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
  roboto: "'Roboto', sans-serif",
  opensans: "'Open Sans', sans-serif",
  pressstart: "'Press Start 2P', monospace",
  alegreya: "'Alegreya Sans', sans-serif",
  trajan: "'Cinzel', 'Times New Roman', serif",
  minecraft: "'Monocraft', monospace",
};

let state = structuredClone(DEFAULTS);

/* ── Persistencia ── */
function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    /* Modo privado / sin localStorage: se mantiene en memoria */
  }
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) state = { ...structuredClone(DEFAULTS), ...JSON.parse(raw) };
  } catch (e) {
    state = structuredClone(DEFAULTS);
  }
}

/* ── Aplicación del estado al DOM ── */

/** Color de texto legible sobre un fondo dado (WCAG AA aprox.). */
function readableOn(hex) {
  const c = hex.replace('#', '');
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(c.slice(i, i + 2), 16) / 255);
  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return lum > 0.55 ? '#000000' : '#ffffff';
}

export function applySettings() {
  const root = document.documentElement;

  /* Tema */
  root.dataset.theme = state.theme;
  if (state.theme === 'custom') {
    root.style.setProperty('--color-primary', state.customColors.primary);
    root.style.setProperty('--color-secondary', state.customColors.secondary);
    root.style.setProperty('--color-accent', state.customColors.accent);
    root.style.setProperty('--color-on-primary', readableOn(state.customColors.primary));
    root.style.setProperty('--color-focus', state.customColors.accent);
  } else {
    ['--color-primary', '--color-secondary', '--color-accent', '--color-on-primary', '--color-focus']
      .forEach((v) => root.style.removeProperty(v));
  }

  /* Splash: logo en blanco o morado según el esquema activo */
  const splashAccent = state.theme === 'dark-purple' ? '#8b00ff' : '#ffffff';
  root.style.setProperty('--splash-accent', splashAccent);

  /* Tipografía */
  const body = document.body;
  if (state.fontMode === 'custom') {
    body.classList.add('font-custom');
    root.style.setProperty('--font-user', FONT_STACKS[state.customFont] ?? FONT_STACKS.roboto);
  } else {
    body.classList.remove('font-custom');
    root.style.removeProperty('--font-user');
  }

  /* Vista previa del panel */
  const preview = document.getElementById('font-preview');
  if (preview) {
    const stack =
      state.fontMode === 'custom' ? FONT_STACKS[state.customFont] : null;
    if (stack) {
      preview.style.setProperty('--font-preview-h', stack);
      preview.style.setProperty('--font-preview-p', stack);
    } else {
      preview.style.removeProperty('--font-preview-h');
      preview.style.removeProperty('--font-preview-p');
    }
  }

  /* Idioma (solo textos descriptivos/interfaz) */
  setLang(state.lang);
  root.setAttribute('lang', state.lang);
  applyStaticI18n();
}

/* ── Sincronizar controles del panel con el estado ── */
function syncUI() {
  document.querySelectorAll('input[name="font-mode"]').forEach((r) => {
    r.checked = r.value === state.fontMode;
  });
  const fontSelect = document.getElementById('font-select');
  fontSelect.value = state.customFont;
  fontSelect.disabled = state.fontMode !== 'custom';

  document.querySelectorAll('input[name="theme"]').forEach((r) => {
    r.checked = r.value === state.theme;
  });
  document.getElementById('custom-colors').hidden = state.theme !== 'custom';
  document.getElementById('color-primary').value = state.customColors.primary;
  document.getElementById('color-secondary').value = state.customColors.secondary;
  document.getElementById('color-accent').value = state.customColors.accent;

  document.querySelectorAll('.lang-btn').forEach((b) => {
    const active = b.dataset.lang === state.lang;
    b.classList.toggle('is-active', active);
    b.setAttribute('aria-pressed', String(active));
  });
}

/** Notifica al resto de la app que la configuración cambió. */
function notify() {
  document.dispatchEvent(new CustomEvent('gp-settings-changed', { detail: { ...state } }));
}

/* ── Drawer: abrir/cerrar ── */
function openDrawer() {
  const drawer = document.getElementById('settings-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  drawer.classList.add('is-open');
  drawer.setAttribute('aria-hidden', 'false');
  backdrop.hidden = false;
  requestAnimationFrame(() => backdrop.classList.add('is-open'));
  document.getElementById('settings-btn').setAttribute('aria-expanded', 'true');
  document.getElementById('settings-close').focus();
}

function closeDrawer() {
  const drawer = document.getElementById('settings-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  drawer.classList.remove('is-open');
  drawer.setAttribute('aria-hidden', 'true');
  backdrop.classList.remove('is-open');
  setTimeout(() => (backdrop.hidden = true), 300);
  document.getElementById('settings-btn').setAttribute('aria-expanded', 'false');
}

/* ── Inicialización del panel ── */
export function initSettings() {
  load();
  applySettings();
  syncUI();

  /* Abrir / cerrar */
  document.getElementById('settings-btn').addEventListener('click', openDrawer);
  document.getElementById('settings-close').addEventListener('click', closeDrawer);
  document.getElementById('drawer-backdrop').addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

  /* A) Tipografía */
  document.querySelectorAll('input[name="font-mode"]').forEach((r) => {
    r.addEventListener('change', () => {
      state.fontMode = r.value;
      save();
      applySettings();
      syncUI();
    });
  });
  document.getElementById('font-select').addEventListener('change', (e) => {
    state.customFont = e.target.value;
    state.fontMode = 'custom';
    save();
    applySettings();
    syncUI();
    notify();
  });

  /* B) Colores */
  document.querySelectorAll('input[name="theme"]').forEach((r) => {
    r.addEventListener('change', () => {
      state.theme = r.value;
      save();
      applySettings();
      syncUI();
    });
  });
  const bindColor = (id, key) => {
    document.getElementById(id).addEventListener('input', (e) => {
      state.customColors[key] = e.target.value;
      if (state.theme !== 'custom') {
        state.theme = 'custom';
        syncUI();
      }
      save();
      applySettings();
    });
  };
  bindColor('color-primary', 'primary');
  bindColor('color-secondary', 'secondary');
  bindColor('color-accent', 'accent');

  /* C) Idioma */
  document.querySelectorAll('.lang-btn').forEach((b) => {
    b.addEventListener('click', () => {
      state.lang = b.dataset.lang;
      save();
      applySettings();
      syncUI();
      notify();
    });
  });

  /* D) Restaurar valores predeterminados */
  document.getElementById('reset-settings').addEventListener('click', () => {
    state = structuredClone(DEFAULTS);
    save();
    applySettings();
    syncUI();
    notify();
    const note = document.getElementById('reset-settings');
    const prev = note.innerHTML;
    note.innerHTML = `<span>${t('resetDone')}</span>`;
    setTimeout(() => (note.innerHTML = prev), 1800);
  });
}
