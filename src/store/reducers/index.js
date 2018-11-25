import { combineReducers } from 'redux';
import errors from './errors';
import movies from './movies';
import modal from './modal';


const rootReducer = combineReducers({
    errors,
    movies,
    modal
});

export default rootReducer;