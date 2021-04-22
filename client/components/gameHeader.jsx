import React, {useState} from 'react';

const gameHeader = ({userRecord, username}) => {
	return (
		<div className='gameHeader'>
			<div>Username: {username}</div>
			<div>Win/Loss Record: {userRecord.wins} - {userRecord.losses}</div>
		</div>
	)
}

export default gameHeader;