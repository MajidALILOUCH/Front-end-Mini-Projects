let arr = [
  "majid",
  "messi",
  "ronaldo",
  "reda",
  "tawfik",
  "maachou",
  "neymar",
  "btata",
  "bambo",
];

let elementsDiv = document.querySelector(".elements");
let randomElement = document.querySelector(".random-element");
let button = document.querySelector("button");

for (let i = 0; i < arr.length; i++) {
  let span = document.createElement("span");
  span.appendChild(document.createTextNode(arr[i]));
  elementsDiv.appendChild(span);
}

button.onclick = function () {
  let randomWord = arr[Math.trunc(Math.random() * arr.length)];
  randomElement.innerHTML = randomWord;
};
