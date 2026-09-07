---
name: "PEACE HVAC Engineers"
description: "Field-Proven Engineering: a credible, evidence-led visual system for complete HVAC delivery."
colors:
  true-white: "#ffffff"
  mechanical-teal: "#071f25"
  structural-teal: "#123944"
  field-teal: "#12343c"
  capability-teal: "#0c2b32"
  footer-teal: "#061b20"
  peace-cyan: "#079db3"
  peace-cyan-strong: "#047f92"
  ice-blue: "#edf7f9"
  safety-green: "#68b956"
  safety-green-deep: "#397b3c"
  technical-ink: "#14282e"
  technical-muted: "#53666b"
  cool-line: "#d6e3e6"
  dark-line: "#2b4f57"
  error-red: "#b42318"
typography:
  display:
    fontFamily: "Roboto Slab Variable, Georgia, serif"
    fontSize: "clamp(4.2rem, 6.3vw, 5.75rem)"
    fontWeight: 620
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Roboto Slab Variable, Georgia, serif"
    fontSize: "clamp(2.8rem, 4.7vw, 4.6rem)"
    fontWeight: 620
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Roboto Slab Variable, Georgia, serif"
    fontSize: "clamp(1.55rem, 2.4vw, 2.1rem)"
    fontWeight: 620
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Source Sans 3, Segoe UI, sans-serif"
    fontSize: "1.04rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Source Sans 3, Segoe UI, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 740
    lineHeight: 1
    letterSpacing: "normal"
rounded:
  field: "8px"
  action: "12px"
  window: "16px"
  pill: "999px"
spacing:
  xs: "0.35rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "3rem"
  gutter: "clamp(1.25rem, 4vw, 3.25rem)"
  section: "clamp(6rem, 9vw, 8.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.peace-cyan}"
    textColor: "{colors.true-white}"
    typography: "{typography.label}"
    rounded: "{rounded.action}"
    padding: "1rem 1.4rem"
    height: "3.55rem"
  button-primary-hover:
    backgroundColor: "{colors.peace-cyan-strong}"
    textColor: "{colors.true-white}"
  button-secondary:
    backgroundColor: "{colors.mechanical-teal}"
    textColor: "{colors.true-white}"
    typography: "{typography.label}"
    rounded: "{rounded.action}"
    padding: "1rem 1.4rem"
    height: "3.55rem"
  button-light:
    backgroundColor: "{colors.true-white}"
    textColor: "{colors.mechanical-teal}"
    typography: "{typography.label}"
    rounded: "{rounded.action}"
    padding: "1rem 1.4rem"
    height: "3.55rem"
  button-light-hover:
    backgroundColor: "{colors.ice-blue}"
    textColor: "{colors.mechanical-teal}"
  input:
    backgroundColor: "{colors.true-white}"
    textColor: "{colors.technical-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "0.75rem 0.9rem"
    height: "3.25rem"
  header-stack:
    backgroundColor: "{colors.true-white}"
    textColor: "{colors.technical-ink}"
    typography: "{typography.label}"
  field-window:
    backgroundColor: "{colors.field-teal}"
    textColor: "{colors.true-white}"
    rounded: "{rounded.window}"
  service-panel:
    backgroundColor: "{colors.true-white}"
    textColor: "{colors.technical-ink}"
    rounded: "{rounded.window}"
    padding: "clamp(1.5rem, 3vw, 2.4rem)"
  evidence-stack:
    backgroundColor: "{colors.ice-blue}"
    textColor: "{colors.technical-ink}"
    rounded: "{rounded.window}"
  lifecycle-row:
    backgroundColor: "{colors.true-white}"
    textColor: "{colors.technical-ink}"
    padding: "2.3rem 0"
---

# Design System: PEACE HVAC Engineers

## Overview

**Creative North Star: "Field-Proven Engineering"**

Field-Proven Engineering makes PEACE feel like the accountable technical team already on site. Deep mechanical teal establishes authority, PEACE cyan marks action, ice blue opens up technical information, and generous white space keeps the experience calm. Sturdy Roboto Slab Variable headlines carry the weight of engineering conclusions while Source Sans 3 keeps detailed service language practical and readable.

Authentic project photography is presented as evidence inside rounded field windows, not as decorative stock imagery. Layered photographs, captions, client records, certification material, location evidence, and explicit delivery steps let a visitor inspect the work. Soft ambient depth is reserved for these image and evidence objects; most structure comes from tonal bands, scale, and fine rules.

The reusable system is the color logic, type pairing, 1280px shell, spacing rhythm, 16px field-window geometry, action and field states, evidence patterns, and responsive behavior. The homepage's layered hero, each inner page's split hero, the contact composition, and the exact order of service, proof, process, quality, and presence sections are page-specific compositions—not templates to repeat everywhere.

