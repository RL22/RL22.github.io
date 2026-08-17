<!-- asset: marketingskills-repo-review-hero | brief: a product-marketing context file at the root feeding copywriting, SEO, analytics, and growth workflow branches | alt: Shared product context branching into coordinated marketing workflows -->

## Why marketing workflows need shared context

Marketing work often runs through separate documents, tools, and owners. Conversion optimization, copywriting, analytics, and technical SEO may each be sound on their own while operating from different assumptions about the audience, positioning, or conversion goal. [Corey Haines's Marketing Skills repository](https://github.com/coreyhaines31/marketingskills) treats that coordination problem as an engineering problem: give AI agents structured marketing workflows, then make them read the same product context before they act.

The important choice is not simply putting marketing advice into Markdown. It is making `.agents/product-marketing.md` the shared dependency for downstream work. That file gives every activated skill the same account of the product, audience, positioning, voice, proof, and goals. The repository turns alignment from something an operator has to restate in every prompt into context the system can inspect and reuse.

## How the Marketing Skills repository is structured

I opened the repository expecting a loose prompt library. Instead, the root separates the skill packages in `skills/` from shared tooling in `tools/`, plugin metadata, installation instructions, and validation scripts. Inside a skill directory, `SKILL.md` defines when the skill should activate and how the agent should perform the work; larger skills can move supporting detail into `references/` and load it only when needed.

That shape follows the [Agent Skills specification](https://agentskills.io/specification): a required `SKILL.md` can sit beside optional scripts, references, and assets. It also makes the marketing system portable. The repository documents installation paths for multiple coding agents, while the workflow logic remains readable, editable, and version controlled.

[![GitHub preview for Corey Haines's Marketing Skills repository](https://opengraph.githubassets.com/0847b423a5fdf5191c1816ee1fa8d345873f95cea3a2440e4a3fab59e8faa0c4/coreyhaines31/marketingskills)](https://github.com/coreyhaines31/marketingskills)

*GitHub preview for the Marketing Skills repository.*

## Trace one dependency path

Take a technical SEO audit. The path begins with `.agents/product-marketing.md`, where the operator records the business goal, priority audience, conversion action, and relevant language. The `seo-audit` skill checks for that file before it asks for missing site context, then works through crawlability, indexation, technical foundations, on-page optimization, content quality, and authority. Its output is a prioritized audit with evidence, impact, and a specific fix for each issue.

The chain should not end with the skill's own instructions. If the audit recommends descriptive link text, clearer titles, or useful image alt text, I would route the supporting claim to the [Google Search Central SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide). The product file supplies local intent, the skill supplies the workflow, and the official domain source supplies the external standard. That separation is what makes the result useful: context determines what matters, but context does not get to redefine how search works.

## Why I starred it

I starred the repository because it models marketing work as an inspectable system instead of a stack of isolated prompts. The useful artifact is the dependency structure: shared context at the root, specialized instructions at the task layer, and explicit handoffs to adjacent skills when the work crosses a boundary. Copy, measurement, search, and growth can stay distinct without drifting into separate versions of the product story.

That is an engineering habit applied to go-to-market work. The files can be reviewed in a pull request, adapted to a team's operating model, and updated when the market or product changes. The agent still generates probabilistic work, but the inputs and workflow are no longer hidden inside a one-off chat.

## When I'd use it

I would use Marketing Skills when I own a marketing site across disciplines and want the agent to retain the same strategic frame from one task to the next. It fits work such as moving from positioning into page copy, auditing the page for search, defining analytics, and then preparing an experiment without rebuilding the brief at every step.

I would also fork it when a team already has established playbooks. The repository is most useful as a version-controlled starting point that can absorb company-specific review gates, sources, and output formats. I would not treat it as a substitute for a marketer, analyst, or SEO specialist; I would use it to give those people and the agent a shared operating layer.

## The root-context failure mode

The strength of the architecture is also its main failure mode. Everything downstream inherits the root context, so vague positioning, an unsupported proof point, or an outdated audience definition can spread through otherwise well-executed work. The agent can follow the workflow precisely and still produce the wrong strategy because it started from the wrong premise.

The repository's product-marketing workflow includes versioning and a changelog, which makes changes easier to inspect. It cannot decide whether the root claims are true. I would treat `.agents/product-marketing.md` like production configuration: assign an owner, link claims to evidence, review substantive changes, and revisit it before a campaign or positioning shift. Shared context creates leverage only when someone is accountable for its quality.
