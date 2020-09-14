export const initialPage = () => {
  const content = document.getElementById("content");
  const bodyh1 = document.createElement("h1");
  bodyh1.innerText = "Good Restaurant";
  content.appendChild(bodyh1);
  const bodyImage = document.createElement("img");
  bodyImage.setAttribute("src", "./path2.png");
  content.appendChild(bodyImage);
};
