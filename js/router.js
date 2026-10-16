/* ═══════════════════════════════════════════════════════════════
   Games PvP — router.js
   SPA con rutas tipo hash (#/categoria) — funciona en GitHub Pages
   sin configuración de servidor. Renderiza la página activa, marca
   la navegación, actualiza <title>/meta para SEO y gestiona las
   anclas internas (Minecraft PVP).
   ═══════════════════════════════════════════════════════════════ */

import { CATEGORIES } from './data.js';
import { t, applyStaticI18n } from './i18n.js';
import { PAGES } from './pages.js';
import { esc } from './ui.js';

/* Carga perezosa de embeds de YouTube (IntersectionObserver) */
const lazyIO = new IntersectionObserver(
  (entries) => {
    for (const en of entries) {
      if (!en.isIntersecting) continue;
      const iframe = en.target;
      if (iframe.dataset.src) {
        iframe.src = iframe.dataset.src;
        delete iframe.dataset.src;
      }
      lazyIO.unobserve(iframe);
    }
  },
  { rootMargin: '300px' }
);

function initLazyVideos() {
  document.querySelectorAll('iframe[data-src]').forEach((f) => lazyIO.observe(f));
}

/* ── Navegación superior (orden fijo de categorías) ── */
function renderNav() {
  const navList = document.getElementById('nav-list');
  navList.innerHTML = CATEGORIES.map(
    (c) => `
    <li>
      <a class="nav__link" href="#${c.path}" data-id="${c.id}" ${c.key ? `data-i18n="${c.key}"` : ''}>
        ${c.key ? '' : esc(c.label)}
      </a>
    </li>`
  ).join('');

  /* Menú hamburguesa: cerrar al navegar */
  navList.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      document.getElementById('main-nav').classList.remove('is-open');
      document.getElementById('menu-btn').setAttribute('aria-expanded', 'false');
    })
  );

  /* Etiquetas traducibles del nav (Introducción, Recomendaciones…) */
  applyStaticI18n();
}

/* ── Descripción meta por ruta (SEO) ── */
function metaDescription(id) {
  const map = {
    introduccion: t('introText'),
    'minecraft-pvp': t('pvpLead'),
    'minecraft-speedrun': t('speedrunLead'),
    cuphead: t('cupheadLead'),
    'hollow-knight': t('hollowLead'),
    recomendaciones: t('recomendacionesLead'),
    perifericos: t('perifericosLead'),
    fuentes: t('fuentesLead'),
  };
  return (map[id] ?? 'Games PvP').slice(0, 160);
}

/* ── Estado de la ruta ── */
function currentId() {
  const hash = location.hash.replace(/^#/, '') || '/introduccion';
  const path = hash.startsWith('/') ? hash : `/${hash}`;
  const cat = CATEGORIES.find((c) => c.path === path);
  return cat ? cat.id : 'introduccion';
}

let pendingAnchor = null;

function render() {
  const id = currentId();
  const cat = CATEGORIES.find((c) => c.id === id);
  const main = document.getElementById('main-content');

  /* Página */
  main.innerHTML = (PAGES[id] ?? PAGES.introduccion)();

  /* Sección activa → tipografía condicional vía body[data-section] */
  document.body.dataset.section = id;

  /* SEO */
  document.title = `${cat?.label ?? 'Games PvP'} — Games PvP`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', metaDescription(id));

  /* Nav activa */
  document.querySelectorAll('.nav__link').forEach((a) => {
    a.classList.toggle('is-active', a.dataset.id === id);
  });

  /* Embeds diferidos */
  initLazyVideos();

  /* Anclas internas (sub-nav de Minecraft PVP) */
  main.querySelectorAll('[data-scroll]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.scroll);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        main.querySelectorAll('[data-scroll]').forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
      }
    });
  });

  /* Scroll: arriba al cambiar de página, o al ancla si se pidió */
  if (pendingAnchor) {
    const el = document.getElementById(pendingAnchor);
    if (el) {
      el.scrollIntoView({ behavior: 'instant', block: 'start' });
      pendingAnchor = null;
      return;
    }
    pendingAnchor = null;
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
}

/** Navega a una ruta (usado por el buscador). */
export function navigate(path, anchor = null) {
  pendingAnchor = anchor;
  const target = `#${path.startsWith('/') ? path : `/${path}`}`;
  if (location.hash === target) render();
  else location.hash = target;
}

/* ── Inicialización ── */
export function initRouter() {
  renderNav();

  window.addEventListener('hashchange', render);
  render();

  /* Re-render al cambiar idioma/configuración (el contenido se traduce) */
  document.addEventListener('gp-settings-changed', () => {
    renderNav();
    render();
  });

  /* Hamburguesa */
  const menuBtn = document.getElementById('menu-btn');
  const nav = document.getElementById('main-nav');
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
}
