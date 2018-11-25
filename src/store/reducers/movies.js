import { LOAD_MOVIES, ADD_NEW_MOVIE, DELETE_MOVIE, EDIT_MOVIE} from '../actionsTypes';

const movies = (state = [], action) => {
    switch(action.type) {
        case LOAD_MOVIES:
            return [...action.movies];
        case ADD_NEW_MOVIE:
            return [action.new_movie, ...state];
        case DELETE_MOVIE:
            return [...state.filter(movie => movie.id !== action.id)];
        case EDIT_MOVIE:
            return [...state.map(movie=> movie.id === action.movie_data.id ? action.movie_data : movie)]
        default:
            return state;
    }
}

export default movies;