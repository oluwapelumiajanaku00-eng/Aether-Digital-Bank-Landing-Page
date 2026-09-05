(function () {
  "use strict";

  var header = document.getElementById("site-header");
  var toggle = document.getElementById("nav-toggle");
  var backdrop = document.getElementById("nav-backdrop");
  var nav = document.getElementById("primary-nav");

  if (!header || !toggle || !nav) return;

  function closeNav() {
    header.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function openNav() {
    header.classList.add("nav-open");
    toggle.setAttribute("aria-expanded", "true");
  }

  function toggleNav() {
    var isOpen = header.classList.contains("nav-open");
    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  }

  toggle.addEventListener("click", toggleNav);

  if (backdrop) {
    backdrop.addEventListener("click", closeNav);
  }

  // Close the menu after choosing a link, and on Escape.
  nav.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      closeNav();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeNav();
    }
  });

  // If the viewport grows back to desktop size, make sure the mobile
  // panel state doesn't linger.
  var desktopQuery = window.matchMedia("(min-width: 56.25em)");
  function handleViewportChange(event) {
    if (event.matches) {
      closeNav();
    }
  }
  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener("change", handleViewportChange);
  } else if (desktopQuery.addListener) {
    desktopQuery.addListener(handleViewportChange);
  }
})();
