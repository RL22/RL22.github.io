# Growth Engineering Master Case Study Narratives

This document formalizes the updated, high-leverage case study transformation stories for **Pendo** and **Carrot Fertility**, along with **five distinct narrative angles for Carrot** and their architectural bridges to the **Sprintz AI-native projects**.

---

## 1. Primary Case Study: Pendo
**Title:** Enterprise Growth Infrastructure & Parallel Information Architecture Overhaul  
**Role:** Growth Engineer / Web Systems Architect  
**Tenure Period:** October 2022 – June 2023  
**Domain & Properties:** `pendo.io` (Headless Marketing Site) &bull; `go.pendo.io` (Demand Gen / Marketo LPs)  

### The Problem & Context
Pendo's rapid expansion into multiple product families (Product Analytics, In-App Guides, Feedback, and Adopt) created severe architectural and conversion friction:
1. **Monolithic Legacy Code:** The marketing site ran on legacy PHP templates (`pendo-components`), making layout adjustments rigid and requiring full engineering sprints for minor landing page changes.
2. **Deep, Siloed Information Architecture:** Feature pages were buried three levels deep (`/product/features/*`), degrading search crawlability and confusing enterprise buyers.
3. **Fragmented Growth Stack:** Demand gen was siloed on `go.pendo.io`, while personalization tools (Mutiny) relied on heavy client-side DOM manipulation that risked layout shifting and anti-flicker latency (`.async-hide`).

### The Technical & Growth Solution
* **Theme & Component Engineering:** Migrated the core CMS theme from `pendo-components` to the modern **Roots Sage / Timber (`timber-sage-starter`)** block-based modular architecture, unlocking Gutenberg/Blade component composability.
* **Parallel Taxonomy Restructuring:** Flattened 3-level deep feature silos into 2-level capability hubs (`/product/{module}/`) while preserving and expanding high-ranking Solutions hubs (`/product-experience/*`, `/digital-adoption/*`). This protected 100% of organic SEO equity across 37 enterprise URLs with zero broken backlinks.
* **MarTech & Attribution Modernization:**
  * Orchestrated a full Google Tag Manager container migration (`GTM-NRJ68V` to `GTM-MBJ22KN`), standardizing `dataLayer` event tracking across marketing and app touchpoints.
  * Deployed **Bizible (Marketo Measure)** (`cdn.bizible.com/scripts/bizible.js`) to instrument multi-touch revenue and pipeline attribution across enterprise sales cycles.
  * Implemented **Mutiny (`64c4277f45fc6bf8`)** ABM personalization on `go.pendo.io` with optimized anti-flicker CSS snippets and progressive Marketo form validation.
* **Interactive UI Systems:** Built accessible, high-performance tab switchers with **Glide.js** and interactive video modal overlays via **Wistia** API embeds.

### Measurable Outcomes & Takeaways
* **100% SEO Retention:** Flawless parallel taxonomy migration across 37 core URLs with zero organic ranking drop during a company-wide rebranding.
* **80% Faster Production Velocity:** Modular Sage/Timber blocks reduced new landing page build cycles from 2 weeks to under 3 days.
* **Full-Funnel Pipeline Visibility:** Bizible and GTM instrumentation unified paid media, ABM personalization, and CRM opportunity creation.

---

## 2. Primary Case Study: Carrot Fertility
**Title:** Headless ATS API Engineering & The Bottom-Up B2B Growth Flywheel  
**Role:** Growth Engineer / Web Systems Developer  
**Tenure Period:** September 2021 – July 2022  
**Domain & Properties:** `get-carrot.com` / `carrotfertility.com` (Webflow Enterprise) &bull; `app.carrotfertility.com` (Member Portal)

