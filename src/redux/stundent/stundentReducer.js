import { ADD_BOOK } from "./studnetTypes";

const initialState = {
    numofBooks: 45
}

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK: return {
            ...state,
            numofBooks: state.numofBooks + 1
        }
        default: return state
    }
}

export default studentReducer