import React from 'react'
const GAME_STATE_PLAYING = 1;
const Footer = ({onNewgameClick, onSuggestClick, gameState}) => {

  const renderButtons = () => {
    if(gameState === GAME_STATE_PLAYING){
      return  <button onClick={onSuggestClick}>Suggest</button>
    }
    return <button  onClick={onNewgameClick}>New Game</button>
  }
  return (
    <div className='panel footer'>
      
        {renderButtons() }
      
    </div>
  )
}

export default Footer;