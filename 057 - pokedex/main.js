let container = document.querySelector(".container");

fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((result) => {
  let data = result.json();
  console.log(data);
});
