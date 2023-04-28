const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    randomSelect();
  }
});

function createTags(input) {
  // tags contains an array of the values that we enter on textArea
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsEl.innerHTML = "";

  // we loop through the tags an create a span for such tag and put it on the tagsEl
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerHTML = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    // highlightTag a random tag
    highlightTag(randomTag);

    // wait 100ms and unhighlight the random tag
    setTimeout(() => {
      unhighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unhighlightTag(tag) {
  tag.classList.remove("highlight");
}

//  my code [not completed] ########################3

// let textArea = document.querySelector("textarea");
// let tags = document.getElementById("tags");

// textArea.addEventListener("input", function () {
//   updateOutput();
// });

// function updateOutput() {
//   const value = textArea.value.trim();
//   if (value !== "") {
//     const values = value.split(",");
//     tags.innerHTML = "";
//     values.forEach((item) => {
//       const span = document.createElement("span");
//       span.className = "tag";
//       span.textContent = item.trim();
//       tags.appendChild(span);
//     });
//   } else {
//     tags.innerHTML = "";
//   }
// }

// // Add event listener to the tags container to listen for the enter key
// textArea.addEventListener("keyup", function (event) {
//   if (event.key === "Enter") {
//     const tagElements = document.querySelectorAll(".tag");
//     const randomIndex = Math.floor(Math.random() * tagElements.length);
//     const randomTag = tagElements[randomIndex];
//     randomTag.classList.add("highlight");
//   }
// });
