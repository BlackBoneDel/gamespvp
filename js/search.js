/* ═══════════════════════════════════════════════════════════════
   Games PvP — search.js
   Buscador global: indexa TODO el contenido de TODAS las categorías
   (títulos de técnicas, videos, packs, productos, salud…).
   - Coincidencia parcial y "fuzzy" (subsecuencia), sin distinguir
     mayúsculas/minúsculas ni acentos.
   - Resultados agrupados por categoría de origen en un panel flotante.
   - Atajos: Ctrl + K o "/" para enfocar, Esc para cerrar.
   ═══════════════════════════════════════════════════════════════ */

import {
  CATEGORIES,
  PVP_SECTIONS,
  TEXTURE_PACKS,
  SPEEDRUN_TECHNIQUES,
  SPEEDRUN_VIDEOS,
  CUPHEAD_VIDEOS,
  HOLLOW_VIDEOS,
  HEALTH_GROUPS,
  PERIPHERAL_BLOCKS,
} from './data.js';
import { t, getLang } from './i18n.js';
import { esc } from './ui.js';

/* ── Índice de búsqueda ── */

let INDEX = [];

/** Normaliza: minúsculas + sin acentos/diacríticos. */
const norm = (s) =>
  String(s)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

/** Construye el índice con todo el contenido del sitio. */
export function buildIndex() {
  const entries = [];
  const add = (title, subtitle, categoryId, route, anchor = null, extra = '') =>
    entries.push({
      title,
      subtitle,
      categoryId,
      route,
      anchor,
      hay: norm(`${title} ${subtitle ?? ''} ${extra}`),
    });

  const catLabel = (id) => CATEGORIES.find((c) => c.id === id)?.label ?? id;

  /* Minecraft PVP: subsecciones + videos + packs */
  for (const s of PVP_SECTIONS) {
    if (s.videos) {
      for (const v of s.videos) {
        add(v.title, `${catLabel('minecraft-pvp')} · ${s.label}`, 'minecraft-pvp', '/minecraft-pvp', s.id, v.creator ?? '');
      }
    }
    add(s.label, catLabel('minecraft-pvp'), 'minecraft-pvp', '/minecraft-pvp', s.id);
  }
  for (const p of TEXTURE_PACKS) {
    add(p.name, `${catLabel('minecraft-pvp')} · Texture Packs`, 'minecraft-pvp', '/minecraft-pvp', 'pvp-packs', p.author);
  }

  /* Speedrun: técnicas + videos */
  for (const tech of SPEEDRUN_TECHNIQUES) {
    add(tech.name, catLabel('minecraft-speedrun'), 'minecraft-speedrun', '/minecraft-speedrun', null, tech.desc.es + ' ' + tech.desc.en);
  }
  for (const v of SPEEDRUN_VIDEOS) {
    add(v.title, catLabel('minecraft-speedrun'), 'minecraft-speedrun', '/minecraft-speedrun', null, v.creator ?? '');
  }

  /* Cuphead / Hollow Knight */
  for (const v of CUPHEAD_VIDEOS) add(v.title, catLabel('cuphead'), 'cuphead', '/cuphead');
  for (const v of HOLLOW_VIDEOS) add(v.title, catLabel('hollow-knight'), 'hollow-knight', '/hollow-knight');

  /* Salud */
  for (const g of HEALTH_GROUPS) {
    add(t(g.titleKey), catLabel('recomendaciones'), 'recomendaciones', '/recomendaciones', `salud-${g.id}`);
    for (const item of g.items) {
      add(
        t(item.titleKey),
        `${catLabel('recomendaciones')} · ${t(g.titleKey)}`,
        'recomendaciones',
        '/recomendaciones',
        `salud-${g.id}`,
        t(item.descKey) + ' ' + item.source.name
      );
    }
  }

  /* Periféricos (nombres de producto/marca + specs) */
  for (const block of PERIPHERAL_BLOCKS) {
    for (const g of block.groups) {
      for (const p of g.products) {
        add(
          p.name,
          `${catLabel('perifericos')} · ${block.title} · ${t(g.labelKey)}`,
          'perifericos',
          '/perifericos',
          g.id,
          p.tag + ' ' + p.spec + ' ' + p.desc.es + ' ' + p.desc.en
        );
      }
    }
  }

  INDEX = entries;
}

/* ── Motor de coincidencia (parcial + fuzzy) ── */

