// select the start game button
document.querySelector(".control-buttons span").onclick = function () {
  // prompt window to ask for name
  let yourName = prompt("What is your name");
  // if name is empty
  if (yourName == null || yourName == "") {
    // set name to unkown
    document.querySelector(".name span").innerHTML = "Unkown";
    // if name is not empty
  } else {
    // set name to your name
    document.querySelector(".name span").innerHTML = yourName;
  }
  // remove splash screen
  document.querySelector(".control-buttons").remove();
};

let duration = 1000;

let blocksContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blocksContainer.children);

let orderRange = [...Array(blocks.length).keys()];
