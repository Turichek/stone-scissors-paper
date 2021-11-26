import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { gameReducer } from './Game/gameReducer';
import { alertReducer } from './Alert/alertReducer';
import { roundReducer } from './Round/roundReducer';

const rootReducer = combineReducers({
    game: gameReducer,
    alert: alertReducer,
    round: roundReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());