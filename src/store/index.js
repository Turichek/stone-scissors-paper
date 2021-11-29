import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { gameReducer } from './Game/gameReducer';
import { alertReducer } from './Alert/alertReducer';
import { roundReducer } from './Round/roundReducer';
import { modalReducer} from './Modal/modalReducer';
import { historyReducer } from './History/historyReducer';

const rootReducer = combineReducers({
    game: gameReducer,
    alert: alertReducer,
    round: roundReducer,
    modal: modalReducer,
    history: historyReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());