**Key Characteristics:**

- Deep mechanical teal fields balanced by PEACE cyan, ice blue, and generous white space.
- Roboto Slab Variable conclusions paired with calm Source Sans 3 explanation and controls.
- Authentic field imagery framed in rounded, captioned windows with restrained overlap.
- Service, evidence, and process patterns that expose real capability before making claims.
- A two-level contact and navigation stack that keeps phone, email, and project action visible.
- Purposeful one-time image reveals, quiet control motion, and complete reduced-motion fallbacks.

## Colors

The palette is cool, technical, and high-contrast: teal creates the working environment, cyan directs action, ice blue organizes detail, and white gives evidence room to breathe.

### Primary

- **Deep Mechanical Teal** (`mechanical-teal`): The main authority field for the homepage hero, inner-page hero copy, contact hero, and dark evidence bands.
- **Structural Teal** (`structural-teal`): The supporting brand teal and a stable mid-tone for technical surfaces.
- **PEACE Cyan** (`peace-cyan`): Primary buttons, navigation markers, the quotation band, selection, and interactive emphasis.
- **Strong PEACE Cyan** (`peace-cyan-strong`): Hover state for primary and secondary filled actions and stronger small-scale emphasis.
- **Ice Blue** (`ice-blue`): Service, process, form, map, sector, and certificate fields that need separation without heaviness.
- **Field Teal** (`field-teal`): The fallback behind project photography and media windows.
- **Capability Teal** (`capability-teal`): The compact systems rail beneath the homepage hero.
- **Footer Teal** (`footer-teal`): The darkest terminal surface for the site footer.

### Secondary

- **Safety Green** (`safety-green`): The global keyboard-focus outline and no other broad promotional role.
- **Deep Safety Green** (`safety-green-deep`): A retained supporting safety tone; use only when an explicitly safety-related treatment needs it.

### Tertiary

- **Error Red** (`error-red`): Invalid form borders and inline error messages only.

### Neutral

- **True White** (`true-white`): The primary canvas, light actions on dark fields, and document surfaces.
- **Technical Ink** (`technical-ink`): Main body copy and high-contrast interface text.
- **Technical Muted** (`technical-muted`): Supporting paragraphs, descriptions, and captions on light fields.
- **Cool Line** (`cool-line`): Dividers and card boundaries on white and ice-blue surfaces.
- **Dark Line** (`dark-line`): Dividers and separators on mechanical-teal surfaces.

### Named Rules

**The Working-Field Rule.** Teal defines the working environment, cyan marks the next action, ice blue organizes evidence, green marks keyboard focus, and red marks validation failure; color does not trade roles for decoration.

**The Cyan Is a Signal Rule.** PEACE cyan appears where attention or action is useful. Keep it concentrated enough that buttons, current-page markers, and quote bands remain unmistakable.

## Typography

**Display Font:** Roboto Slab Variable (with Georgia and serif fallbacks)  
**Body Font:** Source Sans 3 (with Segoe UI and sans-serif fallbacks)  
**Label Font:** Source Sans 3 (with Segoe UI and sans-serif fallbacks)

**Character:** Roboto Slab Variable gives engineering statements sturdy, human authority without looking industrial by cliché. Source Sans 3 remains neutral and efficient across navigation, long explanations, field labels, captions, and action copy.

### Hierarchy

- **Display** (620, `clamp(4.2rem, 6.3vw, 5.75rem)`, 1.04, `-0.035em`): The homepage's first engineering promise; keep it compact enough to retain its block-like silhouette.
- **Headline** (620, `clamp(2.8rem, 4.7vw, 4.6rem)`, 1.04, `-0.035em`): Major service, process, evidence, quality, and contact conclusions.
- **Title** (620, `clamp(1.55rem, 2.4vw, 2.1rem)`, 1.12, `-0.035em`): Service-panel titles and local content groups.
- **Body** (400, `1.04rem`, 1.65): Operational explanation and supporting detail, normally constrained by the implementation to about 46-70 characters per line.
- **Label** (740, `0.95rem`, 1): Buttons and important controls; utility and capability labels may reduce in size and add uppercase tracking.

### Named Rules

**The Slab States the Conclusion Rule.** Use Roboto Slab Variable for promises, service names, process phases, and evidence conclusions; use Source Sans 3 for every passage the visitor must scan or read continuously.

**The Concrete Headline Rule.** Large type names a real service, outcome, method, or operating principle. It never enlarges vague corporate language simply to create drama.

## Layout

The reusable page shell is fluid up to 1280px with responsive gutters (`clamp(1.25rem, 4vw, 3.25rem)`). Major sections use a spacious vertical rhythm (`clamp(6rem, 9vw, 8.5rem)`), reducing to 5.25rem on small screens. Desktop sections favor asymmetric two-column grids and 12-column service or field galleries so photography can carry unequal but intentional weight.

