import React from "react"

const gameOverModal = ({players}) => {
		return (
			<div className="modal">
				<div className="modal-content">
					<div className="modal-header">
						<h4 className="modal-title">Game Over! {players[0].winner} won!</h4>
					</div>
					<div className="modal-body">
						{players[0].username} - {players[0].timeCompleted}s W/L: {players[0].totalWins}-{players[0].totalLosses}
					</div>
					<div className="modal-body">
						{players[1].username} - {players[1].timeCompleted}s W/L: {players[1].totalWins}-{players[1].totalLosses}
					</div>
					<div className="modal-header">
						<h4 className="modal-title">CodeBlock high scores:</h4>
					</div>
					<div className="modal-body">
						user1 - 62s
					</div>
					<div className="modal-body">
						user1 - 58s
					</div>
					<div className="modal-body">
						user2 - 55s
					</div>
				</div>
			</div>
		)
} 


export default gameOverModal;