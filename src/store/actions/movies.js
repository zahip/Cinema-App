import { apiCall, buildMovieObject } from '../../services/api';
import { LOAD_MOVIES, ADD_NEW_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from '../actionsTypes';
import { addError, removeError } from '../actions/errors';
import { format } from '../../services/validation';
import { handleModal } from './modal';

export const loadMovies = movies => ({
    type: LOAD_MOVIES,
    movies
})


export const newMovie = new_movie => ({
    type: ADD_NEW_MOVIE,
    new_movie
})

export const delete_action = id => ({
    type: DELETE_MOVIE,
    id
})

export const edit_action = (movie_data) => ({
    type: EDIT_MOVIE,
    movie_data
})

export const deleteMovie = id => {
        return delete_action(id);
}

export const editMovie = (movie_data) => {
    let { title } = movie_data;
    title = format(title);
    movie_data["title"] = title;
    return edit_action(movie_data);
}

export const fetchMovies = (path) => {
    return async dispatch => {
        try {
            let data = await apiCall(path);
            let movies_array = await data.results.map(async movie => {
                let array_object = buildMovieObject(movie);
                return array_object
            })
            const movies = await Promise.all(movies_array);
            dispatch(loadMovies(movies))
        } catch (error) {
            dispatch(addError("Please try again later, there is problem with the server"));
        }
     }
}

export const addNewMovie = (movie_name) => async dispatch => {
    movie_name = format(movie_name);
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8dbba6937f575d84030716255ce61452&query=${movie_name}`);
        const data = await response.json();
        let new_movie = data.results[0];
        const movie_object = await buildMovieObject(new_movie);
        dispatch(removeError());
        dispatch(handleModal({isOpen: "close"}));
        dispatch(newMovie(movie_object));
    } catch (error) {
        dispatch(addError("this movie is not exist"));
    }
}