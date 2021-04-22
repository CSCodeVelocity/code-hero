import React from "react"

const WaitingModal = ({playersJoined}) => {
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
}

export default WaitingModal;