const movieListEl = document.querySelector(".movie-list");
const val = document.querySelector("input").value;
let movies; // global variable

async function searchButton(event) {
  const val = document.querySelector("input").value;
  main(val);
}
async function search(event) {
  const val = document.querySelector("input").value;
  if (event.keyCode === 13) {
    main(val);
  }
}

async function main(val) {
  const moviesRes = await fetch(
    `https://www.omdbapi.com/?apikey=2fdec942&s='${val || "thor"}'`
  );
  movies = await moviesRes.json();

  movieListEl.innerHTML = movies.Search.map((movie) => movieHTML(movie)).join(
    ""
  );
}

function filterMovies(event) {
  const filter = event.target.value;

  if (filter === "OLD-NEW") {
    movies.Search.sort((a, b) => a.Year - b.Year);
  } else if (filter === "NEW-OLD") {
    movies.Search.sort((a, b) => b.Year - a.Year);
  }

  movieListEl.innerHTML = movies.Search.map((movie) => movieHTML(movie)).join(
    ""
  );
}

function movieHTML(movie) {
  return `<div class="movie-card">
    <div class="movie-card__container">
        <figure>
            <img src="${movie.Poster}" alt="" class='movie--img'>
        </figure>
        <h3 class="movie--name">${movie.Title}</h3>
        <p class="movie--release"><b>Release date: </b> ${movie.Year}</p>
    </div>
</div>`;
}

function openMenu() {
  document.body.classList += "menu--open";
}
function closeMenu() {
  document.body.classList.remove("menu--open");
}
