<!-- asset: eighty-twenty-coding-agents-hero | brief: 80/20 breakdown showing four lightweight architectural constraints replacing bloated 500-line system prompts | alt: Diagram showing the 80/20 rule of AI coding agents: low-fidelity alignment, context-sized tickets, deterministic resets, and prompt pruning -->

Most developers using AI coding agents are caught in the high-fidelity trap. They type a two-sentence feature request into Claude Code, Cursor, or Codex, and the model immediately responds by dumping 500 lines of unvetted code across six files. It feels like magic for thirty seconds—until you open the pull request. You find subtle architectural mismatches, hallucinated dependencies, and broken conventions that take two hours to unravel.

Developers usually respond by inflating their prompts. They write 300-line system prompts stuffed with rules, warnings, and formatting demands, hoping more instructions will force the model into line. It rarely works. Monolithic prompts degrade attention, waste tokens, and accumulate contradictions.

When [Matt Pocock’s agent skills repository](https://github.com/mattpocock/skills) passed 214,000 GitHub stars, it became one of the most popular AI developer projects in open-source history. But if you look past the star count and examine the codebase, the real lesson is not that you need dozens of complex tools. It is that 80% of agentic reliability comes from four lightweight, structural constraints. In fact, one of the most effective skills in the entire repository—`grill-me`—is only 22 lines of markdown.

Here is the 80/20 of AI coding agents: the four architectural practices that actually make agents reliable in production, and the one prompt anti-pattern you should delete today.

## 1. Stop prompting in high fidelity: align in text first

The default reflex of every modern LLM is high fidelity. You describe a feature, and it jumps straight to full TypeScript implementations. In *Shape Up*, Ryan Singer points out that working at high fidelity too early is the most expensive way to build anything. When code already exists, changing your mind means refactoring syntax, updating imports, and deleting throwaway files. When you explore ideas at low fidelity—in plain text—you can test architectural assumptions in seconds without writing a line of code.

Matt Pocock’s [`grill-me` skill](https://github.com/mattpocock/skills/blob/main/skills/grill-me/SKILL.md) solves this in 22 lines. Instead of letting the agent write code, `grill-me` forces it to interview the developer before touching the codebase.

The skill structures the alignment conversation as a **decision tree**:
- **Branching logic**: Every major technical choice branches into dependent sub-decisions.
- **The frontier**: The agent asks only questions whose prerequisites are already settled.
- **Batched questions**: Questions arrive in numbered batches with recommended defaults.

Instead of drafting lengthy explanations, the developer answers in shorthand: `Q1: 1, Q2: auth only, Q3: PostgreSQL`. In five minutes of low-fidelity text alignment, you catch edge cases, agree on threat models, and settle data contracts. When the agent finally writes code, it builds the exact system you agreed on, not a plausible guess.

## 2. Slice specs into context-window-sized tickets

Large agentic tasks fail because context windows degrade over time. When an agent reads hundreds of lines of code, explores directories, writes tests, and debugs errors inside a single long-running chat session, the context window fills with noise. Attention mechanisms dilute, hallucinations multiply, and the model starts ignoring instructions established at the beginning of the turn.

The fix is treating the context window as a hard physical constraint:
1. **`to-spec`**: The pre-alignment interview produces a comprehensive architectural specification defining the destination.
2. **`to-ticket`**: The spec is sliced into modular, vertical tasks where **one ticket = one context window**.

Each ticket is self-contained: it specifies the exact files to modify, the acceptance criteria, and the verification commands. If a ticket cannot be planned, implemented, and verified within a fresh context window, it is too large and must be split further.

## 3. Clear context between tasks with deterministic loops

Once work is sliced into tickets, executing them sequentially inside a single ongoing conversation is an anti-pattern. You do not want ticket seven inheriting the token baggage and failed debugging attempts of tickets one through six.

Reliable autonomous execution requires a deterministic harness on top of the model:
- An orchestrator (like Matt Pocock’s open-source tool [`Sandcastle`](https://github.com/mattpocock/sandcastle) or a custom GitHub Actions workflow) reads the ticket queue.
- It spins up a clean agent session with a fresh context window for Ticket #1.
- The agent implements the change, runs local tests, and creates a commit or pull request.
- The orchestrator wipes the context window completely clean and boots a fresh agent session for Ticket #2.

By combining deterministic orchestration with probabilistic model reasoning, an agent can churn through 20 or 30 tickets overnight while you sleep. When you wake up, you review clean, isolated pull requests rather than a messy, context-polluted mega-diff.

## 4. Hunt prompt "no-ops" and prune aggressively

The most common failure mode in developer prompt engineering is the accumulation of **prompt no-ops**—instructions that do nothing to alter the agent's actual behavior.

When an agent makes a mistake, developers instinctively add another sentence to their system prompt: *"Always be thorough,"* *"Ensure high quality,"* or *"Double-check your logic."* These phrases are dead weight. A language model cannot operationalize "be thorough" into a concrete computation. An instruction the model already obeys by default, or cannot mathematically enforce, costs tokens to say nothing.

Matt Pocock’s `writing-for-agents` skill automates the removal of prompt cruft through three rules:
- **Single source of truth**: Never duplicate a rule across multiple files. Duplication creates synchronization drift and maintenance overhead.
- **Sentence-by-sentence audit**: Check every prompt instruction. If deleting the sentence does not measurably change the model’s output, delete it permanently.
- **Code over willpower**: If a behavior must happen 100% of the time, never ask the agent to remember it. Encode it as a linter, a TypeScript type, a Playwright test, or a CI release gate.

## The takeaway: architecture over prompting

The difference between developers who struggle with AI coding tools and those who ship production features every day has nothing to do with finding secret prompt incantations.

It comes down to four simple engineering disciplines:
1. **Align in low-fidelity text** before writing code (`grill-me`).
2. **Slice work into context-sized tickets** (`to-ticket`).
3. **Wipe context between execution loops** (`Sandcastle` / CI).
4. **Enforce invariants with deterministic code** rather than bloated prompts.

When you strip away the hype, 22 lines of structured alignment and three architectural habits will outperform a 500-line system prompt every single time.
