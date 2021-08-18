import React from 'react';
import './styles/players-arrival.css';

export default function Arrival(props) {
    return (
        <div className="arrival-container">
            <div>
                <p><span>{props.mark === 'O' ? props.winner:props.loser}</span>-{props.mark === 'O' ? 'O':'X'} is your chance to win</p>
            </div>
        </div>
    )
}