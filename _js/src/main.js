import Sticky from "sticky-js";
import Sizzle from "sizzle";

var subnavEl = document.getElementById("subnav");
var sticky = new Sticky("#subnav");

var toggleNav = function(event) {
  console.log("toggleNav");
  if (subnavEl.classList.contains("is-open")) {
    subnavEl.classList.remove("is-open");
    subnavEl.classList.remove("is-white");
    document.body.classList.remove("subnav-is-open");
  } else {
    subnavEl.classList.add("is-open");
    subnavEl.classList.add("is-white");
    document.body.classList.add("subnav-is-open");
  }
};

Sizzle(".js-hamburger")[0].addEventListener("click", toggleNav);
Sizzle(".js-close")[0].addEventListener("click", toggleNav);
