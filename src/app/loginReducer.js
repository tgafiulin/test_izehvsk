let defaultState = {
    login: sessionStorage.getItem('movie_login') || ''
}

const EDIT_LOGIN = 'EDIT_LOGIN';

const loginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case EDIT_LOGIN:
            sessionStorage.setItem('movie_login', action.payload)
            return {...state, login: action.payload}
        default:
            return state
    }
}

export const editLogin = (payload) => ({type: EDIT_LOGIN, payload});

export default loginReducer;