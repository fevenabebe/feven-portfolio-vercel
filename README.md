# Feven Abebe Bejiga — Portfolio

A personal AI/ML portfolio built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. All content is sourced from a single file, `src/lib/data.ts`, which mirrors the CV exactly — nothing on the site is invented.

## Design concept

The visual motif — a central node connected to orbiting client nodes, animated in the hero background — is a direct reference to the federated-learning work in the CV (a central aggregator training across distributed clients). It reappears quietly through the site (timeline dots, section markers) instead of generic decoration.

- **Palette:** graphite base (`#12151A`) with two accents — amber "signal" (`#F2A45C`) and teal "node" (`#59C9BC`) — rather than a stock dark-mode neon look.
- **Type:** Space Grotesk (display), Inter (body), IBM Plex Mono (labels/data/tags).

## 1. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 2. Add your CV file (required)

The "Download CV" buttons link to `/cv.pdf`. Place your CV PDF at:

```
public/cv.pdf
```

The button will not work until this file exists — it was intentionally not faked.

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## 4. Deploy to Vercel

**Option A — Dashboard:**
1. Go to https://vercel.com/new
2. Import the GitHub repo you just pushed
3. Framework preset: Next.js (auto-detected)
4. Click **Deploy**

**Option B — CLI:**
```bash
npm i -g vercel
vercel
vercel --prod
```

No environment variables are required.

## 5. Things you may want to update yourself

These weren't in the CV, so they were deliberately left out or generic — fill in whichever you'd like:

- **Project repo/demo links** — only the main GitHub profile link was in the CV, so individual project cards don't link out. Add a `repo` or `demo` URL per project in `src/lib/data.ts` (`projects` array) once you have public links.
- **`cv.pdf`** — see step 2 above.
- **Site URL** — `siteUrl` in `src/app/layout.tsx` is a placeholder (`https://feven-abebe.vercel.app`); update it to your real deployed domain once you have one, for correct Open Graph metadata.
- **OG image** — no custom social-preview image was created; add one at `public/og.png` and reference it in `layout.tsx` if you'd like link previews to show an image.

## Project structure

```
src/
  app/
    layout.tsx      — fonts, metadata, root shell
    page.tsx         — assembles all sections
    globals.css
  components/        — one component per section
  lib/
    data.ts           — single source of truth for all CV content
public/
  favicon.svg
  robots.txt
  cv.pdf              — add this yourself (see step 2)
```

## Updating the site content

Everything on the page comes from `src/lib/data.ts`. This version (Nov 2026) adds:

- an **Applied AI Evidence** section (`src/components/Evidence.tsx`) with the timeline and charts in `public/evidence/` and a PDF download (`public/Feven_Abebe_Applied_AI_Evidence_Portfolio.pdf`, the neutral public edition);
- **status labels** on projects (prototype, team project, simulation, accepted for presentation) and repository links;
- the ESS internship, and the verified GCI World and SAFEE KAIM certificates.

Skills in `skills` are listed as on the CV; trim any you cannot demonstrate.

## Deploy to Vercel

1. Push this folder to a GitHub repository (see step 3 above).
2. In Vercel choose **Add New > Project**, import the repository. Framework is detected as Next.js; no settings need changing.
3. Deploy. To keep the address `feven-portfolio-six.vercel.app`, import into that existing Vercel project instead (or push to the repository it is connected to).

Or with the CLI: `npm i -g vercel && vercel --prod` from this folder.
