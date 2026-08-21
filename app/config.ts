// Building in Public: the homepage section, the /building index, and the
// navbar/footer "Building" link. Individual items opt out via
// "status": "unpublished" in app/data/building.json (readworthy and
// character-md are unpublished until their placeholder body copy is
// replaced) rather than through this flag. See TODO.md.
//
// Flipping this to false hides, in one step: the homepage section, /building
// and /blog, the navbar/footer links, the /blog URLs in sitemap.xml, and
// indexing on the /blog pages.
export const SHOW_BUILDING_IN_PUBLIC = true;

// The /work case studies are built, routable, and linked from the navbar,
// footer, hero, and Experience section role cards. See public/work/MANIFEST.md.
//
// Flipping this to false hides, in one step: the navbar, footer and blog
// footer links, the /work URLs in sitemap.xml, and indexing on the /work pages.
export const SHOW_WORK = true;

// The Platform and Design resume variants stay built and printable at
// /resume/platform and /resume/design, but the switcher is hidden so visitors
// only ever see the default resume. Both variant routes are noindex and absent
// from sitemap.xml. Set to true to show the switcher again.
export const SHOW_RESUME_VARIANTS = false;
