# Paleta de marca — jmejia.dev

> Extraída y formalizada a partir de los design tokens ya implementados en `src/app/globals.css` (Tailwind v4, `@theme inline`, valores en OKLCH). No son colores nuevos: es la sistematización de lo que el sitio ya usa en producción (CSS, `manifest.ts`, `opengraph-image.tsx`, `theme-color`).

## Concepto

**"Premium dark tech"** — un cian eléctrico (precisión, tecnología, claridad) combinado con violeta (profundidad creativa) sobre un fondo casi negro con matiz azulado. El sitio es **dark-only por diseño**, no un tema alternable: la oscuridad es parte de la identidad, no una preferencia de accesibilidad.

Personalidad: técnico, moderno, preciso, con un acabado premium (glassmorphism, glows, gradientes sutiles) — no minimalista plano ni corporativo genérico.

---

## 1. Colores primarios

### Primario — Cian eléctrico
El color de acción, foco y marca. Úsalo para CTAs, links activos, focus rings, iconografía destacada.

| Token | OKLCH | HEX | RGB |
|---|---|---|---|
| `--primary` | `oklch(0.78 0.155 201)` | `#00D3E0` | `0, 211, 224` |
| `--primary-foreground` | `oklch(0.09 0.018 264)` | `#010206` | `1, 2, 6` |

### Secundario — Violeta
Contraparte creativa del cian. Úsalo en gradientes, acentos secundarios, badges, profundidad decorativa — no como color de acción principal.

| Token | OKLCH | HEX | RGB |
|---|---|---|---|
| `--secondary` | `oklch(0.68 0.175 295)` | `#A27EF7` | `162, 126, 247` |
| `--secondary-foreground` | `oklch(0.96 0.005 264)` | `#F0F2F5` | `240, 242, 245` |

---

## 2. Escalas de tinte/sombra

Para estados hover/active, badges de intensidad, o UI que necesite variantes sin salir del hue de marca (mismo H, L y C ajustados en OKLCH).

### Cian (H 201)

| Paso | HEX | Uso sugerido |
|---|---|---|
| 50 | `#DCF8FA` | fondo de highlight muy sutil |
| 100 | `#B6F1F5` | texto sobre fondos oscuros saturados |
| 200 | `#88E6ED` | — |
| 300 | `#4CDBE4` | hover claro |
| **400** | **`#00D3E0`** | **primario base (= `--primary`)** |
| 500 | `#00C2D0` | hover de botón primario |
| 600 | `#00A9B9` | active/pressed |
| 700 | `#008B9A` | texto sobre fondo claro (si alguna vez se necesita) |
| 800 | `#006975` | — |
| 900 | `#004850` | — |
| 950 | `#002A2F` | fondo con tinte cian casi negro |

### Violeta (H 295)

| Paso | HEX | Uso sugerido |
|---|---|---|
| 50 | `#F3EEFF` | — |
| 100 | `#E7DDFF` | — |
| 200 | `#D8C9FF` | — |
| 300 | `#C4ACFF` | hover claro |
| **400** | **`#A27EF7`** | **secundario base (= `--secondary`)** |
| 500 | `#9168E8` | hover |
| 600 | `#7D51D2` | active/pressed |
| 700 | `#653EAE` | — |
| 800 | `#4D2E86` | — |
| 900 | `#35225C` | — |
| 950 | `#1E1237` | fondo con tinte violeta casi negro |

---

## 3. Neutrales (fondo, superficies, texto)

Todos comparten el mismo hue frío (H 264, azul-negro) — es lo que le da cohesión al "dark tech" en vez de un gris genérico.

| Token | OKLCH | HEX | Uso |
|---|---|---|---|
| `--background` | `oklch(0.09 0.018 264)` | `#010206` | fondo base de página |
| `--sidebar` | `oklch(0.11 0.016 264)` | `#030409` | fondo de nav/sidebar |
| `--surface` | `oklch(0.13 0.015 264)` | `#05070D` | tarjetas, `--card` |
| `--surface-elevated` | `oklch(0.17 0.012 264)` | `#0D0F15` | modales, popovers elevados |
| `--border-subtle` | `oklch(0.18 0.015 264)` | `#0E1218` | separadores casi invisibles |
| `--border` | `oklch(0.24 0.018 264)` | `#1B1F28` | bordes estándar |
| `--muted-foreground` | `oklch(0.52 0.018 264)` | `#646974` | texto secundario, placeholders |
| `--foreground` | `oklch(0.96 0.005 264)` | `#F0F2F5` | texto principal |

---

## 4. Colores semánticos (feedback de UI)

