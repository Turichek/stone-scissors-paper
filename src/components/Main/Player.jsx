import React from 'react';
import Computer from './PlayerTypes/Computer';
import User from './PlayerTypes/User';

export default function Player({ type }) {
    if (type === "computer") {
        return (
            <Computer />
        )
    }
    else if( type === 'human'){
        return (
            <User />
        )
    }

}