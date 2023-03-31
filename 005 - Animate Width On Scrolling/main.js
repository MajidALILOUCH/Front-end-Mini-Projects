let section = document.querySelector(".two");
let spans = document.querySelectorAll(".progress span");

window.onscroll = function () {
  // offsetTop => es la parte superior del (section)
  if (window.scrollY >= section.offsetTop - 300) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
