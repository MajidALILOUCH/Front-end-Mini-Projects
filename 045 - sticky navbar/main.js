const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

// my code

// const header = document.getElementById("header");

// let prevScrollPos = window.pageYOffset;
// console.log(prevScrollPos);
// const scrollThreshold = 10;

// window.addEventListener("scroll", () => {
//   const currentScrollPos = window.pageYOffset;
//   console.log(currentScrollPos);

//   if (
//     prevScrollPos > currentScrollPos &&
//     prevScrollPos - currentScrollPos > scrollThreshold
//   ) {
//     // Scrolling up
//     header.classList.remove("scrolled");
//   } else if (
//     prevScrollPos < currentScrollPos &&
//     currentScrollPos - prevScrollPos > scrollThreshold
//   ) {
//     // Scrolling down
//     header.classList.add("scrolled");
//   }

//   if (currentScrollPos === 0) {
//     // At the top of the page
//     header.classList.remove("scrolled");
//   }

//   prevScrollPos = currentScrollPos;
// });
