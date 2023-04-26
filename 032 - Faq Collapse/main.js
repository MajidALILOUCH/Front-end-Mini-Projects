const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

// my solution

// let buttons = document.querySelectorAll(".faq button");

// buttons.forEach((button) => {
//   button.onclick = function () {
//     this.parentElement.classList.toggle("active");
//   };
// });
