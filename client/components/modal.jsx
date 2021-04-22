import React, {useState} from "react"
import ReactDOM from "react-dom"

const Modal = ({playersJoined,gameStart,startGameDispatch}) => {
	const [countDown, setCountDown] = useState(5)
	if (playersJoined < 2) {
		return (
			<div className="modal">
				<div className="modal-content">
					<div className="modal-header">
						<h4 className="modal-title">Waiting for players to join...</h4>
					</div>
					<div className="modal-body">
						Players in room: {playersJoined}
					</div>
				</div>
			</div>
		)
	} 
	// logic to display countDown after both players joined, to revisit
	// if (playersJoined >= 2 && countDown > 0) {
	// 	const timer = setInterval(()=>{
	// 		setCountDown(countDown-1)
	// 		console.log(countDown)
	// 		if (countDown === 0) clearInterval(timer)
	// 	},1000)
	// 	console.log('countDown:', countDown)
	// 	return (
	// 		<div className="modal">
	// 			<div className="modal-content">
	// 				<div className="modal-header">
	// 					<h4 className="modal-title">Game will start in:</h4>
	// 				</div>
	// 				<div className="modal-body">
	// 					{countDown}
	// 				</div>
	// 			</div>
	// 		</div>
	// 	)
	// } 
	// 	if (playersJoined >= 2 && countDown <= 0) {
	// 	startGameDispatch({
	// 		type: 'UPDATE_GAME',
	// 		payload: {
	// 			startGame: true
	// 		}
	// 	})
	// 	return null
	// }
}

export default Modal;