/* =========================================================
   ARVENZA — PXRACK Landing Page
   Small, dependency-free JavaScript. Two jobs only:
   1. Toggle the mobile navigation menu
   2. Keep the footer's copyright year current automatically
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* ---- 1. Mobile nav toggle ---- */
  var navToggle = document.getElementById("nav-toggle");
  var mainNav = document.getElementById("main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    // Close the menu automatically once a visitor taps a link,
    // so it doesn't stay open after they've navigated.
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  /* ---- 2. Auto-update the footer year ----
     Avoids having to remember to change "2026" to "2027" by hand
     every January. */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
