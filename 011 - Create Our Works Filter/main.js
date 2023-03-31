let switcherLis = document.querySelectorAll(".switcher li");
let imgs = document.querySelectorAll(".gallery img");

switcherLis.forEach(function (li) {
  li.onclick = function () {
    // remove active class from Lis
    switcherLis.forEach(function (li) {
      li.classList.remove("active");
    });
    // add active class to the current one
    this.classList.add("active");
    // manage imgs
    imgs.forEach(function (img) {
      img.style.display = "none";
    });
    // we used the "data-cat" of the current "li" to get the "images" that have the same "class"
    // and then we used "forEach" to style all of them
    document.querySelectorAll(this.dataset.cat).forEach((img) => {
      img.style.display = "block";
    });
  };
});

// second method #####################################################################

// switcherLis.forEach(function (li) {
//   li.addEventListener("click", removeActive);
//   li.addEventListener("click", manageImgs);
// });

// function removeActive() {
//   // remove active class from Lis
//   switcherLis.forEach(function (li) {
//     li.classList.remove("active");
//   });
//   // add active class to the current one
//   this.classList.add("active");
// }

// function manageImgs() {
//   imgs.forEach(function (img) {
//     img.style.display = "none";
//   });
//   // we used the "data-cat" of the current "li" to get the "images" that have the same "class"
//   // and then we used "forEach" to style all of them
//   document.querySelectorAll(this.dataset.cat).forEach((img) => {
//     img.style.display = "block";
//   });
// }
