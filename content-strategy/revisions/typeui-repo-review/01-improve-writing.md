Left alone, an agent generating a UI tends to produce the same recognizable baseline: functional, generic, and visually cheap. The model can render a polished interface, but a typical prompt does not define what good design means in terms it can apply. TypeUI treats that gap as an engineering problem: turn design principles into explicit constraints the agent reads before writing frontend code.

The project ships as a command-line tool called `typeui.sh`. It brings design-system guidance into a local workspace instead of leaving “make it look good” to chance. The rules live in `SKILL.md` or `DESIGN.md` files that an agent can read directly, while a registry organizes named aesthetics such as Brutalism and Neumorphism into reusable specifications.

What stands out is the attempt to make a subjective problem more mechanical. TypeUI can give the agent spacing scales, typographic hierarchy, and contrast requirements, reducing arbitrary pixel values and incompatible patterns across components generated in the same session. Those constraints are more useful than a vague suggestion, even though they still depend on the agent following them.

The limit is the medium: text can steer visual output only so far. TypeUI can prevent common mistakes and establish a more coherent floor, but a human still needs to inspect the rendered interface before it ships. A Markdown file cannot automate taste.

Even with that limit, moving design guidance out of ad hoc prompts and into version-controlled configuration improves the default workflow. For anyone shipping UI with an agent in the loop, TypeUI provides a practical foundation instead of another one-off prompt.
