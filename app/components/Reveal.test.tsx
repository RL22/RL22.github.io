import { renderToStaticMarkup } from "react-dom/server";
import { expect, it } from "vitest";
import Reveal from "./Reveal";

it("renders children visible without inline motion styles", () => {
  const html = renderToStaticMarkup(
    <Reveal>
      <p>Visible before hydration</p>
    </Reveal>
  );
  const container = document.createElement("div");
  container.innerHTML = html;

  const reveal = container.firstElementChild as HTMLElement;

  expect(reveal).toHaveTextContent("Visible before hydration");
  expect(reveal.style.opacity).toBe("");
  expect(reveal.style.transform).toBe("");
});
