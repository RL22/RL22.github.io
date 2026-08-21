# Building in Public: content guidance

## Decisions at a glance

- Use multi-select discipline tags. The overlap is the proof: Rodney works across marketing, product, engineering, design, analytics, and AI rather than publishing as a single-lane developer.
- Keep every outbound link primary and claim-adjacent: official documentation, the project author's repository, a standards body, or the event/video itself.
- Use the two-repo review structure only for `matt-pocock-vs-obra-superpowers`. TypeUI and Marketing Skills are currently single-repo reviews; do not invent a second repo to satisfy a template.
- Expand the two Thoughts essays to roughly 2x their current length through examples, counterarguments, and implementation detail—not repetition.
- Expand the video writeup to roughly 3x its current length in Rodney's first-person voice. Lead with the invited-talk/first-public-talk context, then the problem, demo, response, and resources placeholder.
- Approve the `readworthy` and `character-md` migration to `type: product` / `layout: announcement`, with both remaining unpublished and excluded from every public surface this pass.
- Move all eight bodies to frontmatter-free CommonMark files at `content-strategy/posts/<slug>.md`; keep routing/display metadata in `building.json`.

## 1. Discipline taxonomy

| Piece | Disciplines | One-line rationale |
|---|---|---|
| `on-brand-stock-photos` | **AI · DESIGN · MARKETING** | Applies generative-image controls to a recognizable marketing problem: creating brand-consistent campaign photography without a shoot. |
| `agnostic-ai-stack` | **AI · ENGINEERING · PRODUCT** | Treats model selection as an architectural and product-operating decision shaped by capability, latency, cost, and reliability. |
| `code-over-willpower` | **AI · ENGINEERING** | Draws a practical boundary between probabilistic agent judgment and deterministic tests, linters, types, and release gates. |
| `matt-pocock-vs-obra-superpowers` | **AI · ENGINEERING · PRODUCT** | Compares two agentic software-delivery systems and makes a context-dependent tooling choice rather than reviewing features in isolation. |
| `typeui-repo-review` | **AI · DESIGN · ENGINEERING** | Reviews a CLI and version-controlled design constraints as infrastructure for more coherent agent-generated interfaces. |
| `marketingskills-repo-review` | **AI · ENGINEERING · MARKETING · ANALYTICS · SEO** | Shows marketing, measurement, and search workflows modeled as composable, dependency-aware agent instructions. |
| `readworthy` | **AI · ENGINEERING · PRODUCT · DESIGN** | Presents an open-source documentation format as a product whose information architecture serves both human readers and model context windows. |
| `character-md` | **AI · DESIGN · PRODUCT** | Packages consistent AI-character generation into a reusable open-source product for repeatable visual creation. |

Taxonomy rules:

- Store disciplines as an array of uppercase enum values; do not replace the existing editorial `category`, which still communicates format/series (`Thoughts`, `Repo Review`, and so on).
- Order tags by the piece's main argument, not alphabetically.
- Do not add a discipline merely because a tool could be used in that field. Each tag must be supported by the body.

## 2. High-authority external link plan

Place links on the first substantive claim they support. Avoid a detached “further reading” dump and avoid repeating a CTA link in body copy.

