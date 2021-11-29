import { STONE, SCISSORS, PAPER } from "../../constatns/Srcs";
import { setCardComputerAction, setNextRoundAction } from "../../store/Round/actions";
import { openCloseAlertAction } from "../../store/Alert/actions";
import { setPointComputerAction, setPointUserAction, setUpdateGameAction } from "../../store/Game/actions";

const cards = [STONE, SCISSORS, PAPER];

export const SelectComputerCard = (game, cardUser, dispatch) => {
    const randomPercent = getRandomInt(0, 100);
    if (game.difficultyLevel === 'easy') {
        dispatch(setCardComputerAction(cards[getRandomInt(0, 2)]));
    }
    else if (game.difficultyLevel === 'middle') {
        if (randomPercent >= 0 && randomPercent < 30) {
            dispatch(setCardComputerAction(returnCard(cardUser, 'equals')));
        }
        else if (randomPercent >= 30 && randomPercent < 60) {
            dispatch(setCardComputerAction(returnCard(cardUser, 'smaller')));
        }
        else if (randomPercent >= 60 && randomPercent <= 100) {
            dispatch(setCardComputerAction(returnCard(cardUser, 'more')));
        }
    }
    else if (game.difficultyLevel === 'difficult') {
        if (randomPercent >= 0 && randomPercent < 20) {
            dispatch(setCardComputerAction(returnCard(cardUser, 'equals')));
        }
        else if (randomPercent >= 20 && randomPercent < 40) {
            dispatch(setCardComputerAction(returnCard(cardUser, 'smaller')));
        }
        else if (randomPercent >= 40 && randomPercent <= 100) {
            dispatch(setCardComputerAction(returnCard(cardUser, 'more')));
        }
    }
}

const returnCard = (userCard, mode) => {
    switch (userCard.name) {
        case 'stone':
            if (mode === 'more') {
                return cards[2];
            }
            else if (mode === 'smaller') {
                return cards[1];
            }
            else if (mode === 'equals') {
                return cards[0];
            }
            break;

        case 'paper':
            if (mode === 'more') {
                return cards[1];
            }
            else if (mode === 'smaller') {
                return cards[0];
            }
            else if (mode === 'equals') {
                return cards[2];
            }
            break;

        case 'scissors':
            if (mode === 'more') {
                return cards[0];
            }
            else if (mode === 'smaller') {
                return cards[2];
            }
            else if (mode === 'equals') {
                return cards[1];
            }
            break;

        default:
            break;
    }
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
    }, 5000)
}

export const isEnd = (game, dispatch) => {
    if (game.pointUser >= game.pointForWin) {
        dispatch(openCloseAlertAction({ open: true, text: 'Игра оконченна, вы выиграли!', severity: 'success' }));
        setTimeout(() => {
            dispatch(setUpdateGameAction())
        }, 5000);
    }
    else if (game.pointComputer >= game.pointForWin) {
        dispatch(openCloseAlertAction({ open: true, text: 'Игра оконченна, компьютер выиграл!', severity: 'error' }));
        setTimeout(() => {
            dispatch(setUpdateGameAction())
        }, 5000);
    }
}

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}