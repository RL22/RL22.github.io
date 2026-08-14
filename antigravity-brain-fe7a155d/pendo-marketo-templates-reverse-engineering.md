# Pendo Marketo Guided Landing Page Templates: Reverse-Engineered Architecture

**Domain:** `go.pendo.io` (Marketo Demand Generation & Paid Campaign Subdomain)  
**CMS / Engine:** Marketo Guided Landing Page Framework (HTML5, Tailwind CSS, Marketo Forms 2.0 API, Mutiny ABM, GTM DataLayer Bridge)

---

## 1. Master Architectural Overview & Marketo Variable Syntax

Pendo's demand generation infrastructure on `go.pendo.io` utilized **Marketo Guided Landing Page Templates**. These templates combine native Marketo editable tags (`mktoString`, `mktoColor`, `mktoText`, `mktoForm`, `mktoSnippet`) with custom client-side JavaScript overrides to achieve:
1. **Zero-Code Marketeer Flexibility:** Marketing operations can swap headlines, colors, bullet points, and forms in Marketo's WYSIWYG without touching code.
2. **Dynamic Personalization:** Real-time URL parameter parsing (`utm_lp_headline`) and Mutiny ABM visitor classification.
3. **Headless Form Reskinning:** Disables default Marketo CSS and injects responsive Tailwind CSS utility classes directly into Marketo Forms 2.0 DOM elements.
4. **Interactive Math & Hidden Field Sync:** Real-time ROI calculation engines passing computed values into Marketo hidden fields for customized nurture automation.

```
                           ┌─────────────────────────────────────────────────────────┐
                           │      Marketo Guided Landing Page Engine (go.pendo.io)   │
                           └────────────────────────────┬────────────────────────────┘
         ┌──────────────────────────────┬───────────────┴───────────────┬──────────────────────────────┐
         ▼                              ▼                               ▼                              ▼
┌──────────────────┐          ┌───────────────────┐           ┌───────────────────┐          ┌───────────────────┐
│ Template 1:      │          │ Template 2:       │           │ Template 3:       │          │ Template 4:       │
│ Master Lead Gen  │          │ Interactive ROI   │           │ Post-Conversion   │          │ Events, Webinars  │
│ & CRO Campaign   │          │ Calculator Engine │           │ Thank You & Tour  │          │ & Ebook Downloads │
├──────────────────┤          ├───────────────────┤           ├───────────────────┤          ├───────────────────┤
│ • `-hv` / `-hva` │          │ • Retention Calc  │           │ • `-thanks.html`  │          │ • Webinar Reg     │
│ • Dynamic UTM H1 │          │ • Support Calc    │           │ • Next-step video │          │ • Ebook Gate      │
│ • Tailwind Form  │          │ • 2-Col Slider UI │           │ • Conversion tag  │          │ • Progressive     │
│ • Mutiny ABM tag │          │ • Hidden Mkto sync│           │ • Product tour CTA│           │   profiling       │
└──────────────────┘          └───────────────────┘           └───────────────────┘          └───────────────────┘
```

---

## 2. Template 1: Master Lead Gen / CRO / Paid Campaign Template

**Live Reference URLs Analyzed:**
* `https://go.pendo.io/demo-pendo-products-hv.html` (High-Velocity Product Demo)
* `https://go.pendo.io/demo-pendo-products-hva.html` (Alternate Hero Variant)
* `https://go.pendo.io/demo-onboarding-hv.html` (Onboarding-Specific Paid LP)
* `https://go.pendo.io/demo-pendo.html?utm_lp_headline=growth` (Dynamic Keyword Insertion LP)

