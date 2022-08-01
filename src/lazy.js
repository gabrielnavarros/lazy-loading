let totalImages = 0;
let loadedImages = 0;

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
})


const isIntersecting = (entry) => {
    return entry.isIntersecting // true (inside of viewport)
}

const loadImage = (entry) => {
    const imgNode = entry.target;
    imgNode.src = imgNode.dataset.src;
    imgNode.onload = () => {
        loadedImages += 1;
        logState();
    };

    //Unlisten
    observer.unobserve(imgNode);
};


export const registerImage = (image) => {
    observer.observe(image)
    totalImages += 1;
    logState();
};

function logState() {
  console.log(`⚪️ Total Images: ${totalImages}`);
  console.log(`🟣 Loaded Images: ${loadedImages}`);
  console.log("--------------------------------------");
}
