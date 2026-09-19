The earlier post, "Model-Agnostic by Design," was a pitch. It laid out a routing table, some illustrative pseudocode, and a thin-adapter pattern — and said plainly, in its own text, that none of it was a production implementation or a description of a system I'd built. It was the argument for why you shouldn't wire your workflow to one provider's SDK.

This post is the receipt. `delegate.sh` is the thing I actually built: a single bash script, currently at v1.4.0, that fronts three model CLIs — `agy` for Gemini, `codex` for GPT, `claude` for Claude — behind one routing table, one sandboxing policy, and one output contract. Everything below is grounded in the real script, real tests, and a real adversarial review that happened before this shipped. Nothing here is hypothetical.

## One router, three CLIs, no favorites

Any of the three CLIs can be the one driving — the interactive session you're actually typing into. `delegate.sh` doesn't care which. It routes work to a *different* CLI as a subprocess, based on a task name, not a provider preference.

The routing table used to live directly in the script as a pipe-delimited string, parsed by hand with bash's `IFS='|' read`. It now lives in a separate `routes.json`, validated once at load time by a small stdlib-only Python loader — more on why below the table:

| Task | Executor | Model | Effort | Mode | Fallback |
|---|---|---|---|---|---|
| `search` | `agy` | `gemini-3.1-pro` | high | web | `stop` |
| `bulk` | `agy` | `gemini-3.7-flash` | high | read | `claude-haiku-4-5` |
| `cheap` | `agy` | `gemini-3.7-flash` | low | read | `claude-haiku-4-5` |
| `media` | `agy` | `gemini-3.7-flash` | high | read | `stop` |
| `scaffold` | `agy` | `gemini-3.7-flash` | medium | write | `stop` |
| `review` | `codex` | `gpt-5.6-sol` | high | read | `stop` |
| `reason` | `codex` | `gpt-5.6-sol` | high | read | `stop` |
| `audit` | `claude` | `claude-opus-4-6` | high | read | `stop` |
| `implement` | `codex` | `gpt-5.6-sol` | medium | write | `stop` |
| `summarize` | `claude` | `claude-haiku-4-5` | low | read | `stop` |
| `draft` | `claude` | `claude-sonnet-5` | medium | read | `stop` |

