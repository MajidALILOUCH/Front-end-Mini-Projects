let imgs = document.querySelectorAll(".content");
let lis = document.querySelectorAll("ul li");

lis.forEach((li, index) => {
  li.addEventListener("click", function (e) {
    // remove the active class from the li
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    // add the active class to the current li
    e.currentTarget.classList.add("active");
    // hide all the images
    imgs.forEach((img) => {
      img.classList.remove("show");
    });
    // show the image that has the same index as the current li
    imgs[index].classList.add("show");
  });
});
