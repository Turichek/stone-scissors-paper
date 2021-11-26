import { Box, Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Player from './Player';
import { yellow } from '@mui/material/colors';
import { setStartAction } from '../../store/Game/actions';
import { openCloseAlertAction } from '../../store/Alert/actions';
import Notification from './Notification';

export default function Main() {
    const game = useSelector(state => state.game);
    const dispatch = useDispatch();

    const changeIsStart = () => {
        if(game.difficultyLevel !== '' && game.pointForWin >= 0){
            dispatch(setStartAction(true));
        }
        else{
            dispatch(openCloseAlertAction({open: true, text: 'Корректно заполните поля вверху', severity: 'error'}))
        }
    }

    return (
        <Box sx={{ display: 'flex', height: 0.915 }}>
            {
                !game.isStart ?
                    <Button sx={{ width: 1, color: 'black', backgroundColor: yellow[200], ':hover': { backgroundColor: yellow[300] } }}
                        onClick={changeIsStart}
                    >Start</Button>
                    :
                    <>
                        <Player type={'computer'} />
                        <Player type={'user'} />
                    </>
            }
            <Notification />
        </Box>
    )
}