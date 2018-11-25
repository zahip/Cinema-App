export const apiCall = async (path) => {
    const response  = await fetch(path);
    const data = await response.json();
    return data;
}

const getDetails = async (path) => {
    const data = await apiCall(path);
    const {runtime, genres} = data;
    return {runtime, genres}
}


const getDirector = async (path) => {
    const data = await apiCall(path);
    const director = data.crew[0].name;
    return director;
}

const getYear = (release_date) => {
    const year = release_date.slice(0,4);
    return year;
}

export const buildMovieObject = async (movie) => {
    const {id, title, poster_path, release_date} = movie;
                const details = await getDetails(`https://api.themoviedb.org/3/movie/${id}?api_key=8dbba6937f575d84030716255ce61452&language=en-US`);
                const director = await getDirector(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=8dbba6937f575d84030716255ce61452`);
                const year = getYear(release_date);

                let movie_object =  {
                    id,
                    title,
                    poster_path: `http://image.tmdb.org/t/p/w185${poster_path}`,
                    year,
                    runtime: details.runtime,
                    genre: details.genres[0].name,
                    director
                }
                return movie_object;
}