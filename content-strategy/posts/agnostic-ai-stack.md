I believe AI workflows should not be designed around a single model provider. The model market moves too quickly for that commitment to make sense: prices change, capability rankings flip between releases, and the best model for a task today may be the wrong choice six months from now. The model is the least stable layer in the stack, so it should not be the layer everything else depends on.

## Match the model to the job

Provider-agnostic architecture starts with task requirements, not model rankings. Different tasks need different levels of reasoning, speed, context, and reliability. A workflow that sends every request to one default model ignores those differences and usually pays for capability it does not need or accepts weak results where deeper reasoning matters.

Consider four hypothetical jobs. A support-ticket classifier would need predictable labels, low latency, and low cost because it might run constantly. A planning pass would call for stronger reasoning and could tolerate a slower response. A code-editing step would need reliable instruction following, structured output, and enough context to understand the affected files. A final release review might warrant the most capable model available because a missed issue could cost more than the inference call.

An illustrative routing policy could stay compact:

| Task | Primary requirement | Sensible route | Fallback priority |
|---|---|---|---|
| Classification | Low cost and stable labels | Fast, small model | Same schema on another provider |
| Planning | Reasoning depth | Strong general model | Next evaluated reasoning model |
| Code editing | Code quality and context | Code-capable model | General model that passes code evals |
| Release review | Accuracy over latency | Highest-confidence evaluated model | Stop and request review |

The last row matters. Provider independence does not mean every failure should silently fall through to another model. Some tasks can degrade safely; others should stop. Routing needs an explicit failure policy alongside the model choice.

<!-- asset: agnostic-ai-stack-routing | brief: workflow → task requirements → provider adapter → selected model | alt: Diagram of a provider-agnostic model-routing layer -->

## Lock-in is an operational risk

Directly wiring workflow logic to one provider's SDK turns changes on their side into changes in your application. The obvious risks are model retirements, rate-limit changes, pricing changes, and outages. The less obvious risks are different timeout behavior, tool-call formats, safety responses, token accounting, and error shapes. A provider may return a retryable status, a partially structured response, or a valid response that no longer behaves like the version you evaluated.

These are normal platform conditions, not edge cases. OpenAI's [API compatibility guidance](https://platform.openai.com/docs/api-reference/backward-compatibility) notes that prompting behavior can change between model snapshots and recommends pinned versions plus evaluations. Amazon Bedrock publishes [model lifecycle states and migration guidance](https://docs.aws.amazon.com/bedrock/latest/userguide/model-lifecycle.html) for active, legacy, and end-of-life models. The details differ by platform, but the operational lesson is the same: model availability and behavior have a lifecycle.

A portable workflow should define what happens when a call times out, reaches a rate limit, returns invalid structured output, or exhausts its context window. Retry transient failures with a fixed budget. Route to an evaluated fallback only when the task allows it. Log the provider, model, latency, token use, and failure class in a common format. If every provider emits different telemetry, portability exists in the request path but not in operations.

Model portability is also narrower than provider portability. A plain text-generation step may move easily. A workflow built around a provider's hosted tools, prompt caching, computer-use API, or proprietary retrieval layer may not. The architecture should make that dependency visible instead of pretending it does not exist.

## An illustrative thin-adapter pattern

At the architectural level, one possible answer is a small boundary between workflow logic and model calls. The workflow would describe the task; an adapter would translate that request into a provider-specific API call and normalize the response. Prompts, business rules, evaluation criteria, retry policy, and task routing would stay outside provider SDK code.

The following TypeScript is illustrative pseudocode for that pattern, not a production implementation or a description of a system I have built:

```ts
type ModelTask = "classify" | "plan" | "edit" | "review";

type ModelRequest = {
  task: ModelTask;
  prompt: string;
  schema?: object;
};

type ModelResult = {
  text: string;
  model: string;
  provider: string;
  usage?: { inputTokens: number; outputTokens: number };
};

interface ModelAdapter {
  generate(request: ModelRequest): Promise<ModelResult>;
}

const routes = {
  classify: { primary: "fast", fallback: "balanced" },
  plan: { primary: "reasoning", fallback: "balanced" },
  edit: { primary: "code", fallback: "reasoning" },
  review: { primary: "reasoning", fallback: null },
} satisfies Record<ModelTask, { primary: string; fallback: string | null }>;
```

In this hypothetical design, the adapter would normalize only what the workflow truly shares: input messages, structured-output requests, response text, usage, and a small error taxonomy. Each provider implementation could still expose an escape hatch for native options. That would keep the common path clean without blocking features that have no equivalent elsewhere.

Configuration could then map task types to evaluated model tiers rather than scattering model IDs through application code. In principle, replacing a model would become a configuration change followed by an evaluation run, not a search-and-rewrite project. A fallback provider could use the same normalized contract, keeping a second provider branch out of each task workflow.

The same boundary could also make tests more useful. A workflow could run against a fake adapter in unit tests, while provider contract tests could verify request translation and response normalization. Model evaluations would then answer a separate question: does this candidate model perform the task well enough to enter the routing table?

<!-- asset: agnostic-ai-stack-fallback | brief: primary model failure → fallback provider → normalized response | alt: Fallback flow across two model providers -->

## What not to abstract

Abstraction has a cost. A universal interface can collapse into the lowest common denominator, hide useful provider features, and create translation code that is harder to understand than a direct SDK call. It also does not make models interchangeable. Two models behind the same `generate` method can differ in tool use, instruction following, output length, safety behavior, and judgment.

That is why every route needs evaluations. Swapping a provider without rerunning task-specific tests trades code portability for quality drift. The adapter can normalize response shapes; it cannot normalize model behavior. Keep golden examples, schema checks, and human-reviewed cases for the tasks that matter, then require a candidate model to pass before changing the route.

Some workflows should use a provider directly. If the product depends on a unique realtime API, hosted agent runtime, or multimodal feature, wrapping every capability may add ceremony without creating a realistic fallback. In that case, isolate the integration, document the dependency, and accept the tradeoff deliberately. The goal is not abstraction everywhere. The goal is to keep replaceable inference from leaking through the entire system.

## Design for the swap

I am not arguing for chasing every model release or building a routing platform before a workflow needs one. The principle I believe in is the smallest boundary that keeps task logic separate from a volatile dependency: explicit requirements, a thin adapter, a configuration-driven route, and evaluations that qualify replacements.

The decision rule is simple. If a model call is ordinary inference and another provider could perform the same job, put it behind the boundary. If the workflow depends on a provider-specific capability, expose that dependency clearly and test it as such. Pay the small design cost while the integration is simple, and the eventual swap becomes routine work instead of an emergency rewrite.
