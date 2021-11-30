import { STONE, SCISSORS, PAPER } from "../../constatns/Srcs";
import { setCardComputerAction, setNextRoundAction } from "../../store/Round/actions";
import { openCloseAlertAction } from "../../store/Alert/actions";
import { setPointComputerAction, setPointUserAction, setUpdateGameAction } from "../../store/Game/actions";
import { addElemAction } from "../../store/History/actions";

export const SelectComputerCard = (game, cardUser, dispatch) => {
    let cards;

    switch (game.difficultyLevel) {
        case 'easy':
            cards = [STONE, SCISSORS, PAPER];
            setCardComputer(cards,dispatch);
            break;

        case 'middle':
            cards = [STONE, SCISSORS, PAPER, STONE, SCISSORS, PAPER, STONE, SCISSORS, PAPER];
            cards.push(returnStrongerCard(cardUser));
            setCardComputer(cards,dispatch);
            break;

        case 'difficult':
            cards = [STONE, SCISSORS, PAPER];
            for (let i = 0; i < 2; i++) {
                cards.push(returnStrongerCard(cardUser));
            }
            setCardComputer(cards,dispatch);
            break;

        default:
            break;
    }
}

const setCardComputer = (cards, dispatch) => {
    dispatch(setCardComputerAction(cards[Random(0, cards.length - 1)]));
}

const returnStrongerCard = (userCard) => {
    switch (userCard.name) {
        case 'scissors':
            return STONE;

        case 'paper':
            return SCISSORS;

        case 'stone':
            return PAPER;

        default:
            break;
    }
}

export const DefineWinnerRound = (round, game, dispatch) => {
    switch (round.cardComputer.name + ' ' + round.cardUser.name) {
        case 'stone stone':
        case 'paper paper':
        case 'scissors scissors':
            dispatch(openCloseAlertAction({ open: true, text: 'Результат: ничья', severity: 'info' }));
            break;

        case 'stone paper':
        case 'paper scissors':
        case 'scissors stone':
            dispatch(setPointUserAction(game.pointUser + 1));
            dispatch(openCloseAlertAction({ open: true, text: 'Результат: вы победили!', severity: 'success' }));
            break;

        case 'paper stone':
        case 'stone scissors':
        case 'scissors paper':
            dispatch(setPointComputerAction(game.pointComputer + 1));
            dispatch(openCloseAlertAction({ open: true, text: 'Результат: компьютер победил!', severity: 'error' }));
            break;

        default:
            break;
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
            game.winner = 'User';
            dispatch(addElemAction(game));
            dispatch(setUpdateGameAction())
        }, 5000);
    }
    else if (game.pointComputer >= game.pointForWin) {
        dispatch(openCloseAlertAction({ open: true, text: 'Игра оконченна, компьютер выиграл!', severity: 'error' }));
        setTimeout(() => {
            game.winner = 'Computer';
            dispatch(addElemAction(game));
            dispatch(setUpdateGameAction())
        }, 5000);
    }
}

function Random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}