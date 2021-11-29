import { ADD_ELEM, UPDATE_ARR, UPDATE_ELEM, REMOVE_ELEM } from "./constants"
import { getFromLocalStorage } from "../../components/helpers/toLocalStorage"

const defaulteState = {
    data: getFromLocalStorage('history') || [],
}

export const historyReducer = (state = defaulteState, action) => {
    switch (action.type) {
        case ADD_ELEM:
            return { ...state, data: [...state.data, action.payload] }

        case UPDATE_ARR:
            return { ...state, data: action.payload }

        case UPDATE_ELEM:
            return {
                ...state, data: state.data.filter(elem => {
                    if (elem.id === action.payload.id) {
                        elem = action.payload
                    }
                    return state.data;
                })
            }

        case REMOVE_ELEM:
            return { ...state, data: state.data.filter(elem => elem.id !== action.payload) }

        default:
            return state;
    }
}
