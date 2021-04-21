import React, {useState} from 'react';
import StartModal from '../components/startModal.jsx'

const gamePage = () => {
  const [playersJoined, setPlayersJoined] = useState(1);
  const [players,setPlayers] = useState([{username:'',percentage:0,timeCompleted:0,totalWins:0,totalLosses:0}, {username:'',percentage:0,timeCompleted:0,totalWins:0,totalLosses:0}])
  
  return (
    <div>
      <div className='gamePage'>
        <div>Game Page</div>
        <StartModal playersJoined={playersJoined} setPlayersJoined={setPlayersJoined}/>
        <div>only see this when game starts</div>
      </div>
    </div>
  );
};
export default gamePage;
