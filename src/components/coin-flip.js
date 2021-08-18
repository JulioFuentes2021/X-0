import React from 'react';
import './styles/coin-flip.css';
import { useState,useEffect } from 'react';
import Game from '../components/games-selection';
import Coin from '../images/moneda.png';

function CoinFlip(props) {

    useEffect(() => {
        setZero(Math.round(Math.random()*1 + 1))
        setPlayerZero(Math.round(Math.random()*1 + 1))
        console.log(zero)
    },[])

    const [zero,setZero] = useState();
    const [playerZero,setPlayerZero] = useState();
    const [winner,setWinner] = useState();
    const [startGame,setStartGame] = useState(false);

    const game = () => {
        setStartGame(true);
    }

    if (startGame) {
        return <Game winner={zero === 1 ? props.player1Name:props.player2Name} loser={zero === 1 ? props.player2Name:props.player1Name} />
    }

    return (
        <div className="coin-space">
            <div className="coin-flip-container">
                <div className="coin">
                    <img src={Coin} alt="Coin" />
                </div>
                <div className="lottery-winner">
                    <p>{zero === 1 ? <span>{props.player1Name}</span>:<span>{props.player2Name}</span>} is the 0 mark and start the game</p>
                    <button onClick={game}>Start</button>
                </div>
            </div>
        </div>
    )
}

export default CoinFlip;