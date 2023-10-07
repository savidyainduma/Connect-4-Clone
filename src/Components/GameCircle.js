import React from 'react'


const GameCircle = ({id,color,children,onCircleClicked}) => {

 
  const style={
    backgroundColor: color,
    borderRadius: '50%',
    width: 100,
    height: 100,
    margin:10
  }
  return (
    <div style={style} onClick={() =>onCircleClicked(id)}>
        {children} 
    </div>
  )
}

export default GameCircle;