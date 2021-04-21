import React, {useState, useEffect} from 'react';
import socket from '../utils/socket'


export default function startModal({playersJoined, setPlayersJoined}){
	socket.on('playersJoined', (num)=>setPlayersJoined(num))
	const [countDown, setCountDown] = useState(5)

	if (playersJoined < 2) {
		return (
			<div className='modal'>
				<div className='modalText'>Waiting for players to join: {playersJoined}</div>
			</div>
		)
	} else {
		// setTimeout(()=>setCountDown(countDown-1),1000)
		setInterval(()=>setCountDown(countDown-1),1000)
		if (countDown > 0) {
			console.log(countDown)
			clearInterval()
			return (
				<div className='modal'>
					<div className='modalText'>Game will start in: {countDown}</div>
				</div>
			)
		}
	}
}