# TODO

## Building in Public: fill remaining content, then unhide

Still gated behind `SHOW_BUILDING_IN_PUBLIC` in [app/config.ts](app/config.ts),
currently `false`. That one flag controls the homepage section, the navbar and
footer links, the `/blog` URLs in `sitemap.xml`, and `noindex` on the blog pages.

**Done**, in [app/data/building.json](app/data/building.json):

1. Featured video is real: "Augment Your On-Brand Stock Photos" (AI User
   Group talk), real `videoId`, real body.
2. The two extra unfilled video slots were dropped rather than filled
   (`placeholder-second-video`, `placeholder-third-video` no longer exist).
3. Five real articles replace the two generic article placeholders: two
   "Thoughts" essays and three "Repo Review" pieces. Added a `category` field
   (`BlogCategory` in [app/blog/content.ts](app/blog/content.ts)) across
   `VideoItem`/`ArticleItem`/`RepoPage`, shown as a label only, no filter UI.
5. `"placeholder": true` removed from every filled entry.

**Still to do:**

4. **Two repo pages** (`readworthy`, `character-md`): still have placeholder
   `body` paragraphs and `highlights`. Taglines are already real, and
   language/stars/updated date come from the build-time GitHub fetch.
6. Generate per-post OG images from the `#og-card-article` and
   `#og-card-video` templates at `/og-preview`, then reference them in
   `app/blog/[slug]/page.tsx` metadata.
7. Flip `SHOW_BUILDING_IN_PUBLIC` to `true`.

A running list of future article ideas, tailored to this site's audience and
inspired by codeline.co/thoughts, lives at [blog-ideas.json](blog-ideas.json)
in the repo root.

## Nice to have

- The blog pages' bottom CTA links to `/#building`, which is a dead anchor
  while the section is hidden. Resolves itself on unhide.
