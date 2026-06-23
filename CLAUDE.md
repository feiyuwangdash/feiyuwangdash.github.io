# Personal Website — Project Rules

Static site hosted on **GitHub Pages** at `feiyuwangdash.github.io`
(repo `feiyuwangdash/feiyuwangdash.github.io`). No backend. Plain HTML +
`css/style.css` + `js/script.js`. Deploy by pushing to `main`.

## Layout

```
index.html, research.html, blogs.html, others.html, cv.html
css/style.css        ← all styling
js/script.js         ← shared JS, loaded by every page
assets/              ← images (profile, etc.)
posts/<slug>/        ← one folder per blog post
  index.html         ← the post
  *.png / *.jpg      ← that post's figures
```

## Blog post template

Every post is `posts/<slug>/index.html` and **must** follow the shared
structure so styling and site features apply uniformly:

- Same `<head>` (`../../css/style.css`) and `<header><nav>` block as the
  other posts, with `class="active"` on the Blogs link.
- `<main class="post">`, a `back-link`, an `<h1>`, then the meta line.
- Loads `<script src="../../js/script.js"></script>` before `</body>`.

### View counter (required on every post)

Page views are tracked and displayed via **GoatCounter** (free,
privacy-friendly, no cookies). The logic lives once in `js/script.js`;
each post only needs the display slot in its meta line:

```html
<p class="entry-meta">YYYY-MM-DD &middot; Feiyu Wang<span class="post-views" hidden></span></p>
```

`script.js` (already loaded site-wide) records the pageview and, when a
`.post-views` span is present, fills it with `· 👁 N views`. **Always
include this span when creating a new post** — that is the only per-post
step; do not duplicate any tracking code into the post HTML.

Paths are normalised (`/foo/` and `/foo/index.html` count as one page),
so the counter works regardless of which URL form a visitor uses.

#### GoatCounter account

- Code: **`feiyuwang`** (set as `GOATCOUNTER_CODE` in `js/script.js`).
- Stats dashboard: <https://feiyuwang.goatcounter.com>.
- Required setting (one-time, in GoatCounter → Settings): tick **"Allow
  adding visitor counts on your website"** so the per-post count can be
  read back for display.
