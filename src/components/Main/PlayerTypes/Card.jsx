import { Box, Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setCardUserAction } from '../../../store/Round/actions';

export default function Card({ item, height, disabled = false }) {
    const dispatch = useDispatch();

    const changeSelected = () => {
        dispatch(setCardUserAction(item));
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', height: height }}>
            <Button onClick={changeSelected} disabled={disabled} sx={{ ':hover': { border: '1px solid black' } }}><img style={{ height: "100%" }} src={item.src} alt="..." /></Button>
        </Box>
    )
}