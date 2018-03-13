import Sticky from "sticky-js";
import Sizzle from "sizzle";

var Nav = document.getElementById("Nav");
var sticky = new Sticky("#subnav");

var toggleNav = function(event) {
  if (Nav.classList.contains("is-open")) {
    Nav.classList.remove("is-open");
    Nav.classList.remove("is-white");
    document.body.classList.remove("nav-is-open");
  } else {
    Nav.classList.add("is-open");
    Nav.classList.add("is-white");
    document.body.classList.add("nav-is-open");
  }
};

Sizzle(".js-hamburger")[0].addEventListener("click", toggleNav);
Sizzle(".js-close")[0].addEventListener("click", toggleNav);
