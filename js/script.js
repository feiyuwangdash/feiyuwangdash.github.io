// Author: Feiyu Wang / Codex; Date: 2026-10-26.
// Purpose: Accessible article tables and production-only page-view counts.
// Inputs: Page DOM. Outputs: Scrollable table regions and optional view counts.
// Native hash links preserve URL history, keyboard focus, and reduced-motion CSS.
document.querySelectorAll(".post table").forEach(function (table, index) {
    var region = table.closest(".table-scroll");
    if (!region) {
        region = document.createElement("div");
        region.className = "table-scroll";
        table.parentNode.insertBefore(region, table);
        region.appendChild(table);
    }
    region.tabIndex = 0;
    region.setAttribute("role", "region");
    region.setAttribute("aria-label", "Table " + (index + 1) + "; scroll horizontally if needed");
});

// --- Page-view counter (GoatCounter) ---------------------------------------
// Free, privacy-friendly analytics (no cookies). Setup, one time:
//   1. Sign up at https://www.goatcounter.com/ and pick a code.
//   2. Replace "YOURCODE" below with that code (e.g. "feiyuwang").
//   3. In GoatCounter: Settings -> tick "Allow adding visitor counts on your
//      website" so the per-post count can be read back and displayed.
// Once set, every page is tracked automatically, and any post containing a
// <span class="post-views"></span> shows its own view count next to the date.
var GOATCOUNTER_CODE = "feiyuwang";

(function () {
    if (location.hostname !== "feiyuwangdash.github.io") return;
    if (GOATCOUNTER_CODE === "YOURCODE") return;

    // Normalise the path so /foo/ and /foo/index.html count as one page.
    var normPath = location.pathname.replace(/index\.html$/, "");

    // Record this pageview (uses the same normalised path).
    window.goatcounter = { path: function (p) { return p.replace(/index\.html$/, ""); } };
    var tracker = document.createElement("script");
    tracker.async = true;
    tracker.src = "https://gc.zgo.at/count.js";
    tracker.setAttribute("data-goatcounter",
        "https://" + GOATCOUNTER_CODE + ".goatcounter.com/count");
    document.head.appendChild(tracker);

    // Display this post's own view count, if the page has a slot for it.
    var slot = document.querySelector(".post-views");
    if (!slot) return;
    fetch("https://" + GOATCOUNTER_CODE + ".goatcounter.com/counter" + encodeURI(normPath) + ".json")
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (d) {
            if (d && d.count) {
                slot.textContent = " · 👁 " + d.count + " views";
                slot.hidden = false;
            }
        })
        .catch(function () { /* offline / not yet configured: stay hidden */ });
})();