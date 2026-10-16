/* ═══════════════════════════════════════════════════════════════
   Games PvP — pages.js
   Renderizadores de cada categoría (contenido del <main>). Cada
   función devuelve HTML y se re-ejecuta al cambiar idioma/ruta.
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
  SOURCES,
  ytWatch,
} from './data.js';
import { t, getLang } from './i18n.js';
import {
  pageHead,
  videoCard,
  techniqueCard,
  productCard,
  tipCard,
  packCard,
  refItem,
  icon,
  esc,
} from './ui.js';

/* Descripción traducible de cada subsección de Minecraft PVP */
const PVP_DESC_KEYS = {
  'pvp-intro': 'pvpIntroDesc',
  'pvp-keybinds': 'pvpKeybindsDesc',
  'pvp-configs': 'pvpConfigsDesc',
  'pvp-sword': 'pvpSwordDesc',
  'pvp-uhc-axe': 'pvpUhcAxeDesc',
  'pvp-smp': 'pvpSmpDesc',
  'pvp-mace': 'pvpMaceDesc',
  'pvp-packs': 'pvpPacksDesc',
};

/* ── INTRODUCCIÓN ── */
function renderIntroduccion() {
  const cards = CATEGORIES.filter((c) => c.id !== 'introduccion' && c.id !== 'fuentes')
    .map(
      (c) => `
      <a class="card" href="#${c.path}" style="text-decoration:none;color:inherit">
        <div class="tip-icon">${icon('gamepad')}</div>
        <h3 style="font-family:var(--font-ui);margin:8px 0 4px">${esc(c.label)}</h3>
        <p class="text-muted" style="font-family:var(--font-ui);font-size:.9rem;margin:0">
          ${esc(introCardBlurb(c.id))}
        </p>
      </a>`
    )
    .join('');

  return `
    <div class="container">
      ${pageHead({ eyebrow: 'Games PvP', title: t('introLead'), lead: '' })}
      <section class="section-block" style="margin-top:0">
        <div class="card" style="padding:clamp(24px,4vw,44px)">
          <p style="font-size:1.18rem;line-height:1.8;margin:0">${esc(t('introText'))}</p>
        </div>
      </section>
      <section class="section-block">
        <h2>Explora</h2>
        <div class="grid grid--3">${cards}</div>
      </section>
    </div>`;
}

/* Blurbs cortos (traducibles) para las tarjetas de la portada */
function introCardBlurb(id) {
  const blurbs = {
    es: {
      'minecraft-pvp': 'Sword, UHC, mace, SMP, configs y texture packs.',
      'minecraft-speedrun': 'Técnicas para correr el juego a máxima velocidad.',
      cuphead: 'Speedrun del juego base y del DLC.',
      'hollow-knight': 'Guías crazy y rutas Any% explicadas.',
      recomendaciones: 'Postura, salud visual y descansos.',
      perifericos: 'Mouses y teclados recomendados por juego.',
    },
    en: {
      'minecraft-pvp': 'Sword, UHC, mace, SMP, configs and texture packs.',
      'minecraft-speedrun': 'Techniques to run the game at top speed.',
      cuphead: 'Speedrun of the main game and the DLC.',
      'hollow-knight': 'Crazy guides and Any% routes explained.',
      recomendaciones: 'Posture, visual health and breaks.',
      perifericos: 'Recommended mice and keyboards per game.',
    },
  };
  return blurbs[getLang()]?.[id] ?? '';
}

/* ── MINECRAFT PVP ── */
function renderMinecraftPvp() {
  const anchorNav = `
    <nav class="anchor-nav" aria-label="${esc(t('anchorNav'))}">
      ${PVP_SECTIONS.map(
        (s) => `<button type="button" data-scroll="${s.id}">${esc(s.label)}</button>`
      ).join('')}
    </nav>`;

  const sections = PVP_SECTIONS.map((s) => {
    const desc = t(PVP_DESC_KEYS[s.id]);
    const body = s.packs
      ? `<div class="grid grid--2">${TEXTURE_PACKS.map(packCard).join('')}</div>`
      : s.videos.map(videoCard).join('');
    return `
      <section class="section-block" id="${s.id}">
        <h2 class="${s.emph ? 'is-emph' : ''}">${s.emph ? `<strong>${esc(s.label)}</strong>` : esc(s.label)}</h2>
        <p class="text-muted" style="max-width:720px">${esc(desc)}</p>
        ${body}
      </section>`;
  }).join('');

  return `
    <div class="container">
      ${pageHead({ eyebrow: 'Minecraft', title: 'Minecraft PVP', lead: t('pvpLead') })}
      ${anchorNav}
      ${sections}
    </div>`;
}

/* ── MINECRAFT SPEEDRUN ── */
function renderSpeedrun() {
  return `
    <div class="container">
      ${pageHead({ eyebrow: 'Minecraft', title: 'Minecraft Speedrun', lead: t('speedrunLead') })}
      <section class="section-block" style="margin-top:0">
        <h2>${esc(t('techniquesTitle'))}</h2>
        <div class="grid grid--2">
          ${SPEEDRUN_TECHNIQUES.map(techniqueCard).join('')}
        </div>
      </section>
      <section class="section-block">
        <h2>${esc(t('videosTitle'))}</h2>
        ${SPEEDRUN_VIDEOS.map(videoCard).join('')}
      </section>
    </div>`;
}

/* ── CUPHEAD ── */
function renderCuphead() {
  return `
    <div class="container">
      ${pageHead({ eyebrow: 'Cuphead', title: 'Cuphead', lead: t('cupheadLead') })}
      <section class="section-block" style="margin-top:0">
        <h2>${esc(t('cupheadSection'))}</h2>
        ${CUPHEAD_VIDEOS.map(videoCard).join('')}
      </section>
    </div>`;
}

