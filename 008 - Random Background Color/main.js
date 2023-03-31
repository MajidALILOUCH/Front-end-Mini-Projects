let color = document.querySelector("span");
let button = document.querySelector("button");

// Default background color
color.innerHTML = "#35769B";
document.body.style.cssText = `background-color: #35769B`;

button.onclick = function () {
  let randomColor = getColor();
  color.innerHTML = randomColor;
  document.body.style.cssText = `background-color: ${randomColor}`;
};

function getColor() {
  let hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; // this what i need to make a hex color.
  let colorParts = []; // i will give this array 6 random element from the above array to make a color.

  for (let i = 0; i < 6; i++) {
    colorParts.push(hexArr[Math.floor(Math.random() * hexArr.length)]);
  }

  return `#${colorParts.join("")}`;
}
