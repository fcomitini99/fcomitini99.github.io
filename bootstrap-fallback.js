(function () {
  // If the main app never mounts (JS bundle fails to load, or the gateway
  // serving this page is stuck/misbehaving), bail out to a known-working
  // mirror instead of leaving visitors stuck on the loading screen.
  // App.jsx adds 'js-ready' to <html> once React has actually mounted.
  var FALLBACK_URL = "https://dweb.link/ipfs/bafybeib6wzv2phu5hqas3qvu7qaca4i4cee7hgixfzaj2kmllxoqm72tri/";
  var TIMEOUT_MS = 6000;
  var redirected = false;

  function toFallback() {
    if (redirected) return;
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
