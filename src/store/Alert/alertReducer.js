import { OPEN_CLOSE_ALERT } from "./constants";

const defaulteState = {
    open: false,
    text: '',
    severity: 'info',
}

export const alertReducer = (state = defaulteState, action) => {
    switch (action.type) {
        case OPEN_CLOSE_ALERT:
            return { ...state, ...action.payload}

        default:
            return state;
    }
}


