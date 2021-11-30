import { Box, Button, Modal, Backdrop, Fade } from '@mui/material';
import React, { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Player from './Player';
import { yellow } from '@mui/material/colors';
import { setIdAction, setStartAction } from '../../store/Game/actions';
import { openCloseAlertAction } from '../../store/Alert/actions';
import Notification from './Notification';
import { useEffect } from 'react';
import { isEnd } from '../helpers/toGame';
import { openCloseModalAction } from '../../store/Modal/actions';
import { saveToLocalStorage } from '../helpers/toLocalStorage';
import { lazy } from 'react';
const History = lazy(() => import('./History'));

const style = {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    backgroundColor: '#ebebeb',
    maxHeight: 800,
};

export default function Main() {
    const game = useSelector(state => state.game);
    const modal = useSelector(state => state.modal);
    const history = useSelector(state => state.history.data);
    const dispatch = useDispatch();

    const changeIsStart = () => {
        if (game.difficultyLevel !== '' && game.pointForWin > 0) {
            dispatch(setIdAction(Date.now()))
            dispatch(setStartAction(true));
        }
        else {
            dispatch(openCloseAlertAction({ open: true, text: 'Корректно заполните поля вверху', severity: 'error' }))
        }
    }

    useEffect(() => {
        if (game.pointForWin !== 0) {
            isEnd(game, dispatch);
        }
        else {
            saveToLocalStorage('history', history);
        }
    }, [game])

    return (
        <Box sx={{ display: 'flex', height: 0.915 }}>
            {
                !game.isStart ?
                    <Button sx={{ width: 1, color: 'black', backgroundColor: yellow[200], ':hover': { backgroundColor: yellow[300] }, fontSize: '100px' }}
                        onClick={changeIsStart}
                    >
                        Старт
                    </Button>
                    :
                    <>
                        <Player type={'computer'} />
                        <Player type={'user'} />
                    </>
            }
            <Notification />
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={modal.open}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={modal.open}>
                    <Box sx={style}>
                        <Box sx={{ mb: 1, display: 'flex', justifyContent: 'flex-end' }}>
                            <Button variant='contained' onClick={() => dispatch(openCloseModalAction(false))} sx={{ p: 0, minWidth: '25px', width: '25px', height: '25px' }}>X</Button>
                        </Box>
                        <Suspense fallback={<div>Загрузка...</div>}>
                            <History />
                        </Suspense>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    )
}