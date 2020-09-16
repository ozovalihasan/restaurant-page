import { navBar } from "./navbar.js";
import { homePage } from "./home-page.js";
import { menuPage } from "./menu-page.js";
import { contactPage } from "./contact-page.js";
import "./stylesheets/style.scss";

function clearPage() {
  const parent = document.getElementById("content");
  parent.lastChild.remove();
}

const showPage = {
  home: homePage,
  menu: menuPage,
  contact: contactPage,
};

navBar();
homePage();

["home", "menu", "contact"].forEach((val) => {
  const pageButton = document.getElementById(val);
  pageButton.addEventListener("click", function () {
    clearPage(val);
    showPage[val]();
  });
});
