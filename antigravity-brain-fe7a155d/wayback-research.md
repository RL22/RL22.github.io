# Wayback Machine Architecture Research

This document compiles the historical tech stack and site architecture data gathered across your specific tenure dates at Pendo and Carrot Fertility.

---

## 1. Pendo
**Tenure Dates Evaluated:** October 2022 – June 2023  
**Primary Domain:** `pendo.io`  
**Demand Gen Subdomain:** `go.pendo.io`

### Tech Stack & Libraries Identified
* **CMS & Theme Framework:** Migrated from legacy custom `pendo-components` PHP layout templates (`page-template-template-component-layout`) in Oct 2022 to the modern **Roots Sage / Timber (`timber-sage-starter`)** modular component architecture in Feb 2023 (`page-template-default wp-embed-responsive`).
* **Personalization & CRO:** **Mutiny** (Client Token: `64c4277f45fc6bf8`) with asynchronous anti-flicker snippet (`.async-hide { opacity: 0 !important; }`) for dynamic ABM account-level personalization.
* **Marketing Automation:** **Marketo** (Munchkin ID tracking and embedded Marketo Forms 2.0 with custom CSS overrides and progressive profiling).
* **Tag Governance & Analytics:** 
  * Container Migration: Upgraded from `GTM-NRJ68V` (Oct 2022) to `GTM-MBJ22KN` (Feb 2023) to deploy unified `dataLayer` event schemas and tag firing rules.
  * Tag Inventory: Google Analytics 4, Universal Analytics, LinkedIn Insight Tag (`snap.licdn.com`), Meta Pixel (`connect.facebook.net`), Google Ads conversion tracking.
* **Multi-Touch Attribution:** **Bizible (Marketo Measure)** (`cdn.bizible.com/scripts/bizible.js`) deployed in Q1 2023 for full-funnel B2B pipeline and revenue attribution.
* **Privacy & Cookie Consent:** **OneTrust** (`data-domain-script="fba2d6d3-b222-40ea-85ee-9f66dfdeb960"`).
* **Interactive UI Libraries:** **Glide.js** (`glide.min.js`, `glide.core.min.css`) for tab switchers and carousels; **Wistia** (`fast.wistia.net/assets/external/E-v1.js`) for interactive video overlays.

### Site Architecture & URL Structure
* **Information Architecture Footprint:** 37 unique URLs across 4 taxonomy pillars (`/product/*`, `/products/*`, `/product-experience/*`, `/digital-adoption/*`).
* **Flattening & Parallel Structure:** Flattened 3-level deep feature silos (`/product/features/*`) into modular 2-level capability hubs (`/product/{module}/`) while preserving and expanding high-ranking Solutions pages (`/product-experience/*`, `/digital-adoption/*`).
* **Demand Generation LPs:** Hosted primarily on `go.pendo.io` using Marketo Guided Landing Page templates enhanced with custom JS, Mutiny A/B testing, and company email validation logic.

---

## 2. Carrot Fertility
**Tenure Dates Evaluated:** September 2021 – July 2022  
**Primary Marketing Domain:** `get-carrot.com` (later `carrotfertility.com`).  
**Member Portal Domain:** `app.carrotfertility.com`

### Tech Stack & Libraries Identified
* **Marketing CMS:** Webflow Enterprise CMS.
* **Member Portal Stack (Separate):** React, AWS, C# .NET Core.
* **Marketing Automation:** Marketo (Embedded Forms, Munchkin Tracking).
* **ATS Integration:** Greenhouse API (for dynamic career listings & job boards).
* **Personalization & Analytics:** Google Tag Manager, Segment CDP, Hotjar/FullStory.

### Site Architecture & URL Structure
* **Marketing Properties:** The main marketing site, resource collections, and careers pages were driven by Webflow. The careers section was dynamically wired to the Greenhouse API.
* **Demand Generation:** Unified domain strategy on Webflow. Custom Marketo forms and tracking pixels were embedded directly into native Webflow landing pages and reusable component symbols.
* **Cross-Functional Ops:** Intake and web scoping were managed via Asana ticketing rather than relying on CMS-native workflows alone.
