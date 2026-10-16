/* ═══════════════════════════════════════════════════════════════
   Games PvP — main.js
   Punto de entrada: splash screen, configuración, buscador y router.
   ═══════════════════════════════════════════════════════════════ */

import { initSettings } from './settings.js';
import { initSearch, buildIndex } from './search.js';
import { initRouter, navigate } from './router.js';

/* ── 1. Splash screen ──
   Rebote en bucle (CSS) + duración mínima de 2.5 s y fade-out al
   terminar la carga (con tope de 4.5 s por si falla algo externo). */
function initSplash() {
  const splash = document.getElementById('splash');
  const MIN_MS = 2500;
  const MAX_MS = 4500;
  const start = performance.now();
  let done = false;

  const hide = () => {
    if (done) return;
    done = true;
    const wait = Math.max(0, MIN_MS - (performance.now() - start));
    setTimeout(() => {
      splash.classList.add('splash--hide'); // transición fade-out
      setTimeout(() => splash.remove(), 700);
    }, wait);
  };

  if (document.readyState === 'complete') hide();
  else window.addEventListener('load', hide);
  setTimeout(hide, MAX_MS); // red de seguridad
}

/* ── Arranque de la app ── */
function boot() {
  initSplash();

  /* Configuración (tema, tipografía, idioma) persistida en localStorage */
  initSettings();

  /* Índice global de búsqueda (se reconstruye al cambiar idioma) */
  buildIndex();
  initSearch({ onNavigate: (route, anchor) => navigate(route, anchor) });
  document.addEventListener('gp-settings-changed', buildIndex);

  /* Router SPA */
  initRouter();

  /* Año del footer */
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
}

boot();
