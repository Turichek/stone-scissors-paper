import { ADD_ELEM, UPDATE_ARR, UPDATE_ELEM, REMOVE_ELEM} from "./constants"

export const addElemAction = (payload) => ({ type: ADD_ELEM, payload });
export const updateElemAction = (payload) => ({ type: UPDATE_ELEM, payload });
export const updateDataAction = (payload) => ({ type: UPDATE_ARR, payload });
export const removeElemAction = (payload) => ({ type: REMOVE_ELEM, payload });