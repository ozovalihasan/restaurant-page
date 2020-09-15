import mainImage from "./images/contact.jpg";

export const contactPage = () => {
  const content = document.getElementById("content");

  const bodyImage = document.createElement("img");
  bodyImage.src = mainImage;
  bodyImage.classList.add("body-image");

  content.appendChild(bodyImage);
};
