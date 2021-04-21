import React from "react"
import ReactDOM from "react-dom"

const Modal = ({playersJoined,countDown,startGameDispatch}) => {
	if (playersJoined < 2) {
		return (
			<div className="modal">
				<div className="modal-content">
					<div className="modal-header">
						<h4 className="modal-title">Waiting for players to join...</h4>
					</div>
					<div className="modal-body">
						Players joined: {playersJoined}
					</div>
				</div>
			</div>
		)
	} else if (countDown > 0) {
		setInterval(()=>startGameDispatch({
			type: 'COUNT_DOWN',
			payload: {
				countDown: countDown-1
			}}),1000)
		return (
			<div className="modal">
				<div className="modal-content">
					<div className="modal-header">
						<h4 className="modal-title">Game will start in:</h4>
					</div>
					<div className="modal-body">
						{countDown}
					</div>
				</div>
			</div>
		)
	}
}

export default Modal;