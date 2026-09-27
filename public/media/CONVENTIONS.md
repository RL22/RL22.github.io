# Media Asset Naming & Architecture Conventions

This document codifies the canonical media conventions for https://rl22.github.io. All static media assets residing in `public/media/` must adhere strictly to these rules.

---

## 1. Directory Hierarchy & Namespace

Media assets are strictly segregated into three top-level functional namespaces:

```
public/media/
├── work/{company}/         # Case study visual proof, screenshots, architecture thumbnails
├── blog/{post-slug}/       # Editorial heroes, figures, inline diagrams per post
├── shared/                 # Global site branding, author avatar, theme backgrounds
├── work/MANIFEST.md        # Technical ledger tracking dimensions, budgets, and rubric scores
└── CONVENTIONS.md          # This canonical policy document
```

### Namespace Rules
1. **Work (`/media/work/{company}/`)**: Grouped by lowercase client/company identifier (e.g., `carrot/`, `pendo/`, `mednition/`, `kiddom/`, `appzen/`). Never group by arbitrary project codes.
2. **Blog (`/media/blog/{post-slug}/`)**: Grouped by exact matching kebab-case post slug (e.g., `agnostic-ai-stack/`, `the-router-i-actually-run/`).
3. **Shared (`/media/shared/`)**: Flat folder strictly reserved for site-wide, multi-page assets (e.g., author portraits, icons, OG defaults).

---

## 2. Filename Syntax & Grammar

Every filename must follow strict POSIX `kebab-case`:

$$\text{Pattern: } \mathtt{\wedge[a-z0-9]+(-[a-z0-9]+)*\.[a-z]\{3,4\}\$}$$

### Semantic Anatomy
Filenames follow a predictable three-part syntax:

$$\mathtt{\{descriptor\}[-\{role\}][-\{variant\}].\{ext\}}$$

| Component | Status | Purpose | Examples |
| :--- | :--- | :--- | :--- |
| `{descriptor}` | **Required** | 2–4 lowercase words identifying the visual subject or interface module. | `clinical-ai`, `roi-calculator`, `sitemap` |
| `{role}` | **Required** for UI assets | Structural layout role in the design system. | `thumb`, `hero`, `diagram`, `anim`, `icon`, `avatar` |
| `{variant}` | **Optional** | Qualitative state, theme, or before/after comparison. | `before`, `after`, `dark`, `light` |
| `{ext}` | **Required** | Lowercase file format extension. | `webp`, `png`, `svg`, `html` |

### Character Set Constraints
- **Allowed:** Lowercase letters `[a-z]`, numbers `[0-9]`, single hyphens `-`.
- **Prohibited:** Uppercase letters `[A-Z]`, underscores `_`, spaces, symbols (`+`, `@`, `%`), consecutive hyphens `--`.
- **Case-Sensitivity Guard:** Linux hosts (GitHub Pages) enforce strict case sensitivity. Any camelCase or capitalized extension (`.PNG`) introduces fatal 404 errors.

---

## 3. Standard UI Roles & Dimensional Budgets

Next.js static export (`output: 'export'`) serves images unoptimized (`images.unoptimized: true`). To prevent layout shift (CLS) and keep pages under 100 KB payload budgets, assets must align to explicit roles:

| Role Suffix | Aspect Ratio | Target Dimensions | WebP Budget | PNG/JPG Budget | Primary Use Case |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`-thumb`** | 16:9 | 1600 × 900 px | $\le 100\text{ KB}$ | $\le 200\text{ KB}$ | Case study showcase cards, index listings, catalog headers |
| **`-hero`** | 16:9 or 21:9 | 1920 × 1080 px to 2560 × 1344 px | $\le 150\text{ KB}$ | $\le 250\text{ KB}$ | Full-width editorial blog headers, widescreen hero mockups |
| **`-figure`** | Variable | 1600 × variable (max 2000 px tall) | $\le 120\text{ KB}$ | $\le 220\text{ KB}$ | In-article full-page screenshots, UI proof comparisons |
| **`-diagram`** | Fluid | Scalable Vector Graphic (SVG) | $\le 30\text{ KB}$ (SVG) | $\le 150\text{ KB}$ (fallback) | Architecture pipelines, schema maps, routing DAGs |
| **`-anim`** | Variable | Microinteraction loops | N/A | $\le 300\text{ KB}$ (video) / $\le 500\text{ KB}$ (GIF) | Interactive HTML or looping MP4/WebM animation |

