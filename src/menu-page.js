import hotMealImage from "./images/hot-meal.jpg";
import dessertImage from "./images/dessert.jpg";
import soupImage from "./images/soup.jpg";

export const menuPage = () => {
  const content = document.getElementById("content");
  content.classList.add("content");
  content.style.backgroundImage = "";

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container", "d-flex");

  const container = document.createElement("div");
  container.classList.add("all-menu");

  container.innerHTML = `
  <div class="position-relative ">
    <img src="${soupImage}" alt="">
    <div class="meal-name box center-vh">Soup</div>
  </div>
  <div class="position-relative">
    <img src="${hotMealImage}" alt="">
    <div class="meal-name box center-vh">Hot Meal</div>
  </div>
  <div class="position-relative">
    <img src="${dessertImage}" alt="">
    <div class="meal-name box center-vh">Dessert</div>
  </div>
`;

  mainContainer.appendChild(container);
  content.appendChild(mainContainer);
};
