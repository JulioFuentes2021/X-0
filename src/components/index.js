import React from 'react';
import './styles/board.css';
import { useState,useEffect } from 'react';
import CoinFlip from './coin-flip';
import Arrival from './players-arrival';
import ReactDOM, { createPortal } from 'react-dom';
import Points from './points';
import Results from './Results';

function Index(props) {
    const players = document.getElementById('players');

    const [game1,setGame1] = useState('');
    const [game2,setGame2] = useState('');
    const [game3,setGame3] = useState('');
    const [game4,setGame4] = useState('');
    const [game5,setGame5] = useState('');
    const [sets,setSets] = useState(1);
    const [shifts,setShifts] = useState(false);
    const [option1,setOption1] = useState('');//Options to chose in the gameboard
    const [option2,setOption2] = useState('');//Options to chose in the gameboard
    const [option3,setOption3] = useState('');//Options to chose in the gameboard
    const [option4,setOption4] = useState('');//Options to chose in the gameboard
    const [option5,setOption5] = useState('');//Options to chose in the gameboard
    const [option6,setOption6] = useState('');//Options to chose in the gameboard
    const [option7,setOption7] = useState('');//Options to chose in the gameboard
    const [option8,setOption8] = useState('');//Options to chose in the gameboard
    const [option9,setOption9] = useState('');//Options to chose in the gameboard
    const [mark,setMark] = useState('O');//The initial state of the mark
    const [finishMatch,setFinishMatch] = useState(false);
    const [playerXPoints,setPlayerXPoints] = useState(0);
    const [playerOPoints,setPlayerOPoints] = useState(0);
    const [numberOfGames, setNumberOfGames] = useState(props.numberOfGames-1);

    const option = (e) => {
        const positionMark = e.target.classList.value;
        if (positionMark === 'option1' && option1 === ''){
                shiftsPlayers()
                e.target.innerHTML = `<div class="x">${mark}</div>`;
                setOption1(mark)
            } else if (positionMark === 'option2' && option2 === ''){
                shiftsPlayers()
                e.target.innerHTML = `<div class="x">${mark}</div>`;
                setOption2(mark)
            } else if (positionMark === 'option3' && option3 === ''){
                shiftsPlayers()
                e.target.innerHTML = `<div class="x">${mark}</div>`;
                setOption3(mark)
            } else if (positionMark === 'option4' && option4 === ''){
                e.target.innerHTML = `<div class="x">${mark}</div>`;
                setOption4(mark)
                shiftsPlayers()
            } else if (positionMark === 'option5' && option5 === ''){
                e.target.innerHTML = `<div class="x">${mark}</div>`;
                setOption5(mark)
                shiftsPlayers()
            } else if (positionMark === 'option6' && option6 === ''){
                e.target.innerHTML = `<div class="x">${mark}</div>`;
                setOption6(mark)
                shiftsPlayers()
            } else if (positionMark === 'option7' && option7 === ''){
                e.target.innerHTML = `<div class="x">${mark}</div>`;
                setOption7(mark)
                shiftsPlayers()
            } else if (positionMark === 'option8' && option8 === ''){
                e.target.innerHTML = `<div class="x">${mark}</div>`;
                setOption8(mark)
                shiftsPlayers()
            } else if (positionMark === 'option9' && option9 === ''){
                e.target.innerHTML = `<div class="x">${mark}</div>`;
                setOption9(mark)
                shiftsPlayers()
            }

    }

  const oMarkWinner = () => {
    if ((option1 === 'O' && option2 === 'O' && option3 === 'O') || (option1 === 'O' && option4 === 'O' && option7 === 'O') || (option7 === 'O' && option8 === 'O' && option9 === 'O') || (option9 === 'O' && option6 === 'O' && option3 === 'O') || (option4 === 'O' && option5 === 'O' && option6 === 'O') || (option2 === 'O' && option5 === 'O' && option8 === 'O') || (option1 === 'O' && option5 === 'O' && option9 === 'O') || (option3 === 'O' && option5 === 'O' && option7 === 'O')){
        // setPoints(1)
        countSets('WinnerO')
        setSets(sets+1);
        cleanGame()
        console.log('lo hicistes')
        deleteMarks()
        return true
    }
  }

  const xMarkWinner = () => {
    if ((option1 === 'X' && option2 === 'X' && option3 === 'X') || (option1 === 'X' && option4 === 'X' && option7 === 'X') || (option7 === 'X' && option8 === 'X' && option9 === 'X') || (option9 === 'X' && option6 === 'X' && option3 === 'X') || (option4 === 'X' && option5 === 'X' && option6 === 'X') || (option2 === 'X' && option5 === 'X' && option8 === 'X') || (option1 === 'X' && option5 === 'X' && option9 === 'X') || (option3 === 'X' && option5 === 'X' && option7 === 'X')){
        // setPoints(2);
        countSets('WinnerX')
        setSets(sets+1);
        cleanGame()
        console.log('lo hicistes')
        deleteMarks()
        return true
    }
  }

  const countSets = (gameResult) => {
      if (sets === 1) {
          setGame1(gameResult)
      } else if (sets === 2) {
          setGame2(gameResult)
      } else if (sets === 3) {
        setGame3(gameResult)
    } else if (sets === 4) {
        setGame4(gameResult)
    } else if (sets === 5) {
        setGame5(gameResult)
    }
  }

  const deleteMarks = () => {
      for (let i = 1; i<10; i++) {
          const option = document.querySelector(`.option${i}`)
          
          if (option.hasChildNodes()) {
            let markToDelete = option.firstChild;
            option.removeChild(markToDelete)
          }
      }
      setMark('O')
      setShifts(false)
  }

  const Tie = () => {
    if (option1!=='' && option2!=='' && option3!=='' && option4!=='' && option5!=='' && option6!=='' && option7!=='' && option8!=='' && option9!=='') {
        console.log('Empate')
        deleteMarks();
        countSets('Tie');
        setSets(sets+1);
        cleanGame()
        return true
    }
  }

  const cleanGame = () => {
    setOption1('');
    setOption2('');
    setOption3('');
    setOption4('');
    setOption5('');
    setOption6('');
    setOption7('');
    setOption8('');
    setOption9('');
  }

  const countGamesPerPlayer = (number,winner) => {
    if (winner >= number || numberOfGames === 0) {
        resultsOfTheMatch(playerOPoints,playerXPoints)
        // console.log('que esta pasando?')
    }
}

  const resultsOfTheMatch = (pointsO,pointsX) => {
        if (pointsO > pointsX) {
            setFinishMatch(true)
        } else {
            setFinishMatch(true)
        }
  }

  const shiftsPlayers = () => {
        if (shifts === false) {
            setMark('X')
        } else {
            setMark('O')
            console.log('oo')
        }
        setShifts(!shifts)
    }

    if (oMarkWinner()) {
        setPlayerOPoints(playerOPoints+1)//2
        console.log('funciona O')
        setNumberOfGames(numberOfGames-1);//2-1 = 1
        countGamesPerPlayer(numberOfGames,playerOPoints)
        console.log(numberOfGames)
    }

    if (xMarkWinner()) {
        setPlayerXPoints(playerXPoints+1)
        console.log('funciona X')
        setNumberOfGames(numberOfGames-1);
        countGamesPerPlayer(numberOfGames,playerXPoints)
        console.log(numberOfGames)
    }

    if (Tie()) {
        console.log('eMPATE')
        setNumberOfGames(numberOfGames-1);
        countGamesPerPlayer(numberOfGames,playerXPoints)
        console.log(numberOfGames)
    }

    if (finishMatch) {
        return <Results playerOName={props.winner} playerOPoints={playerOPoints} playerXName={props.loser} playerXPoints={playerXPoints} />
    }


    return (
        <div className="board">
            <div>
                <Arrival mark={mark} winner={props.winner} loser={props.loser}  />
            </div>
            <div>
            {createPortal(<Points game1={game1} game2={game2} game3={game3} game4={game4} game5={game5} winner={props.winner} loser={props.loser} numberOfGames={props.numberOfGames} />,players)}
            </div>
            <section className="row-1">
                <div className="option1" onClick={option}></div>
                <div className="option2" onClick={option}></div>
                <div className="option3" onClick={option}></div>
            </section>
            <section className="row-2">
                <div className="option4" onClick={option}></div>
                <div className="option5" onClick={option}></div>
                <div className="option6" onClick={option}></div>
            </section>
            <section className="row-3">
                <div className="option7" onClick={option}></div>
                <div className="option8" onClick={option}></div>
                <div className="option9" onClick={option}></div>
            </section>
        </div>
    )
}

export default Index;