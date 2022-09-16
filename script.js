async function main(){
    const movies = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=eda829471e8cc844d3636639f05ece98&language=en-US&page=1')
    const moviesData = await movies.json()
    const movieData = Object.values(moviesData)
    const movieListEl = document.querySelector('.movie-list')

    console.log(movieData)
    
    movieListEl.innerHTML = movieData.map((movie) => movieHTML(movie)).join('')
}

main()
function movieHTML(movie){
    return `<div class="movie-card">
    <div class="movie-card__container">
        <figure>
            <img src="${movie.poster_path}" alt="">
        </figure>
        <h3>${movie.title}</h3>
        <p><b>Rating: </b> ${movie.vote_average}</p>
        <p><b>Popularity: </b> ${movie.popularity}</p>
        <p>${movie.overview}</p>
    </div>
</div>`
}