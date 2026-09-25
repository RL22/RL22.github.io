import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  WorkHero,
  WorkMediaPreview,
  WorkFilterBar,
  CaseStudyCard,
  CaseStudyCompactRow,
  WorkViewToggle,
} from "./index";
import { caseStudies } from "../content";

describe("WorkHero", () => {
  it("renders the eyebrow, h1, lead paragraph, and 4 proof facts", () => {
    render(<WorkHero />);

    expect(screen.getByText("Work · Platform Case Studies")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: /Seven builds, from the platform\s+side\./i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Case studies from nine years owning marketing-site lifecycles/i)
    ).toBeInTheDocument();

    // 4 Key proof facts
    expect(screen.getByText("7")).toBeInTheDocument();
    expect(screen.getByText("Case Studies")).toBeInTheDocument();

    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("Architecture Diagrams")).toBeInTheDocument();

    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("Verified Business Metrics")).toBeInTheDocument();
    expect(screen.getByText(/Carrot 30%, Pendo 72h→24h, 40\+ paths/i)).toBeInTheDocument();

    expect(screen.getByText("~5 Years")).toBeInTheDocument();
    expect(screen.getByText("Production Durability")).toBeInTheDocument();
  });
});

describe("WorkMediaPreview", () => {
  const sampleImage = {
    src: "/work/pendo-product-experience-hub.png",
    webp: "/work/pendo-product-experience-hub.webp",
    alt: "Archived screenshot of the Pendo product-experience hub",
    caption: "The product-family hub, October 2022.",
    width: 1600,
    height: 2000,
  };

  it("renders browser frame with window dots, URL, and picture element", () => {
    render(
      <WorkMediaPreview
        image={sampleImage}
        company="Pendo.io"
        slug="pendo-core-web-platform"
      />
    );

    // URL address bar
    expect(screen.getByText("pendo.io")).toBeInTheDocument();

    // Image fallback and source
    const img = screen.getByRole("img", { name: sampleImage.alt });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", sampleImage.src);
    expect(img).toHaveAttribute("width", "1600");
    expect(img).toHaveAttribute("height", "2000");
    expect(img).toHaveAttribute("loading", "lazy");
  });

  it("renders caption when showCaption is true", () => {
    render(
      <WorkMediaPreview
        image={sampleImage}
        company="Pendo.io"
        showCaption={true}
      />
    );
    expect(screen.getByText(sampleImage.caption)).toBeInTheDocument();
  });
});

describe("WorkViewToggle", () => {
  it("renders Grid and List toggle buttons and handles clicks", () => {
    const onChange = vi.fn();
    render(<WorkViewToggle viewMode="grid" onChange={onChange} />);

    const gridBtn = screen.getByRole("button", { name: /grid showcase view/i });
    const listBtn = screen.getByRole("button", { name: /compact table view/i });

    expect(gridBtn).toHaveAttribute("aria-pressed", "true");
    expect(listBtn).toHaveAttribute("aria-pressed", "false");

    fireEvent.click(listBtn);
    expect(onChange).toHaveBeenCalledWith("compact");
  });
});

describe("WorkFilterBar", () => {
  it("renders tablist with count badges and triggers filter changes", () => {
    const onFilterChange = vi.fn();
    render(
      <WorkFilterBar
        activeFilter="All"
        onFilterChange={onFilterChange}
      />
    );

    const tablist = screen.getByRole("tablist");
    expect(tablist).toBeInTheDocument();

    const allTab = screen.getByRole("tab", { name: /all/i });
    expect(allTab).toHaveAttribute("aria-selected", "true");

    const engineeringTab = screen.getByRole("tab", { name: /engineering/i });
    expect(engineeringTab).toHaveAttribute("aria-selected", "false");

    fireEvent.click(engineeringTab);
    expect(onFilterChange).toHaveBeenCalledWith("Engineering");
  });

  it("supports keyboard arrow navigation across tabs", () => {
    const onFilterChange = vi.fn();
    render(
      <WorkFilterBar
        activeFilter="All"
        onFilterChange={onFilterChange}
      />
    );

    const allTab = screen.getByRole("tab", { name: /all/i });
    allTab.focus();

    fireEvent.keyDown(allTab, { key: "ArrowRight" });
    expect(onFilterChange).toHaveBeenCalledWith("Engineering");

    fireEvent.keyDown(allTab, { key: "End" });
    expect(onFilterChange).toHaveBeenCalledWith("Analytics");

    fireEvent.keyDown(allTab, { key: "Home" });
    expect(onFilterChange).toHaveBeenCalledWith("All");
  });
});

describe("CaseStudyCard", () => {
  it("renders primary visual, badges, metadata, stack chips, and link", () => {
    const study = caseStudies[0]; // pendo-core-web-platform
    render(<CaseStudyCard item={study} />);

    expect(screen.getByText(study.company)).toBeInTheDocument();
    expect(screen.getByText(study.role)).toBeInTheDocument();
    expect(screen.getByText(study.period)).toBeInTheDocument();
    expect(screen.getByText("72h → 24h launch velocity")).toBeInTheDocument();

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent(study.title);

    expect(screen.getByText(study.blurb)).toBeInTheDocument();

    for (const pillar of study.pillars) {
      expect(screen.getByText(pillar)).toBeInTheDocument();
    }

    for (const tech of study.stack) {
      expect(screen.getByText(tech)).toBeInTheDocument();
    }

    const links = screen.getAllByRole("link", { name: /explore architecture & build/i });
    expect(links.length).toBeGreaterThan(0);
    expect(links[0]).toHaveAttribute("href", `/work/${study.slug}/`);
  });
});

describe("CaseStudyCompactRow", () => {
  it("renders dense row with company, timeline, title, impact badge, and link", () => {
    const study = caseStudies[2]; // carrot-cms-architecture
    render(<CaseStudyCompactRow item={study} />);

    expect(screen.getByText(study.company)).toBeInTheDocument();
    expect(screen.getByText(study.period)).toBeInTheDocument();
    expect(screen.getByText("~30% dev dependency cut")).toBeInTheDocument();

    const titleLink = screen.getByRole("link", {
      name: new RegExp(study.title.replace(/\s+/g, "\\s+"), "i"),
    });
    expect(titleLink).toHaveAttribute("href", `/work/${study.slug}/`);

    const exploreLink = screen.getByRole("link", { name: /explore architecture/i });
    expect(exploreLink).toHaveAttribute("href", `/work/${study.slug}/`);
  });
});
