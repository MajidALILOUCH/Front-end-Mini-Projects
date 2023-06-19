const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEL = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

const ctx = canvas.getContext("2d");

let size = 10;
let isPressed = false;
colorEl.value = "black";
let color = colorEl.value;
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

document.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

function updateSizeOnScreen() {
  sizeEL.innerText = size;
}

increaseBtn.addEventListener("click", () => {
  size += 5;

  if (size > 50) {
    size = 50;
  }

  updateSizeOnScreen();
});

decreaseBtn.addEventListener("click", () => {
  size -= 5;

  if (size < 5) {
    size = 5;
  }

  updateSizeOnScreen();
});

colorEl.addEventListener("change", (e) => (color = e.target.value));

clearEl.addEventListener("click", () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
);

// my code

// const canvas = document.getElementById("canvas");
// const range = document.querySelector(".range");
// const menos = document.querySelector(".menos");
// const mas = document.querySelector(".mas");
// const color = document.getElementById("color");
// const clearButton = document.querySelector(".clear");

// const ctx = canvas.getContext("2d");

// let prevX = null;
// let prevY = null;
// let draw = false;

// canvas.addEventListener("mousedown", (e) => {
//   draw = true;
//   const canvasTop = canvas.offsetTop;
//   const canvasLeft = canvas.offsetLeft;
//   prevX = e.clientX - canvasLeft;
//   prevY = e.clientY - canvasTop;
// });

// canvas.addEventListener("mouseup", () => {
//   draw = false;
//   prevX = null;
//   prevY = null;
// });

// canvas.addEventListener("mousemove", (e) => {
//   if (!draw) return;

//   const canvasTop = canvas.offsetTop;
//   const canvasLeft = canvas.offsetLeft;
//   const currentX = e.clientX - canvasLeft;
//   const currentY = e.clientY - canvasTop;

//   ctx.beginPath();
//   ctx.moveTo(prevX, prevY);
//   ctx.lineTo(currentX, currentY);
//   ctx.stroke();

//   prevX = currentX;
//   prevY = currentY;
// });

// menos.addEventListener("click", function () {
//   const rangeValue = parseInt(range.innerHTML);
//   if (rangeValue > 5) {
//     range.innerHTML = rangeValue - 5;
//     ctx.lineWidth = range.innerHTML;
//   }
// });

// mas.addEventListener("click", function () {
//   const rangeValue = parseInt(range.innerHTML);
//   if (rangeValue < 50) {
//     range.innerHTML = rangeValue + 5;
//     ctx.lineWidth = range.innerHTML;
//   }
// });

// color.addEventListener("change", function () {
//   ctx.strokeStyle = color.value;
// });

// clearButton.addEventListener("click", () =>
//   ctx.clearRect(0, 0, canvas.width, canvas.height)
// );
