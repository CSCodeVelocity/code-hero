import React, {useState} from 'react';
import StartModal from '../components/startModal.jsx'
import Modal from '../components/modal.jsx'
import socket from '../utils/socket'


const gamePage = () => {
  const [playersJoined, setPlayersJoined] = useState(1);
  socket.on('playersJoined', (num)=>setPlayersJoined(num))
  const [players,setPlayers] = useState([{username:'',percentage:0,timeCompleted:0,totalWins:0,totalLosses:0}, {username:'',percentage:0,timeCompleted:0,totalWins:0,totalLosses:0}])
  const [countDown, setCountDown] = useState(5)
  console.log(countDown)

  if (playersJoined < 2 || countDown > 0) {
		return (
      <div>
        <div>only see this when game starts</div>
			  <Modal playersJoined={playersJoined} countDown={countDown} setCountDown={setCountDown}/>
      </div>
		)
  } else {
    return (
      <div>Game data here</div>
    )
  }
	// } else if (countDown > 0) {
	// 	setInterval(()=>setCountDown(countDown-1),1000)
	// 	if (countDown > 0) {
	// 		console.log(countDown)
	// 		clearInterval()
	// 		return (
	// 			<div className='modal'>
	// 				<div className='modalText'>Game will start in: {countDown}</div>
	// 			</div>
	// 		)
	// 	}
	// }
}

export default gamePage;
