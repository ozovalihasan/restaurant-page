import mainImage from "./images/main.jpg";

export const homePage = () => {
  const content = document.getElementById("content");

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container", "d-flex");

  const bodyImage = document.createElement("img");
  bodyImage.src = mainImage;
  bodyImage.classList.add("body-image", "w-50");

  mainContainer.appendChild(bodyImage);

  const rightPart = document.createElement("div");
  rightPart.classList.add("w-50", "right-part");
  rightPart.innerText = "Good Meal";

  mainContainer.appendChild(rightPart);

  content.appendChild(mainContainer);
};
