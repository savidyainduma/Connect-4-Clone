import React, {useEffect, useState} from "react";
import GameCircle from "./GameCircle";
import '../Game.css';
import Header from "./Header";
import Footer from "./Footer";
import { isWinner, isDraw, getRandomComputerMove } from "../Helper"; 
const GAME_STATE_PLAYING = 1;
const GAME_STATE_WIN = 2;
const GAME_STATE_DRAW = 3;
const PLAYER_1 = 1;
const PLAYER_2 = 2;
const NO_CIRCLES = 16;
const NO_PLAYER = 0;

const GameBoard= (props) =>
{ 
     
    const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
    const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
    const [winPlayer, setWinPlayer] = useState(NO_PLAYER);
    console.log(gameBoard);

    useEffect(() => {
        initGame();
    }, []);

    const initGame =() => {
        console.log('initGame');
        setGameBoard(Array(16).fill(NO_PLAYER));
        setCurrentPlayer(PLAYER_1);
        setGameState(GAME_STATE_PLAYING);
    }

    const initBoard = () => {
        const circles =[];
        for(let i=0; i<NO_CIRCLES; i++)
        {
            circles.push(renderCircle(i));
        }
        return circles;
    }

    const suggestMove = () => {
        circleClicked(getRandomComputerMove(gameBoard));
        console.log("randome move");
    }

    const circleClicked = (id)=>{
        console.log('circle clicked: '+id);

        if(gameBoard[id] !== NO_PLAYER) return;
        if(gameState !== GAME_STATE_PLAYING) return;
        
        if(isWinner(gameBoard, id, currentPlayer)){
            setGameState(GAME_STATE_WIN);
            setWinPlayer(currentPlayer);
        }

        if(isDraw(gameBoard, id, currentPlayer)){
            setGameState(GAME_STATE_DRAW);
            setWinPlayer(NO_PLAYER);
        }

        setGameBoard(prev => {
            return prev.map((circle, pos) =>{
                if(pos === id) return currentPlayer;
                return circle;
            })
        } )
     
        setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
        console.log(gameBoard);
        console.log(currentPlayer);
    }
    const renderCircle = id => {
        return <GameCircle key={id} id={id} className= {`player_${gameBoard[id]}`} onCircleClicked={circleClicked} />
    }

    return (
        <>
            <Header gameState={gameState} currentPlayer={currentPlayer} winPlayer={winPlayer} />
            <div className="gameBoard" >
                {initBoard()}
            </div>
            <Footer onNewgameClick={initGame} onSuggestClick={suggestMove} gameState={gameState}/>
        </>
    )
    
}

export default GameBoard;