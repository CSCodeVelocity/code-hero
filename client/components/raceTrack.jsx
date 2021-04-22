import React from 'react';
import GameOverModal from './gameOverModal.jsx'


const raceTrack = ({pokemon, percentage, username, gameOver, players}) => {
  // percentage = 50;
  const distance = percentage/100*850

  if (!gameOver) {
    return (
      <div className="raceTrack">
        <img className="eevee" src={pokemon} alt="eevee" style={{marginLeft:distance}}/>
        <div className="username" style={{marginLeft:distance}}>{username} </div>
      </div>
      
    )
  } else {
    return (
      <div>
        <div className="raceTrack">
          <img className="eevee" src={pokemon} alt="eevee" style={{marginLeft:distance}}/>
          <div className="username" style={{marginLeft:distance}}>{username} </div>
        </div>
        <GameOverModal players={players}/>
      </div>
    )
  }
};

export default raceTrack;
