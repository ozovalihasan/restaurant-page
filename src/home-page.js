import mainImage from "./images/main.jpg";

export const homePage = () => {
  const content = document.getElementById("content");
  content.style.backgroundImage = `url("${mainImage}")`;

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container", "d-flex");

  const allMenu = document.createElement("div");
  allMenu.classList.add("all-menu");

  allMenu.innerHTML = `
    <div class="main-page"> 
      <div class="main-title">
        Best Restaurant
      </div>
      <div class="subtitle">
        The most delicious meal you've ever had 
      </div>
    </div>
`;

  mainContainer.appendChild(allMenu);
  content.appendChild(mainContainer);
};
