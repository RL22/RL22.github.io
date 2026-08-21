## The generic-UI failure mode

Left alone, an agent generating a UI tends to produce the same recognizable baseline: functional, generic, and visually cheap. The model can render a polished interface, but a typical prompt does not define good design in terms it can apply. [TypeUI](https://github.com/bergside/typeui) treats that gap as an engineering problem: turn design principles into explicit constraints the agent can read before writing frontend code.

That changes the operator’s job. Instead of repeatedly asking an agent to “make it look better,” I can give it a shared vocabulary for typography, spacing, color, component states, and interaction behavior before generation begins.

## How TypeUI works

TypeUI packages design guidance for AI coding tools as Markdown. Its [`npx typeui.sh` CLI](https://github.com/bergside/typeui#cli-commands) can generate or update a local design system, create a randomized starting point, list registry entries, and pull a named specification. The output can use either `SKILL.md` or `DESIGN.md`, giving the agent project-level rules it can load alongside the codebase.

The registry makes those rules reusable. TypeUI’s `list` and `pull` commands resolve named entries to Markdown source paths, so an aesthetic such as Brutalism, Neumorphism, or Paper becomes a versioned specification rather than an adjective buried in a prompt.

## The TypeUI artifacts worth inspecting

I started with the CLI surface because it shows the workflow more clearly than the project description does. The `generate`, `update`, `randomize`, `list`, and `pull` commands cover both sides of the system: author a local design specification or bring an existing one into the workspace.

The [registry contract](https://github.com/bergside/typeui/blob/main/REGISTRY.md) is the next useful artifact. It maps each slug to a `SKILL.md` path and, when available, a `DESIGN.md` path. That small index turns a collection of design opinions into something a tool can discover and install consistently.

The Markdown files carry the real value. TypeUI’s [design-system blueprint](https://github.com/bergside/typeui/blob/main/DESIGN.md) asks authors to define tokens, component states, responsive behavior, accessibility criteria, prohibited patterns, and a QA checklist. Its [fundamentals skill](https://github.com/bergside/typeui/blob/main/skills/fundamentals/SKILL.md) then points the agent to deeper modules for spacing, typography, interaction, and accessibility. The accessibility guidance goes as far as testable [WCAG 2.2 contrast requirements](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum), including the familiar 4.5:1 minimum for normal text.

## Why I starred TypeUI

I starred TypeUI because it moves design direction out of disposable chat history and into version-controlled project context. That is the same shift I want elsewhere in agent-assisted development: make recurring decisions inspectable, reusable, and available before the agent starts generating code.

The repo also draws a useful line between a visual style and the fundamentals underneath it. A named aesthetic can change, while rules for focus states, spacing rhythm, readable typography, and contrast remain part of the operating floor.

## When I would use TypeUI

I would use TypeUI at the start of an agent-assisted interface build, especially for a prototype, a new product surface, or a marketing site without a mature design system. It gives the first generation more direction and makes later corrections easier to express as changes to shared rules rather than another round of prompt tuning.

I would also use it when several agents or sessions touch the same interface. A checked-in design file gives each run the same baseline, reducing the chance that one component adopts a different spacing scale, corner treatment, or interaction pattern from the next.

## Where text constraints stop

TypeUI supplies policy, not runtime enforcement. An agent can misread a rule, implement it inconsistently, or produce a composition that satisfies every token and still feels unresolved. Contrast can be calculated; hierarchy and rhythm still need to be judged in the rendered page.

That boundary does not make the project less useful. It makes its role clearer: TypeUI raises the floor for agent-generated UI, while visual review, browser testing, and human taste decide whether the work is ready to ship.
