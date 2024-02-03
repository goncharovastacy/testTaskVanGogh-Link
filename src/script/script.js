"use strict";

const benefits = document.querySelector("#benefits");
const info = document.querySelector("#info");
const infoLink = document.querySelector("#info__link");
const benefitsLink = document.querySelector("#benefits__link");
const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("nav");

const addClassActive = (element, className) => {
  element.classList.toggle(className);
};

benefitsLink.addEventListener("click", () =>
  addClassActive(benefits, "active")
);
infoLink.addEventListener("click", () => addClassActive(info, "active"));
hamburger.addEventListener("click", () => {
  addClassActive(hamburger, "hamburger_active");
  addClassActive(nav, "nav_active");
});
