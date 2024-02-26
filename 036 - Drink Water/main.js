let remainedLiters = document.querySelector(".liters-remained div span");
let fill = document.querySelector(".fill");
let litersRemained = document.querySelector(".liters-remained");
let glasses = document.querySelectorAll(".glass");

let fillHeight = 0;

glasses.forEach((glass) => {
  glass.addEventListener("click", function () {
    glass.style.background = "var(--fill-color)";
    fillHeight += 12.5;
    litersRemained.style.height = `calc(100% - ${fillHeight}%) `;
    fill.style.height = `${fillHeight}%`;
    parseInt(remainedLiters.innerHtml) - 1;
  });
});