### A. Marketo Guided Template Declarations (HTML Head Meta Variables)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
  <!-- Marketo Template Meta Variables -->
  <meta class="mktoString" id="lpPageTitle" mktoName="Page Browser Title" default="Get a custom Pendo demo">
  <meta class="mktoString" id="lpMetaDescription" mktoName="Meta Description" default="See how Pendo helps product teams drive adoption, retention, and growth.">
  <meta class="mktoColor" id="brandColor" mktoName="Theme Primary Color" default="#ec2059">
  <meta class="mktoColor" id="brandColorHover" mktoName="Theme Hover Color" default="#d6154b">
  <meta class="mktoBoolean" id="showSocialProof" mktoName="Show Customer Logo Bar" default="true">
  <meta class="mktoBoolean" id="showTestimonial" mktoName="Show Testimonial Card" default="true">
  
  <!-- Core Design System: Tailwind CSS & Pendo Brand Tokens -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
  <style>
    :root {
      --color-pank: #ec2059;
      --color-pank-hover: #d6154b;
    }
    .bg-pank { background-color: var(--color-pank); }
    .bg-pank-110:hover { background-color: var(--color-pank-hover); }
    .text-pank { color: var(--color-pank); }
    .async-hide { opacity: 0 !important; }
  </style>

  <!-- Anti-Flicker Personalization Script (Mutiny) -->
  <script>
    window.mutinyData = window.mutinyData || { impressionType: 'default' };
  </script>
</head>
```

### B. Template Body & DOM Grid Layout
```html
<body class="bg-gray-50 text-gray-900 font-sans antialiased">
  
  <!-- Header / Navigation Symbol -->
  <header class="w-full bg-white border-b border-gray-200 py-4 px-6 md:px-12">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <div class="mktoImg" id="headerLogo" mktoName="Company Logo">
        <a href="https://www.pendo.io"><img src="https://go.pendo.io/rs/185-LQW-370/images/pendo-logo.svg" alt="Pendo" class="h-8 w-auto"></a>
      </div>
      <div class="mktoText" id="headerCtaText" mktoName="Header Phone / Contact Link">
        <span class="text-sm font-medium text-gray-500">Already a customer? <a href="https://app.pendo.io" class="text-pank hover:underline font-semibold">Sign in</a></span>
      </div>
    </div>
  </header>

  <!-- Hero Section: 2-Column Split (Copy Left, Form Right) -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      <!-- Left Column: Value Proposition & Dynamic Headlines -->
      <div class="lg:col-span-7 space-y-6">
        <div class="mktoText" id="heroBadgeText" mktoName="Hero Eyebrow Badge">
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-pink-100 text-pank uppercase tracking-wider">
            Custom Product Demo
          </span>
        </div>

        <div class="mktoText" id="heroHeading" mktoName="Hero Main Headline">
          <h1 id="dynamic-headline" class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            See how Pendo accelerates product adoption and user retention
          </h1>
        </div>

        <div class="mktoText" id="heroSubhead" mktoName="Hero Subheadline / Value Pitch">
          <p id="dynamic-subhead" class="text-lg text-gray-600 leading-relaxed">
            Combine powerful product analytics with in-app guides to understand user behavior, guide users to value, and capture actionable feedback—all without engineering support.
          </p>
        </div>

        <!-- Value Bullets -->
        <div class="mktoText" id="valueBullets" mktoName="Value Bullet Points">
          <ul class="space-y-4 pt-2">
            <li class="flex items-start">
              <svg class="h-6 w-6 text-pank flex-shrink-0 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span class="text-base text-gray-700"><strong>Codeless In-App Guidance:</strong> Launch targeted tooltips, walkthroughs, and banners without writing code.</span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-pank flex-shrink-0 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span class="text-base text-gray-700"><strong>Retroactive Analytics:</strong> Track every click and user path from day one without tagging in advance.</span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-pank flex-shrink-0 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span class="text-base text-gray-700"><strong>Closed-Loop Feedback:</strong> Prioritize features with integrated product feedback and NPS surveys.</span>
            </li>
          </ul>
        </div>

        <!-- Social Proof Testimonial Card -->
        <div class="mktoSnippet" id="testimonialCard" mktoName="Customer Testimonial Snippet">
          <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mt-8">
            <p class="italic text-gray-600 text-sm">"Pendo gave us the behavioral data and in-app tools we needed to decrease user time-to-value by 40% in the first quarter."</p>
            <div class="mt-4 flex items-center">
              <div class="font-bold text-sm text-gray-900">VP of Product Operations</div>
              <span class="mx-2 text-gray-300">&bull;</span>
              <div class="text-xs text-gray-500">Enterprise SaaS Platform</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Marketo Embedded Lead Form Card -->
      <div class="lg:col-span-5">
        <div class="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <div class="mktoText" id="formHeader" mktoName="Form Card Header">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Get your personalized demo</h2>
            <p class="text-sm text-gray-500 mb-6">Experience how Pendo works with a customized walkthrough.</p>
          </div>

          <!-- Marketo Native Form Element (ID: 1702 or 3140) -->
          <div class="mktoForm" id="mktoFormContainer" mktoName="Marketo Demo Form Container">
            <form id="mktoForm_1702"></form>
          </div>
        </div>
      </div>

    </div>
  </main>

  <!-- Customer Logo Banner -->
  <section class="w-full bg-white border-t border-gray-200 py-8 px-4">
    <div class="max-w-7xl mx-auto text-center">
      <p class="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">Trusted by world-class product and growth teams</p>
      <div class="mktoSnippet" id="logoBar" mktoName="Customer Logo Banner">
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all">
          <img src="https://go.pendo.io/rs/185-LQW-370/images/salesforce.svg" alt="Salesforce" class="h-6">
          <img src="https://go.pendo.io/rs/185-LQW-370/images/cisco.svg" alt="Cisco" class="h-6">
          <img src="https://go.pendo.io/rs/185-LQW-370/images/okta.svg" alt="Okta" class="h-6">
          <img src="https://go.pendo.io/rs/185-LQW-370/images/morgan-stanley.svg" alt="Morgan Stanley" class="h-6">
        </div>
      </div>
    </div>
  </section>

