const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const img = document.querySelectorAll("#imgs img");

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

rightBtn.addEventListener("click", () => {
  idx++;
  changeImage();
  resetInterval();
});

leftBtn.addEventListener("click", () => {
  idx--;
  changeImage();
  resetInterval();
});

// my code

// let prev = document.getElementById("prev");
// let next = document.getElementById("next");
// let imagesContainer = document.querySelector(".images-container");
// let images = document.querySelectorAll("img");

// let arrayFromImages = Array.from(images);

// let currentImage = 0;
// let cantidad = 0;

// let count = setInterval(() => {
//   moveToNextImage();
//   updateImageContainer();
// }, 2000);

// next.addEventListener("click", () => {
//   moveToNextImage();
//   updateImageContainer();
// });

// prev.addEventListener("click", () => {
//   moveToPrevImage();
//   updateImageContainer();
// });

// function moveToNextImage() {
//   currentImage++;
//   cantidad += 500;

//   if (currentImage >= arrayFromImages.length) {
//     currentImage = 0;
//     cantidad = 0;
//   }
// }

// function moveToPrevImage() {
//   currentImage--;
//   cantidad -= 500;

//   if (currentImage < 0) {
//     currentImage = arrayFromImages.length - 1;
//     cantidad = (arrayFromImages.length - 1) * 500;
//   }
// }

// function updateImageContainer() {
//   imagesContainer.style.cssText = `transform: translateX(-${cantidad}px)`;
// }
