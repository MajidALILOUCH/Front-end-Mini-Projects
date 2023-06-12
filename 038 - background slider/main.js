const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;

rightBtn.addEventListener("click", () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveSlide();
});

leftBtn.addEventListener("click", () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBgToBody();
  setActiveSlide();
});

setBgToBody();

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));

  slides[activeSlide].classList.add("active");
}

// my code

// let slides = document.querySelectorAll(".slide");
// var prevButton = document.getElementById("left");
// var nextButton = document.getElementById("right");

// // Get Number Of Slides
// var slidesCount = slides.length;

// // Set Current Slide
// var currentSlide = 1;

// // Handle Click on Previous and Next Buttons
// nextButton.onclick = nextSlide;
// prevButton.onclick = prevSlide;

// // trigger the checker function
// theChecker();

// // Next Slide Function
// function nextSlide() {
//   currentSlide++;

//   theChecker();
// }

// // Previous Slide Function
// function prevSlide() {
//   currentSlide--;

//   theChecker();
// }

// // create the checker function
// function theChecker() {
//   // remove all active classes
//   removeAllActive();

//   // Adjust current slide index based on boundary conditions
//   if (currentSlide < 1) {
//     currentSlide = slidesCount;
//   } else if (currentSlide > slidesCount) {
//     currentSlide = 1;
//   }

//   // set active class on current slide
//   slides[currentSlide - 1].classList.add("active");

//   // Get the background color of the current slide
//   var currentSlideBackgroundImage = window.getComputedStyle(
//     slides[currentSlide - 1]
//   ).backgroundImage;

//   // Set the background color of the body
//   document.body.style.backgroundImage = currentSlideBackgroundImage;
// }

// // remove all active classes from images and pagination bullets
// function removeAllActive() {
//   // loop through images
//   slides.forEach((slide) => slide.classList.remove("active"));
// }
