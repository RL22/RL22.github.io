# TODO

## Building in Public: replace placeholder content, then unhide

The section and its seven blog pages are built and working. They ship hidden
only because the content is placeholder text that would read as fake.

Everything is gated behind `SHOW_BUILDING_IN_PUBLIC` in
[app/config.ts](app/config.ts), currently `false`. That one flag controls the
homepage section, the navbar and footer links, the `/blog` URLs in
`sitemap.xml`, and `noindex` on the blog pages.

**Work to do**, all content in [app/data/building.json](app/data/building.json):

1. **Featured video** (`placeholder-push-to-prod-episode`): real title, blurb,
   `videoId`, `publishedAt`, and body paragraphs. While `videoId` is `null` the
   page renders a grey placeholder panel instead of the YouTube player.
2. **Two more videos** (`placeholder-second-video`, `placeholder-third-video`):
   same fields. Both currently have `videoId: null`.
3. **Two articles** (`placeholder-marketing-web-platforms`,
   `placeholder-second-teardown`): real title, blurb, and body paragraphs.
   Optionally add `image` and `imageAlt` for the hero; without them the layout
   renders a placeholder panel.
4. **Two repo pages** (`readworthy`, `character-md`): replace the placeholder
   `body` paragraphs and `highlights`. Their taglines are already real, and
   language/stars/updated date come from the build-time GitHub fetch.
5. Remove `"placeholder": true` from each entry as it becomes real. That flag
   drives the visible PLACEHOLDER chips.
6. Generate per-post OG images from the `#og-card-article` and
   `#og-card-video` templates at `/og-preview`, then reference them in
   `app/blog/[slug]/page.tsx` metadata.
7. Flip `SHOW_BUILDING_IN_PUBLIC` to `true`.

## Nice to have

- The blog pages' bottom CTA links to `/#building`, which is a dead anchor
  while the section is hidden. Resolves itself on unhide.
