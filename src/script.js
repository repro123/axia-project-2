"use strict";

const toggleNavBtn = document.querySelector("#toggleNav");
const mobileMenu = document.querySelector("#mobileMenu");
const overlay = document.querySelector("#overlay");
const body = document.querySelector("body");
const navLinks = document.querySelectorAll(".navlinks");

toggleNavBtn.addEventListener("click", function () {
  const isExpanded = toggleNavBtn.getAttribute("aria-expanded") === "true";
  toggleNavBtn.setAttribute("aria-expanded", !isExpanded);
  mobileMenu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  body.classList.toggle("overflow-hidden");
});

function closeNav() {
  toggleNavBtn.setAttribute("aria-expanded", false);
  mobileMenu.classList.add("hidden");
  overlay.classList.add("hidden");
  body.classList.remove("overflow-hidden");
}

// colse the nav by clicking the overlay
overlay.addEventListener("click", closeNav);

// close the nav by clicking Escape button
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeNav();
  }
});

// close nav when the navlinks are clicked
for (let link of navLinks) {
  link.addEventListener("click", closeNav);
}

// close nav if the nav is open and the window is resized
window.addEventListener("resize", function () {
  if (
    window.innerWidth > 768 &&
    mobileMenu.classList.contains("hidden") === false
  ) {
    closeNav();
  }
});
