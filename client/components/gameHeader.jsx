import React, { useState } from 'react';
import Clock from './Clock.jsx';

const gameHeader = ({
  userRecord,
  username,
  timeCompleted,
  percentage,
  playersState,
  setPlayersState,
}) => {
  return (
    <header>
      <div className="gameHeader">
        <div>Username: {username}</div>
        <div>
          Win/Loss Record: {userRecord.wins} - {userRecord.losses}
        </div>
      </div>
      <Clock
        percentage={percentage}
        timeCompleted={timeCompleted}
        playersState={playersState}
        setPlayersState={setPlayersState}
      />
    </header>
  );
};

export default gameHeader;

