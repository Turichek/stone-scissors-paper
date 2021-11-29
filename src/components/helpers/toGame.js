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
            dispatch(setCardComputerAction(cards[Random(0, cards.length-1)]));
            break;

        case 'middle':
            cards = [STONE, SCISSORS, PAPER, STONE, SCISSORS, PAPER, STONE, SCISSORS, PAPER];
            cards.push(returnStrongerCard(cardUser));
            dispatch(setCardComputerAction(cards[Random(0, cards.length-1)]));
            break;

        case 'difficult':
            cards = [STONE, SCISSORS, PAPER];
            for(let i = 0;i < 2;i++){
                cards.push(returnStrongerCard(cardUser));
            }
            dispatch(setCardComputerAction(cards[Random(0, cards.length-1)]));
            break;

        default:
            break;
    }
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
    switch (round.cardUser.name) {
        case 'stone':
            switch (round.cardComputer.name) {
                case 'stone':
                    dispatch(openCloseAlertAction({ open: true, text: 'Результат: ничья', severity: 'info' }));
                    break;

                case 'paper':
                    dispatch(setPointComputerAction(game.pointComputer + 1));
                    dispatch(openCloseAlertAction({ open: true, text: 'Результат: компьютер победил!', severity: 'error' }));
                    break;

                case 'scissors':
                    dispatch(setPointUserAction(game.pointUser + 1));
                    dispatch(openCloseAlertAction({ open: true, text: 'Результат: вы победили!', severity: 'success' }));
                    break;

                default:
                    break;
            }
            break;

        case 'paper':
            switch (round.cardComputer.name) {
                case 'stone':
                    dispatch(setPointUserAction(game.pointUser + 1));
                    dispatch(openCloseAlertAction({ open: true, text: 'Результат: вы победили!', severity: 'success' }));
                    break;

                case 'paper':
                    dispatch(openCloseAlertAction({ open: true, text: 'Результат: ничья', severity: 'info' }));
                    break;

                case 'scissors':
                    dispatch(setPointComputerAction(game.pointComputer + 1));
                    dispatch(openCloseAlertAction({ open: true, text: 'Результат: компьютер победил!', severity: 'error' }));
                    break;

                default:
                    break;
            }
            break;

        case 'scissors':
            switch (round.cardComputer.name) {
                case 'stone':
                    dispatch(setPointComputerAction(game.pointComputer + 1));
                    dispatch(openCloseAlertAction({ open: true, text: 'Результат: компьютер победил!', severity: 'error' }));
                    break;

                case 'paper':
                    dispatch(setPointUserAction(game.pointUser + 1));
                    dispatch(openCloseAlertAction({ open: true, text: 'Результат: вы победили!', severity: 'success' }));
                    break;

                case 'scissors':
                    dispatch(openCloseAlertAction({ open: true, text: 'Результат: ничья', severity: 'info' }));
                    break;

                default:
                    break;
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