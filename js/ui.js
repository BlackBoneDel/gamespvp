/* ═══════════════════════════════════════════════════════════════
   Games PvP — ui.js
   Componentes reutilizables (equivalentes a VideoCard, TechniqueCard,
   ProductCard, TipCard, PackCard, RefItem…). Todos devuelven HTML.
   Iconografía estilo "line icons" (estética Lucide/Feather) en SVG.
   ═══════════════════════════════════════════════════════════════ */

import { ytEmbed } from './data.js';
import { t, getLang } from './i18n.js';

/* ── Utilidades ── */

/** Escapa texto para insertarlo de forma segura en HTML. */
export const esc = (s) =>
  String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

/** Elige la variante traducible ({es, en}) según el idioma activo. */
export const pick = (obj) => obj[getLang()] ?? obj.es;

/* ── Iconos (24×24, stroke) ── */
const ICON_PATHS = {
  home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  search: '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
  monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
  sun: '<circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="4.9" y1="4.9" x2="6.3" y2="6.3"/><line x1="17.7" y1="17.7" x2="19.1" y2="19.1"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/><line x1="4.9" y1="19.1" x2="6.3" y2="17.7"/><line x1="17.7" y1="6.3" x2="19.1" y2="4.9"/>',
  eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/>',
  droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>',
  chair: '<path d="M6 10V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4"/><rect x="4" y="10" width="16" height="7" rx="2"/><line x1="7" y1="17" x2="7" y2="21"/><line x1="17" y1="17" x2="17" y2="21"/>',
  arm: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
  stretch: '<circle cx="12" cy="4.5" r="2"/><path d="M12 7v5"/><path d="M8.5 21l3.5-9 3.5 9"/><line x1="5" y1="10" x2="19" y2="10"/>',
  bottle: '<line x1="10" y1="2" x2="14" y2="2"/><line x1="12" y1="2" x2="12" y2="5"/><path d="M8 5h8l1 4v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9z"/><line x1="7" y1="12" x2="17" y2="12"/>',
  mouse: '<rect x="7" y="2" width="10" height="20" rx="5"/><line x1="12" y1="6" x2="12" y2="10"/>',
  keyboard: '<rect x="2" y="6" width="20" height="12" rx="2"/><line x1="6" y1="10" x2="6.01" y2="10"/><line x1="10" y1="10" x2="10.01" y2="10"/><line x1="14" y1="10" x2="14.01" y2="10"/><line x1="18" y1="10" x2="18.01" y2="10"/><line x1="8" y1="14" x2="16" y2="14"/>',
  chevron: '<polyline points="9 18 15 12 9 6"/>',
  external: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
  gamepad: '<line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><rect x="2" y="6" width="20" height="12" rx="6"/>',
  sword: '<polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" y1="19" x2="19" y2="13"/><line x1="16" y1="16" x2="20" y2="20"/><line x1="19" y1="21" x2="21" y2="19"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  package: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
};

/** Devuelve un icono SVG inline (estilo line-icons). */
export function icon(name, cls = 'icon') {
  return `<svg viewBox="0 0 24 24" class="${cls}" aria-hidden="true">${ICON_PATHS[name] ?? ICON_PATHS.chevron}</svg>`;
}

/* ── Componentes ── */

/** Cabecera de página (eyebrow + H1 + texto guía). */
export function pageHead({ eyebrow, title, lead }) {
  return `
    <header class="page-head">
      ${eyebrow ? `<span class="eyebrow">${esc(eyebrow)}</span>` : ''}
      <h1>${esc(title)}</h1>
      ${lead ? `<p class="lead">${esc(lead)}</p>` : ''}
    </header>`;
}

/**
 * VideoCard: título visible + embed 16:9 lazy + atribución al creador.
 * El iframe se carga con IntersectionObserver (data-src → src).
 */
export function videoCard(v) {
  const src = ytEmbed(v.yt, v.start || 0);
  const creator = v.creator
    ? `<span class="video-creator">${t('byCreator')} ${esc(v.creator)}</span>`
    : '';
  return `
    <figure class="video-card">
      <figcaption>
        <h3 class="video-title">${esc(v.title)}</h3>
        ${creator}
      </figcaption>
      <div class="video-frame">
        <iframe
          data-src="${src}"
          title="${esc(v.title)}"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </figure>`;
}

/** TechniqueCard: acordeón con descripción expandible. */
export function techniqueCard(tech, index) {
  return `
    <details class="technique">
      <summary>
        ${icon('chevron')}
        <span>${esc(tech.name)}</span>
        <span class="technique__index">#${String(index + 1).padStart(2, '0')}</span>
      </summary>
      <div class="technique__body">${esc(pick(tech.desc))}</div>
    </details>`;
}

/** ProductCard: imagen placeholder, nombre, specs y botón "Ver producto". */
export function productCard(p) {
  return `
    <article class="card product-card">
      <div class="product-media" role="img" aria-label="${esc(p.name)}">
        ${icon('package')}
      </div>
      <span class="product-tag">${esc(p.tag)}</span>
      <h3>${esc(p.name)}</h3>
      <p class="product-spec">${esc(p.spec)}</p>
      <p class="product-spec">${esc(pick(p.desc))}</p>
      <a class="btn" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">
        ${icon('external')}<span>${t('btnViewProduct')}</span>
      </a>
    </article>`;
}

/** TipCard: recomendación de salud con icono, descripción y [Fuente]. */
export function tipCard(item) {
  return `
    <article class="card tip-card">
      <div class="tip-icon">${icon(item.icon)}</div>
      <h3>${esc(t(item.titleKey))}</h3>
      <p>${esc(t(item.descKey))}</p>
      <a class="source-link" href="${esc(item.source.url)}" target="_blank" rel="noopener noreferrer">
        ${t('sourceLabel')} ${esc(item.source.name)}
      </a>
    </article>`;
}

/** PackCard: tarjeta de descarga de texture pack (icono carpeta/descarga). */
export function packCard(p) {
  const ready = Boolean(p.url);
  const action = ready
    ? `<a class="btn" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">${icon('download')}<span>${t('btnDownload')}</span></a>`
    : `<button class="btn" type="button" aria-disabled="true" title="${t('btnSoon')}">${icon('download')}<span>${t('btnSoon')}</span></button>`;
  return `
    <article class="card pack-card">
      <div class="pack-icon">${icon('folder')}</div>
      <div>
        <h3>${esc(p.name)}</h3>
        <p>${t('packBy')} ${esc(p.author)}</p>
      </div>
      ${action}
    </article>`;
}

/** RefItem: referencia webgráfica tipo APA simplificado. */
export function refItem({ text, url }) {
  return `
    <li>
      ${esc(text)}
      <a class="ref-url" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(url)}</a>
    </li>`;
}
