# Personal website

Static personal website for Feiyu Wang, hosted at [feiyuwangdash.github.io](https://feiyuwangdash.github.io).

## Editing

- Main pages: `index.html`, `research.html`, `blogs.html`, `others.html`, and `cv.html`.
- Shared design and responsive layouts: `css/style.css`.
- Accessible article tables and GoatCounter page views: `js/script.js`.
- Original portrait and downloadable files: `assets/`.
- Blog articles and their figures: `posts/<slug>/`.

No framework, package installation, or build step is required. Each page contains its navigation and footer so the site remains navigable without JavaScript. When adding a page, copy the shared header, set `aria-current="page"` on the active navigation link, and include the skip link and footer.

Blog posts use `<main class="post" id="main-content" tabindex="-1">` and load `../../js/script.js`. Include `<span class="post-views" hidden></span>` in the metadata line. Analytics runs only on the production hostname; local previews do not register visits. Keep figures responsive, give images descriptive alt text, and wrap wide tables in `.table-scroll` (the shared script also wraps legacy tables).

## Visual pattern

The design takes its restrained academic structure from [Martin O’Connell’s website](https://sites.google.com/site/drmartinoconnell/home): quiet navigation, centered blue headings, a portrait beside a short introduction, and compact research lists. Preserve the white background, sans-serif typography, and plain links when adding content. Lato is served locally from `assets/fonts/`; its SIL Open Font License is included there. The font source is the [Google Fonts repository](https://github.com/google/fonts/tree/main/ofl/lato). Research abstracts use native `<details>` elements, so they remain accessible without JavaScript.

## Local preview

Run from this directory:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8000`. Check navigation, article links, and narrow mobile widths after editing shared CSS.

## Research and CV

The research page contains the job market paper and two ongoing projects, with summaries drawn from current research files. Update the titles, summaries, and coauthors as the projects develop. Current drafts are available by email; add a paper link when a public version is ready.

The CV download is `assets/cv.pdf`, an unchanged copy of the current one-page CV. Replace that file when updating the download and keep the education, research, teaching, and presentation details on the HTML pages in sync.

## Deployment

Review changes, then push the intended files to the `main` branch of `feiyuwangdash/feiyuwangdash.github.io`. GitHub Pages publishes that branch. Keep local drafts and unrelated editor files out of the deployment commit.