/* ── HOLLOW KNIGHT ── */
function renderHollowKnight() {
  return `
    <div class="container">
      ${pageHead({ eyebrow: 'Hollow Knight', title: 'Hollow Knight', lead: t('hollowLead') })}
      <section class="section-block" style="margin-top:0">
        <h2>${esc(t('hollowSection'))}</h2>
        ${HOLLOW_VIDEOS.map(videoCard).join('')}
      </section>
    </div>`;
}

/* ── RECOMENDACIONES (salud) ── */
function renderRecomendaciones() {
  const groups = HEALTH_GROUPS.map(
    (g) => `
    <section class="section-block" id="salud-${g.id}">
      <h2>${esc(t(g.titleKey))}</h2>
      <div class="grid grid--3">
        ${g.items.map(tipCard).join('')}
      </div>
    </section>`
  ).join('');

  return `
    <div class="container">
      ${pageHead({ eyebrow: 'Salud', title: t('navRecomendaciones'), lead: t('recomendacionesLead') })}
      ${groups}
    </div>`;
}

/* ── PERIFÉRICOS ── */
function renderPerifericos() {
  const blocks = PERIPHERAL_BLOCKS.map((block) => {
    const groups = block.groups
      .map(
        (g) => `
        <section class="section-block" id="${g.id}" style="margin-top:34px">
          <h3 style="font-family:var(--font-ui);font-size:1.25rem;display:flex;align-items:center;gap:10px">
            ${icon(g.icon)} ${esc(t(g.labelKey))}
          </h3>
          <div class="grid grid--3">
            ${g.products.map(productCard).join('')}
          </div>
        </section>`
      )
      .join('');
    return `
      <section class="section-block" id="${block.id}" style="margin-top:0">
        <h2>${esc(block.title)}</h2>
        ${groups}
      </section>`;
  }).join('');

  return `
    <div class="container">
      ${pageHead({ eyebrow: 'Periféricos', title: t('navPerifericos'), lead: t('perifericosLead') })}
      ${blocks}
    </div>`;
}

/* ── FUENTES (referencias tipo APA simplificado) ── */
function renderFuentes() {
  /* 1. Videos agrupados por categoría de origen */
  const videoGroups = [
    { title: 'Minecraft PVP', items: PVP_SECTIONS.flatMap((s) => s.videos || []) },
    { title: 'Minecraft Speedrun', items: SPEEDRUN_VIDEOS },
    { title: 'Cuphead', items: CUPHEAD_VIDEOS },
    { title: 'Hollow Knight', items: HOLLOW_VIDEOS },
  ];

  const videoRefs = videoGroups
    .map(
      (g) => `
      <section class="ref-group">
        <h2>${esc(g.title)} — ${esc(t('refsYoutube'))}</h2>
        <ul class="ref-list">
          ${g.items
            .map((v) =>
              refItem({
                text: `${v.title}. ${v.creator ? v.creator + '. ' : ''}YouTube.${v.start ? ` [${v.start}s].` : ''}`,
                url: ytWatch(v.yt, v.start || 0),
              })
            )
            .join('')}
        </ul>
      </section>`
    )
    .join('');

  /* 2. Texture packs (enlaces pendientes → se muestran como pendientes) */
  const packRefs = `
    <section class="ref-group">
      <h2>${esc(t('refsPacks'))}</h2>
      <ul class="ref-list">
        ${TEXTURE_PACKS.map((p) =>
          refItem({
            text: `${p.name}${p.author && p.author !== '—' ? '. ' + p.author : ''}. Google Drive.${p.url ? '' : ' (enlace pendiente)'}`,
            url: p.url ?? 'https://drive.google.com/',
          })
        ).join('')}
      </ul>
    </section>`;

  /* 3. Salud */
  const healthList = Object.values(SOURCES).map((s) => ({
    text: `${s.name}. Consulta del ${new Date().toISOString().slice(0, 10)}.`,
    url: s.url,
  }));
  const healthRefs = `
    <section class="ref-group">
      <h2>${esc(t('refsHealth'))}</h2>
      <ul class="ref-list">${healthList.map(refItem).join('')}</ul>
    </section>`;

  /* 4. Productos */
  const seen = new Set();
  const productRefs = PERIPHERAL_BLOCKS.flatMap((b) =>
    b.groups.flatMap((g) => g.products)
  )
    .filter((p) => (seen.has(p.name) ? false : (seen.add(p.name), true)))
    .map((p) => refItem({ text: `${p.name}. ${p.tag}. ${t('refsAccessed')} 2026-10-15.`, url: p.url }));
  const productsBlock = `
    <section class="ref-group">
      <h2>${esc(t('refsProducts'))}</h2>
      <ul class="ref-list">${productRefs.join('')}</ul>
    </section>`;

  return `
    <div class="container">
      ${pageHead({ eyebrow: 'Referencias', title: t('navFuentes'), lead: t('fuentesLead') })}
      ${videoRefs}
      ${packRefs}
      ${healthRefs}
      ${productsBlock}
    </div>`;
}

/* ── Mapa ruta → renderizador ── */
export const PAGES = {
  introduccion: renderIntroduccion,
  'minecraft-pvp': renderMinecraftPvp,
  'minecraft-speedrun': renderSpeedrun,
  cuphead: renderCuphead,
  'hollow-knight': renderHollowKnight,
  recomendaciones: renderRecomendaciones,
  perifericos: renderPerifericos,
  fuentes: renderFuentes,
};
