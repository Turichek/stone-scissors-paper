import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux'
import React from "react";
import { openCloseModalAction } from "../../store/Modal/actions";

export default function History() {
    const dispatch = useDispatch();
    const isStart = useSelector(state => state.game.isStart);

    const handleOpen = (event) => {
        dispatch(openCloseModalAction(true));
    }

    return (
        <Box sx={{ width: 0.9, height: '56px' }}>
            <Button disabled={isStart} variant="outlined" sx={{ width: 1, height: 1 }} onClick={handleOpen}>Показать историю игр</Button>
        </Box>
    );
}