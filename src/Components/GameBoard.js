import React from "react";
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
    return (
        <div style={Style}>
            <GameCircle id={1} color='blue'>
            
                </GameCircle>
            <GameCircle id={2} color='red'>
           
                </GameCircle>
            <GameCircle id={3}color='blue'>
        
                </GameCircle>
            <GameCircle id={4} color='red'>
           
                </GameCircle>
            <GameCircle id={5} color='blue'>
          
                </GameCircle>
            <GameCircle id={6} color='red'>
            
                </GameCircle>
            <GameCircle id={7} color='blue'>
         
                </GameCircle>
            <GameCircle id={8} color='red'>
           
                </GameCircle>
            <GameCircle id={9} color='blue'>
            
                </GameCircle>
            <GameCircle id={10} color='red'>
       
                </GameCircle>
            <GameCircle id={11}color='blue'>
    
                </GameCircle>
            <GameCircle id={12} color='red'>
       
                </GameCircle>
            <GameCircle id={13} color='blue'>
      
                </GameCircle>
            <GameCircle id={14} color='red'>
        
                </GameCircle>
            <GameCircle id={15} color='blue'>
     
                 </GameCircle>
            <GameCircle id={16} color='red'>
       
                </GameCircle>
        </div>
    )
    
}

export default GameBoard;