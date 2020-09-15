import mainImage from "./images/hot-meal.jpg";

export const menuPage = () => {
  const content = document.getElementById("content");

  const bodyImage = document.createElement("img");
  bodyImage.src = mainImage;
  bodyImage.classList.add("body-image");

  content.appendChild(bodyImage);
};
