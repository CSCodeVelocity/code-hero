import React, {useState, useReducer, useEffect} from 'react';
import StartModal from '../components/startModal.jsx'
import Modal from '../components/modal.jsx'
import GameHeader from '../components/gameHeader.jsx'
import socket from '../utils/socket'
import {initialStartGameState, startGameReducer} from '../state/reducers'

const gamePage = () => {
  // const [playersJoined, setPlayersJoined] = useState(1);
  const [userRecord, setUserRecord] = useState({wins:0,losses:0})
  useEffect(()=> {
    fetch('/users/1')
      .then(res=> res.json())
      .then(data => setUserRecord(data))
  }, [])

  console.log('userRecord:', userRecord)

  const [startGameState, startGameDispatch] = useReducer(startGameReducer, initialStartGameState)
  const {playersJoined, gameStart} = startGameState
  socket.on('playersJoined', (num)=>startGameDispatch({
    type: 'UPDATE_PLAYERS',
    payload: {
      playersJoined: num
    }
  }))
  const [players,setPlayers] = useState([{username:'',percentage:0,timeCompleted:0,totalWins:0,totalLosses:0}, {username:'',percentage:0,timeCompleted:0,totalWins:0,totalLosses:0}])
  // const [countDown, setCountDown] = useState(5)
  console.log('gameStart:', gameStart)
  console.log('playersJoined:', playersJoined)

  if (playersJoined < 2) {
		return (
      <div>
			  <Modal playersJoined={playersJoined} gameStart={gameStart} startGameDispatch={startGameDispatch}/>
      </div>
		)
  } else {
    return (
      <div>
        <GameHeader userRecord={userRecord}/>
      </div>
    )
  }
}

export default gamePage;
