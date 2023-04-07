let panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.onclick = function () {
    // remove active class from all paneles
    removeActiveClasses();
    // add active class to the current one
    this.classList.add("active");
  };
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
