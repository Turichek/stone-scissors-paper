import { List, Grid, ListItem } from '@mui/material';
import React from 'react';
import History from './History';
import SelectLevel from './SelectLevel';
import SetPointForWin from './SetPointForWin';

export default function Navbar() {
    return (
        <Grid sx={{ borderBottom: '1px solid black' }} container alignItems={'center'} justifyContent={'space-between'}>
            <List sx={{ p: 1.5, width: 1, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                <ListItem sx={{ width: 0.2, p: 0, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                    <SelectLevel />
                </ListItem>
                <ListItem sx={{ width: 0.2, p: 0, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                    <SetPointForWin />
                </ListItem>
                <ListItem sx={{ width: 0.2, p: 0, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                    <History />
                </ListItem>
            </List>
        </Grid>
    )
}