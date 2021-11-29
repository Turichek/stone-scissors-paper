import { Box, TextField } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux'
import React from "react";
import { setPointForWinAction } from "../../store/Game/actions";

export default function SetPointForWin() {
    const pointForWin = useSelector(state => state.game.pointForWin);
    const isStart = useSelector(state => state.game.isStart);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        if(Number.parseInt(event.target.value) >= 0)
            dispatch(setPointForWinAction(Number.parseInt(event.target.value)));
        else event.target.value = 0;
    };

    return (
        <Box sx={{ width: 0.9 }}>
            <TextField sx={{ width: 1 }} type='number'
                disabled={isStart}
                onChange={handleChange}
                value={pointForWin}
                label={'Выберете кол-во очков для победы'}
                
            />
        </Box>
    )
}