import React from 'react';
import StartModal from '../components/startModal.jsx'

export default function gamePage({playersJoined, setPlayersJoined}) {
  

  return (
  <div className='gamePage'>
    <div>Game Page</div>
    <StartModal playersJoined={playersJoined} setPlayersJoined={setPlayersJoined}/>
    <div>only see this when game starts</div>
  </div>
  );
};
