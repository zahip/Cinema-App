import { TOGGLE_MODAL } from '../actionsTypes';
// export const loadModal = modal => ({
//     type: LOAD_MODAL,
//     modal
// })

export const actionModal = (data) => ({
    type: TOGGLE_MODAL,
    data
})


export const handleModal = (modal_data) => {
    return dispatch => {
        try {
            let is_open;
            modal_data.isOpen === "open" ? is_open = true : is_open = false;
            modal_data["isOpen"] = is_open;
            dispatch(actionModal(modal_data));
        } catch (error) {
            console.log(error);
        }
    }
}