/**
 * Puntuación de una entrada frente a la consulta. 0 = sin coincidencia.
 * - 200+ : la consulta aparece en el TÍTULO (mejor).
 * - 90+  : la consulta aparece en el texto completo (parcial).
 * - 15   : coincidencia "fuzzy" (subsecuencia) solo sobre título/subtítulo,
 *          usada únicamente como respaldo cuando no hay coincidencias parciales.
 */
function scoreEntry(entry, query) {
  if (!query) return 0;
  const title = norm(entry.title);
  const short = norm(`${entry.title} ${entry.subtitle ?? ''}`);

  if (title.includes(query)) return 220 - Math.min(title.indexOf(query), 40);
  if (entry.hay.includes(query)) return 100 - Math.min(entry.hay.indexOf(query), 40);

  // Fuzzy: los caracteres de la consulta aparecen en orden (subsecuencia)
  let i = 0;
  for (const ch of query) {
    i = short.indexOf(ch, i);
    if (i === -1) return 0;
    i += 1;
  }
  return 15;
}

/** Ejecuta la búsqueda y devuelve resultados agrupados por categoría. */
export function search(query) {
  const q = norm(query.trim());
  if (q.length < 1) return [];

  let scored = INDEX.map((e) => ({ ...e, score: scoreEntry(e, q) }))
    .filter((e) => e.score > 0)
    .sort((a, b) => b.score - a.score);

  /* Si hay coincidencias parciales reales (≥90), el fuzzy solo ensucia:
     se descarta. En caso contrario (typos), se usan los títulos difusos. */
  if (scored.some((e) => e.score >= 90)) {
    scored = scored.filter((e) => e.score >= 90);
  }

  const top = scored.slice(0, 24);

  /* Agrupar por categoría de origen conservando el orden del menú */
  const groups = [];
  for (const cat of CATEGORIES) {
    const items = top.filter((e) => e.categoryId === cat.id);
    if (items.length) groups.push({ category: cat, items });
  }
  return groups;
}

/* ── UI del buscador ── */

export function initSearch({ onNavigate }) {
  const wrap = document.getElementById('search');
  const toggle = document.getElementById('search-toggle');
  const input = document.getElementById('search-input');
  const panel = document.getElementById('search-results');

  const open = () => {
    wrap.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    input.setAttribute('aria-expanded', 'true');
    input.focus();
  };
  const close = () => {
    wrap.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    input.setAttribute('aria-expanded', 'false');
    panel.hidden = true;
    panel.innerHTML = '';
    input.value = '';
  };

  const render = () => {
    const query = input.value;
    if (!query.trim()) {
      panel.hidden = true;
      panel.innerHTML = '';
      return;
    }
    const groups = search(query);
    if (!groups.length) {
      panel.innerHTML = `<p class="search__empty">${esc(t('searchNoResults'))} «${esc(query)}»</p>`;
      panel.hidden = false;
      return;
    }
    panel.innerHTML = groups
      .map(
        (g) => `
        <div class="search__group">
          <div class="search__group-title">${esc(g.category.label)}</div>
          ${g.items
            .map(
              (item, idx) => `
            <button class="search__item" role="option" data-route="${item.route}" ${item.anchor ? `data-anchor="${item.anchor}"` : ''}>
              ${esc(item.title)}
              <small>${esc(item.subtitle ?? '')}</small>
            </button>`
            )
            .join('')}
        </div>`
      )
      .join('');
    panel.hidden = false;
  };

  /* Eventos */
  toggle.addEventListener('click', () => {
    wrap.classList.contains('is-open') ? close() : open();
  });
  input.addEventListener('input', render);

  panel.addEventListener('click', (e) => {
    const btn = e.target.closest('.search__item');
    if (!btn) return;
    onNavigate(btn.dataset.route, btn.dataset.anchor);
    close();
  });

  /* Atajos de teclado: Ctrl + K y "/" enfocan; Esc cierra */
  document.addEventListener('keydown', (e) => {
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName ?? '');
    if ((e.ctrlKey && e.key.toLowerCase() === 'k') || (e.key === '/' && !typing)) {
      e.preventDefault();
      open();
    }
    if (e.key === 'Escape' && wrap.classList.contains('is-open')) {
      close();
      toggle.focus();
    }
  });

  /* Cerrar al hacer clic fuera */
  document.addEventListener('click', (e) => {
    if (!wrap.contains(e.target)) close();
  });

  /* Recalcular placeholder al cambiar idioma */
  input.placeholder = t('searchPlaceholder');
}
