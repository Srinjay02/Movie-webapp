function getMovie() {

    const API_key = "113befe3"

    const movieName = document.getElementById('movieName').value
    
    if (!movieName) {
        alert("Enter a movie name")
    }
    
    const MOVIE_URL = `http://www.omdbapi.com/?apikey=${API_key}&t=${movieName}`
    
    
    fetch(MOVIE_URL)
    .then(response => response.json())
    .then(data => {
            displayMovie(data);
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching movie data:', error);
            alert('Error fetching movie data. Please try again.');
        });
    }
    
    function displayMovie(data) {
    const movieName = document.getElementById('movieName').value
    const moviePoster = document.getElementById('moviePoster')
    const movieTye = document.getElementById('movieType')
    const movieCountry = document.getElementById('movieCountry')
    const movieBoxoffice = document.getElementById('movieBox')
    const movieGenre = document.getElementById('movieGenre')
    const movieRuntime = document.getElementById('movieRuntime')
    const moviePlot = document.getElementById('moviePlot')
    const movieAwards = document.getElementById('movieAwards')
    const movieRelease = document.getElementById('movieRelease')
    const movieRating = document.getElementById('movieRating')
    const movieActors = document.getElementById('movieActors')
    const movieWriters = document.getElementById('movieWriters')
    const movieDirectors = document.getElementById('movieDirectors')
    const searchReq = document.getElementById('searchReq')
    const movieHeader = document.getElementById('movieHeader')

    moviePoster.innerHTML = ''
    movieTye.innerHTML = ''
    movieCountry.innerHTML = ''
    movieBoxoffice.innerHTML = ''
    movieGenre.innerHTML = ''
    movieRuntime.innerHTML = ''
    moviePlot.innerHTML = ''
    movieAwards.innerHTML = ''
    movieRelease.innerHTML = ''
    movieRating.innerHTML = ''
    movieActors.innerHTML = ''
    movieWriters.innerHTML = ''
    movieDirectors.innerHTML = ''
    searchReq.innerHTML = ''
    
    
    const poster = data.Poster
    const type = data.Type
    const country = data.Country
    const box = data.BoxOffice
    const genre = data.Genre
    const run = data.Runtime
    const plot = data.Plot
    const award = data.Awards
    const release = data.Released
    const rating = data.imdbRating
    const actor = data.Actors
    const writer = data.Writer
    const director = data.Director
    
    const posterHTML = `<img src=${poster}>`
    const typeHTML = `<p>Type : ${type}</p>`
    const countryHTML = `<p>Country : ${country}</p>`
    const boxHTML = `<p>Box Office : ${box}</p>`
    const genreHTML = `<p>Genre : ${genre}</p>`
    const runHTML = `<p>Run time : ${run}</p>`
    const plotHTML = `<p>Overview : ${plot}</p>`
    const awardHTML = `<p>Awards : ${award}</p>`
    const releaseHTML = `<p>Release Date : ${release}</p>`
    const ratingHTML = `<p>IMDb rating : ${rating}</p>`
    const actorHTML = `<p>Major Casts : ${actor}</p>`
    const writerHTML = `<p>Writer : ${writer}</p>`
    const directorHTML = `<p>Director : ${director}</p>`
    
    
    moviePoster.innerHTML = posterHTML
    movieTye.innerHTML = typeHTML
    movieCountry.innerHTML = countryHTML
    movieBoxoffice.innerHTML = boxHTML
    movieGenre.innerHTML = genreHTML
    movieRuntime.innerHTML = runHTML
    moviePlot.innerHTML = plotHTML
    movieAwards.innerHTML = awardHTML
    movieRelease.innerHTML = releaseHTML
    movieRating.innerHTML = ratingHTML
    movieActors.innerHTML = actorHTML
    movieWriters.innerHTML = writerHTML
    movieDirectors.innerHTML = directorHTML
    movieHeader.innerHTML = `Your search result for ${movieName}`
}

function getMovieTrailer() {
    const apiKey = 'AIzaSyBQhdxRfWabzMHLXAXlXc7HBvGfVDLqIQY'
    const movieName = document.getElementById('movieName').value
    
    const query = `${movieName} official trailer`
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&key=${apiKey}&maxResults=1&type=video`;
    
    fetch(url)
    .then(response => response.json())
    .then(trailerData => {
        showMovieTrailer(trailerData);
        console.log(trailerData);
    })
    .catch(error => {
        console.error('Error fetching movie data:', error);
        alert('Error fetching movie data. Please try again.');
    });
}

function showMovieTrailer(trailerData) {
    const movieTrailer = document.getElementById('movieTrailer');
    movieTrailer.innerHTML = '';

    const trailer = trailerData.items[0].id.videoId;

    const trailerHTML = `<p>Trailer : <a href="https://www.youtube.com/embed/${trailer}" target="_blank">Click on this to Watch Trailer</a></p>`;
    
    movieTrailer.innerHTML = trailerHTML;
}
