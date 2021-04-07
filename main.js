"use strict";

// navbar 투명 불투명 조절
const navbar = document.querySelector("#navbar");
document.addEventListener("scroll", (event) => {
  const y = window.pageYOffset;
  if (y <= 100) {
    navbar.style.backgroundColor = "transparent";
  } else {
    navbar.style.backgroundColor = "var(--color-dark-blue)";
  }
});

// navbar누르면 해당 화면으로 이동
const homeBtn = document.querySelector(".btn-home");
const aboutBtn = document.querySelector(".btn-about");
const skillBtn = document.querySelector(".btn-skill");
const workBtn = document.querySelector(".btn-work");
const testimonialBtn = document.querySelector(".btn-testimonial");
const contactBtn = document.querySelector(".btn-contact");
const homeContactBtn = document.querySelector(".home__contact");

const home = document.querySelector("#home");
const about = document.querySelector("#about");
const skill = document.querySelector("#skills");
const work = document.querySelector("#work");
const testimonial = document.querySelector("#testimonials");
const contact = document.querySelector("#contact");

homeBtn.addEventListener("click", () => {
  home.scrollIntoView({ behavior: "smooth" });
});

aboutBtn.addEventListener("click", () => {
  about.scrollIntoView({ behavior: "smooth" });
});

skillBtn.addEventListener("click", () => {
  skill.scrollIntoView({ behavior: "smooth" });
});

workBtn.addEventListener("click", () => {
  work.scrollIntoView({ behavior: "smooth" });
});

testimonialBtn.addEventListener("click", () => {
  testimonial.scrollIntoView({ behavior: "smooth" });
});

contactBtn.addEventListener("click", () => {
  contact.scrollIntoView({ behavior: "smooth" });
});

homeContactBtn.addEventListener("click", () => {
  contact.scrollIntoView({ behavior: "smooth" });
});

// home 점점 흐려짐
const homeHeight = home.getBoundingClientRect().height;
const homeContainer = document.querySelector(".home__container");
document.addEventListener("scroll", () => {
  homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
});

//arrow button - home으로
const arrowBtn = document.querySelector(".arrow-btn");
document.addEventListener("scroll", () => {
  if (window.scrollY <= 712) {
    arrowBtn.style.display = "none";
  } else {
    arrowBtn.style.display = "block";
  }
});

arrowBtn.addEventListener("click", () => {
  home.scrollIntoView({ behavior: "smooth" });
});
