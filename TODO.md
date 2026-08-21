# TODO

## Building in Public

`SHOW_BUILDING_IN_PUBLIC` in [app/config.ts](app/config.ts) is now `true`
(flipped 2026-08-16). That flag controls the homepage section, `/building`,
`/blog`, the navbar/footer links, the `/blog` URLs in `sitemap.xml`, and
indexing on the blog pages. Per-item visibility is separate: each entry in
[app/data/building.json](app/data/building.json) carries its own
`"status": "published" | "unpublished"`, filtered centrally in
[app/blog/content.ts](app/blog/content.ts) — `readworthy` and `character-md`
are `unpublished` and excluded from every public surface (homepage, `/blog`,
`/building`, sitemap, feed.xml, static params) regardless of the site-wide flag.

**2026-08-16 schema migration:** `body: string[]` arrays replaced with
`bodyFile` pointers into `content-strategy/posts/<slug>.md` (plain
CommonMark, no frontmatter/H1, rendered via `react-markdown` through
`app/blog/MarkdownBody.tsx`). `repoPages` was folded into `items` as
`type: "product"` / `layout: "announcement"`. `category` was repurposed from
a single format label into a multi-select discipline array (`ENGINEERING`,
`PRODUCT`, `MARKETING`, `ANALYTICS`, `AI`, `DESIGN`, `SEO`); format is now
carried by `type` (`video` / `thoughts` / `repo review` / `product`) and
`layout` (`video` / `article` / `comparison` / `review` / `announcement`).
Repo-review pieces gained a `repos: [{ name, url, ogImage }]` field with each
repo's real GitHub `og:image` URL, embedded inline in the Markdown body.
Full rationale in [content-strategy/guidance.md](content-strategy/guidance.md);
per-piece revision notes and Pinker prose reports in
`content-strategy/revisions/<slug>/`.

**Done**, in [app/data/building.json](app/data/building.json): featured video
is real, the two unfilled video slots were dropped, five real articles
(two Thoughts essays, three Repo Review pieces) replace the old generic
article placeholders, each essay expanded to its target word count with H2
structure, and the video writeup expanded from ~75 to ~245 words in
first-person voice. All run through the `improve_writing` →
`analyze_prose_pinker` → ai-seo → `enrich_blog_post` Fabric pipeline.

**Image-gen backlog** — asset placeholders left as `<!-- asset: slug | brief:
... | alt: ... -->` markers in the Markdown bodies (not yet generated,
routed per the model-delegation skill's image-routing guide; all lean
`image-text`/GPT Image since they're diagrams with labels and directional
flow, not photoreal scenes):

| Slug / marker | Prompt | Route |
|---|---|---|
| `agnostic-ai-stack-routing` | Clean technical diagram, provider-agnostic AI model-routing layer. Left to right flow: "Workflow" box → "Task requirements" box (labeled with small tags: reasoning depth, latency, cost) → "Provider adapter" box → "Selected model" box. Flat modern style, single accent color, generous whitespace, sans-serif labels, on white background. | image-text |
| `agnostic-ai-stack-fallback` | Clean technical diagram showing a fallback flow across two model providers. "Primary model" box with a broken/red connector labeled "failure" pointing down to "Fallback provider" box, then both merging into a "Normalized response" box. Flat modern style, single accent color, sans-serif labels, on white background. | image-text |
| `code-over-willpower-boundary` | Split diagram, two labeled halves. Left half "Agent judgment" (icon: a thought bubble or dotted/soft-edged shapes suggesting ambiguity) — labeled with "ambiguity", "tradeoffs". Right half "Deterministic checks" (icon: sharp checkmark/gate shapes) — labeled with "tests", "linters", "types", "CI gates". A clear vertical boundary line down the middle labeled "handoff". Flat modern style, single accent color, on white background. | image-text |
| `code-over-willpower-ci-loop` | Circular/looping technical diagram: "Agent change" → "Deterministic checks" → "Failure feedback" (branch back to Agent change) or "Pass" → "Protected merge". Flat modern style, single accent color, clear arrows, sans-serif labels, on white background. | image-text |
| `matt-pocock-vs-obra-superpowers-hero` | Editorial hero image, two contrasting agent-workflow systems branching from one shared root problem. Left branch: modular, composable blocks (operator-led). Right branch: a single connected sequential pipeline (process-led). Abstract/geometric, not literal UI screenshots, single accent color on a neutral background, wide aspect ratio suitable for an article hero. | image-text |
| `typeui-repo-review-hero` | Editorial hero, split view. Left side: a generic, visually flat interface mockup (default spacing, no hierarchy). Right side: the same layout made coherent — clear typographic hierarchy, consistent spacing scale, defined contrast. Abstract UI blocks, not real screenshots, single accent color, wide aspect ratio suitable for an article hero. | image-text |
| `marketingskills-repo-review-hero` | Editorial hero, a single root document/context file at the top branching down into multiple labeled workflow paths (copywriting, SEO, analytics, growth). Flat modern diagram style, single accent color, wide aspect ratio suitable for an article hero. | image-text |
| `on-brand-stock-photos` resources block | No image — reserved for the real talk deck/slide links once verified. Not an image-gen task. | — |

