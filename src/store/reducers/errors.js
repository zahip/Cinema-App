import { ADD_ERROR, REMOVE_ERROR } from '../actionsTypes';

export default (state = { errorMessage: null}, action) => {
    switch(action.type) {
        case ADD_ERROR:
            return { ...state, errorMessage: action.error };
        case REMOVE_ERROR:
            return { ...state, errorMessage: null}
        default:
            return state;
    }
}