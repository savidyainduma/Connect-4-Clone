import React from 'react'
import '../Game.css';

const GameCircle = ({id,children,onCircleClicked}) => {

 
  return (
    <div className='gameCircle' style={id % 2 === 0 ? {backgroundColor: 'red'} : {backgroundColor: 'blue'} } onClick={() =>onCircleClicked(id)}>
        {children} 
    </div>
  )
}

export default GameCircle;