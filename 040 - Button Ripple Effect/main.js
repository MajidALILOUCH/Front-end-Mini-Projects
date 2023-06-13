const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    // x axis of the whole page
    const x = e.clientX;
    // y axis of the whole page
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    this.appendChild(circle);

    // to remove the element from the dom
    setTimeout(() => circle.remove(), 500);
  });
});

// my code

// const button = document.querySelector("button");

// button.addEventListener("click", function () {
//   button.classList.remove("clicked");
//   void button.offsetWidth;
//   button.classList.add("clicked");
// });
