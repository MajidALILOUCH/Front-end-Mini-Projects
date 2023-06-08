const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9e2203545f8e0e98770e66b128d03193&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=9e2203545f8e0e98770e66b128d03193&query="';

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
              <h3>${title}</h3>
              <span class="${getClassByRate(
                vote_average
              )}">${vote_average}</span>
            </div>
            <div class="overview">
              <h3>Overview</h3>
              ${overview}
        </div>
        `;
    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);

    search.value = "";
  } else {
    window.location.reload();
  }
});

// my code

// let content = document.querySelector(".content");
// const form = document.getElementById("form");
// const search = document.getElementById("search");

// // Function to fetch movies and display them
// function fetchAndDisplayMovies(url) {
//   fetch(url)
//     .then((result) => result.json())
//     .then((movies) => {
//       displayMovies(movies.results);
//     });
// }

// // Function to display movies on the page
// function displayMovies(movies) {
//   content.innerHTML = ""; // Clear previous movies

//   if (movies.length === 0) {
//     content.innerHTML = "<p>No movies found</p>";
//   } else {
//     movies.forEach((movie) => {
//       // Create movie holder
//       let movieDiv = document.createElement("div");
//       movieDiv.className = "movie";
//       // Create movie image holder
//       let imageHolder = document.createElement("div");
//       imageHolder.className = "movie-image";
//       // Create img
//       let img = document.createElement("img");
//       img.src = IMG_PATH + movie.poster_path;
//       // Put img on imageHolder
//       imageHolder.appendChild(img);
//       // Create movie info
//       let movieInfo = document.createElement("div");
//       movieInfo.className = "info";
//       // Create movie title
//       let title = document.createElement("h3");
//       title.className = "movie-title";
//       title.append(movie.original_title);
//       // Create movie rate
//       let rate = document.createElement("span");
//       rate.className = getClassByRate(movie.vote_average);
//       rate.append(movie.vote_average);
//       // Put title and rate on info
//       movieInfo.appendChild(title);
//       movieInfo.appendChild(rate);
//       // Create movie overview
//       let overview = document.createElement("div");
//       overview.className = "overview";
//       // Create overview title
//       let overviewTitle = document.createElement("h3");
//       overviewTitle.append("Overview");
//       // Create overview p
//       let overviewP = document.createElement("p");
//       overviewP.append(movie.overview);
//       // Put title and p on overview
//       overview.appendChild(overviewTitle);
//       overview.appendChild(overviewP);
//       // Put image, info, and overview on movieDiv
//       movieDiv.appendChild(imageHolder);
//       movieDiv.appendChild(movieInfo);
//       movieDiv.appendChild(overview);
//       // Put movieDiv on content
//       content.appendChild(movieDiv);
//     });
//   }
// }

// // Display initial movies from the API
// fetchAndDisplayMovies(API_URL);

// // Function to search movies by name
// function searchMovies(query) {
//   fetch(SEARCH_API + query)
//     .then((result) => result.json())
//     .then((movies) => {
//       displayMovies(movies.results);
//     });
// }

// // Event listener for the form submission
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const searchTerm = search.value.trim();

//   // Call the searchMovies function with the entered search term
//   if (searchTerm !== "") {
//     searchMovies(searchTerm);
//     search.value = ""; // Clear the search input field
//   }
// });

// function getClassByRate(vote) {
//   if (vote >= 8) {
//     return "green";
//   } else if (vote >= 5) {
//     return "orange";
//   } else {
//     return "red";
//   }
// }
