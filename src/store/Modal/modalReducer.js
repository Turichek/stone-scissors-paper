import { OPEN_CLOSE_MODAL } from "./constants";

const defaulteState = {
    open: false,
}

export const modalReducer = (state = defaulteState, action) => {
    switch (action.type) {
        case OPEN_CLOSE_MODAL:
            return { ...state, open: action.payload}

        default:
            return state;
    }
}