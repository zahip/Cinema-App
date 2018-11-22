import { LOAD_MOVIES, LOAD_GENRES , LOAD_CREW} from '../actionsTypes';

const initalState = {
    movies: [],
    genres: [],
    crew: []
};

const movies = (state = initalState, action) => {
    switch(action.type) {
        case LOAD_MOVIES:
            return Object.assign({}, state, { movies: [...action.movies] });
        case LOAD_GENRES:
            return Object.assign({}, state, { genres: [...action.genres] });
        case LOAD_CREW:
            return Object.assign({}, state, { crew: [...action.crew] });
        default:
            return state;
    }
}

export default movies;