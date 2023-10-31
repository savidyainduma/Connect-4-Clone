import React from 'react'

const GAME_STATE_PLAYING = 1;
const GAME_STATE_WIN = 2;
const GAME_STATE_DRAW = 3;
const Header = ({gameState, currentPlayer, winPlayer}) => {
  const renderLabel = () => {
    switch (gameState) {
      case GAME_STATE_PLAYING:
        return <div> Player {currentPlayer} Turn</div>
      case GAME_STATE_WIN:
        return <div> Player {winPlayer} Wins!</div>
      case GAME_STATE_DRAW:
        return <div>Draw!!</div>
      default:  
    }
  }
  return (
    <div className='panel header'>
        <div className='header-text'>{renderLabel()}</div>
    </div>
  )
}

export default Header;