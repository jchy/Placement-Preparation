const container = document.querySelector(".container");

const URL = "https://dog.ceo/api/breeds/image/random";


// get the images
let count = 1;
function loadImages(numImages = 25) {
  let i = 0;
  while (i < numImages) {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.message)
        const img = document.createElement("img");
        const div = document.createElement("div");
        // div.textContent = count++;
        img.src = `${data.message}`;
        count++;
        if(count%2===0){
            img.setAttribute("id", 'card-img-even');
        }
        else{
            img.setAttribute("id", 'card-img-odd');
        }
        div.appendChild(img);
        container.appendChild(div);
      });
    i++;
  }
}

loadImages();

// If the sum of scrollY and innerHeight is greater or equal to the scrollHeight,
//  it means we have reached the end of the document, and we need to load more images.
// listen for scroll event and load more images if we reach the bottom of window
window.addEventListener("scroll", () => {
  console.log("scrolled", window.scrollY); //scrolled from top
  console.log(window.innerHeight); //visible part of screen
  if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
    loadImages();
  }
});
