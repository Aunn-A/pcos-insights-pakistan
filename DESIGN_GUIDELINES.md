# DESIGN GUIDELINES

**The reference for every UI decision on this platform.**

This is a medical research institution on the web. Build it to feel like the lobby of a research hospital and the front matter of a scientific journal, not a Series A landing page. When a design choice is unclear, this file wins. Read the [One Rule](#the-one-rule) before you add anything.

The target is **Apple + Nature + MIT Media Lab**. Restraint, editorial authority, and evidence. Not glow, not gradient, not hype.

---

## The One Rule

Before adding any element, ask:

> **Does this improve trust, understanding, or usability?**

No to all three: delete it. This applies to a shadow, a gradient, an animation, an icon, a section. Default to removing. The strongest version of this platform is the one where nothing is left to cut.

---

## What This Platform Is

A place where students and researchers publish peer-reviewed work, read papers, and navigate a global research map. The people using it are deciding whether to trust the science. Every visual choice either earns that trust or spends it.

Design for a reader who is skeptical, literate, and short on time. Give them clarity and get out of the way.

---

## Reference Standards

Study how these sites solve problems. Copy the reasoning, not the pixels.

| Source | Take this |
|---|---|
| **Apple** | Whitespace as a material. One idea per screen. Motion that tracks the scroll, never decorates it. |
| **Nature / NEJM** | Serif headlines carry authority. Dense information stays legible through hierarchy, not decoration. Figures are first-class citizens. |
| **MIT Media Lab** | A confident typographic grid. Research reads as research. Bold structure, zero gloss. |
| **Stripe** | Documentation as a product. Precise type. Restraint even when the brand allows color. |
| **Linear** | Every interaction is fast and intentional. Micro-detail without noise. Keyboard-first. |
| **Vercel** | Black, white, one grid. Technical minimalism. Contrast does the work. |
| **Notion** | Warmth and approachability without cartoons. Humane defaults. |

The through-line across all seven: they trust the reader and remove the ornament.

---

## Banned (AI Slop)

Do not ship any of these. They read as "AI wrapper site" and they destroy the institutional feel.

- Neon purple or electric-blue gradients
- Glowing or pulsing buttons
- Cyberpunk or "sci-fi HUD" aesthetics
- Glassmorphism as a default surface (frosted panels everywhere)
- Floating 3D blobs, orbs, or abstract meshes
- Robot, brain-with-circuits, or android imagery
- Crypto and generic SaaS landing patterns (hero + 3 feature cards + gradient CTA)
- Animation added for delight with no informational job
- Generic AI-generated hero illustrations
- Oversaturated color, rainbow gradients, flashy effects

If a component resembles the default output of an AI site builder, rebuild it.

---

## Color

Restrained and clinical. Ink and paper first, blue and green as accents, one signal color used rarely.

### Tokens

```
/* Ink & structure */
--ink:            #0B1420;   /* primary text, near-black navy */
--navy:           #12263A;   /* brand, headers, deep surfaces */
--slate:          #3A4757;   /* secondary text */
--muted:          #6B7A8D;   /* captions, metadata, labels */
--line:           #E3E7EC;   /* hairline borders, dividers */

/* Paper */
--paper:          #FFFFFF;   /* primary background */
--paper-soft:     #F7F8FA;   /* section backgrounds, cards */
--paper-warm:     #FAF9F6;   /* editorial long-form background */

/* Medical accents — use for data, links, states, never for decoration */
--clinical-blue:  #2C6E8F;   /* links, primary interactive */
--clinical-blue-d:#1F506A;   /* hover / pressed */
--sage:           #3B7A6B;   /* success, positive data, "verified" */
--sage-d:         #2C5D51;

/* Signal — one accent, used sparingly for a single priority action per view */
--signal:         #B4531F;   /* muted clay/amber, restrained */

/* Data viz sequence (categorical, colorblind-safe leaning) */
--viz-1: #12263A;  --viz-2: #2C6E8F;  --viz-3: #3B7A6B;
--viz-4: #8A9BA8;  --viz-5: #B4531F;  --viz-6: #6B7A8D;
```

### Rules

- Text is `--ink` on `--paper`. That is the default and it covers most of the product.
- Blue and green mean something. Blue is interactive. Green is verified or positive. Do not use them to fill space.
- `--signal` appears at most once per screen, on the single most important action. If two things use it, one is wrong.
- No gradient as a surface. A gradient is allowed only inside a data visualization when it encodes a value (a heatmap, a density scale). Never behind a hero or a button.
- Dark mode, if built, is deep navy (`--navy` deepened toward `#0A1622`), not pure black, with paper text softened to `#D9DEE5`. Same discipline applies.

Contrast floor is WCAG AA: 4.5:1 for body text, 3:1 for large text and UI. Check every pairing.

---

## Typography

Type carries the authority here. Get it right and half the work is done.

### Families

```
--font-serif: "Source Serif 4", "Newsreader", Georgia, serif;   /* display, headlines, article body */
--font-sans:  "Inter", system-ui, -apple-system, sans-serif;    /* UI, labels, navigation, dense data */
--font-mono:  "IBM Plex Mono", "JetBrains Mono", monospace;      /* figures, code, DOIs, data tables */
```

- **Serif for reading and headlines.** Papers, abstracts, article bodies, section titles. This is what makes it read like Nature instead of a dashboard.
- **Sans for the interface.** Buttons, nav, form labels, filters, table headers, metadata.
- **Mono for identifiers and data.** DOIs, citation counts, timestamps, code, axis labels. Mono signals "this is a precise value."

Premium upgrades if licensing allows: a transitional serif (Lyon, Tiempos, GT Sectra) and a neutral grotesque (Söhne, Neue Haas). The free stack above already looks institutional. Do not reach for characterful display fonts.

### Scale

Modular, ratio ~1.25. Line height loosens as size drops.

```
--text-display: 3.5rem / 1.05;   /* hero statement, one per page */
--text-h1:      2.5rem / 1.1;
--text-h2:      1.875rem / 1.2;
--text-h3:      1.375rem / 1.3;
--text-body-lg: 1.25rem / 1.6;   /* article lead, abstracts */
--text-body:    1.0625rem / 1.65; /* long-form reading */
--text-ui:      0.9375rem / 1.5;  /* interface default */
--text-small:   0.8125rem / 1.5;  /* captions, metadata */
--text-mono:    0.875rem / 1.5;
```

### Rules

- One display-size element per page. If everything shouts, nothing does.
- Reading measure for body text is 60 to 75 characters. Set `max-width` on prose, roughly `68ch`.
- Left-align. No centered paragraphs, no justified text with ragged rivers.
- Weight for hierarchy before size, and size before color. Never underline for emphasis (reserve it for links).
- Numbers in tables and data use tabular figures (`font-variant-numeric: tabular-nums`).

---

## Layout & Space

Whitespace is the signal of confidence. Institutions that trust their content give it room.

- **Grid:** 12-column, generous gutters. Content maxes around `1200px`; long-form prose narrows to `680px`.
- **Spacing scale (8px base):** `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`. Use these, not arbitrary values.
- **Vertical rhythm:** sections breathe. A section break is `96px` or more on desktop, not `24px`.
- **One idea per section.** Do not stack three feature cards to fill a viewport. If a section has one thing to say, let it hold the screen.
- **Borders over shadows.** A `1px --line` hairline separates most surfaces. Shadows are rare, soft, and low (`0 1px 3px rgba(11,20,32,0.06)`). No floating cards with heavy drop shadows.
- **Radius is small.** `4px` to `8px` on most elements. Nothing pill-shaped except tags and status chips. Sharp corners read as precise.

---

## Data Visualization

This is where the platform proves it is scientific. Figures are not decoration, they are the argument.

- Design charts like a journal, not a dashboard. No 3D bars, no drop shadows on data, no chartjunk.
- Label directly on the data where possible instead of relying on a legend.
- Use the `--viz` sequence. Sequential data uses a single-hue ramp (blue or green). Diverging data uses blue-to-clay through a neutral midpoint.
- Axes are quiet: thin `--line` gridlines, `--muted` labels, mono numerals.
- Every figure has a caption in serif, sized `--text-small`, treated like a journal caption.
- The research map and globe are the signature elements. Muted land, `--clinical-blue` for active nodes, restrained. An elegant globe that rotates slowly to show global reach is on-brief. A spinning neon wireframe is not.

If a chart cannot be read in grayscale, the encoding is wrong.

---

## Motion

Motion explains. It never performs.

### Allowed

- State transitions that show cause and effect (a filter narrows a list, an item expands to reveal detail).
- The globe rotating, data points appearing as you scroll a dataset into view, a map panning to a discovery.
- Scroll-linked reveals where the movement tracks the reader's intent.

### Banned

- Entrance animations on everything (staggered fade-ups on every card).
- Parallax for its own sake, floating elements, looping ambient motion.
- Anything that delays the reader from reaching content.

### Tokens

```
--ease:       cubic-bezier(0.2, 0, 0, 1);   /* standard, calm deceleration */
--ease-in-out:cubic-bezier(0.4, 0, 0.2, 1);
--dur-fast:   120ms;   /* hovers, small state changes */
--dur-base:   240ms;   /* most transitions */
--dur-slow:   480ms;   /* deliberate reveals, map moves */
```

Respect `prefers-reduced-motion`. When set, cut animation to opacity changes at most, and freeze the globe.

If an animation does not help the reader understand something, it fails the One Rule. Remove it.

---

## Components

- **Buttons.** Solid `--navy` or `--clinical-blue` for primary, ghost with a `--line` border for secondary. No glow, no gradient fill, no icon-only mystery buttons in primary flows. Hover shifts to the `-d` variant, nothing more.
- **Links.** `--clinical-blue`, underlined on hover or always in prose. Visited state matters in a research context, keep it.
- **Cards.** A hairline border, `--paper` or `--paper-soft` fill, small radius. Content decides height. Do not force uniform card grids when the content is not uniform.
- **Forms.** Labels above inputs, always visible. `--line` borders, `--clinical-blue` focus ring. Generous target size. Error states in a muted red, never alarm-red.
- **Tables.** The core of a research platform. Tabular numerals, quiet zebra striping via `--paper-soft`, sticky headers, mono for IDs. Let them be dense; researchers expect density.
- **Icons.** Thin line icons, consistent weight, one set. Icons support labels, they do not replace them.

---

## Voice (for UI copy)

The interface speaks like a journal editor: precise, plain, unhurried.

- State things directly. "3 papers match your filters," not "We found some great results for you!"
- No exclamation marks in system copy. No hype words (revolutionary, seamless, powerful, cutting-edge).
- Name the specific action. "Submit for review," not "Get started."
- Trust the reader. Skip the hand-holding and the emoji.

---

## Pre-Ship Checklist

Run this before any UI ships.

- [ ] Every element passes the One Rule.
- [ ] No banned item from the AI Slop list appears anywhere.
- [ ] Color stays within tokens. `--signal` used at most once per view.
- [ ] Text contrast meets AA. Checked, not assumed.
- [ ] Serif for reading, sans for UI, mono for data. No mixups.
- [ ] Prose measure is 60 to 75 characters.
- [ ] Spacing values come from the scale.
- [ ] Every animation has an informational job and honors reduced-motion.
- [ ] Every figure reads in grayscale and carries a caption.
- [ ] Nothing left that could be cut without losing meaning.

---

*When in doubt, remove it. The most trustworthy version of this platform is the quietest one.*
