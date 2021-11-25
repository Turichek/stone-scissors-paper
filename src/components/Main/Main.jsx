import { Box } from '@mui/material';
import React from 'react';
import Player from './Player';

export default function Main() {
    return (
        <Box sx={{display: 'flex', height: 0.92}}>
            <Player type={'computer'}/>
            <Player type={'human'}/>
        </Box>
    )
}