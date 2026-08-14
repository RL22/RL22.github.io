# Implementation Plan: Pendo Information Architecture Analysis

Based on our direct scrape of the Pendo DOM across Oct 2022, Feb 2023, and June 2023, we have mapped the URL structures, post/page/template types, and MarTech evolution.

## 1. Page Inventory & Totals
* **Total Unique Pages Affected:** **37 pages**
* **Migration Window:** **Between October 2022 and February 2023 (Q4 2022 – Q1 2023)**

### Breakdown by Pillar
| Pillar | URL Pattern | Unique Pages |
| :--- | :--- | :---: |
| **Product Modules** | `/product/*` | 14 |
| **Product Suites** | `/products/*` | 4 |
| **Product Experience Solutions** | `/product-experience/*` | 9 |
| **Digital Adoption Solutions** | `/digital-adoption/*` | 10 |
| **TOTAL** | | **37** |

---

## 2. Post, Page, and Template Type Analysis

* **Post Type:** Standard WordPress hierarchical `page` post type.
* **Parent-Child Hierarchy Tree:**
  * `parent-pageid-1958`: Root parent for all **Product Modules** (`/product/adopt/`, etc.).
  * `parent-pageid-6007`: Root parent for all **Product Experience Solutions** (`/product-experience/user-onboarding/`, etc.).
  * `parent-pageid-6009`: Root parent for all **Digital Adoption Solutions** (`/digital-adoption/employee-productivity/`, etc.).
* **Template Evolution:**
  * **Oct 2022:** Monolithic PHP layout templates (`page-template-template-component-layout` / `pendo-components` theme).
  * **Feb 2023 & Jun 2023:** Modular component blocks (`page-template-default wp-embed-responsive` / **Roots Sage `timber-sage-starter`** framework).

---

## 3. MarTech & Tech Stack Evolution

| MarTech / Tooling Layer | October 2022 | February 2023 | June 2023 |
| :--- | :--- | :--- | :--- |
| **Theme Engine** | `pendo-components` | `timber-sage-starter` (Roots Sage) | `timber-sage-starter` (Roots Sage) |
| **Personalization & CRO** | Mutiny (`64c4277f45fc6bf8`) | Mutiny (`64c4277f45fc6bf8`) | Mutiny (`64c4277f45fc6bf8`) |
| **Marketing Automation** | Marketo (Forms 2.0) | Marketo (Forms 2.0) | Marketo (Forms 2.0) |
| **Tag Management** | `GTM-NRJ68V` | `GTM-MBJ22KN` (Overhauled Container) | `GTM-MBJ22KN` |
| **Attribution** | None observed | **Bizible (Marketo Measure)** | **Bizible (Marketo Measure)** |
| **Chatbot** | Drift | Removed | Removed |
| **Privacy & Consent** | OneTrust | OneTrust | OneTrust |

---

## 4. Visual Architecture Map (Mermaid)

```mermaid
graph TD
    subgraph OCT_2022 ["October 2022 (Legacy Nested Architecture & Monolithic PHP)"]
        H1["pendo.io"] --> PE1["/product-experience/ (Use Cases)"]
        H1 --> DA1["/digital-adoption/ (Use Cases)"]
        H1 --> P1["/product/ (Root Hub)"]
        
        P1 --> P1_MOD["Direct Modules (/adopt/, /analytics/, /engage/, /feedback/, /mobile/)"]
        P1 --> P1_FEAT["/product/features/ (Deep Nesting)"]
        P1_FEAT --> F1["feature-adoption-analytics/"]
        P1_FEAT --> F2["nps/"]
        P1_FEAT --> F3["pendo-for-mobile/"]
        P1_FEAT --> F4["surveys-polls/"]
    end

    subgraph FEB_JUN_2023 ["Feb – Jun 2023 (Modular Headless Platform & Sage Blocks)"]
        H2["pendo.io"] --> SOL["Solutions Layer (Problem-Aware)"]
        H2 --> PROD["Product Layer (Software-Aware)"]
        
        SOL --> PE2["/product-experience/ (PLG, Onboarding, Planning, UX, Support, Revenue)"]
        SOL --> DA2["/digital-adoption/ (Change Mgmt, Employee Exp, Governance, SaaS Insights)"]
        
        PROD --> PS2["/products/ (Suite Hubs)"]
        PS2 --> PS_AN["analytics/"]
        PS2 --> PS_MOB["mobile/"]
        PS2 --> PS_SAAS["saas-portfolio-insights/"]
        PS2 --> PS_SYNC["data-sync/ (Added Jun '23)"]
        
        PROD --> P2["/product/ (Modular Component Hubs)"]
        P2 --> P2_AD["adopt/"]
        P2 --> P2_AN["analytics/"]
        P2 --> P2_ENG["engage/"]
        P2 --> P2_FB["feedback/"]
        P2 --> P2_GD["in-app-guides/"]
        P2 --> P2_MB["mobile/"]
        P2 --> P2_RD["roadmap/"]
        P2 --> P2_SP["saas-portfolio-insights/"]
    end
```

*Full URL map table and detailed technical breakdowns are saved in [pendo-ia-map-graph.md](file:///Users/rodneylewis/.gemini/antigravity/brain/fe7a155d-afee-4a93-8fd4-8f5988e7dc37/pendo-ia-map-graph.md).*
