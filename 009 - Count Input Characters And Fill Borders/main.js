let div = document.querySelector("div");
let input = document.querySelector("input");
let count = document.querySelector(".count");
let progress = document.querySelector(".progress");
let maxLength = input.getAttribute("maxlength");

count.innerHTML = maxLength;

input.oninput = function () {
  count.innerHTML = maxLength - this.value.length;
  count.innerHTML == 0
    ? count.classList.add("zero")
    : count.classList.remove("zero");
  // Set The progress
  progress.style.width = `${(input.value.length * 100) / maxLength}%`;
  progress.style.width == "100%"
    ? progress.classList.add("filled")
    : progress.classList.remove("filled");
};