> [!IMPORTANT]
> **Never embed pixel dimensions in filenames.** Filenames like `hero-1600x900.png` create broken inbound links whenever an image is re-cropped. Dimensions belong exclusively in `app/data/work.json` and `public/media/work/MANIFEST.md`.

---

## 4. Format Pairing & Serving Rules

1. **Dual-Format Pairing (Mandatory for High-Traffic Rasters)**:
   - Every screenshot, card thumbnail, and editorial hero must exist as both `.webp` (primary) and `.png` (fallback).
   - Render in markup using semantic `<picture>` elements:
     ```html
     <picture>
       <source srcset="/media/work/carrot/cms-architecture-thumb.webp" type="image/webp" />
       <img src="/media/work/carrot/cms-architecture-thumb.png" alt="..." width="1600" height="900" loading="lazy" />
     </picture>
     ```
2. **SVG-First for Architecture & System Flows**:
   - Technical diagrams must be SVG components or standalone SVGs optimized via SVGO.
   - Text inside SVGs must be real `<text>` nodes (for search indexing and screen readers), with labels $\le 28$ characters.
3. **PNG-Only for OpenGraph & Social Cards**:
   - Social scrapers (Slack, X, LinkedIn, Discord) often fail to parse WebP or evaluate `<picture>`.
   - OpenGraph preview cards (`1200 × 630 px`) must be standalone PNG assets.
4. **HTML/Video over Heavy GIFs**:
   - Animated microinteractions exceeding 500 KB as GIF must be replaced with standalone interactive HTML (`.html`) or high-efficiency MP4/WebM.

---

## 5. SEO & Accessibility Harmonization

1. **Hyphenated Tokenization**:
   - Search engines treat hyphens `-` as word separators. `pendo-experience-hub.webp` indexes as `pendo`, `experience`, and `hub`.
   - Underscores `_` or camelCase concatenate words into unsearchable compound tokens.
2. **Avoid Folder Stutter (Namespace Redundancy)**:
   - *Bad:* `/media/blog/agnostic-ai-stack/agnostic-ai-stack-routing.png` (repeats slug).
   - *Good:* `/media/blog/agnostic-ai-stack/provider-routing-figure.png`.
   - *Bad:* `/media/work/carrot/carrot-cms-architecture-thumb.webp`.
   - *Good:* `/media/work/carrot/cms-architecture-thumb.webp`.
3. **Filename vs. Alt Text Separation**:
   - **Filename**: Concise, indexable technical entity tag (`/media/work/appzen/roi-calculator.webp`).
   - **Alt Text**: Human-readable, descriptive natural-language narrative describing concrete metrics and UI states:
     ```tsx
     alt="Interactive Expense Audit ROI calculator on AppZen showing input sliders for $700K enterprise spend and dynamic annual savings output cards."
     ```

---

## 6. Prohibited Anti-Patterns

| Anti-Pattern | Bad Example | Correct Replacement | Rationale |
| :--- | :--- | :--- | :--- |
| **Namespace Stutter** | `blog/seo/seo-hero.png` | `blog/seo/audit-guide-hero.png` | Directory path already provides context; repeating it bloats URLs. |
| **Case Pollution** | `shared/sfBizPort.jpg` | `shared/sf-business-portal.jpg` | CamelCase breaks case-sensitive Linux web servers (HTTP 404). |
| **Vague Placeholders** | `shared/bg.jpg`, `callout.jpg` | `shared/terracotta-accent-grid.jpg` | Carries zero accessibility or SEO keyword value. |
| **Version Suffixes** | `carrot-careers-v2.png` | `carrot-careers.png` | Version control belongs in git, not production filenames. |
| **Cryptic Acronyms** | `shared/cfp.jpg` | `shared/crossfit-power-landing.jpg` | Impossible to audit or locate without manual inspection. |
| **Orphaned Media** | 0 references in codebase | Move to `.archive/` or delete | Bloats static deployment bundles and repository clone times. |

---

## 7. Automated CI & Pre-Commit Verification

To guarantee adherence, automated test suites enforce the following rules:

1. **Path Regular Expression (`app/work/content.test.ts`)**:
   - Case study images must match: `^\/media\/work\/[a-z0-9-]+\/[a-z0-9-]+\.(png|webp|svg|html|gif)$`
   - Case study thumbnails must match: `^\/media\/work\/[a-z0-9-]+\/[a-z0-9-]+-thumb\.(png|webp)$`
2. **Dimension Assertion**:
   - All `-thumb` assets must assert `width === 1600` and `height === 900`.
3. **Alt-Text Assertion**:
   - All visual assets must have descriptive `alt` text exceeding 10 characters without containing banned marketing buzzwords.
