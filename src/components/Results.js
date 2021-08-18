import React from 'react';
import './styles/results.css';

function Results(props) {


    return (
        <div className="results-container">
            <div className="players-result">
                <div>
                    <span className="name-result">{props.playerOName}</span>
                </div>
                <div>
                    <span className="final-points">{props.playerOPoints}</span>
                </div>
            </div>
            <div className="versus">
                <div>
                    <span>VS</span>
                </div>
                <div className="restart">
                    <div>
                        <button onClick={() => window.location.reload()}>Restart</button>
                    </div>
                </div>
            </div>
            <div className="players-result">
                <div>
                    <span className="name-result">{props.playerXName}</span>
                </div>
                <div>
                    <span className="final-points">{props.playerXPoints}</span>
                </div>
            </div>
            
        </div>
    );
}

export default Results;