import { navBar } from "./navbar.js";
import { homePage } from "./home-page.js";
import { menuPage } from "./menu-page.js";
import { contactPage } from "./contact-page.js";
import "./stylesheets/style.scss";

function clearUpdate(name) {
  const content = document.getElementById("content");
  content.removeChild(content.lastChild);
  name();
}

navBar();
homePage();

const home = document.getElementById("home");
home.addEventListener("click", function () {
  clearUpdate(homePage);
});

const menu = document.getElementById("menu");
menu.addEventListener("click", function () {
  clearUpdate(menuPage);
});

const contact = document.getElementById("contact");
contact.addEventListener("click", function () {
  clearUpdate(contactPage);
});
