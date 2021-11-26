import { SET_CARDUSER, SET_CARDCOMPUTER, SET_NEXTROUND } from "./constants"

export const setCardUserAction = (payload) => ({ type: SET_CARDUSER, payload });
export const setCardComputerAction = (payload) => ({ type: SET_CARDCOMPUTER, payload });
export const setNextRoundAction = (payload) => ({ type: SET_NEXTROUND, payload });