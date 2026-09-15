# Diagram prompts — rewritten for `/diagram-design`

Replaces the image-gen backlog table in TODO.md. Those prompts were written for a
text-to-image model (GPT Image, `image-text` route) and described *pictures*
("editorial hero image, abstract/geometric, single accent color"). `/diagram-design`
takes a different input: a **visual type**, four **output dials**, an explicit **node
list**, and a **focal choice**. These are rewritten to that contract.

Every brief's own alt text already said "Diagram of…" / "Diagram showing…", so the
subject matter never actually wanted illustration.

**Status: awaiting per-prompt approval. Nothing generated.**

## Shared settings

| Dial | Value | Why |
|---|---|---|
| Format | `svg` (via `html` source) | Site renders bare `<img>` through react-markdown; SVG stays crisp and weightless |
| Size | `doc-inline` | Per your call — heroes get the same treatment as in-body diagrams |
| Detail | `balanced` (≤12 nodes) unless noted | Under the §7 budget of 9 nodes |
| Audience | `mixed` unless noted | Engineering blog, non-engineer readers |
| Style | Clean technical, no sketchy filter, no dot pattern | Diagrams sit inside post bodies — texture would compound with page chrome |

Source `.html` → `content-strategy/diagrams.html` — **one gallery file, all eight inline SVGs**
Exported SVG → `public/blog-assets/<post-slug>/<slug>.svg`

---

## 1. `agnostic-ai-stack-routing`
**Post:** agnostic-ai-stack.md:20 · **Type:** Architecture · **Audience:** engineer

Routing layer that maps a task to an evaluated model tier, so replacing a model is a
config change rather than a code change.

- **Nodes (6):** `Workflow` (input) → `Task type` (sublabels: classification · planning · code editing · release review) → `Routing table` **[FOCAL]** → `Provider adapter` → two provider boxes (`Provider A`, `Provider B`, external treatment)
- **Connections:** linear left-to-right; adapter fans to both providers with fanned attach points ≥12px
- **Focal:** `Routing table` — the post's argument is that the table, not the SDK call, is where the decision lives
- **Cuts:** the four-row task table stays prose; the diagram carries task types as one node's sublabels rather than four nodes
- **`<title>`:** Provider-agnostic model routing
- **`<desc>`:** A workflow sends a task type to a routing table, which selects an evaluated model tier and calls it through a provider adapter that can reach more than one provider.

## 2. `agnostic-ai-stack-fallback`
**Post:** agnostic-ai-stack.md:72 · **Type:** Flowchart · **Audience:** engineer

Not a plain fallback chain. The post's actual point: *"Provider independence does not
mean every failure should silently fall through."* The release-review row has
`fallback: null` — some tasks must stop.

- **Nodes (6):** `Primary provider` → decision `Failure class?` → `Retry budget` → `Fallback provider` → `Normalized response`; second branch → `Stop · request review` **[FOCAL]**
- **Connections:** orthogonal elbows, `r=8`; dashed on the retry return edge
- **Focal:** `Stop · request review` — the counterintuitive branch is the reason the diagram exists
- **Cuts:** error taxonomy detail (timeout / rate limit / invalid output) becomes one sublabel, not three nodes
- **`<title>`:** Fallback policy across two providers
- **`<desc>`:** A failed provider call is classified, retried within a budget, then either routed to an evaluated fallback provider or stopped for human review when the task does not allow degradation.

## 3. `code-over-willpower-boundary`
**Post:** code-over-willpower.md:29 · **Type:** Swimlane (2 lanes) · **Detail:** `simplified`

The static split is the obvious diagram and the wrong one. The post says the boundary
*moves*: "Work can move from left to right… once the cause is understood, a regression
test turns that discovery into an invariant."

- **Lanes (2):** `Agent judgment` · `Deterministic checks`
- **Items (6):** left — resolve ambiguity, weigh tradeoffs, judge whether a source supports a claim; right — compiles and passes tests, required fields present, schema and allowed values enforced
- **Focal:** the **migration arrow** crossing the lane boundary, labeled `ENCODED AS A CHECK` **[FOCAL]** — this is the thesis, not the two columns
- **Cuts:** the five-row decision table stays prose; three items per lane, not five
- **`<title>`:** Where judgment ends and enforcement begins
- **`<desc>`:** Two lanes separate work requiring agent judgment from work a deterministic check can settle, with an arrow showing a repeated judgment being encoded as a check and crossing the boundary.

## 4. `code-over-willpower-ci-loop`
**Post:** code-over-willpower.md:55 · **Type:** Flowchart with return edge · **Audience:** engineer

- **Nodes (5):** `Agent change` → `Required status check` → decision → `Specific failure feedback` (returns to Agent change, dashed) → `Protected merge` **[FOCAL]**
- **Focal:** `Protected merge` with a boundary treatment — the post's point is placement: *"a check that can be skipped is still partly a memory test"*
- **Detail worth keeping:** the failure node's sublabel carries the post's concrete example (`category must be one of four values`) rather than "validation failed" — the difference *is* the argument
- **Cuts:** bypass-permission caveat stays prose
- **`<title>`:** Verification as a merge contract
- **`<desc>`:** An agent change runs required status checks; a failure returns specific, bounded feedback for revision, and only a passing change reaches a protected merge.

## 5. `matt-pocock-vs-obra-superpowers-hero`
**Post:** matt-pocock-vs-obra-superpowers.md:1 · **Type:** Tree (one root, two branches)

Both repos "start from the same diagnosis" and diverge on where the operator sits —
which is literally a tree.

