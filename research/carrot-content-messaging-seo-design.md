# Carrot Fertility: Content, Messaging, Technical SEO & Component Library Analysis

**Domain:** `get-carrot.com` (transitioning to `carrotfertility.com`)  
**Timeline Analyzed:** June 2021 (Pre-Start) &bull; October 2021 &bull; March 2022 &bull; July 2022  
**Platform Architecture:** Webflow Enterprise CMS &bull; Headless Greenhouse REST API &bull; Marketo Forms 2.0 Embeds

---

## 1. Persona & Audience Segmentation Matrix

Carrot's information architecture and content strategy are triangulated across five distinct stakeholder personas:

```
                      ┌────────────────────────────────────────┐
                      │        Carrot Fertility Platform       │
                      └───────────────────┬────────────────────┘
          ┌───────────────────────┬───────┴───────┬───────────────────────┐
          ▼                       ▼               ▼                       ▼
┌───────────────────┐   ┌───────────────────┐   ┌───────────────────┐   ┌───────────────────┐
│ Enterprise HR /   │   │ Benefits Brokers  │   │ Health Plans /    │   │ End-User Member / │
│ Total Rewards     │   │ & Consultants     │   │ Payers            │   │ Employees         │
│ (/for-employers)  │   │ (/for-consultants)│   │ (/for-health-plans│   │ (/landing-pages/.)│
├───────────────────┤   ├───────────────────┤   ├───────────────────┤   ├───────────────────┤
│ • Talent recruit  │   │ • Client retention│   │ • Medical cost    │   │ • Inclusive care  │
│ • Cost control    │   │ • Turnkey rollout │   │   containment     │   │ • No out-of-pocket│
│ • Global parity   │   │ • Plan flexibility│   │ • High-risk NICU  │   │   barriers        │
│ • Clinical vetting│   │ • Broker commission│   │   reduction       │   │ • Privacy/dignity │
└───────────────────┘   └───────────────────┘   └───────────────────┘   └───────────────────┘
```

| Persona | Core Pain Points | Value Proposition & Messaging Hook | Primary Target URLs & CTAs |
| :--- | :--- | :--- | :--- |
| **Enterprise HR & Total Rewards** | Competitive tech hiring, runaway healthcare costs, fragmented global benefits. | *"The complete global solution for fertility benefits... save money and tame anxiety."* | `/for-employers`, `/why-carrot`<br>**CTA:** *"Request a Demo"* |
| **Benefits Brokers & Consultants** | Complex client RFPs, rigid legacy carrier plans, lack of global coverage. | *"A customizable solution to fit every company... seamless integration for your clients."* | `/for-consultants`<br>**CTA:** *"Partner with Carrot"* |
| **Health Plans & Payers** | High NICU costs from multiple births, unmanaged fertility claims. | *"Clinical outcomes that reduce multiple-gestation pregnancies and total cost of care."* | `/for-health-plans`<br>**CTA:** *"Explore Health Plan Solutions"* |
| **End-User Employees (Bottom-Up)** | Prohibitive out-of-pocket IVF/adoption costs, lack of employer coverage. | *"Bring fertility benefits to your workplace. Anonymously request Carrot for your company."* | `/landing-pages/for-employees...`<br>**CTA:** *"Submit Anonymous Request"* |
| **Job Candidates & Tech Talent** | Searching for high-growth, mission-driven career opportunities with modern culture. | *"Life at Carrot: Join our mission to make fertility care accessible to everyone."* | `/carrot-careers/life-at-carrot`<br>`/carrot-careers/open-roles`<br>**CTA:** *"Apply Now"* |

---

## 2. Content & Messaging Evolution Across Milestones

### Milestone 1: Pre-Start Baseline (June 2021)
* **Hero Headline (H1):** *"Global fertility benefits for employers that save money and tame anxiety"*
* **Key Subhead / Tagline:** *"Carrot is the leading global fertility benefits provider for employers, built to support employees through their entire family-forming journey."*
* **Core Product Pillars:** Carrot Pregnancy, Carrot Rx® (pharmacy savings), Carrot Card® (financial debit card for care).
* **CTA:** *"Request a Demo"* / *"Get Started"*.

### Milestone 2: Q4 Expansion & Careers Inception (October 2021)
* **Hero Headline (H1):** *"Global fertility benefits for employers that save money and tame anxiety"*
* **Strategic Evolution:**
  * Added dedicated `/carrot-careers` page with initial Greenhouse job board embed to accelerate hyper-hiring.
  * Launched employee bottom-up advocacy funnel (`/landing-pages/for-employees-request-fertility-benefits-at-your-company`).
