const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const replay = document.querySelector("#replay");

runAnimation();

function resetDOM() {
  counter.classList.remove("hide");
  finalMessage.classList.remove("show");

  nums.forEach((num) => {
    num.classList.value = "";
  });

  nums[0].classList.add("in");
}

function runAnimation() {
  nums.forEach((num, idx) => {
    const nextToLast = nums.length - 1;

    num.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn" && idx !== nextToLast) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "goOut" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        finalMessage.classList.add("show");
      }
    });
  });
}

replay.addEventListener("click", () => {
  resetDOM();
  runAnimation();
});

// my code

// let replay = document.getElementById("replay");
// let counter = document.querySelector(".counter");
// let final = document.querySelector(".final");
// let nums = document.querySelectorAll(".nums span");

// replay.addEventListener("click", () => {
//   showCount();
//   startCount();
// });

// function showCount() {
//   counter.classList.toggle("hidden");
//   final.classList.toggle("hidden");
// }

// function startCount() {
//   let index = 0;
//   let count = setInterval(() => {
//     index++;

//     nums.forEach((num) => {
//       num.classList.remove("in");
//     });

//     nums[index].classList.add("in");

//     if (index == nums.length - 1) {
//       clearTimeout(count);
//     }
//   }, 1000);
// }
