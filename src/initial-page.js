import mainImage from "./images/main.jpg";

export const initialPage = () => {
  const content = document.getElementById("content");

  const bodyImage = document.createElement("img");
  bodyImage.src = mainImage;
  bodyImage.style.backgroundSize = "cover";
  bodyImage.style.width = "100%";

  content.appendChild(bodyImage);
};