* **Tone:** Reassuring, ROI-focused, employee-wellbeing centered.

### Milestone 3: Mid-Tenure Brand Maturation (March 2022)
* **Messaging Refinement:** Clarified employer customization tiers and expanded DEI messaging (LGBTQ+ family forming, gestational surrogacy, adoption support).
* **Information Architecture Expansion:** Split careers hub into `/carrot-careers/life-at-carrot` and registered official trademark protections (`/trademarks`).

### Milestone 4: Major Platform Redesign (July 2022)
* **Hero Headline (H1):** *"The complete global solution for fertility benefits"* (Shift from anxiety reduction to enterprise category leadership).
* **Key Subhead (H2 Hierarchy):**
  * *"Open the door to fertility care for every employee, everywhere"*
  * *"Benefits parity for your global workforce"*
  * *"Personalization leads to healthier members and lower costs"*
  * *"Inclusive fertility benefits for all"*
* **Expanded Clinical Scope:** Introduced coverage for lifelong reproductive health including **Menopause** and **Low-T (Testosterone)** alongside traditional fertility and IVF.
* **Component Restyle:** Full typography update (custom brand sans-serif), high-contrast accessibility color tokens, and decoupled `/carrot-careers/open-roles` powered by the Greenhouse REST API.

---

## 3. Technical SEO & Metadata Audit

### Meta Tags Evolution

| Snapshot | Page Title (`<title>`) | Meta Description (`og:description`) | Heading Structure (H1 / H2 Count) |
| :--- | :--- | :--- | :---: |
| **Jun 2021** | `Global fertility benefits for employers \| Carrot` | *"Carrot is the leading global fertility benefits provider for employers..."* | 1 H1 &bull; 8 H2s &bull; 14 H3s |
| **Oct 2021** | `Global fertility benefits for employers \| Carrot` | *"Carrot is the leading global fertility benefits provider for employers..."* | 1 H1 &bull; 9 H2s &bull; 16 H3s |
| **Mar 2022** | `Global fertility benefits for employers \| Carrot` | *"Carrot is the leading global fertility benefits provider for employers..."* | 1 H1 &bull; 9 H2s &bull; 15 H3s |
| **Jul 2022** | `Carrot Fertility \| Global fertility benefits for employers` | *"Carrot Fertility provides the leading global fertility and family-forming benefits for employers and their distributed workforce."* | 1 H1 &bull; 11 H2s &bull; 22 H3s |

### Technical SEO Findings
* **Canonical URL Governance:** Explicit self-referencing canonical tags configured in Webflow head (`<link rel="canonical" href="https://www.get-carrot.com/..."/>`).
* **Sitemap Architecture:** Introduced dedicated HTML sitemap (`/sitemap`) in July 2022 alongside the automated XML sitemap (`/sitemap.xml`) to maximize crawler discovery across dynamic Webflow CMS collections.
* **Schema Markup (JSON-LD):**
  * `Organization` Schema: Defining medical and enterprise software categories, official logos, and social profiles.
  * `JobPosting` Schema: Generated via the headless Greenhouse REST API on `/carrot-careers/open-roles`, enabling Google for Jobs rich card indexing.
  * `Article` & `MedicalWebPage` Schema: Implemented across Webflow CMS Blog and Resource Center items.

---

## 4. MarTech Stack & GTM Governance Cross-Reference

```
                                  ┌─────────────────────────────┐
                                  │   Webflow Enterprise CMS    │
                                  │  (Site: 5e0e4888d4243b2e)   │
                                  └──────────────┬──────────────┘
                                                 │
                   ┌─────────────────────────────┼─────────────────────────────┐
                   ▼                             ▼                             ▼
       ┌───────────────────────┐   ┌───────────────────────────┐   ┌───────────────────────┐
       │ Google Tag Manager    │   │ Marketo Forms 2.0 Embed   │   │ Greenhouse REST API   │
       │ (GTM-MMXB5FQ)         │   │ (MktoForms2.loadForm)     │   │ (Harvest/Board Feed)  │
       └───────────┬───────────┘   └─────────────┬─────────────┘   └───────────┬───────────┘
                   │                             │                             │
    ┌──────────────┴──────────────┐              ▼                             ▼
    ▼                             ▼     Custom Webflow Form UI        Real-Time Job Postings
GA / Segment CDP            CookiePro /  (marketo-home-contact-form)   (carrot-careers/open-roles)
                            OneTrust
```

