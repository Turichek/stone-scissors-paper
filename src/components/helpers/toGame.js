import { STONE, SCISSORS, PAPER } from "../../constatns/Srcs";
import { setCardComputerAction, setNextRoundAction } from "../../store/Round/actions";
import { openCloseAlertAction } from "../../store/Alert/actions";
import { setPointComputerAction, setPointUserAction, setUpdateGameAction } from "../../store/Game/actions";

const cards = [STONE, SCISSORS, PAPER];

export const SelectComputerCard = (dispatch) => {
    dispatch(setCardComputerAction(cards[getRandomInt(3)]));
}

export const DefineWinnerRound = (round, game, dispatch) => {
    switch (round.cardUser.name) {
        case 'stone':
            if (round.cardComputer.name === 'stone') {
                dispatch(openCloseAlertAction({ open: true, text: 'Результат: ничья', severity: 'info' }));
            }
            else if (round.cardComputer.name === 'paper') {
                dispatch(setPointComputerAction(game.pointComputer + 1));
                dispatch(openCloseAlertAction({ open: true, text: 'Результат: компьютер победил!', severity: 'error' }));
            }
            else if (round.cardComputer.name === 'scissors') {
                dispatch(setPointUserAction(game.pointUser + 1));
                dispatch(openCloseAlertAction({ open: true, text: 'Результат: вы победили!', severity: 'success' }));
            }
            break;

        case 'paper':
            if (round.cardComputer.name === 'paper') {
                dispatch(openCloseAlertAction({ open: true, text: 'Результат: ничья', severity: 'info' }));
            }
            else if (round.cardComputer.name === 'scissors') {
                dispatch(setPointComputerAction(game.pointComputer + 1));
                dispatch(openCloseAlertAction({ open: true, text: 'Результат: компьютер победил!', severity: 'error' }));
            }
            else if (round.cardComputer.name === 'stone') {
                dispatch(setPointUserAction(game.pointUser + 1));
                dispatch(openCloseAlertAction({ open: true, text: 'Результат: вы победили!', severity: 'success' }));
            }
            break;

        case 'scissors':
            if (round.cardComputer.name === 'scissors') {
                dispatch(openCloseAlertAction({ open: true, text: 'Результат: ничья', severity: 'info' }));
            }
            else if (round.cardComputer.name === 'stone') {
                dispatch(setPointComputerAction(game.pointComputer + 1));
                dispatch(openCloseAlertAction({ open: true, text: 'Результат: компьютер победил!', severity: 'error' }));
            }
            else if (round.cardComputer.name === 'paper') {
                dispatch(setPointUserAction(game.pointUser + 1));
                dispatch(openCloseAlertAction({ open: true, text: 'Результат: вы победили!', severity: 'success' }));
            }
            break;

        default:
            return;
    }
    setTimeout(() => {
        dispatch(setNextRoundAction({ cardUser: '', cardComputer: '' }))
        console.log('new round');
    }, 3000)
}

export const Restart = (game, dispatch) => {
    
    setTimeout(() => { 
        dispatch(setUpdateGameAction()) 
    }, 3000);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}