### The Problem & Context
During a period of rapid hyper-growth and global category expansion, Carrot faced major conversion and candidate experience bottlenecks:
1. **ATS Iframe Bottleneck:** The careers page (`/carrot-careers`) relied on a rigid third-party Greenhouse iframe (`boards.greenhouse.io/embed/job_board/js?for=carrotfertility`). It was impossible to style to Carrot's brand guidelines, broke mobile layouts, lacked department filtering, and provided zero Google for Jobs SEO indexing.
2. **Top-Down B2B Sales Friction:** Reaching enterprise Total Rewards decision-makers required long, expensive sales cycles.
3. **Single-Domain Lead Capture:** Third-party landing page tools caused domain fragmentation and tracking drop-off.

### The Technical & Growth Solution
* **Headless Greenhouse REST API Pipeline:** Re-engineered the careers architecture on `/carrot-careers/open-roles` by querying `greenhouse.io/v1/boards/carrotfertility/jobs?content=true` directly. Built custom JavaScript to parse JSON payloads into native Webflow DOM components with real-time department filtering and dynamic `JobPosting` JSON-LD schema.
* **The Bottom-Up Employee Flywheel:** Designed and deployed `/landing-pages/for-employees-request-fertility-benefits-at-your-company` — an anonymous advocacy funnel empowering employees to petition HR for Carrot benefits, generating qualified inbound enterprise leads.
* **Single-Domain Marketo Form Embeds:** Embedded **Marketo Forms 2.0 (`MktoForms2.loadForm`)** natively inside Webflow symbols (`.marketo-home-contact-form`), custom-styling form fields to maintain 100% brand consistency without routing users off-domain.
* **Dynamic Multi-Collection CMS:** Structured Webflow dynamic collections (`.resource-center-list-two-up`) to support multi-category filtering for Whitepapers, Podcasts, Blog Posts, and Case Studies.

---

## 3. Five Alternative Narrative Angles for Carrot Fertility

Depending on the specific audience or company you are pitching, Carrot's work can be framed through these distinct lenses:

```
                                  ┌─────────────────────────────────────────────────┐
                                  │      Carrot Fertility Transformation Angles     │
                                  └────────────────────────┬────────────────────────┘
          ┌───────────────────────┼────────────────────────┼────────────────────────┐
          ▼                       ▼                        ▼                        ▼
┌───────────────────┐   ┌───────────────────┐   ┌───────────────────┐   ┌───────────────────┐
│ 1. The FinTech /  │   │ 2. The Multi-Sided│   │ 3. Global Parity  │   │ 4. Inclusive DEI  │
│    Payments Angle │   │    B2B2B Channel  │   │    & Compliance   │   │    Category TAM   │
├───────────────────┤   ├───────────────────┤   ├───────────────────┤   ├───────────────────┤
│ • Carrot Card®    │   │ • Broker Portals  │   │ • HIPAA BAA & GDPR│   │ • Menopause & LowT│
│ • Point-of-sale   │   │ • Payer Solutions │   │ • Cross-border tax│   │ • Surrogacy/Adopt │
│ • CFO risk/fraud  │   │ • Gated collateral│   │ • SOC2 Type II    │   │ • TAM expansion 5x│
└───────────────────┘   └───────────────────┘   └───────────────────┘   └───────────────────┘
```

### Angle A: The FinTech & Healthcare Payments Angle ("Carrot Card Financial Experience")
* **The Hook:** *"Transforming healthcare reimbursement from a multi-month out-of-pocket nightmare into a real-time FinTech debit experience."*
* **The Story:** Fertility treatments cost $20,000–$50,000+ upfront. Carrot launched the **Carrot Card®** (`/blog/introducing-the-carrot-card`), a dedicated debit card pre-funded by employers. 
* **The Growth Challenge:** Creating dual-sided educational messaging: reassuring enterprise CFOs about fiscal guardrails, fraud prevention, and IRS tax compliance while convincing employees of zero out-of-pocket point-of-sale ease.

