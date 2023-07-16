const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "We Love Programming!";
let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));

// my code

// let text = document.getElementById("text");
// let speed = document.getElementById("speed");

// let textSpeed = {
//   1: 300,
//   2: 250,
//   3: 200,
//   4: 150,
//   5: 100,
//   6: 50,
//   7: 25,
//   8: 15,
//   9: 10,
//   10: 5,
// };

// let autoTextSpeed = textSpeed[speed.value];

// speed.onchange = function () {
//   autoTextSpeed = textSpeed[speed.value];
// };

// let sentence = "We Love Programming!";
// let arrFromSentence = sentence.split("");

// function animateText() {
//   let index = 0;

//   let addLetters = setInterval(() => {
//     text.innerHTML += arrFromSentence[index];
//     index += 1;

//     if (text.innerHTML === sentence) {
//       clearInterval(addLetters);
//       setTimeout(() => {
//         // Delay before clearing the text
//         let removeLetters = setInterval(() => {
//           text.innerHTML = text.innerHTML.slice(0, -1);

//           if (text.innerHTML === "") {
//             clearInterval(removeLetters);
//             animateText(); // Repeat the animation
//           }
//         }, autoTextSpeed);
//       }, 1000); // Delay before starting the next animation
//     }
//   }, autoTextSpeed);
// }

// animateText();
