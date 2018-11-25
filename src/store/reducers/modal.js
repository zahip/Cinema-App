import { TOGGLE_MODAL } from '../actionsTypes';

const initalState = {
    isOpen: false,
    type: ""
}

const modal = (state = initalState, action) => {
    switch(action.type) {
        case TOGGLE_MODAL:
        return Object.assign({}, state, { isOpen: action.data.isOpen, type: action.data.type });
        default:
            return state;
    }
}

export default modal;