| Piece | Links and intended placement |
|---|---|
| `on-brand-stock-photos` | 1. [YouTube talk](https://www.youtube.com/watch?v=MP-uprxKMnQ) — canonical video/primary CTA. 2. [AI User Group event listing](https://www.aiusergroup.com/events/ai-for-designers-15) — link the event and speaker context. 3. [Midjourney parameter list](https://docs.midjourney.com/hc/en-us/articles/32859204029709-Parameter-List) — link the first mention of aspect ratio, chaos, Raw Mode, and reference controls. |
| `agnostic-ai-stack` | 1. [Vercel AI SDK](https://vercel.com/ai-sdk) or its [models and providers documentation](https://vercel.com/docs/ai-gateway/models-and-providers) — link the concrete TypeScript adapter/provider example. 2. [BerriAI/LiteLLM](https://github.com/BerriAI/litellm) — link a Python/gateway example of one interface across providers. Keep these as examples, not endorsements or proof that every provider feature is interchangeable. |
| `code-over-willpower` | 1. [GitHub protected branches and required status checks](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches) — link the CI merge-gate example. 2. [ESLint custom rule tutorial](https://eslint.org/docs/latest/extend/custom-rule-tutorial) — link the claim that a known recurring bug or convention can become an enforceable rule. |
| `matt-pocock-vs-obra-superpowers` | 1. [mattpocock/skills](https://github.com/mattpocock/skills) — repository 1 overview/card. 2. [obra/superpowers](https://github.com/obra/superpowers) — repository 2 overview/card. 3. [Agent Skills specification](https://agentskills.io/specification) — link the first explanation of `SKILL.md` as a portable format. |
| `typeui-repo-review` | 1. [bergside/typeui](https://github.com/bergside/typeui) — canonical repository and CTA. 2. [WCAG 2.2 contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) — link any claim about enforceable contrast ratios. 3. [Anthropic's frontend-design skill](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md) — use only as a named, primary-source comparison between a broad aesthetic brief and TypeUI's CLI/registry approach. |
| `marketingskills-repo-review` | 1. [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) — canonical repository and CTA. 2. [Agent Skills specification](https://agentskills.io/specification) — link the explanation of the package structure. 3. [Google Search Central SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) — use inside a concrete example showing that a skill should route claims back to authoritative domain guidance. |
| `readworthy` | 1. [RL22/readworthy](https://github.com/RL22/readworthy) — canonical product/repository CTA. 2. [CommonMark specification](https://spec.commonmark.org/) — link the discussion of portable, predictable Markdown structure. 3. [Diátaxis](https://diataxis.fr/) — link any discussion of separating documentation by user need; do not imply Readworthy implements Diátaxis unless the repo does. |
| `character-md` | 1. [RL22/character.md](https://github.com/RL22/character.md) — canonical product/repository CTA. 2. [OpenAI GPT Image 2 model documentation](https://developers.openai.com/api/docs/models/gpt-image-2) — link current model capability claims and update before publication if the tested model changes. 3. [Midjourney parameter list](https://docs.midjourney.com/hc/en-us/articles/32859204029709-Parameter-List) — link the reference-control comparison; note that Omni Reference replaces Character Reference in current Midjourney versions. |

Link-quality guardrails:

- Prefer a specific documentation page over a vendor homepage.
- Link repository names on first mention and make every GitHub preview image clickable to the same repository.
- Time-sensitive claims—model names, repository behavior, supported providers, parameters—must be rechecked immediately before publishing.
- Do not cite star counts in prose. They age quickly and do not prove quality.

## 3. Repo-review restructure

### Shared spine

1. Title, dek, metadata.
2. Editorial hero image: a visual thesis for the review, not a duplicate GitHub card.
3. One repo section per repository: what problem it solves, how it is structured, one inspected artifact, and a GitHub `og:image` preview linked to the repository.
4. Evaluation: **why I starred it → when I'd use it → limits/tradeoffs**.
5. For a genuine comparison only: **if I could pick one** with a direct answer and a context qualifier.

GitHub image handling:

- Use the repository page's current `og:image`, but wrap the image in the canonical repository link and give it a descriptive caption/alt text.
- Do not hard-code an undocumented `opengraph.githubassets.com` URL by hand. Resolve the `og:image` from the repo page and cache a local copy at build/content-ingest time; GitHub previews can change or expire.
- Show the image after the overview paragraph, before the detailed evaluation of that repository.

### Per-piece application

| Piece | Recommended section order | Decision |
|---|---|---|
| `matt-pocock-vs-obra-superpowers` | Hero → **Matt Pocock's composable, operator-led skills** + linked GitHub preview → **Obra's process-led Superpowers** + linked GitHub preview → **Where the approaches split** → **Why I starred both** → **When I'd use each** → **If I could only pick one** | Use the full two-repo template. Rodney's answer should be **Pocock for day-to-day work in an established codebase**, because its composable/operator-led shape better demonstrates senior-IC judgment; use Superpowers for larger, well-scoped work where process autonomy is the point. Re-verify current repo behavior before repeating “runs for hours” or other implementation claims. |
| `typeui-repo-review` | Hero → **The generic-UI failure mode** → **How TypeUI works** + linked GitHub preview → **The artifacts worth inspecting** (`typeui.sh`, registry, `SKILL.md`/`DESIGN.md`) → **Why I starred it** → **When I'd use it** → **Where text constraints stop** | Keep it a single-repo review. “If I could only pick one” has no valid object. If an explicit comparison is later desired, compare it with [Anthropic's frontend-design skill](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md), add a second GitHub preview, and retitle the piece before using the two-repo ending. |
| `marketingskills-repo-review` | Hero → **Why marketing workflows need shared context** → **How the repository is structured** + linked GitHub preview → **Trace one dependency path** (`product-marketing.md` → selected skill → official domain source/output) → **Why I starred it** → **When I'd use it** → **The root-context failure mode** | Keep it a single-repo review. Make the architectural trace the evidence; do not add a second repo solely for symmetry. If comparison becomes the assignment, [Anthropic's marketing knowledge-work plugins](https://github.com/anthropics/knowledge-work-plugins/tree/main/marketing) are a credible primary-source contrast, but that would require a new title, thesis, and second-repo research pass. |

Voice for all three: first person, concrete inspection (“I opened…”, “I would use…”), and no blanket verdict detached from the kind of work being done.

## 4. Thoughts essay restructure

### `agnostic-ai-stack`

- Current body: about **587 words**.
- Target: **1,100–1,300 words**; aim near 1,175, not an exact quota.
- Expansion job: add a routing example, a small adapter/config example, operational failure modes, and the cost of abstraction. Do not pad the same vendor-lock-in claim.

| Structural position | Heading/content |
|---|---|
| Opening, no H2 | Keep a tightened version of the current first paragraph as the thesis: the model is the least stable layer. |
| After the opening thesis | `## Match the model to the job` — expand capability/latency/cost fit with 3–4 task examples and a compact routing matrix. |
| After the routing matrix | `<!-- asset: agnostic-ai-stack-routing | brief: workflow → task requirements → provider adapter → selected model | alt: Diagram of a provider-agnostic model-routing layer -->` |
| After task fit | `## Lock-in is an operational risk` — deprecations, rate limits, pricing, outages, and the distinction between model portability and provider-specific features. Cite specific current sources or keep examples generic. |
| After operational risk | `## A thin adapter is usually enough` — show the interface/config boundary and explain what stays outside provider SDK code. |
| After the adapter/config example | `<!-- asset: agnostic-ai-stack-fallback | brief: primary model failure → fallback provider → normalized response | alt: Fallback flow across two model providers -->` |
| Before the conclusion | `## What not to abstract` — acknowledge lowest-common-denominator APIs, provider-specific features, evaluation drift, and when a direct SDK is the better choice. |
| Conclusion | `## Design for the swap` — concise return to the thesis and the practical decision rule. |

### `code-over-willpower`

- Current body: about **645 words**.
- Target: **1,200–1,400 words**; aim near 1,300.
- Expansion job: add a judgment-vs-invariant framework, multiple enforcement examples, CI placement, exception handling, and one counterargument about brittle automation.

| Structural position | Heading/content |
|---|---|
| Opening, no H2 | Keep the current observation about probabilistic instruction-following; cut repetition and land on “that is a design smell.” |
| After the opening | `## Prompts are policy; code is enforcement` — contrast reminders with executable checks and explain why both still matter. |
| After the principle | `## Draw the boundary between judgment and invariants` — add a two-column decision table: agent judgment for ambiguity/tradeoffs; code for repeatable pass/fail rules. |
| After the decision table | `<!-- asset: code-over-willpower-boundary | brief: agent judgment on the left, deterministic checks on the right, handoff between them | alt: Boundary between probabilistic agent work and deterministic enforcement -->` |
| Mid-essay | `## Turn every repeated correction into a gate` — formatter, linter, type checker, schema validator, regression test, link checker, and claim/release gate examples. Use only examples Rodney can truthfully own or label them as general patterns. |
| After examples | `## Put verification in CI, not memory` — show the change → checks → failure feedback → fix → merge loop and link GitHub required checks. |
| After the CI loop | `<!-- asset: code-over-willpower-ci-loop | brief: agent change → deterministic checks → failure feedback → revision → protected merge | alt: CI feedback loop that prevents an agent from bypassing verification -->` |
| Before the conclusion | `## Keep humans on judgment` — explain false positives, escape hatches, and why subjective quality still needs review. |
| Conclusion | `## Reliability is architecture` — retain the “willpower is not a control mechanism” finish without restating the whole essay. |

Essay-wide rules:

- Each H2 must advance the argument, not label a paragraph already obvious from the title.
- Prefer one concrete example per claim; do not add invented production metrics or anecdotes.
- Keep image placeholders between complete sections, never inside a paragraph or immediately below another image.

## 5. Video writeup: `on-brand-stock-photos`

- Current body: about **75 words**.
- Target: **225–300 words** (roughly 3x), excluding the resource placeholder.
- Perspective: Rodney's first person throughout. This is a short companion writeup to the video, not a transcript or third-person event recap.
- Source boundary: use the YouTube video's description/content for the workflow and demo details; use the [AI User Group event page](https://www.aiusergroup.com/events/ai-for-designers-15) for event/date/speaker context. Re-watch or obtain the transcript before final copy so the article does not infer steps that were not in the talk.

Recommended sequence:

1. **Invitation and first:** “The AI User Group host invited me…” and explicitly state that this was Rodney's **first public talk**. Do not invent the host's name, audience size, or a quote.
2. **Problem:** explain why generic stock images fail to feel owned by a brand and why a controlled augmentation workflow is useful to a marketing web team.
3. **What I showed:** rebuilding an Envoy-style stock image live with ChatGPT and Midjourney; cover `imagine`/`describe`, aspect ratio, chaos, Raw Mode, and the then-current character-reference technique. Keep the talk's 2024 terminology in historical context; link current docs separately.
4. **What happened after:** explicitly note the **strong post-talk interest** as Rodney's observation—follow-up questions/conversations and requests to see more—without converting it into an unsupported count or testimonial.
5. **Takeaway:** close on the operating lesson: brand constraints and repeatable iteration matter more than one lucky generation.
6. **Reserved resource block:**

   `<!-- resources: on-brand-stock-photos | TODO: add talk deck, prompt examples, and any referenced assets after URLs are verified -->`

Suggested H2s for the Markdown body:

- `## Why I gave this talk`
- `## Rebuilding the image live`
- `## What the response told me`
- `## Deck and resources` (render only once at least one real resource link exists)

## 6. Product migration: `readworthy` and `character-md`

**Decision: approve.** Move both entries from `repoPages` into `items` as:

```json
{
  "type": "product",
  "layout": "announcement",
  "status": "unpublished",
  "bodyFile": "content-strategy/posts/<slug>.md"
}
```

This does not conflict with `.agents/product-marketing.md`:

- The products are supporting proof for **AI-native operator**, **builder and strategist**, reusable systems, and hands-on ownership.
- They should support the portfolio's recruiter/hiring-manager conversion goal, not introduce a competing product-sales funnel.
- The announcement layout should end with “View on GitHub” plus the portfolio's existing intro/contact CTA when published.

Publication safeguards for this pass:

- Keep placeholder copy in source only. Exclude both entries from homepage/building feeds, `/blog` listings, static params/routes, sitemap, RSS, JSON-LD, OG preview indexes, and internal related-content links.
- Do not emit `publishedAt` publicly while `status` is `unpublished`; treat the existing dates as internal placeholders or replace them at actual publication time.
- Label the UI type **Product** and the page format **Announcement**. Do not continue presenting them as generic “Code” repository pages.
- Before publication, verify every capability against the repositories and flag non-resume/product claims for Rodney's review per the honesty rules. Do not add adoption, performance, or usage claims without evidence.
- An announcement should state what exists now, the problem it addresses, one or two inspected design decisions, current status, and what is next. Placeholder language must never reach a rendered route.

## 7. Markdown sharding and Fabric-ready convention

### Canonical paths

Use one file per slug, all lowercase kebab-case, with the filename exactly matching `building.json.slug`:

```text
content-strategy/posts/
├── on-brand-stock-photos.md
├── agnostic-ai-stack.md
├── code-over-willpower.md
├── matt-pocock-vs-obra-superpowers.md
├── typeui-repo-review.md
├── marketingskills-repo-review.md
├── readworthy.md
└── character-md.md
```

### File contract

- Keep `type`, `layout`, `slug`, disciplines, category, status, title, blurb, dates, CTA, video ID, and asset metadata in `building.json`.
- Replace each JSON `body` array with `bodyFile`. Do not keep two writable body sources.
- Markdown files contain **body only**: no YAML frontmatter and no H1. The page title remains the JSON title; body headings start at H2.
- Use UTF-8, LF line endings, CommonMark Markdown, one paragraph per line, and no hard wrapping.
- Use descriptive inline links. Avoid bare URLs except in code examples.
- Use stable HTML comments for image/resource placeholders, following the `<!-- asset: ... -->` and `<!-- resources: ... -->` forms above. The renderer may transform them later; the writing pipeline should preserve them verbatim.
- Avoid MDX/JSX in source bodies so Fabric patterns receive prose rather than component syntax.

### Fabric revision pipeline

Run each slug independently and non-destructively:

1. `improve_writing` → revised draft.
2. `analyze_prose_pinker` → save as a sidecar report; do **not** pipe an analysis report over the article body. Apply accepted findings to the draft.
3. `ai-seo` → optimize headings, entities, answer clarity, and link placement without changing Rodney's thesis.
4. `enrich_blog_post` → add useful examples/context only; reject generic expansion and unsupported facts.

Pipeline guardrails:

- Pass the JSON title, audience summary, and taxonomy tags as prompt context, not as editable article text.
- Mask/preserve HTML placeholder comments, code fences, and link destinations during transformations; restore them after each stage.
- Save checkpoints outside `posts/` (for example `content-strategy/revisions/<slug>/01-improve-writing.md` and `pinker-report.md`). Only an approved final draft replaces `posts/<slug>.md`.
- Diff each stage. Reject changes that alter factual claims, first-person ownership, product names, dates, URLs, or the standardized Carrot metric.
- Final pre-publish gate: link check, heading-order check, placeholder scan, unsupported-number scan, and human review against `.agents/product-marketing.md`.
