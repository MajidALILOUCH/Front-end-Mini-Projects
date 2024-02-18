const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => doTheTrick(e.target))
);

function doTheTrick(theClickedOne) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClickedOne) {
      fast.checked = false;
    }

    if (cheap === theClickedOne) {
      good.checked = false;
    }

    if (fast === theClickedOne) {
      cheap.checked = false;
    }
  }
}

// my code with the help of chatgpt

// const buttons = document.querySelectorAll("button");
// let activeButtons = [];

// console.log(activeButtons);

// buttons.forEach((button) => {
//   button.addEventListener("click", function () {
//     if (button.classList.contains("active")) {
//       // If the clicked button is already active, remove the active class and return
//       button.classList.remove("active");
//       activeButtons = activeButtons.filter((btn) => btn !== button);
//       console.log(activeButtons);
//     } else {
//       // If the customer has already chosen two characteristics, remove active class from the first one
//       if (activeButtons.length >= 2) {
//         const removedButton = activeButtons.shift();
//         console.log(activeButtons);
//         removedButton.classList.remove("active");
//       }

//       // Add active class to the clicked button
//       button.classList.add("active");
//       activeButtons.push(button);
//       console.log(activeButtons);
//     }
//   });
// });
