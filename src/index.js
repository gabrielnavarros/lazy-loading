import { registerImage } from "./lazy";
import { createImageNode } from "./utils";

//Load all the existing images when you load the page
const allImages = document.querySelectorAll("img[data-src]");
allImages.forEach(registerImage);

//Add new images
const imageContainer = document.querySelector("#images");
const button = document.querySelector("button[type='submit']");
button.addEventListener("click", () => {
    const [node, image] = createImageNode();
    registerImage(image);
    imageContainer.append(node);
});

//Clean images
const clean = document.querySelector("button[type='reset']");
clean.addEventListener("click", () => {
    imageContainer.innerHTML = "";
});

