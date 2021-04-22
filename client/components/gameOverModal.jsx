import React from "react"
import { formatTime } from '../utils/time.js';

const gameOverModal = ({players}) => {
		return (
			<div className="modal">
				<div className="modal-content">
					<div className="modal-header">
						<h4 className="modal-title">Game Over! {players[0].winner} won!</h4>
					</div>
					<div className="modal-body">
						{players[0].username} - {formatTime(players[0].timeCompleted)} W/L: {players[0].totalWins}-{players[0].totalLosses}
					</div>
					<div className="modal-body">
						{players[1].username} - {formatTime(players[1].timeCompleted)} W/L: {players[1].totalWins}-{players[1].totalLosses}
					</div>
					<div className="modal-header">
						<h4 className="modal-title">CodeBlock high scores:</h4>
					</div>
					<div className="modal-body">
						sara - 6s
					</div>
					<div className="modal-body">
						sam - 12s
					</div>
					<div className="modal-body">
						sam2 - 13s
					</div>
				</div>
			</div>
		)
} 


export default gameOverModal;