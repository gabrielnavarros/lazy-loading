const minimum = 1;
const maximum = 123;

const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum

export const createImageNode = () => {

    const wrapper = document.createElement("div");
    wrapper.className = "p-4";

    const image = document.createElement('img')
    image.className = "mx-auto rounded-md bg-gray-300";
    image.width = "320";
    image.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=";
    image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`; 

    wrapper.append(image);

    return [wrapper, image];

};