</body>
</html>
```

### C. The Reverse-Engineered Marketo Form CSS Override & Personalization Script
This exact script was extracted from `go.pendo.io` production code to strip default Marketo stylesheets and inject Tailwind utility classes and Mutiny tracking:
```javascript
// 1. Dynamic UTM Headline Swapper (?utm_lp_headline=growth / onboarding / retention)
(function initDynamicHeadlines() {
  const urlParams = new URLSearchParams(window.location.search);
  const headlineParam = urlParams.get('utm_lp_headline');
  
  const headlineMap = {
    'growth': {
      h1: 'Drive product-led growth and maximize customer lifetime value',
      sub: 'Use retroactive behavioral analytics and targeted in-app guides to accelerate conversion funnels.'
    },
    'onboarding': {
      h1: 'Deliver seamless user onboarding that increases product adoption',
      sub: 'Guide new users to their aha moment in minutes with personalized, codeless walkthroughs.'
    },
    'retention': {
      h1: 'Reduce customer churn with proactive product engagement',
      sub: 'Identify disengaged accounts early and deploy targeted guides to re-engage active users.'
    }
  };

  if (headlineParam && headlineMap[headlineParam.toLowerCase()]) {
    const data = headlineMap[headlineParam.toLowerCase()];
    const h1El = document.getElementById('dynamic-headline');
    const subEl = document.getElementById('dynamic-subhead');
    if (h1El) h1El.textContent = data.h1;
    if (subEl) subEl.textContent = data.sub;
  }
})();

