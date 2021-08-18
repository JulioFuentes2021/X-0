import React from 'react';
import './styles/points.css';
import { useState } from 'react';

export default function Points(props) {
    // let gamesCount = 0;
    // const [game1,setGame1] = useState(['winner','loser']);
    // const [game2,setGame2] = useState(['winner','loser']);
    // const [game3,setGame3] = useState(['winner','loser']);
    // const [game4,setGame4] = useState(['winner','loser']);
    // const [game5,setGame5] = useState(['winner','loser']);

    return (
        <div className="points-container">
            <div className="table-container">
                <table id="table">
                    <tbody>
                    <tr>
                        <th>Games</th>
                        <th>{props.winner}</th>
                        <th>{props.loser}</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>{props.game1 === '' ? '-':props.game1 === 'Tie' ? props.game1:props.game1 === 'WinnerO' ? 'Winner':'Loser'}</td>
                        <td>{props.game1 === '' ? '-':props.game1 === 'Tie' ? props.game1:props.game1 === 'WinnerX' ? 'Winner':'Loser'}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>{props.game2 === '' ? '-':props.game2 === 'Tie' ? props.game2:props.game2 === 'WinnerO' ? 'Winner':'Loser'}</td>
                        <td>{props.game2 === '' ? '-':props.game2 === 'Tie' ? props.game2:props.game2 === 'WinnerX' ? 'Winner':'Loser'}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>{props.game3 === '' ? '-':props.game3 === 'Tie' ? props.game3:props.game3 === 'WinnerO' ? 'Winner':'Loser'}</td>
                        <td>{props.game3 === '' ? '-':props.game3 === 'Tie' ? props.game3:props.game3 === 'WinnerX' ? 'Winner':'Loser'}</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>{props.game4 === '' ? '-':props.game4 === 'Tie' ? props.game4:props.game4 === 'WinnerO' ? 'Winner':'Loser'}</td>
                        <td>{props.game4 === '' ? '-':props.game4 === 'Tie' ? props.game4:props.game4 === 'WinnerX' ? 'Winner':'Loser'}</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>{props.game5 === '' ? '-':props.game5 === 'Tie' ? props.game5:props.game5 === 'WinnerO' ? 'Winner':'Loser'}</td>
                        <td>{props.game5 === '' ? '-':props.game5 === 'Tie' ? props.game5:props.game5 === 'WinnerX' ? 'Winner':'Loser'}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}