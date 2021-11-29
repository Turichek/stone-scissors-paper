import { Box, Typography } from '@mui/material';
import React from 'react';
import { blue } from '@mui/material/colors';
import { PAPER, SCISSORS, STONE } from '../../../constatns/Srcs';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { SelectComputerCard } from '../../helpers/toGame';

export default function User({ point }) {
    const cards = [STONE, SCISSORS, PAPER];
    const dispatch = useDispatch();
    const cardUser = useSelector(state => state.round.cardUser);
    const game = useSelector(state => state.game);

    useEffect(() => {
        if (cardUser !== '')
            setTimeout( SelectComputerCard(game, cardUser,dispatch), 100);
    }, [cardUser])

    return (
        <Box sx={{
            backgroundColor: blue[100],
            width: 0.5,
            height: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <Typography sx={{ textAlign: 'center' }} variant='subtitle1'>User point: {point}</Typography>
            <Box sx={{
                width: 1,
                height: 0.97,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
            }}>
                {
                    cardUser === '' ?
                        <>
                            {cards.map((item, index) =>
                                <Card key={index} item={item} height={0.32} />
                            )}
                        </>
                        :
                        <Card item={cardUser} height={0.9} disabled={true} />
                }
            </Box>
        </Box>
    )
}
