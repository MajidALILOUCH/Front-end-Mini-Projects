// brad's code

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

// my code ####################

// let numbers = document.querySelectorAll(".counter");

// window.onload = function () {
//   numbers.forEach((number) => startCount(number));
// };

// function startCount(el) {
//   let goal = el.dataset.target;
//   let count = setInterval(() => {
//     el.textContent++;
//     if (el.textContent == goal) {
//       clearInterval(count);
//     }
//   }, 100 / goal);
// }

// my code fixed with chatgpt ####################

// let numbers = document.querySelectorAll(".counter");

// window.onload = function () {
//   numbers.forEach((number) => startCount(number));
// };

// function startCount(el) {
//   let goal = parseInt(el.dataset.target); // Parse the goal as an integer
//   let count = 0;
//   let increment = Math.ceil(goal / 100); // Calculate the increment based on the goal

//   let interval = setInterval(() => {
//     count += increment; // Increase the count by the increment
//     if (count >= goal) {
//       count = goal; // Set the count to the goal if it exceeds the goal
//       clearInterval(interval); // Clear the interval
//     }
//     el.textContent = count; // Update the element's text content
//   }, 10);
// }
