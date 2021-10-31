import React, { useState } from 'react';
import './styles/players.css';
import CoinFlip from './coin-flip';

function Players() {

    const start = (e) => {
        e.preventDefault()
        const player1Name = document.getElementById('player1').value;
        const player2Name = document.getElementById('player2').value;
        if (player1Name === '' || player2Name === '') {
            setError(true)
        } else {
            setError(false)
            setPlayer1Name(player1Name);
            setPlayer2Name(player2Name);
            setCoinFlip(true)
        }
    }

    const [player1Name,setPlayer1Name] = useState();
    const [player2Name,setPlayer2Name] = useState();
    const [coinflip,setCoinFlip] = useState(false);
    const [error,setError] = useState(false);


    if (coinflip) {
        return <CoinFlip player1Name={player1Name} player2Name={player2Name} />
    }

    return (
        <div className="selection-container fondo">
            <h5 className="wrong">{error ? 'You must enter a name for both players and assure that names has 8 characters':''}</h5>
            <form className="form">
                <div className="player1">
                    <div className="name">
                        <label htmlFor="player1">Introduce the nickname for player 1</label>
                    </div>
                    <div className="input-name">
                        <input type="text" id="player1" placeholder="Nickname" />
                    </div>
                </div>
                <div className="player2">
                    <div className="name">
                        <label htmlFor="player2">Introduce the nickname for player 2</label>
                    </div>
                    <div className="input-name">
                        <input type="text" id="player2" placeholder="Nickname" />
                    </div>
                </div>
                <div className="start-container">
                    <div>
                        <button onClick={start}>Start</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Players;