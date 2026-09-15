# Diagram build spec (self-contained)

Produce ONE `<svg>` fragment per diagram. No HTML wrapper, no CSS, no `<script>`.
Write each to `content-strategy/.diagram-fragments/<slug>.svg`. Nothing else.

## Canvas
`<svg viewBox="0 0 960 600" role="img" aria-labelledby="<slug>-title <slug>-desc" xmlns="http://www.w3.org/2000/svg">`
`<title id="<slug>-title">` MUST be the first child, before `<defs>`. Then `<desc id="<slug>-desc">`.
IDs are prefixed with the diagram slug — never bare `title`/`desc` (8 diagrams share one page).
First paint: `<rect width="100%" height="100%" fill="#F5EFE6"/>`. No dot pattern.

## Tokens (exact hex — do not substitute)
| Role | Hex |
|---|---|
| paper | `#F5EFE6` |
| paper-2 | `#EDE4D8` |
| ink | `#111827` |
| muted | `#374151` |
| soft | `#6B7280` |
| rule | `rgba(17,24,39,0.12)` |
| rule-solid | `#D6C9B6` |
| accent | `#A5523D` |
| accent-tint | `rgba(192,97,74,0.10)` |
| link | `#8A4433` |

## Node treatments
| Type | Fill | Stroke |
|---|---|---|
| Focal (1–2 MAX per diagram) | `rgba(192,97,74,0.10)` | `#A5523D` |
| Backend / step | `#ffffff` | `#111827` |
| Store / state | `rgba(17,24,39,0.05)` | `#374151` |
| External | `rgba(17,24,39,0.03)` | `rgba(17,24,39,0.30)` |
| Input / user | `rgba(55,65,81,0.10)` | `#6B7280` |
| Optional / async | `rgba(17,24,39,0.02)` | `rgba(17,24,39,0.20)` dashed `4,3` |
| Boundary | `rgba(165,82,61,0.05)` | `rgba(165,82,61,0.50)` dashed `4,4` |

## Typography (fonts load on the host page; reference by family name)
- Node name — `font-family="'Figtree', sans-serif"` 12px weight 600, fill `#111827`
- Sublabel — `font-family="'Geist Mono', monospace"` 9px, fill `#374151`
- Eyebrow / type tag — Geist Mono 8px, uppercase, `letter-spacing="0.08em"`
- Arrow label — Geist Mono 8px, `letter-spacing="0.06em"`, fill `#6B7280`
- NEVER JetBrains Mono. Human-readable names go in Figtree, never mono.

## Arrow markers — define all three in `<defs>`, with slug-prefixed IDs
```svg
<marker id="<slug>-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
  <polygon points="0 0, 8 3, 0 6" fill="#374151"/></marker>
<marker id="<slug>-arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
  <polygon points="0 0, 8 3, 0 6" fill="#A5523D"/></marker>
<marker id="<slug>-arrow-link" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
  <polygon points="0 0, 8 3, 0 6" fill="#8A4433"/></marker>
```

## SIX MANDATORY CONNECTOR RULES — each violation is an automatic fail
1. **Orthogonal only.** Rounded right-angle elbows, quarter-arc `r=8` (min `r=6`). A plain
   straight `<line>` is allowed ONLY when both endpoints share an x or y coordinate.
   Diagonal/slanted connectors are an automatic fail.
2. **Label gap 6–10px.** Every arrow label sits on an opaque `fill="#F5EFE6"` mask rect, and
   there must be a VISIBLE 6–10px gap between the mask edge and the connector stroke. The mask
   must never touch or cover the stroke. Labels ≤14 chars, ALL CAPS, centred on the segment.
   For vertical segments put the label beside the line, same 6–10px gap. Never `writing-mode`.
3. **No overlapping connectors.** No two connectors share a stroke path or run on top of each
   other for any segment. Parallel runs stay ≥12px apart end-to-end.
4. **Fan the attach points.** When N connectors touch the same edge of a box, each gets its own
   point: for edge length L, point k sits at `L*k/(N+1)` from the leading corner, ≥12px apart.
5. **No transit behind a non-endpoint box.** Reroute around. (The narrow dashed exception does
   not apply to any diagram in this set — just reroute.)
6. **No label mask may overlap a box drawn later.** Boxes paint after labels, so a mask landing
   inside a box gets clipped and the text renders as a fragment on the border. Put labels on
   segments crossing open canvas.

Draw order: background rect → connectors+labels → boxes. Arrows go BEHIND nodes.

## Node box pattern
```svg
<rect x="X" y="Y" width="W" height="H" rx="6" fill="#F5EFE6"/>   <!-- opaque mask -->
<rect x="X" y="Y" width="W" height="H" rx="6" fill="FILL" stroke="STROKE" stroke-width="1"/>
<text x="CX" y="CY+2" fill="#111827" font-size="12" font-weight="600"
      font-family="'Figtree', sans-serif" text-anchor="middle">Node Name</text>
```

## 4px grid — NON-NEGOTIABLE
Every x, y, width, height, gap, and font-size divisible by 4.
Font sizes: 8, 12, 16, 20, 24. Node widths: 96,112,120,128,140,144,160,180,200,240.
Gaps: 20,24,32,40,48. Radius: 4,6,8. Exempt: stroke-width (0.8/1/1.2) and opacities.
If a coordinate ends in 1,2,3,5,6,7,9 — fix it.

## Budget
Max 9 nodes. Max 12 arrows. **Max 2 accent/focal elements** — accent is editorial, not a
signalling system. Legend only if genuinely needed; if used it is a horizontal strip at the
BOTTOM above a hairline `#D6C9B6` separator, never floating inside the diagram.

## Anti-patterns (automatic fail)
No shadows anywhere. No `rounded-2xl` (max radius 8). No identical boxes for every node —
vary width to express hierarchy. No accent on more than 2 elements. No dark backgrounds.
No cyan/purple. No legend floating inside the diagram area.

## Deletion test before you finish
Can any node be removed and the reader still understand? Can two nodes that always travel
together be merged? Is any arrow's relationship already obvious from layout? Target density
is 4/10 — technically complete, not exhaustive.