Nothing generated yet — waiting on explicit go-ahead, same as before.

**Also done:** per-post OG images, generated automatically at build time via
Next's `opengraph-image.tsx` file convention (Satori/`ImageResponse`), not
hand-authored per post. Covers every `/blog/[slug]` post (video/article/repo,
3 template variants) and every `/work/[slug]` case study (a 4th variant).
Built on the `og-image` and `programmatic-brand-assets` skills' implementation
rules, using the templates already designed at `/og-preview` as the visual
source of truth. Shared machinery lives in `app/lib/og-theme.tsx` +
`app/lib/og-assets.ts`; fonts live in `app/og-fonts/` (static TTF weights,
fetched from Google Fonts' CSS2 API since Bricolage Grotesque/Figtree only
ship as variable fonts upstream). New pages get an OG image automatically the
next time they're added to `work.json`/`building.json` and the site builds —
no manual step. `/blog` and `/work` index pages still use the sitewide
`og-default.png` fallback; only the detail pages were in scope.

1. **Products** (`readworthy`, `character-md`, now `type: "product"` /
   `layout: "announcement"` in `items`): still `"status": "unpublished"`,
   still placeholder body copy. **On hold** — same reason as before: shrink
   to a brief intro with a primary CTA out to the long-form piece/video on
   Sprintz, needs the actual Sprintz URLs first.
2. ~~Hero images for the 5 real blog posts~~ — **superseded** by the
   per-piece asset-placeholder backlog table above (2026-08-16 content
   pass); the earlier draft prompts referenced "conversation history" that
   no longer applies to the current post structure.
3. ~~Flip `SHOW_BUILDING_IN_PUBLIC` to `true`~~ — **done**, 2026-08-16.

A running list of future article ideas, tailored to this site's audience and
inspired by codeline.co/thoughts, lives at [blog-ideas.json](blog-ideas.json)
in the repo root.

## Homepage design decisions (backlogged)

Deferred on purpose, not forgotten. No urgency signal from the owner yet.

5. Move the Experience section above About.
6. Hero's tech-stack icon ticker duplicates the Skills section — consider a
   dedup.
7. Hero's floating stat cards ("9+ Years", "6 Organizations") match the
   banned hero-metric template. Owner chose to defer this to a dedicated
   `/impeccable shape` pass rather than a quick fix — never scheduled.

## /work design decisions (backlogged)

8. The pillar row (`ENGINEERING · PRODUCT · MARKETING · ANALYTICS`) on the
   `/work` index is static text, not a functioning filter. Make it real or
   demote it to plain unlabeled text.
9. 4 of 7 case studies have no bespoke diagram component: `pendo-core-web-platform`,
   `mednition-landing-page-templates`, `kiddom-component-architecture`,
   `appzen-campaign-templates`. 3/7 do (`app/work/diagrams/`).

## Test suite

10. **18 pre-existing failures in `tests/work.spec.ts`**, unrelated to any
    recent change:
    - 16 failures from a stale `getByRole("term")` selector — the case-study
      Brief section was converted from `<dl>/<dt>` to `<div>/<h2>` in an
      earlier session, the Playwright spec was never updated to match.
    - 1 failure expects "Four builds" in the `/work` H1; the page correctly
      says "Seven builds" (stale from before Mednition/Kiddom/AppZen shipped).
    - 1 **real** finding: an axe-core contrast violation on the inline
      "Experience" link in `/work`'s "Not the full work history" paragraph
      (1.12:1 measured, needs 3:1, and no non-color styling to compensate).

## Resume page

11. Hardcoded off-brand terracotta in `resume.css` (`#A5423D`) instead of the
    real brand token (`#A5523D`).
12. Screen layout is fixed at 816px wide, causing horizontal scroll on mobile
    (print layout is unaffected and correctly fixed-width).
13. Some body type renders under the 14px mobile-minimum guideline.
14. Print margins are `0.5in`; a code comment says `0.6in` is required —
    resolve the discrepancy one way or the other.

## Sitewide polish & accessibility

15. No `aria-current` on the active nav item for Work/Resume in either
    `Navbar.tsx` or `WorkChrome.tsx`.
16. Assorted touch targets still under 44×44px beyond what the tiered polish
    pass already fixed (case-study link rows, footer nav, contact info
    links).
17. About section's body prose can exceed the 65–75ch measure guideline at
    some viewport widths.
18. Featured Experience cards are `<article>` elements with `<span>` org
    titles rather than headings — no semantic heading inside each card
    (the Earlier-role rows do use real headings).
