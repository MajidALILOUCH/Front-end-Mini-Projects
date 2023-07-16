const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);

    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard("No profile with this username");
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");

    addReposToCard(data);
  } catch (err) {
    createErrorCard("Problem fetching repos");
  }
}

function createUserCard(user) {
  const userID = user.name || user.login;
  const userBio = user.bio ? `<p>${user.bio}</p>` : "";
  const cardHTML = `
    <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${userID}</h2>
      ${userBio}
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
    `;
  main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
  const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `;

  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");

  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});

// my code

// const API_URL = "https://api.github.com/users/majidalilouch/repos";

// const main = document.getElementById("main");
// const form = document.getElementById("form");
// const search = document.getElementById("search");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   search.value = "";

//   getRepos(API_URL);
// });

// async function getRepos(url) {
//   const res = await fetch(url);
//   const data = await res.json();

//   putReposOnMain(data);
// }

// function putReposOnMain(repos) {
//   main.innerHTML = `
//       <div class="profile">
//         <img src="/2022_05_02_10_34_IMG_1337.JPG" alt="" />
//         <div class="content">
//           <h2 class="user-name">Majid Alilouch</h2>
//           <span class="title">Front-end Developer</span>
//           <div class="info">
//             <div><span>0</span> Followers</div>
//             <div><span>4</span> Following</div>
//             <div><span>13</span> Repos</div>
//           </div>
//           <div class="repos">
//           <a href="${repos[0].html_url}" target="_blank">${repos[0].name}</a>
//           <a href="${repos[1].html_url}" target="_blank">${repos[1].name}</a>
//           <a href="${repos[2].html_url}" target="_blank">${repos[2].name}</a>
//           <a href="${repos[3].html_url}" target="_blank">${repos[3].name}</a>
//           <a href="${repos[4].html_url}" target="_blank">${repos[4].name}</a>
//           </div>
//       </div>
//     </div>
//   `;
// }
