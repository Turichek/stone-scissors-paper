import { SET_ID, SET_POINT_COMPUTER, SET_POINT_HUMAN, SET_WINNER, SET_POINT_FOR_WIN, SET_DIFFICUTLY_LEVEL, SET_START, UPDATE_GAME } from "./constants"

export const setIdAction = (payload) => ({ type: SET_ID, payload });
export const setPointComputerAction = (payload) => ({ type: SET_POINT_COMPUTER, payload });
export const setPointUserAction = (payload) => ({ type: SET_POINT_HUMAN, payload });
export const setPointForWinAction = (payload) => ({ type: SET_POINT_FOR_WIN, payload });
export const setDifficultyLevelAction = (payload) => ({ type: SET_DIFFICUTLY_LEVEL, payload });
export const setStartAction = (payload) => ({ type: SET_START, payload });
export const setWinnerAction = (payload) => ({ type: SET_WINNER, payload });
export const setUpdateGameAction = () => ({ type: UPDATE_GAME });