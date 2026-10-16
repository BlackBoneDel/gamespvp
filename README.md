# Games PvP 🎮⚔️

Sitio web informativo/educativo sobre gaming: guías, técnicas y videos de
**Minecraft PvP** (especialización), **Minecraft Speedrun**, **Cuphead**,
**Hollow Knight**, **Recomendaciones** de salud/ergonomía y **Periféricos**.

SPA estática (HTML5 + CSS3 con custom properties + JavaScript vanilla con
módulos ES) — **sin build step, lista para desplegar** (GitHub Pages,
Netlify, Vercel, o cualquier servidor estático).

---

## 🚀 Ejecutar / Desplegar

```bash
# Cualquier servidor estático sirve. Ejemplos:
python3 -m http.server 8000
# o
npx serve .
```

Abre `http://localhost:8000`. Para GitHub Pages: sube el repo y activa Pages
desde la rama principal (la raíz del repo es el sitio).

## 📁 Estructura

```
index.html          · Shell del sitio: splash, navbar, buscador, settings, footer
css/styles.css      · Diseño completo (tokens CSS, temas, tipografía por sección)
js/
  main.js           · Punto de entrada (splash + arranque)
  router.js         · SPA hash-router (#/categoria), SEO, lazy-load de videos
  pages.js          · Renderizadores de cada categoría
  ui.js             · Componentes: VideoCard, TechniqueCard, ProductCard…
  data.js           · Catálogo de contenido (videos, técnicas, packs, productos)
  i18n.js           · Diccionario ES/EN
  search.js         · Buscador global (fuzzy, agrupado por categoría)
  settings.js       · Panel de configuración + localStorage
fonts/
  Monocraft.ttf     · Fuente estilo chat de Minecraft (SIL OFL 1.1)
  Monocraft-Bold.ttf
  OFL-Monocraft.txt · Licencia de Monocraft
```

## ✨ Funcionalidades

| Requisito | Implementación |
|---|---|
| Splash screen | Logo sobre un gran "1", rebote en bucle (CSS keyframes, ease-in-out), mínimo 2.5 s, fade-out de salida |
| Navegación sticky | 7 categorías + "Fuentes", menú hamburguesa en móvil, rutas SPA (`#/minecraft-pvp`, …) |
| Buscador global | Lupa que se expande (0.3 s), índice de todo el contenido, fuzzy + sin acentos/mayúsculas, resultados agrupados por categoría, atajos `Ctrl + K` y `/` |
| Settings | Tipografía (default/por-categoría o personalizada con vista previa en vivo), 3 temas + colores personalizados (picker), idioma ES/EN, restaurar valores — todo persistido en `localStorage` |
| Tipografía por sección | `body[data-section=…]` redefine `--font-heading/--font-body`: Minecraft (Press Start 2P + Monocraft), Cuphead (Alegreya Sans), Hollow Knight (Cinzel + EB Garamond), general (Roboto). El usuario puede forzarla desde Settings |
| Videos | Embeds de YouTube 16:9 responsivos con `loading="lazy"` + `IntersectionObserver`, título visible y atribución al creador |
| Accesibilidad | Contraste WCAG AA, skip-link, navegación por teclado, `aria-label`/`aria-expanded`, `focus-visible`, `prefers-reduced-motion` |
| SEO | `<title>` y `meta description` por ruta (actualizados al navegar), Open Graph |

## 🔤 Tipografías y licencias

| Uso | Fuente | Licencia / nota |
|---|---|---|
| Minecraft (títulos) | **Press Start 2P** (Google Fonts) | OFL — pixel-art retro |
| Minecraft (cuerpo) | **Monocraft** local (`fonts/`) — equivalente a Minecraftia | SIL OFL 1.1, redistribuible ([IdreesInc/Monocraft](https://github.com/IdreesInc/Monocraft)) |
| Cuphead | **Alegreya Sans** (Google Fonts) | OFL — estética cartoon años 30 |
| Hollow Knight (títulos) | **Cinzel** (Google Fonts) | OFL — **sustituto libre de Trajan Pro** (Trajan Pro es comercial y no redistribuible; Cinzel replica su estética romana/mayúsculas clásicas) |
| Hollow Knight (cuerpo) | **EB Garamond** (Google Fonts) | OFL — serif elegante |
| General | **Roboto** (Google Fonts) | Apache 2.0 |
| Opción de usuario | Arial (sistema), Open Sans, y las anteriores | — |

En Settings, la opción **"Trajan Pro (Cinzel)"** aplica Cinzel como la
alternativa de licencia libre documentada arriba.

## 🌐 Política de idioma (ES/EN)

Al cambiar idioma **solo** se traduce texto descriptivo, instrucciones e
interfaz. **Nunca** se traducen:

- Nombres de técnicas (p. ej. `Fast Resets`, `Bartering con Piglins`).
- Nombres de videojuegos/categorías de juego (`Minecraft PVP`, `Cuphead`…).
- Nombres de periféricos, marcas y modelos (`Wooting 60HE+`, `Bloody A70 II`…).
- Nombres de creadores/YouTubers (`Intel Edits`, `Marlowww`…).

Las etiquetas genéricas de categoría (`Introducción`, `Recomendaciones`,
`Periféricos`, `Fuentes`) sí se traducen por ser texto de interfaz.

## ⚠️ Enlaces pendientes (Texture Packs)

Los enlaces de Google Drive de los texture packs no venían incluidos en las
notas del proyecto. El sistema ya está listo: edita **un solo lugar** en
`js/data.js` → `TEXTURE_PACKS` y cambia `url: null` por la URL real:

```js
{ name: 'Vanilla Crystal by Marlowww', author: 'Marlowww', url: 'https://drive.google.com/…' },
```

La tarjeta y la sección "Fuentes" pasarán automáticamente a mostrar el botón
**Descargar** con el enlace activo.

## 🎬 Videos de YouTube

Todos los IDs se extrajeron exactamente de las URLs del pliego
(p. ej. `https://www.youtube.com/watch?v=rA_7wmPG_bg` → ID `rA_7wmPG_bg`) y se
embeben como `https://www.youtube.com/embed/ID`. Los videos con marca de
tiempo (`UHC GUIDE` en 546 s, `Legacy Edition` en 15 s) se conservan.

## 🩺 Fuentes de salud

Mayo Clinic (ergonomía de oficina), American Academy of Ophthalmology
(20-20-20, iluminación, ojo seco), CDC (actividad física, hidratación) y
Harvard Health (síndrome del túnel carpiano). Enlaces exactos en
`js/data.js` → `SOURCES` y compilados en la página **Fuentes**.
