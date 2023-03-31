let btnEl = document.querySelector(".generate");
let serialEl = document.querySelector(".serial");

btnEl.onclick = function () {
  let characters = "1234567890abcdefghijklmnopqrstuvwyz";
  let charsCount = 10;
  let serial = "";
  for (let i = 0; i < charsCount; i++) {
    serial += characters[Math.floor(Math.random() * characters.length)];
  }
  serialEl.innerHTML = serial;
};