- **Nodes (7):** root `Coding agents need engineering discipline` → left `Operator-led` (children: focused controls, composable skills) → right `Process-led` (children: discovery → review, agent-followed)
- **Focal (2):** the two branch heads — the contrast is the subject, and this is the one diagram where spending both coral slots is correct
- **Cuts:** no repo names inside nodes; attribution belongs in the caption, and the OG-card crop cuts fine text
- **`<title>`:** Two ways to structure agent work
- **`<desc>`:** One shared diagnosis branches into an operator-led approach offering focused composable controls and a process-led approach installing a development process the agent follows end to end.

## 6. `typeui-repo-review-hero`
**Post:** typeui-repo-review.md:1 · **Type:** Data flow
**Semantic pattern:** Unstructured input → structured artifact

Matches the pattern exactly: a generic agent output becomes a coherent interface once
version-controlled constraints are readable before generation.

- **Nodes (6):** `Generic agent output` → constraint set (`typography`, `spacing`, `color`, `interaction states` — one node, four sublabels) → `Coherent interface` **[FOCAL]**
- **Focal:** the constraint set — the argument is that the constraints are the artifact, not the output
- **Cuts:** the MCP/plugin expansion noted in the post is out of the review's scope and out of the diagram
- **`<title>`:** Design constraints as readable context
- **`<desc>`:** Generic agent-generated interface output passes through version-controlled typography, spacing, color, and interaction constraints to produce a coherent interface.

## 7. `marketingskills-repo-review-hero`
**Post:** marketingskills-repo-review.md:1 · **Type:** Dependency graph · **Detail:** `simplified`
**APPROVED: Alt option — Dependency graph, not Tree**

- **Nodes (5):** `.agents/product-marketing.md` **[FOCAL]** ← depended on by `Copywriting`, `SEO`, `Analytics`, `Growth`
- **Edges (4):** each workflow → the context file, drawn as dependency edges (fan-in), not parent-to-child branches. This is the difference from a tree: the arrows point *at* the shared dependency, which is the post's claim — the file is what every skill reads before acting
- **Ranks:** 2 (workflows on one rank, context file on the other). No cycles
- **Focal:** the context file — "the shared dependency for downstream work"
- **Cuts:** `skills/` vs `tools/` repo layout stays prose
- **`<title>`:** One product context, four workflows
- **`<desc>`:** Four marketing workflows — copywriting, SEO, analytics, and growth — each depend on a single shared product-marketing context file that they read before acting.

## 8. `eighty-twenty-coding-agents-hero`
**Post:** eighty-twenty-coding-agents.md:1 · **Type:** Tree · **Detail:** `simplified`
**APPROVED: Tree, not Quadrant — no invented axis positions**

- **Nodes (6):** root `80% of agentic reliability` → four children: `Low-fidelity alignment`, `Context-sized tickets`, `Deterministic resets`, `Prompt pruning`; plus one de-emphasized node `500-line system prompt` marked `DELETE`
- **Treatment:** the anti-pattern node uses the optional/async treatment (dashed `4,3`, `ink @ 0.02` fill) so it reads as the thing being removed, not a fifth practice
- **Focal:** root **[FOCAL]** — the claim is the 80/20 itself
- **Why not Quadrant:** the post quantifies neither effort nor reliability gain. A quadrant would have implied measured positions that do not exist
- **`<title>`:** Four constraints, one anti-pattern
- **`<desc>`:** Four lightweight architectural practices account for most of the reliability gain in coding agents, replacing a long monolithic system prompt shown as the pattern to delete.


---

## Proposed style-guide token mapping

From `tailwind.config.ts` + `app/globals.css`. Not yet written to the skill.

| Role | Default | → Proposed | Source |
|---|---|---|---|
| `paper` | `#f5f5f5` | `#F5EFE6` | body bg / `bg-cream` — makes the SVG blend into the page |
| `paper-2` | `#ececec` | `#EDE4D8` | `cream-dark` |
| `ink` | `#2d3142` | `#111827` | gray-900, the h2 color |
| `muted` | `#4f5d75` | `#374151` | gray-700, the body color |
| `soft` | `#7a8399` | `#6B7280` | gray-500 |
| `rule` | `rgba(45,49,66,0.12)` | `rgba(17,24,39,0.12)` | ink at same opacity |
| `rule-solid` | `#bfc0c0` | `#D6C9B6` | warm hairline that reads on cream |
| `accent` | `#eb6c36` | `#A5523D` | `brand.dark` — 5.42:1, clears AA at 8px label sizes |
| `accent-tint` | `rgba(235,108,54,0.08)` | `rgba(192,97,74,0.10)` | `brand.DEFAULT` at low opacity for fills only |
| `link` | `#2e5aa8` | `#8A4433` | `brand.darker` — the site has no blue; a blue arrow would read as foreign |

**Typography** — site has no serif and no mono:

| Role | Default | → Proposed |
|---|---|---|
| `title` | Instrument Serif | **Bricolage Grotesque 700** (`--font-display`) |
| `node-name` | Geist | **Figtree 600** (`--font-body`) |
| `callout` | Instrument Serif italic | **Figtree 400 italic** |
| `sublabel` / `eyebrow` / `arrow-label` | Geist Mono | **Geist Mono** — *disclosed fallback*: the brand has no mono, and the skill reserves mono for technical content |

Both site faces are Google Fonts, so they load under the skill's single-file rule.
Pristine defaults are already backed up to `~/.diagram-design/profiles/default.md`.
