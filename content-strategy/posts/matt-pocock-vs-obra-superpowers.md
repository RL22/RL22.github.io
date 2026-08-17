<!-- asset: matt-pocock-vs-obra-superpowers-hero | brief: two contrasting agent-workflow systems branching from the same engineering problem, one modular and operator-led, the other sequential and process-led | alt: Two agentic software-development workflows, one modular and one sequential, compared side by side -->

Matt Pocock and Jesse Vincent (Obra) start from the same diagnosis: coding agents need engineering discipline. Without clear requirements and feedback loops, an agent can drift from the request, ignore the architecture around it, or produce code it has not verified. Both repositories package repeatable practices as agent skills, but they put the human operator in different positions. Pocock gives the operator a set of focused controls. Superpowers installs a development process that the agent follows from discovery through review.

## Matt Pocock's composable, operator-led skills

[Matt Pocock's skills repository](https://github.com/mattpocock/skills) is a collection of small, adaptable workflows for software engineering rather than one prescribed delivery system. The repository separates user-invoked skills, which orchestrate work when the developer explicitly calls them, from model-invoked skills, which the agent can select when a task fits. Each skill uses the portable [`SKILL.md` format defined by the Agent Skills specification](https://agentskills.io/specification), so the workflow lives in inspectable, version-controlled text rather than a hidden prompt.

[![GitHub preview for Matt Pocock's composable agent-skills repository](https://opengraph.githubassets.com/b901433918e7d86f3c331d4a2bee53719e29cb111dc22723baf6f04d331f07c4/mattpocock/skills)](https://github.com/mattpocock/skills)

*GitHub preview for [mattpocock/skills](https://github.com/mattpocock/skills), a modular skill library for software-engineering agents.*

I opened [`grill-with-docs`](https://github.com/mattpocock/skills/blob/main/skills/engineering/grill-with-docs/SKILL.md) because it makes the structure easy to see. Its top-level file is deliberately small: it is user-invoked, then composes two reusable skills for grilling and domain modeling. The interview sharpens the plan while the domain-modeling work captures shared vocabulary and architectural decisions. Other skills cover narrower execution disciplines such as test-driven development, diagnosis, code review, and turning a conversation into a specification.

That structure keeps the developer close to the work. I can call the workflow that matches the current problem, inspect what it will do, and stop before a small request expands into a full delivery ceremony. The cost is operator attention. I still need to choose the right skill, settle boundaries, and steer the sequence.

## Obra's process-led Superpowers

[Obra's Superpowers repository](https://github.com/obra/superpowers) presents itself as a complete software-development methodology built from composable skills. Its default path moves from brainstorming to an approved design, an implementation plan, task execution, test-driven development, review, and branch completion. The skills activate as the work reaches each stage, so the agent carries more of the orchestration burden.

[![GitHub preview for Obra's process-led Superpowers repository](https://opengraph.githubassets.com/e5bd508a8a6e91f17779a3d94b75523bdedc51c50f272b4859cb755bf259e898/obra/superpowers)](https://github.com/obra/superpowers)

*GitHub preview for [obra/superpowers](https://github.com/obra/superpowers), an agentic software-development methodology organized as a connected workflow.*

I inspected [`subagent-driven-development`](https://github.com/obra/superpowers/blob/main/skills/subagent-driven-development/SKILL.md), the execution stage behind that promise. It assigns each implementation task to a fresh subagent, reviews the result for specification compliance and code quality, records progress in a ledger, and continues through the plan without pausing between tasks. The repository's current README says this can let an agent work autonomously for a couple of hours without departing from an approved plan. That is the project's claim, not a guarantee, but the skill's stop conditions, review loops, and recovery ledger show how the process is designed to support longer runs.

Superpowers therefore asks for more agreement before implementation and less intervention during it. That is useful when the work can be decomposed cleanly. It is heavier when the task is tiny or when the right design only becomes visible through close, iterative contact with an established codebase.

## Where the approaches split

The difference is not modular skills versus composable skills; both repositories use composition. The split is who owns the workflow and when judgment enters it.

| Decision | Matt Pocock's skills | Obra's Superpowers |
|---|---|---|
| Entry point | The operator invokes a focused workflow | The methodology activates relevant stages around the task |
| Planning | Alignment tools can be selected as needed | Brainstorming, design approval, and a detailed plan form the standard path |
| Execution | The operator composes skills around the codebase and task | The process dispatches tasks and reviews them against the approved plan |
| Main tradeoff | More human orchestration, less ceremony by default | More up-front ceremony, more room for autonomous execution |

Pocock's design treats operator judgment as a feature. Superpowers treats a strong, approved process as the mechanism that lets the operator step back. Neither removes human judgment; each moves it to a different part of the job.

## Why I starred both

I starred both because they turn familiar engineering practices into reusable agent infrastructure. Neither repository asks me to trust a better prompt. They encode requirement discovery, domain language, test-first implementation, debugging, review, and verification as artifacts I can inspect and adapt.

They also expose a useful design choice for anyone building an agentic workflow: decide whether the human should select the next discipline or approve a process that selects it. That question matters more to me than which repository has the longer skill list.

## When I'd use each

I would use Pocock's skills for day-to-day work in an established codebase. A targeted feature, a difficult bug, or an architectural question usually needs context-sensitive judgment more than a full project lifecycle. The composable, operator-led shape lets me keep the blast radius small, choose the feedback loop for the moment, and stay accountable for the technical decisions.

I would use Superpowers for larger, well-scoped autonomous work: a new service with an approved design, a broad refactor already divided into independent tasks, or an implementation plan that can support several reviewable handoffs. In that setting, the planning ceremony pays for itself by giving the execution loop a stable contract.

The reverse cases reveal each system's limit. Pocock's approach can make the operator the throughput constraint on a long, decomposable plan. Superpowers can spend more time formalizing and dispatching a small fix than the fix deserves. The right choice follows the shape of the work, not a blanket ranking.

## If I could only pick one

For my day-to-day work in an established codebase, I would pick Pocock's skills. They make senior-IC judgment visible: I choose the tool, define the seam, inspect the result, and keep the agent close to the architecture already in place.

For a larger, well-scoped body of autonomous work, I would switch to Superpowers. Its value is the connected process: agree on the design and plan, then let task isolation, review gates, and progress tracking keep execution aligned. My default is Pocock; the context qualifier is that Superpowers is the stronger fit when process autonomy is the point.
