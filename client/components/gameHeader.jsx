import React, {useState} from 'react';

const gameHeader = ({userRecord}) => {
	return (
		<div className='gameHeader'>
			<div>Username:</div>
			<div>Win/Loss Record: {userRecord.wins} - {userRecord.losses}</div>
		</div>
	)
}

export default gameHeader;