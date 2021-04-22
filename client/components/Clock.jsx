import React, { useEffect, useState } from 'react';
import { formatTime } from '../utils/time.js';

const Clock = props => {
  const { percentage, timeCompleted, playersState, setPlayersState } = props;
  const [currentTime, updateTime] = useState(0);
  useEffect(() => {
    const time = setInterval(() => {
      updateTime(currentTime + 100);
      if (percentage === 100 && timeCompleted === 0) {
        const players = [...playersState];
        players[0].timeCompleted = currentTime;
        setPlayersState([...players]);
      }
    }, 100);
    return () => {
      clearInterval(time);
    };
  });
  return <div className="clock">{formatTime(currentTime)}</div>;
};

export default Clock;
