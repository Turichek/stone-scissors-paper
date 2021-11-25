import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux'
import React from "react";
import { setDifficultyLevelAction } from "../../store/Game/actions";

export default function SelectLevel() {
    const level = useSelector(state => state.game.difficultyLevel);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(setDifficultyLevelAction(event.target.value));
    };

    return (
        <Box sx={{ width: 0.9 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Выберете уровень сложности</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={level}
                    onChange={handleChange}
                    label={'Выберете уровень сложности'}
                >
                    <MenuItem value={'easy'}>Легкий</MenuItem>
                    <MenuItem value={'middle'}>Средний</MenuItem>
                    <MenuItem value={'difficult'}>Высокий</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}