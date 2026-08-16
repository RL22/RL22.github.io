# TODO

## Building in Public

Still gated behind `SHOW_BUILDING_IN_PUBLIC` in [app/config.ts](app/config.ts),
currently `false`. That one flag controls the homepage section, the navbar and
footer links, the `/blog` URLs in `sitemap.xml`, and `noindex` on the blog pages.

**Done**, in [app/data/building.json](app/data/building.json): featured video
is real, the two unfilled video slots were dropped, five real articles
(two Thoughts essays, three Repo Review pieces) replace the old generic
article placeholders, and a `category` field (`BlogCategory` in
[app/blog/content.ts](app/blog/content.ts)) is wired across all three
content types, shown as a label only.

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

1. **Repo pages** (`readworthy`, `character-md`): still have placeholder
   `body` paragraphs and `highlights`. **On hold** — the plan is to shrink
   these to a brief intro with a primary CTA out to the long-form
   piece/video on Sprintz, but that needs the actual Sprintz URLs first.
2. **Hero images for the 5 real blog posts**: prompts are drafted and
   model-routed (3 → Nano Banana Pro / "image", 2 → GPT Image /
   "image-text", see conversation history for the full prompts). Nothing
   generated yet — waiting on explicit go-ahead. Separate from OG images.
3. Flip `SHOW_BUILDING_IN_PUBLIC` to `true` — blocked on 1–2 above. The
   blog pages' bottom CTA links to `/#building`, currently a dead anchor;
   resolves itself on unhide.

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
