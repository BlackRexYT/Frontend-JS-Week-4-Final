// http://www.omdbapi.com/?apikey=2fdec942&
// http://img.omdbapi.com/?apikey=2fdec942&

async function main(){
    let search 
    const movies = await fetch(`https://www.omdbapi.com/?apikey=2fdec942&s=avengers`)
    const movieData = await movies.json()
    const movieListEl = document.querySelector('.movie-list')

    console.log(movieData)
    
    movieListEl.innerHTML = movieData.Search.map((movie) => movieHTML(movie)).join('')
}

main()

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