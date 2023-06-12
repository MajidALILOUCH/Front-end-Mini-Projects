const button = document.querySelector("button");

button.addEventListener("click", function () {
  button.classList.remove("clicked");
  void button.offsetWidth;
  button.classList.add("clicked");
});
