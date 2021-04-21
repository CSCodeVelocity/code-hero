import React, {useState} from 'react';
// import socket from './utils/socket'
import GamePage from './pages/gamePage.jsx'

const App = () => {
  const [playersJoined, setPlayersJoined] = useState(1);

  // return <div>App Rendering</div>;
  return <GamePage playersJoined={playersJoined} setPlayersJoined={setPlayersJoined}/>
};

export default App;
