const movieListEl = document.querySelector('.movie-list')
const val = document.querySelector('input').value


async function searchButton(event){
    const val = document.querySelector('input').value
    main(val)
}
async function search(event) {
    const val = document.querySelector('input').value
    if (event.keyCode === 13) {
        main(val)
    }
}

async function main(val){
    let movies = await fetch(`https://www.omdbapi.com/?apikey=2fdec942&s='${val || 'thor'}'`)
    const movieData = await movies.json()

    console.log(movieData)

    movieListEl.innerHTML = movieData.Search.map((movie) => movieHTML(movie)).join('')

}

main()

function filterMovies(event){
    main(event.target.value)
}

function movieHTML(movie){
    return `<div class="movie-card">
    <div class="movie-card__container">
        <figure>
            <img src="${movie.Poster}" alt="" class='movie--img'>
        </figure>
        <h3 class="movie--name">${movie.Title}</h3>
        <p class="movie--release"><b>Release date: </b> ${movie.Year}</p>
    </div>
</div>`
}

