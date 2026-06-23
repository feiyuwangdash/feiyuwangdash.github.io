// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
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
    if (GOATCOUNTER_CODE === "YOURCODE") return; // not configured yet

    // Normalise the path so /foo/ and /foo/index.html count as one page.
    var normPath = location.pathname.replace(/index\.html$/, "");

    // Record this pageview (uses the same normalised path).
    window.goatcounter = { path: function (p) { return p.replace(/index\.html$/, ""); } };
    var tracker = document.createElement("script");
    tracker.async = true;
    tracker.src = "//gc.zgo.at/count.js";
    tracker.setAttribute("data-goatcounter",
        "https://" + GOATCOUNTER_CODE + ".goatcounter.com/count");
    document.head.appendChild(tracker);

    // Display this post's own view count, if the page has a slot for it.
    var slot = document.querySelector(".post-views");
    if (!slot) return;
    fetch("https://" + GOATCOUNTER_CODE + ".goatcounter.com/counter" + normPath + ".json")
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (d) {
            if (d && d.count) {
                slot.textContent = " · 👁 " + d.count + " views";
                slot.hidden = false;
            }
        })
        .catch(function () { /* offline / not yet configured: stay hidden */ });
})();