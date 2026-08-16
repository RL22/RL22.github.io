// Building in Public is built and working, but ships hidden until the
// placeholder entries in app/data/building.json are replaced with real
// content. See TODO.md.
//
// Flipping this to true restores, in one step: the homepage section, the
// navbar and footer links, the /blog URLs in sitemap.xml, and indexing on
// the /blog pages.
export const SHOW_BUILDING_IN_PUBLIC = false;

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
