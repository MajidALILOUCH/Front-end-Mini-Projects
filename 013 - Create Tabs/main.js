// 1 - loop on lis and add active class to the current one
// 2 - loop on content divs and show the one that has the same class as the current li

let tabs = document.querySelectorAll(".tabs li");
let divs = document.querySelectorAll(".content > div");

console.log(tabs);
console.log(divs);

tabs.forEach((li) => {
  li.addEventListener("click", function (e) {
    // remove the active class from the tabs
    tabs.forEach((li) => {
      li.classList.remove("active");
    });
    // add the active class to the current tab
    e.currentTarget.classList.add("active");
    // display none to all the divs
    divs.forEach((div) => {
      div.style.display = "none";
    });
    // display block to the div that have the same class as the current tab data-cont
    document.querySelector(e.currentTarget.dataset.cont).style.display =
      "block";
  });
});