(Three image-generation routes exist too, but they're not central to this.) Every model ID is pinned explicitly. Nothing here is "whatever the CLI defaults to" — a route names an exact model, and if that model gets deprecated, the fix is a one-line edit to the table, not a code change. `mode` sets the sandbox ceiling — read, write, or web — independent of which CLI ends up executing the task.

The one hard rule the router enforces: never delegate a task back to the CLI that's currently driving. If Codex is driving and calls `review` or `reason` — both normally routed to Codex — the router reroutes to Claude Opus instead. That's not a formality. It's the difference between a second, independent model actually looking at your work versus the same process quietly reviewing itself and calling it review.

Task comes in, hits the routing table, passes the self-delegation check, and only then does a command get built and executed.

![Flowchart of delegate.sh resolving a task to an executor: routing table lookup, self-delegation guard with a reroute branch, then building the sandboxed command](/blog-assets/the-router-i-actually-run/real-router-diagram-1.svg)

## A narrow fallback policy, and an envelope that always tells you why

Fallback is the part I was most conservative about, and I think that restraint is the right call. Of the eleven non-image routes, only two — `bulk` and `cheap` — have a real fallback, and both fall back to the same place: `claude:claude-haiku-4-5`. Everything else is `stop`-only.

The line I drew: tasks whose output gets *consumed* — a bulk read, a cheap transform — can degrade safely onto another model if the first one fails. Tasks whose output gets *judged* — `review`, `reason`, `audit`, `implement`, a verdict, a diff — can't. A second model silently standing in for a failed one on a judgment call isn't a convenience, it's a correctness risk you didn't sign up for.

On a hard failure, an eligible task retries exactly once. It logs to stderr — `falling back once to claude/claude-haiku-4-5` — never chains into a second fallback, and gets skipped straight through to the original failure if the fallback executor would just repeat the exact executor+model that already failed, or would equal whichever CLI is currently driving.

It's worth being honest about where that boundary actually lives: it's not a hard-coded guard in the code. The `stop`-only rule for `review`/`reason`/`audit`/`implement` sits in the exact same editable `routes.json` as the effort level and the model ID. Nothing stops someone from giving `review` a fallback, any more than it stops someone from dropping its effort to `low`. That's a deliberate tradeoff — one file as the single source of truth keeps the router genuinely simple — but it means the safety boundary is a convention encoded in data, not an invariant the runtime enforces against its own configuration. A careless edit can widen the blast radius and nothing will stop it. Schema validation catches a *malformed* row; it has no opinion on a well-formed one that quietly removes a safety boundary.

The `--json` flag, new in v1.3.0, is the other half of this. Every execution — success or failure — now emits the identical shape: `{success, executor, model, task, duration_seconds, text, escalated_from, fallback_used, error}`. Before this version, a successful call got clean structured JSON and a failed one just dumped raw stderr with nothing a caller could parse. `text` is `null` only on a genuinely hard failure — empty output, a timeout. Any nonzero exit, even one with partial output, now populates `error` with a short excerpt of stderr, so you can't end up with `success:false, error:null`. I left `usage` — token or cost accounting — out on purpose. None of the three CLIs expose per-call token counts on stdout today, and faking that field to make the schema look complete would've been worse than leaving it honestly absent.

Primary attempt runs, a failure gets classified, it passes through the three guard checks — stop-only, self-delegation, same-executor dedup — and either way, success or fallback or final failure, the same envelope comes out the other side.

![Flowchart of the fallback decision: a hard failure passes through three eligibility guards before one retry, and every outcome converges on the same normalized envelope](/blog-assets/the-router-i-actually-run/real-router-diagram-2.svg)

## What an adversarial review actually caught

This wasn't written and shipped — it went through a review from a genuinely independent model, a different CLI with no shared context with the one that wrote the diff, specifically hunting for bugs. It found two real blocking issues before any of this went out.

First: a task that got auto-promoted from read-only to write-mode — because its prompt asked to save a file — was keeping the fallback policy from its read-only origin. That meant a failed *mutation* could silently retry on a different model with edit permissions, which is exactly the one thing the fallback design exists to prevent. Fixed: auto-promotion now always drops the inherited fallback.

Second: the envelope hole I mentioned above — nonzero exit, partial output, `success:false` with `error:null`. Same fix as described.

It also caught a subtler one, worth fixing but not blocking: an existing, unrelated reroute mechanism could occasionally land the primary attempt on the exact same executor+model the fallback would also use — so on failure, the code would retry the identical call that had just failed. Fixed, with a regression test that pins it down.

Two other findings from that review got traced and deliberately left alone, not "fixed." The one worth naming: the moderation-retry mechanism applies independently to a fallback attempt too. That looked suspicious on first read, but it's intentional — a fallback call can trip moderation just as easily as a primary one, and it should get the same retry treatment, not a stripped-down version of it. Leaving an accurate finding alone is its own kind of discipline; "the reviewer flagged it" isn't a reason to change code that's already correct.

Eleven regression test groups back all of this, five of them added specifically for this change: fallback recovering a failure, a stop-only task never falling back, the self-delegation guard applying to the fallback target too, a successful primary never touching the fallback path, and the same-executor dedup case. All pass. `bash -n` is syntax-clean. I don't have shellcheck available in this environment, and I'd rather say that plainly than pretend the coverage is tighter than it is.

## The routing table stopped being a string

One more thing changed after the review above: the routing table itself moved out of the script. It used to be a pipe-delimited string parsed inline with `IFS='|' read`, which meant adding a single column — the `fallback` field in the table above — meant updating three separate parsing sites by hand: the `--list` loop, the lookup function, and a hard-coded field-count assertion three lines later. Get one of those out of sync and a route fails silently or off by one field, not loudly.

It's `routes.json` now, and a small stdlib-only Python loader — no new dependency, `python3` was already required for the JSON envelope — validates the whole table once at load time. A missing field, a wrong type, a duplicate task name: it fails immediately, naming the exact row and field, before any route gets resolved. Same routing decisions, same output contracts on both `--list` and a task lookup, so nothing that calls `delegate.sh` had to change. Two more regression tests cover the parts that actually changed: a deliberately broken table gets rejected with a specific reason, and the shipped table round-trips through both output contracts. Thirteen regression groups total now.

I thought about calling this a "hook" — Claude Code's event-triggered shell scripts — before building it, and talked myself out of it fast. A hook reacts to something already happening; this table is an explicit lookup for something about to happen on request. Wrong category for the job. The actual fix was smaller than a new primitive: stop hand-parsing a string, start validating structured data.

That's the actual state of it: one script, three CLIs, a schema-validated routing table anyone can still edit for better or worse, and a fallback policy narrow enough that I trust it. It's not a platform, and I'm not going to pretend it is. The two honest gaps are the `usage` field I left out because I wasn't going to fake it, and shellcheck in CI, which I just haven't wired up yet. Both are next.
