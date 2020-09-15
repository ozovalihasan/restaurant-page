export const navBar = () => {
  const content = document.getElementById("content");

  const nav = document.createElement("div");
  nav.classList.add("main-nav");

  const homePage = document.createElement("button");
  homePage.classList.add("home-page", "custom-button");
  homePage.innerText = "Home";
  homePage.id = "home";

  const menuPage = document.createElement("button");
  menuPage.classList.add("menu-page", "custom-button");
  menuPage.innerText = "Menu";
  menuPage.id = "menu";

  const contactPage = document.createElement("button");
  contactPage.classList.add("contact-page", "custom-button");
  contactPage.innerText = "Contact";
  contactPage.id = "contact";

  nav.appendChild(homePage);
  nav.appendChild(menuPage);
  nav.appendChild(contactPage);

  content.appendChild(nav);
};
