An agent's judgment is probabilistic, no matter how capable the model or how carefully written the prompt. Run the same instruction repeatedly and the outputs will vary, even when they're all reasonable. The gap between close and correct is where bugs, style drift, and broken conventions live. When I noticed how much of my agentic workflow depended on an agent remembering to do something correctly every time, I started treating that dependence as a design smell.

## Prompts are policy; code is enforcement

A prompt can state the policy: format changed files, preserve the schema, run the tests, and cite the source for every claim. It gives the agent context, priorities, and a definition of good work. That instruction still matters because the agent needs to understand what it is trying to produce and why.

But a reminder is not an enforcement mechanism. The agent still has to interpret and retain it as the context grows, which leaves room for variation. Clearer prompting improves the odds; it does not turn a probabilistic process into a deterministic one.

Code serves a different purpose. A formatter can reject inconsistent output. A schema validator can name the missing property. A test can reproduce a known failure. These checks do not need to understand the whole task. Well-designed checks evaluate a narrow condition reproducibly, though flaky dependencies and environment drift can still introduce variation. The prompt sets direction; the executable check defines the boundary the output cannot cross unnoticed.

The useful pattern is prompts for intent and code for invariants. The agent does the open-ended work, runs the checks, and revises within explicit limits.

## Draw the boundary between judgment and invariants

The first design decision is deciding which work belongs on each side. I use a simple test: does the task require context and tradeoffs, or can a machine evaluate the result with a repeatable pass-or-fail rule?

| Agent judgment | Deterministic enforcement |
|---|---|
| Choose an implementation that fits the surrounding architecture | Confirm that the implementation compiles and passes its tests |
| Decide whether prose is clear for the intended reader | Confirm that required headings, fields, and links are present |
| Weigh accessibility, visual hierarchy, and product intent together | Reject markup that violates a defined accessibility rule |
| Judge whether a source supports the meaning of a claim | Reject a release when a claim lacks its required source record |
| Resolve ambiguity or explain why requirements conflict | Enforce file names, schemas, allowed values, and output formats |

Work can move from left to right. The first occurrence of a bug may require investigation; once the cause is understood, a regression test turns that discovery into an invariant. A reviewer may spot a convention by eye before a custom lint rule becomes its better home. The boundary should move whenever the team learns to express a repeated judgment as a reliable check.

If a rule depends on audience, risk, or context, forcing it into a binary check creates busywork. “This page must have one H1” is testable. “This introduction must earn the reader's attention” is not. One measures structure; the other requires editorial judgment.

<!-- asset: code-over-willpower-boundary | brief: agent judgment on the left, deterministic checks on the right, handoff between them | alt: Boundary between probabilistic agent work and deterministic enforcement -->

## Turn every repeated correction into a gate

The best candidates for enforcement are corrections that are specific, recurring, and cheap to evaluate. Failures should give the agent enough detail to act without guessing.

A formatter owns syntax layout. A linter owns recognizable code patterns, from unused imports to a project convention expressed through an [ESLint custom rule](https://eslint.org/docs/latest/extend/custom-rule-tutorial). A type checker owns incompatible interfaces. Together, they remove categories of low-value comments before a human opens the diff.

Beyond source code, a schema validator can reject an unknown category or missing key. A link checker can detect a malformed route or unreachable reference. A regression test can preserve the failure mode that prompted a fix. Instead of telling the agent to remember what went wrong last time, the repository remembers through executable examples.

Content workflows can use the pattern too. A claim gate can require a source identifier before sensitive copy moves to publication without deciding whether the source truly supports the claim. A release gate can confirm that tests, types, and required artifacts exist without judging the product decision. Gates enforce evidence and structure; reviewers interpret them.

I apply the same distinction to task completion. I do not ask an agent to remember to run tests before claiming that a change works. I require a verification step to pass and the agent to observe its output. For a specific class of bug, the durable response is a test that reproduces it and fails if it returns. A prompt reminder can disappear in a crowded context; a failing test stays attached to the code.

Not every check needs a framework. A small script that verifies filenames, scans for forbidden placeholders, or compares output with a committed contract may be enough. The value is in making the rule executable and easy to run.

## Put verification in CI, not memory

Local checks provide quick feedback, but the shared control point belongs in continuous integration: the agent makes a change; CI runs the checks; a failure returns specific feedback; the agent fixes the cause; only a passing change becomes eligible to merge.

Placement matters because a check that can be skipped is still partly a memory test. A formatter command in a README depends on someone running it; a required job becomes part of the merge contract. [GitHub protected branches and required status checks](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches) provide one implementation: when required status checks are enabled, affected collaborators cannot merge until those checks pass. Administrators and roles with bypass permission are exempt by default unless bypassing is explicitly disabled.

Failure messages are part of the interface. “Validation failed” sends the agent back into open-ended diagnosis. “`category` must be one of these four values” converts the failure into a bounded revision. A gate should report what failed, where it failed, and how to reproduce the check locally. Deterministic enforcement works best when its feedback is equally concrete.

This loop lets human reviewers focus on architecture, product consequences, unusual risk, and the quality of the tradeoff. Automation does not remove review. It changes what review is for.

<!-- asset: code-over-willpower-ci-loop | brief: agent change → deterministic checks → failure feedback → revision → protected merge | alt: CI feedback loop that prevents an agent from bypassing verification -->

## Keep humans on judgment

Automation becomes brittle when a team encodes a preference as law, stops maintaining its checks, or offers no legitimate exception path. False positives teach people and agents to work around the system, and noisy controls eventually lose authority.

Keep each check narrow, test the check itself, and design an explicit escape hatch. An exception can require a short rationale, a named reviewer, and a visible record. That makes deviation possible without making it silent. Repeated exceptions signal that the rule may be wrong or too broad.

Humans should retain decisions that require meaning: whether a tradeoff is acceptable, whether an accessibility fix preserves the intended experience, whether a source genuinely supports a marketing claim, or whether an unusual production risk justifies bypassing the normal path. Agents can prepare those decisions and surface evidence. Deterministic systems can ensure the evidence exists. Neither should impersonate the final judgment.

## Reliability is architecture

Agents are valuable because they can handle variable, contextual work that does not reduce cleanly to a rule. Asking them to carry formatting, structural conventions, known failure modes, and other settled invariants wastes that strength and makes the workflow less reliable.

Whenever I write “always remember to” in a prompt, I ask whether the instruction belongs in a script, rule, test, or merge gate. If it does, I move it. Reliability does not come from asking harder or hoping for perfect instruction-following. It comes from designing the workflow so the required things happen structurally. Willpower, human or artificial, is not a control mechanism. Code is.
