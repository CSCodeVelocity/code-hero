import React, {useState} from 'react';

const gamePage = () => {
  const [players,setPlayers] = useState([{username:'',percentage:0,timeCompleted:0,totalWins:0,totalLosses:0}, 
  {username:'',percentage:0,timeCompleted:0,totalWins:0,totalLosses:0}])
  
  return <div>Game Page</div>;
};
export default gamePage;