The header is a reusable two-level stack: a 2.35rem mechanical-teal utility bar for email, regional presence, and phone numbers above a 5.55rem sticky white brand and navigation strip. Filled project action sits at the end of desktop navigation. At 920px and below, the utility row simplifies, the main header compacts, and navigation becomes a full-height white panel with large slab-serif links, inert background content, Escape-to-close behavior, and scroll lock.

At 1240px, wide hero and contact grids tighten. At 1100px, sector indices reduce before the full stack. At 920px, page heroes, lifecycle, quality, contact, and other major splits become single-column. At 680px, 12-column galleries become one column, buttons fill available width, forms and footers become single-column, process rows simplify, and media heights become deliberate. Short desktop viewports at 800px high reduce the first-view hero's type and vertical spacing without changing the story.

Reusable primitives are the shell, spacing rhythm, asymmetric grids, 12-column image system, sticky-to-static transition, ruled indices, and breakpoint behavior. Page-specific composition includes the homepage's dark two-photo field hero and systems rail, the inner-page split hero, the alternating service-detail sequence, the projects gallery, the quality photo/certificate overlap, and the contact hero with its embedded quote form.

**The Composition Is Not the System Rule.** Reuse layout primitives and information patterns; do not copy the homepage hero, evidence order, or exact section sequence into a new page by default.

**Implementation source caveat.** `global.css` remains the structural base and contains declarations from the rejected first direction. `redesign.css` is imported after it and is authoritative wherever the two conflict. New work must follow the final cascade and rendered components, not isolated stale literals such as Barlow Condensed, the former blue palette, 1320px shell, or square evidence treatment left in the base file.

## Elevation & Depth

The system uses a restrained hybrid of tonal layering and ambient lift. Teal-to-white and ice-blue-to-white transitions do most of the work. Field-photo windows and certificate or document evidence use a soft teal shadow (`0 24px 60px rgba(7, 31, 37, 0.14)`), while service panels use a lighter ambient shadow (`0 18px 46px rgba(7, 31, 37, 0.09)`). Active fields use a compact cyan focus halo instead of physical elevation.

### Shadow Vocabulary

- **Field Window Lift** (`0 24px 60px rgba(7, 31, 37, 0.14)`): Layered hero photography and evidence sheets that visually sit above a working field.
- **Service Panel Lift** (`0 18px 46px rgba(7, 31, 37, 0.09)`): Soft separation for white service panels on ice blue.
- **Field Focus** (`0 0 0 3px rgba(7, 157, 179, 0.18)`): Active input, select, and textarea halo paired with a PEACE-cyan border.

### Named Rules

**The Evidence Earns Lift Rule.** Use ambient shadow for field windows, service panels, and document evidence that must read as a physical object; keep ordinary sections, rails, and ruled rows flat.

## Shapes

Rounded geometry distinguishes tangible, inspectable objects from the surrounding page architecture. Project photographs, service panels, page heroes, maps, certificates, sector fields, and contact imagery use the shared 16px field-window radius. Buttons use a confident 12px radius, and form controls use a quieter 8px radius. Full-width bands, utility bars, ruled process lists, and footer structure remain square.

Overlapping media always preserves a disciplined rectangle: the secondary hero photograph sits inside a substantial mechanical-teal border, while captions attach to the bottom edge through a near-opaque teal plate. Images are clipped to their window and use purposeful `object-fit: cover` and page-specific positioning.

**The Rounded Object, Square Structure Rule.** Round photographs, evidence objects, cards, and touch controls; keep the page's bands, rails, rules, and information architecture rectilinear.

## Components

### Buttons

Buttons are substantial, readable, and direct about the next project action.

- **Shape:** Rounded action rectangle (12px), minimum height 3.55rem, and `1rem 1.4rem` padding; compact header actions reduce to 3rem.
- **Primary:** PEACE-cyan fill and border, white 740-weight Source Sans 3 label.
- **Hover / Focus / Active:** Hover deepens to Strong PEACE Cyan and rises 2px over 180ms; active returns to baseline. Keyboard focus always retains the global 3px Safety Green outline with 4px offset.
- **Secondary:** Mechanical-teal at rest, sharing the final cascade's Strong PEACE Cyan hover state.
- **Light:** White on cyan or teal fields, moving to Ice Blue while retaining mechanical-teal text.

### Cards / Containers

Service panels and evidence fields make capability tangible without becoming a generic dashboard.