### Angle B: The Multi-Sided B2B2B Channel Engine ("Broker & Health Plan Enablement")
* **The Hook:** *"Scaling enterprise distribution through indirect broker and payer channels."*
* **The Story:** Rather than relying solely on direct sales reps, Carrot built tailored portals for **Benefits Consultants** (`/for-consultants` — Mercer, Aon, Gallagher) and **Health Plans** (`/for-health-plans` — Blue Cross, Aetna, Cigna).
* **The Engineering Execution:** Built specialized gated resource flows, dynamic ROI calculation calculators, and multi-tier Marketo lead routing to arm external brokers with client-facing pitch collateral.

### Angle C: The Global Parity & Enterprise Compliance Angle ("HIPAA, GDPR & Multi-Currency Expansion")
* **The Hook:** *"De-risking international healthcare expansion for Fortune 500 multinationals."*
* **The Story:** Enterprise buyers refused to buy point solutions that couldn't support global workforces or pass stringent cybersecurity reviews.
* **The Engineering Execution:** Architected dedicated governance documentation hubs for HIPAA Business Associate Agreements (`/business-associate-terms`), GDPR Data Processing Agreements (`/terms-of-data-processing`), SOC2 Type II security (`/security`), and global brand trademarks (`/trademarks`). Alleviated legal/security friction to accelerate 6-figure enterprise deal velocity.

### Angle D: The Inclusive DEI & Category Expansion Angle ("Broadening TAM from IVF to Lifelong Reproductive Health")
* **The Hook:** *"Expanding TAM by 5x through inclusive reproductive healthcare repositioning."*
* **The Story:** Fertility was historically perceived as a niche benefit for heterosexual couples battling infertility.
* **The Engineering Execution:** In July 2022, re-architected the CMS and information architecture to launch coverage for **Menopause, Low-T (Testosterone), Gestational Surrogacy, and Adoption**. Re-positioned Carrot from "fertility benefits" to an all-inclusive lifelong healthcare platform, enabling enterprise HR to fund Carrot using dedicated DEI and retention budgets.

### Angle E: Enterprise Webflow Performance & Technical SEO at Scale
* **The Hook:** *"Engineering sub-second performance and enterprise tracking hygiene on Webflow."*
* **The Story:** Scaling a Webflow marketing site loaded with dynamic CMS items, Greenhouse API scripts, Marketo forms, Segment CDP, GTM, and CookiePro consent without degrading Core Web Vitals.
* **The Engineering Execution:** Implemented custom script sequencing, async data fetching, image WebP compression, and built an automated HTML sitemap (`/sitemap`) and structured data pipeline (`JobPosting`, `MedicalWebPage`, `Organization`), achieving top Lighthouse performance and organic search rankings.

---

## 4. Bridge: How These Case Studies Lead Into Sprintz AI Projects

| Historical Enterprise Learning | Core Bottleneck Identified | Modernized Sprintz AI Solution |
| :--- | :--- | :--- |
| **Pendo ABM Personalization** | Client-side tools (Mutiny) cause visual layout shifts and anti-flicker latency (`.async-hide`). | **Sprintz Project 2: Real-Time Edge AI Personalization Engine**<br>Streams hyper-personalized hero copy via Vercel Edge functions / Cloudflare Workers before the page renders. |
| **Fastly & Pendo CMS Velocity** | Content and marketing teams hit waterfall bottlenecks creating A/B copy variants and structured schema. | **Sprintz Project 1: The Agentic Content Engine (CMS + AI)**<br>Custom Headless CMS integration using LLMs to automatically generate A/B testing variants and JSON-LD markup directly in editor workflows. |
| **Carrot Dynamic Resource Center** | Multi-category B2B resource hubs and healthcare docs are hard to search with standard keyword inputs. | **Sprintz Project 3: Conversational Resource Navigator (RAG + React)**<br>Embedded AI assistant indexing all whitepapers and podcasts, enabling natural conversational discovery for prospects. |
