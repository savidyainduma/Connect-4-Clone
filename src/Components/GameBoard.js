import React, {useState} from "react";
import GameCircle from "./GameCircle";



const GameBoard= (props) =>
{
    const Style={
        display: 'grid',
        gridTemplateColumns:'1fr 1fr 1fr 1fr',
        gridTemplateRows:'1fr 1fr 1fr 1fr',
        padding: 20,
        width: '500px',
        position: 'absolute',
        marginLeft:'350px',
        top:'10%'
    }
    const [gameBoard, setGameBoard] = useState(Array(16).fill(0));
    const circleClicked = (id)=>{
        console.log('circle clicked: '+id);

        gameBoard[id]= 1;
        setGameBoard(gameBoard);

        console.log(gameBoard);
    }
    return (
        <div style={Style}>
            <GameCircle id={1} color='blue' onCircleClicked={circleClicked}>
            
                </GameCircle>
            <GameCircle id={2} color='red' onCircleClicked={circleClicked}>
           
                </GameCircle>
            <GameCircle id={3}color='blue' onCircleClicked={circleClicked}>
        
                </GameCircle>
            <GameCircle id={4} color='red' onCircleClicked={circleClicked}>
           
                </GameCircle>
            <GameCircle id={5} color='blue' onCircleClicked={circleClicked}>
          
                </GameCircle>
            <GameCircle id={6} color='red' onCircleClicked={circleClicked}>
            
                </GameCircle>
            <GameCircle id={7} color='blue' onCircleClicked={circleClicked}>
         
                </GameCircle>
            <GameCircle id={8} color='red' onCircleClicked={circleClicked}>
           
                </GameCircle>
            <GameCircle id={9} color='blue' onCircleClicked={circleClicked}>
            
                </GameCircle>
            <GameCircle id={10} color='red' onCircleClicked={circleClicked}>
       
                </GameCircle>
            <GameCircle id={11}color='blue' onCircleClicked={circleClicked}>
    
                </GameCircle>
            <GameCircle id={12} color='red' onCircleClicked={circleClicked}>
       
                </GameCircle>
            <GameCircle id={13} color='blue' onCircleClicked={circleClicked}>
      
                </GameCircle>
            <GameCircle id={14} color='red' onCircleClicked={circleClicked}>
        
                </GameCircle>
            <GameCircle id={15} color='blue' onCircleClicked={circleClicked}>
     
                 </GameCircle>
            <GameCircle id={16} color='red' onCircleClicked={circleClicked}>
       
                </GameCircle>
        </div>
    )
    
}

export default GameBoard;