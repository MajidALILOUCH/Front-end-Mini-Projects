let toggler = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");

toggler.onclick = function () {
  nav.classList.add("open");
};

close.onclick = function () {
  this.parentElement.classList.remove("open");
};

// onkeyup "significa cuando le damos click a un button en el keyboard"
document.onkeyup = function (e) {
  // si le damos a Escape haz lo siguiente
  if (e.key === "Escape") {
    nav.classList.remove("open");
  }
};
