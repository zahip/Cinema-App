import { ADD_ERROR, REMOVE_ERROR } from '../actionsTypes';

export default (state = { errorMessage: ""}, action) => {
    switch(action.type) {
        case ADD_ERROR:
      return Object.assign({}, state, {errorMessage: action.error});
        case REMOVE_ERROR:
            return { ...state, errorMessage: ""}
        default:
            return state;
    }
}