* **Marketing CMS:** **Webflow Enterprise** (`data-wf-site="5e0e4888d4243b2e3e2d6a98"`). Page instances dynamically generated via Webflow Designer canvas.
* **Tag Governance:** **Google Tag Manager** (`GTM-MMXB5FQ`) fired across all page templates.
* **Data Layer & CDP:** **Segment (`analytics.js`)** coupled with Google Analytics for cross-domain visitor identity stitching.
* **Marketing Automation:** **Marketo Forms 2.0 (`forms2.min.js`)**. Unlike standard Marketo iframe embeds, Carrot utilized `MktoForms2.loadForm(...)` injected directly into Webflow DOM symbols (`.marketo-home-contact-form`), inheriting custom Webflow typography and responsive layouts.
* **ATS / Recruiting Pipeline:** **Greenhouse API (`greenhouse.io/v1/boards/carrotfertility/jobs?content=true`)**.
* **Privacy & Cookie Consent:** **CookiePro / OneTrust** banner script integration for global GDPR/CCPA compliance.
* **Conversational Marketing & Chat:** **Qualified / HubSpot** lead tracking pixels.

---

## 5. Reverse-Engineered Webflow Component Library

By analyzing DOM attributes (`class`, `id`, `data-wf-*`, `data-w-id`, `role`), the modular Webflow component design system has been mapped:

### 1. Navigation Symbol (`.c-nav`)
* **DOM Structure:** `<div class="nav_component w-nav" data-collapse="medium" data-animation="default">`
* **Child Classes:**
  * `.nav_container` &bull; `.nav_logo-link` &bull; `.nav_menu` &bull; `.nav_dropdown-toggle` &bull; `.nav_dropdown-list`
  * `.nav_link` (`role="navigation"`) &bull; `.nav_cta-button.w-button`
* **Interaction:** Webflow dropdown micro-interactions (`data-w-id`) with mobile slide-out menu.

### 2. Modular Hero Component (`.c-hero`)
* **DOM Structure:** `<section class="section_hero"><div class="container-large"><div class="hero_layout-grid">`
* **Child Classes:**
  * `.hero_content-block` &bull; `.hero_heading-h1` &bull; `.hero_subtext-paragraph`
  * `.hero_button-wrapper` &bull; `.button-primary.w-button` &bull; `.button-secondary.w-button`
  * `.hero_visual-wrapper` &bull; `.hero_illustration-image` &bull; `.hero_floating-badge`

### 3. Dynamic Resource Center Grid (`.c-resource-grid`)
* **DOM Structure:** `<div class="resource-center-list w-dyn-list"><div class="resource-center-list-two-up w-dyn-items">`
* **Child Classes:**
  * `.resource_card-item.w-dyn-item` &bull; `.resource_thumbnail-wrap` &bull; `.resource_category-badge`
  * `.resource_title-h3` &bull; `.resource_excerpt` &bull; `.resource_read-more-link`
* **CMS Binding:** Bound to Webflow Collections for Articles, Whitepapers, Case Studies, and Podcasts.

### 4. Interactive Tabs / Audience Selector (`.c-audience-tabs`)
* **DOM Structure:** `<div class="tabs_component w-tabs" data-current="Tab 1" data-easing="ease">`
* **Child Classes:**
  * `.tabs_menu.w-tab-menu` &bull; `.tab_link.w-tab-link.w--current`
  * `.tabs_content.w-tab-content` &bull; `.tab_pane.w-tab-pane` &bull; `.tab_split-layout`

### 5. Marketo Lead Capture Modal & Embed Symbol (`.c-marketo-embed`)
* **DOM Structure:** `<div class="marketo-form-wrapper marketo-home-contact-form">`
* **Child Classes:**
  * `.mktoForm` (overridden via custom CSS stylesheet injected in Webflow page header)
  * `.mktoFieldDescriptor` &bull; `.mktoTextField` &bull; `.mktoButtonRow` &bull; `.mktoButton`
* **Custom Behavior:** Pre-populates UTM parameters and redirects to custom Webflow confirmation/thank-you pages.

### 6. Greenhouse Headless Job Board Symbol (`.c-careers-board`)
* **DOM Structure:** `<div id="open-roles-app" class="careers_board-wrapper">`
* **Child Classes:**
  * `.careers_filter-bar` &bull; `.filter_dropdown-dept` &bull; `.filter_dropdown-location`
  * `.careers_job-list` &bull; `.job_row-item` &bull; `.job_title` &bull; `.job_department-pill` &bull; `.job_apply-link`
