import { SET_ID, SET_POINT_COMPUTER, SET_POINT_HUMAN, SET_WINNER, SET_POINT_FOR_WIN, SET_DIFFICUTLY_LEVEL, SET_START, UPDATE_GAME } from "./constants"

const defaulteState = {
    id: Date.now(),
    difficultyLevel: '',
    pointForWin: 0,
    pointComputer: 0,
    pointUser: 0,
    isStart: false,
    winner: '',
}

export const gameReducer = (state = defaulteState, action) => {
    switch (action.type) {
        case SET_ID:
            return { ...state, id: action.payload }

        case SET_POINT_COMPUTER:
            return { ...state, pointComputer: action.payload }

        case SET_POINT_HUMAN:
            return { ...state, pointUser: action.payload }

        case SET_WINNER:
            return { ...state, winner: action.payload }

        case SET_POINT_FOR_WIN:
            return { ...state, pointForWin: action.payload }

        case SET_DIFFICUTLY_LEVEL:
            return { ...state, difficultyLevel: action.payload }

        case SET_START:
            return { ...state, isStart: action.payload }

        case UPDATE_GAME:{
                return { ...state, ...defaulteState }
            }

        default:
            return state;
    }
}
