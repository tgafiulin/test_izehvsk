let defaultState = {
    openModal: false
}

const CLOSE_MODAL = 'CLOSE_MODAL';
const OPEN_MODAL = 'OPEN_MODAL';

const modalReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CLOSE_MODAL:
            return {...state, openModal: false}
        case OPEN_MODAL:
            return {...state, openModal: true}
        default:
            return state
    }
}

export const closeModal = () => ({type: CLOSE_MODAL});
export const openModal = () => ({type: OPEN_MODAL});

export default modalReducer;