- **Corner Style:** Shared field-window radius (16px) for service panels, page heroes, maps, certificates, sector fields, and major photographic containers.
- **Background:** White service panels on Ice Blue; Mechanical Teal for proof galleries and hero copy; Ice Blue for process and form contexts.
- **Shadow Strategy:** Service Panel Lift for white service cards; Field Window Lift for layered photographs and documents.
- **Border:** Cool Line on light ruled structures and Dark Line on teal rails and bands.
- **Internal Padding:** `clamp(1.5rem, 3vw, 2.4rem)` for service-panel copy; evidence padding scales with the object and page composition.

### Inputs / Fields

Fields are practical, generous, and explicit about state.

- **Style:** White fill, cool blue-gray 1px border, 8px corners, 3.25rem minimum height for inputs and selects, and Source Sans 3 body text.
- **Focus:** PEACE-cyan border with the Field Focus halo; the default outline is removed only because this treatment is equally visible.
- **Error / Disabled:** Invalid fields use Error Red on the border and a reserved inline message below. The status region announces form-level guidance; no disabled visual variant is currently established.
- **Submission:** Valid input prepares a structured WhatsApp enquiry in a new tab. Missing WhatsApp configuration falls back to a clear call-or-email message.

### Navigation

Desktop navigation pairs the sticky white brand strip with the dark utility contact bar. Source Sans 3 links use a 2px PEACE-cyan underline for hover and current page. Below 920px, the menu control exposes `aria-expanded`, labels its open and closed states, presents a full-height panel with large Roboto Slab Variable links, makes background content inert, closes on Escape, and restores focus.

### Text Links

Text links use a strong Source Sans 3 label, a fine low-opacity underline, and an inline arrow. Hover advances only the arrow by 4px over 180ms. Light links reverse to white on teal without changing the interaction grammar.

### Field-Photo Windows

Field windows are the signature image container: authentic site photographs clipped to 16px, usually paired with a bottom caption plate. The homepage hero layers a large primary window with a smaller bordered secondary window. Other pages reuse the window, caption, and shadow language without repeating that exact overlap.

### Service, Evidence & Process Patterns

- **Service panels:** Unequal 7/5 and 5/7 spans create an editorial service showcase on desktop, resolving to two columns at tablet and one column on mobile.
- **Field evidence:** Dark proof bands use asymmetrical 12-column photography, legible captions, and only images already supplied or previously published by PEACE.
- **Quality evidence:** A site photograph and supplied certificate overlap on Ice Blue; certification status and dates remain content facts to reconfirm before publication.
- **Lifecycle rows:** Numbered `01-04` rows connect phase names to outcomes with fine rules; the explanation drops below the phase on mobile.
- **Process indices:** Four equal steps on desktop become two columns at tablet and clean ruled rows on mobile.

### Contact Stack

The contact experience embeds the quote form inside a rounded mechanical-teal hero, then follows with a dark direct-contact band and full-width site photograph. Labels, reserved errors, status messaging, keyboard focus, telephone and email links, and the WhatsApp handoff work as one conversion system rather than separate widgets.

### Motion

Buttons, arrows, navigation markers, and fields transition over 160-180ms. The homepage's two field windows clip open left-to-right over 850ms with a brief blur recovery; the secondary window follows after 120ms. Inner-page hero media is intentionally still in the final redesign. Under `prefers-reduced-motion: reduce`, clip paths and blur are removed and all nonessential animation, transition, and smooth scrolling durations collapse.

## Do's and Don'ts

### Do:

- **Do** lead major claims with authentic field photography, supplied records, or precise service language.
- **Do** use Deep Mechanical Teal for authority, PEACE Cyan for action, Ice Blue for technical organization, and White for breathing room.
- **Do** keep Roboto Slab Variable headlines concise and concrete, then let Source Sans 3 carry the explanation.
- **Do** reuse the 1280px shell, responsive gutter, 16px field windows, and established breakpoint behavior before introducing a new primitive.
- **Do** preserve captions, alt text, semantic landmarks, visible keyboard focus, inline validation, inert mobile-menu background, and reduced-motion behavior.
- **Do** distinguish reusable patterns from page-specific composition when extending the site.
- **Do** treat supplied client records and certification as intentional source caveats that require factual and permission checks before publication.

### Don't:

- **Don't** revive the rejected Barlow Condensed, navy-blue, square-evidence direction documented in the stale base layer.
- **Don't** introduce stock HVAC imagery, fabricated metrics, unverified testimonials, glass effects, gradients, or ornamental dashboards.
- **Don't** use PEACE Cyan as an indiscriminate background; its concentrated use is what makes action visible.
- **Don't** round structural bands, rails, utility bars, or ruled process rows into generic cards.
- **Don't** repeat the homepage's layered hero or exact evidence sequence as a system-wide template.
- **Don't** animate inner-page hero media or essential content, and never bypass the reduced-motion fallback.
- **Don't** publish individual client, project, or certification claims without confirming source accuracy, status, dates, and permissions.
