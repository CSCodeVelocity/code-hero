import React, {useState, useReducer, useEffect} from 'react';
import Modal from '../components/modal.jsx'
import GameHeader from '../components/gameHeader.jsx'
import RaceTrack from '../components/raceTrack.jsx'
import socket from '../utils/socket'

const gamePage = () => {
  const [playersJoined, setPlayersJoined] = useState(1);
  const [userRecord, setUserRecord] = useState({wins:0,losses:0})
  const [players, setPlayers] = useState([{username:'',percentage:0,timeCompleted:0,totalWins:0,totalLosses:0}, {username:'',percentage:0,timeCompleted:0,totalWins:0,totalLosses:0}])

  useEffect(() => {
    // to update to feed user id from state
    fetch('/users/1')
      .then(res=> res.json())
      .then(data => setUserRecord(data))
  }, [])

  useEffect(() => {
    setPlayers([...players,players[0].totalWins = userRecord.wins])
    setPlayers([...players, players[0].totalLosses = userRecord.losses])
  }, [userRecord])

  socket.on('playersJoined', (data)=>setPlayersJoined(data))

  console.log('players:', players)

  useEffect(() => {
    socket.emit('userRecord', players[0])
    socket.on('opponentRecord', data=>{
      console.log('opponentRecord: ', data)
      setPlayers([...players, players[1].totalWins = data.totalWins, players[1].totalLosses = data.totalLosses])
    })
  }, [userRecord])

  if (playersJoined < 2) {
		return (
      <div>
			  <Modal playersJoined={playersJoined}/>
      </div>
		)
  } else {
    return (
      <div>
        <GameHeader userRecord={userRecord}/>
        <div className="trackBox">
        <RaceTrack />
        </div>
      </div>
    )
  }
}

export default gamePage;