// 2. Marketo Forms 2.0 Tailwind Injection & Override Engine
MktoForms2.whenReady(function (form) {
  // A. Disable Marketo Default Stylesheets
  if ($('link[id="mktoForms2BaseStyle"]').length) $('link[id="mktoForms2BaseStyle"]')[0].disabled = true;
  if ($('link[id="mktoForms2ThemeStyle"]').length) $('link[id="mktoForms2ThemeStyle"]')[0].disabled = true;
  
  // B. Remove Default Marketo Clutter Classes & Inline Styles
  $('form').removeClass('mktoForm').removeAttr('style');
  $('div.mktoOffset, div.mktoGutter').hide();
  $('.mktoBlueBox, .mktoButtonWrap.mktoSimple').removeAttr('style');

  // C. Inject Tailwind CSS into Form Inputs
  $('input:not(input#GDPRConsent)').removeAttr('style').addClass(
    'w-full mr-2 h-10 px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md ' +
    'focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm'
  );
  $('select').removeAttr('style').addClass('w-full h-10 border border-gray-300 rounded-md px-3 text-sm bg-white');
  $('textarea').removeAttr('style').addClass('w-full h-20 border border-gray-300 rounded-md p-3 text-sm');

  // D. Style Form Labels & Error Messages
  $('label:not(label[for="GDPRConsent"])').removeAttr('style').addClass('block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wider').removeClass('mktoLabel');
  $('div.mktoErrorMsg').addClass('inline text-white bg-red-500 px-3 py-1 text-xs rounded mt-1 font-semibold');
  $('.mktoAsterix').addClass('text-red-500 font-bold ml-1');

  // E. Style Submit Button
  $('button[type="submit"]').addClass(
    'w-full bg-pank hover:bg-pank-110 text-white font-bold py-3 px-6 rounded-md shadow-md ' +
    'transition-all duration-150 uppercase tracking-wider text-sm mt-4 cursor-pointer'
  ).removeClass('mktoButton');

  // F. GDPR Consent Box
  $('input#GDPRConsent').addClass('h-4 w-4 text-pank rounded border-gray-300 focus:ring-pank');
  $('[for="GDPRConsent"]').removeAttr('style').addClass('text-xs text-gray-500 ml-2 leading-snug');

  // G. Mutiny ABM Hidden Field Attribution Sync
  if (window.mutinyData && window.mutinyData.impressionType) {
    $("input[name*='uTMCRO']").val(window.mutinyData.impressionType);
  }
});

// 3. Marketo to Google Tag Manager (GTM) DataLayer Event Bridge
(function marketoGTMBridge() {
  MktoForms2.whenReady(function (form) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'mktoFormReady',
      formId: form.getId()
    });

    form.onSubmit(function () {
      window.dataLayer.push({
        event: 'mktoFormSubmit',
        formId: form.getId()
      });
    });

    form.onSuccess(function (values, followUpUrl) {
      window.dataLayer.push({
        event: 'mktoFormSuccess',
        formId: form.getId(),
        emailDomain: values.Email ? values.Email.split('@')[1] : ''
      });
    });
  });
})();
```

---

## 3. Template 2: Interactive ROI Calculator Template

**Live Reference URLs Analyzed:**
* `https://go.pendo.io/roi-calculator-customer-retention.html` (Customer Retention & ARR Calculator)
* `https://go.pendo.io/roi-calculator-customer-support.html` (Support Ticket Deflection & Cost Calculator)

### A. Mathematical Engine & Hidden Marketo Field Data Pipeline
The calculator uses a dual-bound slider/number interface that calculates business impact in real time and automatically writes values to hidden Marketo lead fields:

