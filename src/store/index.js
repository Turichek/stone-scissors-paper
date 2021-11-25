import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { gameReducer } from './Game/gameReducer';

const rootReducer = combineReducers({
    game: gameReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());