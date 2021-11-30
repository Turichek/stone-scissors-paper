import { Box, Accordion, AccordionSummary, Typography, AccordionDetails, Divider } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { green, red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StrDate from '../helpers/returnStrDate';

export default function History() {
    const history = useSelector(state => state.history.data);

    return (
        <Box sx={{ overflow: "auto" }}>
            {
                history.length !== 0 ?
                    history.map((item, index) =>
                        <Accordion sx={{
                            borderWidth: '2px',
                            borderStyle: 'solid',
                            borderColor: item.winner === 'User' ? green[800] : red[500]
                        }} key={index}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Игра за: {StrDate(item.id, 3) + ", " + StrDate(item.id, 4)}</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: item.winner === 'User' ? green[100] : red[100] }}>
                                <Typography>Уровень сложности: {item.difficultyLevel}</Typography>
                                <Typography>Кол-во очков для победы: {item.pointForWin}</Typography>
                                <Divider sx={{ backgroundColor: item.winner === 'User' ? green[800] : red[500], my: 1 }} />
                                <Typography>Счет:</Typography>
                                <Typography>Компьютер: {item.pointComputer}, пользователь: {item.pointUser}</Typography>
                                <br />
                                <Typography>Победитель: {item.winner}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                    :
                    <Typography variant='h4' sx={{ textAlign: 'center' }}>Вы еще не играли</Typography>
            }
        </Box>
    )
}