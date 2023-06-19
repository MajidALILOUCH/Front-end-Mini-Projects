const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />';
  title.innerHTML = "Lorem ipsum dolor sit amet";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
  name.innerHTML = "John Doe";
  date.innerHTML = "Oct 08, 2020";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}

// second method ##########################################################

// let card = document.querySelector(".card");

// setTimeout(showImg, 3000);

// function showImg() {
//   card.innerHTML = `<div class="card-header" id="header">
//   <img src="https://images.unsplash.com/photo-1501163268664-3fdf329d019f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="">
//   </div>

//   <div class="card-content">

//     <h3 class="card-title" id="title">
//     Lorem ipsum dolor sit amet
//     </h3>

//     <p class="card-excerpt" id="excerpt">
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
//     perferendis
//     </p>

//     <div class="author">

//       <div class="profile-img  id="profile_img"> <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt=""></div>

//       <div class="author-info">
//         <strong  id="name"
//           >John Doe</strong
//         >
//         <small id="date">Oct 08, 2020</small>
//       </div>

//     </div>

//   </div>`;
// }

// my code ##########################################################

// let imageHolder = document.querySelector(".image-holder");

// setTimeout(showImg, 3000);

// function showImg() {
//   imageHolder.innerHTML = `<img
//   src="https://images.unsplash.com/photo-1501163268664-3fdf329d019f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
//   alt=""
// />`;
// }
