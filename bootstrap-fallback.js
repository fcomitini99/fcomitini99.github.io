(function () {
  // If the main app never mounts (JS bundle fails to load, or the gateway
  // serving this page is stuck/misbehaving), bail out to the GitHub Pages
  // mirror instead of leaving visitors stuck on the loading screen. That
  // mirror is plain static hosting (not IPFS), so it doesn't have this same
  // failure mode -- but guard against redirecting to itself in a loop in
  // case this script ever ends up served from there too.
  // App.jsx adds 'js-ready' to <html> once React has actually mounted.
  var FALLBACK_URL = "https://fcomitini99.github.io/";
  var TIMEOUT_MS = 6000;
  var redirected = false;

  function toFallback() {
    if (redirected) return;
    if (window.location.hostname === "fcomitini99.github.io") return;
    redirected = true;
    window.location.replace(FALLBACK_URL);
  }

  setTimeout(function () {
    if (!document.documentElement.classList.contains("js-ready")) {
      toFallback();
    }
  }, TIMEOUT_MS);

  window.addEventListener(
    "error",
    function (e) {
      if (e.target && (e.target.tagName === "SCRIPT" || e.target.tagName === "LINK")) {
        toFallback();
      }
    },
    true
  );
})();
