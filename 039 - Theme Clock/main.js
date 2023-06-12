const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light mode";
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours >= 13 ? hours % 12 : hours;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    12,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    60,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    60,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();

setInterval(setTime, 1000);

// my code

// let toggle = document.getElementById("toggle");

// let hoursIndi = document.querySelector(".hours-indi");
// let minutesIndi = document.querySelector(".minutes-indi");
// let secondsIndi = document.querySelector(".seconds-indi");

// var weekdays = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// var months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// toggle.addEventListener("click", function () {
//   document.documentElement.classList.toggle("dark");
// });

// let counter = setInterval(() => {
//   // Get Date Now
//   let dateNow = new Date();

//   let hours = dateNow.getHours() % 12 || 12;
//   let minutes = dateNow.getMinutes();
//   let seconds = dateNow.getSeconds();

//   document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
//   document.querySelector(".minutes").innerHTML =
//     minutes < 10 ? `0${minutes}` : minutes;
//   document.querySelector(".seconds").innerHTML =
//     seconds < 10 ? `0${seconds}` : seconds;

//   document.querySelector(".day").innerHTML = weekdays[dateNow.getDay()];
//   document.querySelector(".month").innerHTML = months[dateNow.getMonth()];
//   document.querySelector(".month-day").innerHTML = dateNow.getDate();

//   // Calculate rotation angles for clock hands
//   let hourRotation = 30 * (hours % 12) + minutes / 2; // 30 degrees per hour, 0.5 degrees per minute
//   let minuteRotation = 6 * minutes + seconds / 10; // 6 degrees per minute, 0.1 degrees per second
//   let secondRotation = 6 * seconds; // 6 degrees per second

//   // Apply rotation to clock hands
//   hoursIndi.style.transform = `rotate(${hourRotation}deg)`;
//   minutesIndi.style.transform = `rotate(${minuteRotation}deg)`;
//   secondsIndi.style.transform = `rotate(${secondRotation}deg)`;
// }, 1000);
