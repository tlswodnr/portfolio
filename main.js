"use strict";

const navbar = document.querySelector("#navbar");
document.addEventListener("scroll", (event) => {
  const y = window.pageYOffset;
  if (y === 0) {
    navbar.style.backgroundColor = "transparent";
  } else {
    navbar.style.backgroundColor = "var(--color-dark-blue)";
  }
});