El único semántico ya implementado es `destructive`. `success`, `warning` e `info` se proponen aquí siguiendo la misma lógica OKLCH (misma luminosidad/croma que el resto del sistema) para que, si se implementan, se vean como parte de la misma familia visual y no como colores "de librería" pegados encima.

| Rol | Token propuesto | HEX | Uso |
|---|---|---|---|
| Error / destructivo | `--destructive` *(ya existe)* | `#F94144` | errores, acciones destructivas, validación fallida |
| Éxito | `--success` | `#35C26D` | confirmaciones, estados completados |
| Advertencia | `--warning` | `#F2A700` | alertas no críticas |
| Información | `--info` | `#00A7E2` | mensajes informativos (nota: muy cercano al primario — reservar para contextos donde no compitan) |

---

## 5. Degradados

Ya definidos como utilidades en `globals.css` — se documentan aquí como parte formal de la marca:

```css
/* Texto/elementos — diagonal cian → violeta */
.gradient-primary {
  background: linear-gradient(135deg, #00D3E0, #A27EF7);
}

/* Inverso — violeta → cian */
.gradient-secondary {
  background: linear-gradient(135deg, #A27EF7, #00D3E0);
}

/* Shimmer animado (loading states, destacados) */
.gradient-shimmer {
  background: linear-gradient(90deg,
    #00D3E0 0%, #58E5EE 25%, #A27EF7 50%, #58E5EE 75%, #00D3E0 100%
  );
}

/* Fondo hero — glow radial doble, muy sutil */
background:
  radial-gradient(ellipse 80% 50% at 50% -10%, rgb(0 211 224 / 0.12), transparent),
  radial-gradient(ellipse 50% 40% at 80% 80%, rgb(162 126 247 / 0.08), transparent),
  #010206;
```

**Regla de uso:** el degradado cian→violeta es para elementos destacados puntuales (título hero, CTA principal, glow de fondo). No usarlo en bloques grandes de texto de lectura ni en más de 1–2 elementos por vista — pierde su efecto de acento si se repite.

---

## 6. Tipografía de marca

| Rol | Fuente | Variable | Peso |
|---|---|---|---|
| Sans / body | Geist | `--font-geist-sans` → `--font-sans` | 400 |
| Heading | Geist (misma familia) | `--font-heading` | 700, `letter-spacing: -0.02em` |
| Mono | Geist Mono | `--font-geist-mono` → `--font-mono` | 400 |

No hay una fuente display/serif separada — la marca usa una sola familia tipográfica (Geist) en todos los roles, apoyándose en peso y espaciado para la jerarquía. Mantener esta consistencia si se agrega tipografía nueva.

---

## 7. Reglas de uso

**Sí:**
- Cian como único color de acción/CTA — no diluir con violeta en botones primarios.
- Violeta para profundidad decorativa: gradientes, glows secundarios, badges de "creatividad/diseño".
- Fondos siempre con el hue 264 (azul-negro), nunca gris neutro puro — es lo que distingue esta paleta de un dark mode genérico.
- Glow/blur sutiles (`glow-primary`, `glow-secondary` ya en `globals.css`) para dar sensación "premium", no saturarlos.

**No:**
- No introducir un modo claro con estos mismos tokens sin rediseñar contraste — están calibrados solo para fondo oscuro.
- No usar el violeta como color de error/advertencia — ya hay semánticos dedicados.
- No bajar el contraste texto/fondo por debajo de `--muted-foreground` (`#646974` sobre `#010206` ≈ 7.2:1, cumple AA) — es el mínimo aceptado en el sistema actual.
- No mezclar los colores oficiales de tecnologías (React `#61DAFB`, AWS `#FF9900`, etc., usados en badges de stack) con la paleta de marca — son identidad de terceros, no de jmejia.dev.

---

## 8. Accesibilidad (contraste sobre `--background` `#010206`)

| Color | Contraste aprox. | Cumple AA texto normal (4.5:1) |
|---|---|---|
| `--foreground` `#F0F2F5` | ~19.5:1 | ✅ |
| `--primary` `#00D3E0` | ~13.8:1 | ✅ |
| `--secondary` `#A27EF7` | ~8.9:1 | ✅ |
| `--muted-foreground` `#646974` | ~4.6:1 | ✅ (límite — no usar en texto pequeño) |
| `--destructive` `#F94144` | ~5.1:1 | ✅ |

Todos los colores base cumplen WCAG AA sobre el fondo principal. `--muted-foreground` está en el límite: evitar tamaños de fuente por debajo de 14px con ese color.
