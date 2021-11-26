import { SET_CARDUSER, SET_CARDCOMPUTER, SET_NEXTROUND } from "./constants"

const defaulteState = {
    cardUser: '',
    cardComputer: '',
}

export const roundReducer = (state = defaulteState, action) => {
    switch (action.type) {
        case SET_CARDUSER:
            return { ...state, cardUser: action.payload }

        case SET_CARDCOMPUTER:
            return { ...state, cardComputer: action.payload }

        case SET_NEXTROUND:
            return { ...state, ...action.payload }

        default:
            return state;
    }
}
