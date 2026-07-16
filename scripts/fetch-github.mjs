// Build-time fetch of curated GitHub repo metadata.
// Writes app/data/github.json; on any failure the committed baseline is kept
// so the build never breaks on GitHub API hiccups or rate limits.
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const REPOS = ["RL22/readworthy", "RL22/character.md"];

const outPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../app/data/github.json"
);

const headers = { Accept: "application/vnd.github+json" };
if (process.env.GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

try {
  const repos = await Promise.all(
    REPOS.map(async (full) => {
      const res = await fetch(`https://api.github.com/repos/${full}`, { headers });
      if (!res.ok) throw new Error(`${full}: ${res.status}`);
      const r = await res.json();
      return {
        name: r.name,
        url: r.html_url,
        description: r.description,
        language: r.language,
        stars: r.stargazers_count,
        topics: (r.topics ?? []).slice(0, 4),
        pushedAt: r.pushed_at,
      };
    })
  );
  await writeFile(outPath, JSON.stringify({ fetchedAt: new Date().toISOString(), repos }, null, 2) + "\n");
  console.log(`github.json updated (${repos.length} repos)`);
} catch (err) {
  console.warn(`fetch-github: keeping committed baseline (${err.message})`);
}
