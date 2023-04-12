let container = document.querySelector(".container");
let play = document.querySelector(".left");
let xbox = document.querySelector(".right");

play.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);
play.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);

xbox.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);
xbox.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);
