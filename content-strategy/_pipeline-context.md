Shared context for the per-piece rewrite pass. Read alongside `.agents/product-marketing.md` and `content-strategy/guidance.md`.

## Voice (from .agents/product-marketing.md)

- Professional, peer-to-peer, collegial senior operator — not corporate vendor, not junior portfolio.
- Confident, specific, low on adjectives. Show, don't tell.
- Avoid: "passionate," "innovative," "streamline," "synergy," unverified buzzwords.
- Embrace: ownership verbs (own, lead, partner, architect, ship), concrete artifacts, exact numbers.
- Reference voice: Stripe docs + Linear product copy — plain, specific, unhyped, technical when the audience demands it.
- **Never fabricate numbers, testimonials, company names, or claims Rodney didn't make.** If a fact isn't in the source shard and isn't independently verifiable from the linked repo/video, do not invent it — write around the gap or leave it as a `<!-- VERIFY: ... -->` comment instead of asserting it.

## Pipeline (run in this order, on the Markdown body only — no frontmatter, no H1)

1. **improve_writing** — refine clarity, grammar, coherence. Preserve meaning and intent exactly. No commentary in output, just the refined text.
2. **analyze_prose_pinker** — self-critique against Steven Pinker's *The Sense of Style*: classic-style clarity, active voice, no nominalizations/jargon/clichés/hedging/passive voice. Produce a short sidecar report (STYLE ANALYSIS / CRITICAL ASSESSMENT / IMPROVEMENT RECOMMENDATIONS, condensed) and apply the accepted recommendations back into the draft. Do not paste the raw report into the article body.
3. **ai-seo pass** — clear entities and headings, answer-first structure where natural, descriptive link text (never bare URLs), heading hierarchy that mirrors how someone would search this topic. Don't distort the thesis to chase keywords.
4. **enrich_blog_post** — add structure/format only (the requested H2s, links, image-placeholder comments per the piece's guidance section). Do NOT add, remove, or change substantive content in this step — that's what steps 1–3 were for. This step is packaging, not rewriting.

## Guardrails

- Diff mentally against the original shard before finalizing: reject any change that alters factual claims, first-person ownership, product names, dates, URLs, or specific numbers.
- Keep placeholder/resource HTML comments (`<!-- asset: ... -->`, `<!-- resources: ... -->`) verbatim where the guidance doc specifies them — don't resolve them into real content, they're markers for a later image-gen pass.
- Output Markdown only: no YAML frontmatter, no H1 (title lives in building.json), UTF-8, LF endings, one paragraph per line, no hard-wrapping.
- Descriptive inline links only — never a bare URL in prose.

## Deliverables per piece

1. Overwrite `content-strategy/posts/<slug>.md` with the final draft (after all 4 stages).
2. Write `content-strategy/revisions/<slug>/pinker-report.md` — the condensed Pinker self-critique from step 2.
3. Write `content-strategy/revisions/<slug>/notes.md` — a short list of any `<!-- VERIFY: ... -->` markers you left, and a 2-3 sentence summary of what changed structurally.
