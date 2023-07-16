const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);

  times.innerHTML = ++timesClicked;

  setTimeout(() => heart.remove(), 1000);
};

// my code

// let img = document.getElementById("image-holder");
// let heart = document.getElementById("heart");
// let likes = document.getElementById("likes");

// likes.innerHTML = 0;

// img.addEventListener("dblclick", function (e) {
//   likes.innerHTML++;

//   // x axis of the whole page
//   let x = e.clientX;
//   // y axis of the whole page
//   let y = e.clientY;

//   let imgTop = img.offsetTop;
//   let imgLeft = img.offsetLeft;

//   let xInside = x - imgLeft;
//   let yInside = y - imgTop;

//   heart.classList.add("show");
//   heart.style.top = yInside + "px";
//   heart.style.left = xInside + "px";

//   setTimeout(() => {
//     heart.classList.remove("show");
//   }, 1000);
// });
