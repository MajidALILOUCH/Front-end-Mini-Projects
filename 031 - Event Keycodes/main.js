const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  insert.innerHTML = `
  <div class="key">
  ${event.key === " " ? "Space" : event.key} 
  <small>event.key</small>
  </div>
  <div class="key">
  ${event.keyCode}
  <small>event.keyCode</small>
  </div>
  <div class="key">
  ${event.code}
  <small>event.code</small>
  </div>
  `;
});

// ############### my solution #####################

// let insert = document.getElementById("insert");

// function createDiv(keyName, keyValue) {
//   let KeyDiv = document.createElement("div");
//   KeyDiv.className = "key";
//   let key = document.createElement("small");
//   key.append(keyName);

//   KeyDiv.append(keyValue);
//   KeyDiv.appendChild(key);

//   insert.appendChild(KeyDiv);
// }

// document.onkeyup = function (e) {
//   insert.innerHTML = "";

//   createDiv("event.key", e.key);
//   createDiv("event.keyCode", e.keyCode);
//   createDiv("event.Code", e.code);
// };
