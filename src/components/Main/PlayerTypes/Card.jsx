import { Box } from '@mui/material';
import React from 'react';
import { red } from '@mui/material/colors';

export default function Card() {
    return (
        <Box sx={{ backgroundColor: red[100], width: 0.5, height: 1 }}>Computer</Box>
    )
}