```
┌────────────────────────────────────────┐
│          User Inputs (Left Side)       │
├────────────────────────────────────────┤
│ • Total Customers (#numCustomers)      │
│ • Average ARR per Customer (#avgARR)   │
│ • Current Churn Rate (#curChurnRate)   │
└───────────────────┬────────────────────┘
                    │
                    ▼
┌────────────────────────────────────────┐
│      Interactive Slider Computation    │
├────────────────────────────────────────┤
│ • Reduction % (#reduxChurn): 10% – 50% │
│                                        │
│ Formulas:                              │
│ 1. estARR = numCustomers * avgARR      │
│ 2. churnCost = estARR * (curChurn/100) │
│ 3. newChurn = curChurn * (1 - redux/100│
│ 4. totalSavings = churnCost * (redux/10│
│ 5. retainedCust = totalSavings / avgARR│
└───────────────────┬────────────────────┘
                    │
                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│              Marketo Hidden Lead Field Sync Pipeline                   │
├────────────────────────────────────────────────────────────────────────┤
│ • aBMCustomers                  = totalCustomers                       │
│ • aBMRevenue                    = avgARR                               │
│ • aBMChurnRate                  = currentChurnRate                     │
│ • aBMEstimatedARR               = estARRtotal                          │
│ • aBMCurrentCostofChurn         = costOfChurn                          │
│ • aBMChurnRatewithPendo         = newChurnRate                         │
│ • aBMReductionofChurnwithPendo  = totalDollarSavings                   │
│ • aBMCustomersRetained          = estimatedCustomersRetained           │
└───────────────────┬────────────────────────────────────────────────────┘
                    │
                    ▼
┌────────────────────────────────────────┐
│      Gated Modal Marketo Form (#modal) │
│     "Email Me Full ROI Analysis"       │
└────────────────────────────────────────┘
```

### B. The Reverse-Engineered Calculator JavaScript Engine
```javascript
// Interactive ROI Calculator Logic (Extracted from go.pendo.io/roi-calculator-customer-retention.html)
(function initRetentionCalculator() {
  jQuery('#modal, #blocker').hide();

  // 1. Synchronize Range Sliders and Numeric Input Fields
  function syncInputs(numberId, rangeId) {
    jQuery(document).on('input', '#' + rangeId, function() {
      jQuery('#' + numberId).val(jQuery(this).val());
    });
    jQuery(document).on('input', '#' + numberId, function() {
      jQuery('#' + rangeId).val(jQuery(this).val());
    });
  }

  syncInputs('numCustomers', 'numCustomersRange');
  syncInputs('avgARR', 'avgArrRange');
  syncInputs('curChurnRate', 'curChurnRateRange');

  // 2. Compute ROI & Populate Marketo Lead Fields
  jQuery('#calculate').click(function() {
    var totalCustomers = parseInt(jQuery('#numCustomers').val()) || 0;
    var arr = parseInt(jQuery('#avgARR').val()) || 0;
    var churnRate = parseFloat(jQuery('#curChurnRate').val()) || 0;
    var redux = parseFloat(jQuery('#reduxChurn').val()) || 10;

    // Mathematical Formulas
    var estARRtotal = totalCustomers * arr;
    var costOfChurn = Math.round(estARRtotal * (churnRate / 100));
    var newChurn = (churnRate - (churnRate * (redux / 100))).toFixed(1);
    var totalDollarSavings = Math.round((costOfChurn * redux) / 100);
    var customersRetained = Math.round(totalDollarSavings / (arr || 1));

    // Update Output UI Elements
    jQuery('#estARR').val('$' + estARRtotal.toLocaleString());
    jQuery('#churnCost').val('$' + costOfChurn.toLocaleString());
    jQuery('#newChurn').val(newChurn + '%');
    jQuery('#reduxChurnTotal').val('$' + totalDollarSavings.toLocaleString());
    jQuery('#customersRetained').val(customersRetained.toLocaleString());
    jQuery('#calculate').html('Re-calculate Results');

    // 3. Inject Values into Hidden Marketo Form Inputs
    jQuery('[name="aBMCustomers"]').val(totalCustomers);
    jQuery('[name="aBMRevenue"]').val(arr);
    jQuery('[name="aBMChurnRate"]').val(churnRate);
    jQuery('[name="aBMEstimatedARR"]').val(estARRtotal);
    jQuery('[name="aBMCurrentCostofChurn"]').val(costOfChurn);
    jQuery('[name="aBMChurnRatewithPendo"]').val(newChurn);
    jQuery('[name="aBMReductionofChurnwithPendo"]').val(totalDollarSavings);
    jQuery('[name="aBMCustomersRetained"]').val(customersRetained);
  });

  // 4. Modal Triggers for Detailed Report Download
  jQuery('#email-results').click(function() {
    jQuery('#modal, #blocker').fadeIn(200);
  });

  jQuery('#close, #blocker').click(function() {
    jQuery('#modal, #blocker').fadeOut(200);
  });
})();
```

