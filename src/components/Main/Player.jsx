import React from 'react';
import { useSelector } from 'react-redux';
import Computer from './PlayerTypes/Computer';
import User from './PlayerTypes/User';

export default function Player({ type }) {
    const game = useSelector(state => state.game);

    return (
        <>
            {
                type === "computer" ?
                    <Computer point={game.pointComputer}/>
                    :
                type === 'user' ?
                    <User point={game.pointUser}/>
                    :
                    null
            }
        </>
    )
}