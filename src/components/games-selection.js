import React, { useState } from 'react';
import './styles/games-selection.css';
import Index from './index';

export default function GameSelection(props) {
    const [numberOfGames,setNumberOfGames] = useState();
    const [nextPage,setNextPage] = useState(false);
    const [wrongGame,setWrongGame] = useState(false);

    const checkNumberOfGames = () => {
        const games = document.getElementById('games');
        setNumberOfGames(games.value)
        if (games.value > 0 && games.value<=5) {
            setNextPage(true);
        } else {
            setWrongGame(true);
        }
    }

    if (nextPage) {
        return <Index winner={props.winner} loser={props.loser} numberOfGames={numberOfGames} />
    }

    return (
        <div className="selection-container">
            <div className="selection-position">
                <div className="winner-games-selection">
                    <span>{props.winner}</span>
                </div>
                <div className="instructions">
                    <p>
                        You are the winner of the lottery, how many games do you want to play?
                    </p>
                </div>
                <div className="input-games">
                    <input type="number" id="games" min="1" max="5" placeholder="1" />
                </div>
                <div className="selection-button">
                    <button onClick={checkNumberOfGames}>Start</button>
                </div>
                {wrongGame === false ? '':<span className="wrong">You need to enter numbers between 1 and 5</span>}

            </div>
        </div>
    )
}