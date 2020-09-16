import mainImage from "./images/main.jpg";

export default function homePage() {
  const content = document.getElementById("content");
  content.style.backgroundImage = `url("${mainImage}")`;

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container", "d-flex", "center-vh");

  mainContainer.innerHTML = `
    <div class="main-page box center-vh "> 
      <div class="main-title">
        Best Restaurant
      </div>
      <div class="subtitle">
        The most delicious meal you've ever had 
      </div>
    </div>
`;

  content.appendChild(mainContainer);
}
