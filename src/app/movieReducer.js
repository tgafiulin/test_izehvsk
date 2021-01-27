let defaultState = {
    searchValue: '',
}

const UPDATE_SEARCH_VALUE = 'UPDATE_SEARCH_VALUE';

const movieReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_VALUE:
            return {...state, searchValue: action.payload}
        default:
            return state
    }
}

export const updateSearchValue = (payload) => ({type: UPDATE_SEARCH_VALUE, payload});

export default movieReducer;