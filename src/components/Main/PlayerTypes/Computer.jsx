import { Box, Typography } from '@mui/material';
import React from 'react';
import { red } from '@mui/material/colors';
import { UNKNOW } from '../../../constatns/Srcs';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { DefineWinnerRound } from '../../helpers/toGame';

export default function Computer({ point }) {
    const dispatch = useDispatch();
    const round = useSelector(state => state.round);
    const game = useSelector(state => state.game);

    useEffect(() => {
        if (round.cardComputer !== '') {
            DefineWinnerRound(round, game, dispatch);
        }
    }, [round.cardComputer])

    return (
        <Box sx={{
            backgroundColor: red[100],
            width: 0.5,
            height: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <Typography sx={{ textAlign: 'center' }} variant='subtitle1'>Computer point: {point}</Typography>
            <Box sx={{
                width: 1,
                height: 0.97,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
            }}>
                {
                    round.cardUser === '' ?
                        <Card item={UNKNOW} height={0.9} disabled={true} />
                        :
                        <Card item={round.cardComputer} height={0.9} disabled={true} />
                }
            </Box>
        </Box>
    )
}