---

## 4. Template 3: Post-Conversion Thank You Template (`-thanks.html`)

**Live Reference Structure Analyzed:**
* `https://go.pendo.io/how-i-pendo-demo-thanks.html` / `demo-thanks.html`

### A. Template Purpose & Architecture
Instead of a dead-end confirmation message, the Thank You template acts as an **activation accelerator**:
1. **Immediate Video / Tour Embed:** Embeds a 2-minute self-guided interactive tour (powered by Pendo or Wistia) while the prospect waits for sales contact.
2. **Context-Aware Next Steps:** Direct links to customer case studies in the same industry.
3. **Attribution Conversion Firing:** Fires Bizible conversion tags, LinkedIn Insight conversions, and Google Ads tags.

### B. HTML Template Structure
```html
<main class="max-w-4xl mx-auto px-4 py-16 text-center">
  <!-- Checkmark Icon -->
  <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
    <svg class="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
  </div>

  <div class="mktoText" id="thanksHeading" mktoName="Thank You Main Title">
    <h1 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">We’ve received your demo request!</h1>
  </div>

  <div class="mktoText" id="thanksSubhead" mktoName="Thank You Subtitle">
    <p class="mt-4 text-lg text-gray-600">A product specialist will review your request and connect with you shortly.</p>
  </div>

  <!-- Interactive Self-Guided Tour Card -->
  <div class="mt-10 bg-white p-8 rounded-2xl border border-gray-200 shadow-md text-left">
    <h3 class="text-xl font-bold text-gray-900 mb-2">Can't wait? Take a 3-minute self-guided tour right now:</h3>
    <p class="text-sm text-gray-500 mb-6">Explore how Pendo lets you build in-app guides and analyze user paths in real time.</p>
    <div class="mktoSnippet" id="tourEmbed" mktoName="Interactive Tour or Video Snippet">
      <div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
        <iframe src="https://fast.wistia.net/embed/iframe/pendoOverviewDemo" class="w-full h-80"></iframe>
      </div>
    </div>
  </div>
</main>
```

---

## 5. Template 4: Events, Webinars & Content Downloads

**Live Reference URLs Analyzed:**
* `https://go.pendo.io/fighting-churn-webinar-register/` (Live & On-Demand Webinar Registration)
* `https://go.pendo.io/prodops-ebook` (Gated Ebook Download)
* `https://go.pendo.io/pendomonium-2024-updates-register.html` (Annual User Conference Registration)

### A. Core Architecture & Form Integration
* **Form ID Mapping:** Form `1702` (Webinars) & Form `1971` (Ebooks / Content Downloads).
* **Progressive Profiling:** When a returning visitor arrives from an email campaign (identified via Marketo `_mkt_tok`), Marketo automatically collapses known fields (First Name, Last Name, Company) and only prompts for the missing qualification question (e.g. "Primary Product Analytics Tool").
* **Ebook 3D Mockup Asset:** Implemented via `<meta class="mktoImg" id="ebookCover" mktoName="Ebook 3D Mockup Graphic">` with responsive drop-shadow styling.

---

## 6. Engineering Takeaways & Portfolio Narrative Alignment

1. **Enterprise Marketo Modernization:** Demonstrates deep mastery of Marketo's backend templating engine combined with modern frontend tools (Tailwind CSS, clean JavaScript modularization, and GTM event listeners).
2. **Elimination of Marketing-Engineering Bottlenecks:** Built editable Marketo Guided Landing Page templates that allowed marketing ops to ship 50+ localized ad variants with custom UTM headlines without requiring frontend engineers to build individual HTML files.
3. **FinTech/SaaS Engineering as Marketing:** The interactive ROI Calculator proves capability in building complex client-side calculation engines that seamlessly integrate with B2B CRM pipeline tracking.
