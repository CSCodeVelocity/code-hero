import React, { useState, useEffect, useContext } from 'react';
import CodeContainer from '../components/CodeContainer.jsx';
import WaitingModal from '../components/waitingModal.jsx';
import GameHeader from '../components/gameHeader.jsx';
import RaceTrack from '../components/raceTrack.jsx';
import { AuthContext } from '../state/contexts.jsx';
import socket from '../utils/socket';
import jolteon from '../assets/jolteon.jpeg';
import leafeon from '../assets/leafeon.png';
import eevee from '../assets/eevee.jpeg';
import espeon from '../assets/espeon.png';
import umbreon from '../assets/umbreon.jpeg';
import vaporeon from '../assets/vaporeon.jpeg';

const gamePage = () => {
  // get access to username and userId
  const authContext = useContext(AuthContext);
  const { authState } = authContext;
  const { username, userId } = authState;

  const [playersJoined, setPlayersJoined] = useState(1);
  const [userRecord, setUserRecord] = useState({wins:0,losses:0})
  const [players, setPlayers] = useState([{username:'',percentage:0,timeCompleted:0,totalWins:0,totalLosses:0, winner:''}, {username:'',percentage:0,timeCompleted:0,totalWins:0,totalLosses:0, winner:''}])
  const [gameOver, setGameOver] = useState(false)

  // check for gameOver
  useEffect(() => {
    if (players[0].percentage === 100 && players[1].percentage === 100) {
      setGameOver(true)
    }
  }, [players[0].percentage,players[1].percentage])

  // update players[0]'s username to username from authState
  useEffect(() => {
    setPlayers([...players, (players[0].username = username)]);
  }, []);

  console.log(players);

  // get userRecord on initial mount
  useEffect(() => {
    // to update to feed user id from state
    fetch(`/users/${userId}`)
      .then(res => res.json())
      .then(data => setUserRecord(data));
  }, []);

  // change user's totalWins and totalLosses on initial mount and userRecord change
  useEffect(() => {
    setPlayers([...players, (players[0].totalWins = userRecord.wins)]);
    setPlayers([...players, (players[0].totalLosses = userRecord.losses)]);
  }, [userRecord]);

  useEffect(() => {
    socket.emit('playersJoined');
  }, []);

  // listening for playersJoined
  socket.on('playersJoined', data => setPlayersJoined(data));
  console.log('playersJoined: ', playersJoined);

  console.log('players:', players);

  // sends user data for other player to update player2's wins and losses, depends on players[1].username changing so second player to log in will trigger first player to emit user info
  useEffect(() => {
    socket.emit('userRecord', players[0]);
    socket.on('opponentRecord', data => {
      console.log('opponentRecord: ', data);
      setPlayers([
        ...players,
        (players[1].username = data.username),
        (players[1].totalWins = data.totalWins),
        (players[1].totalLosses = data.totalLosses),
      ]);
    });
  }, [userRecord, players[1].username]);

  // sends user data for other player to update player2's percentage and timeCompleted
  useEffect(() => {
    socket.emit('userScore', players[0]);
    socket.on('opponentScore', data => {
      console.log('opponentScore: ', data);
      setPlayers([
        ...players,
        (players[1].percentage = data.percentage),
        (players[1].timeCompleted = data.timeCompleted),
      ]);
    });
  }, [players[0].percentage, players[0].timeCompleted]);

  // sends user data for winner
  useEffect(() => {
    if (players[0].percentage === 100 && players[0].winner ==='') {
      setPlayers([...players, (players[0].winner = players[0].username),(players[1].winner = players[0].username)])
    
      socket.emit('userWon', players[0].winner);
      socket.on('opponentWon', data => {
        console.log('opponentWon: ', data);
        setPlayers([
          ...players,
          (players[0].winner = data),
          (players[1].winner = data),
        ]);
      });
    }
  }, [players[0].percentage]);

  socket.on('opponentWon', data => {
    console.log('opponentWon: ', data);
    setPlayers([
      ...players,
      (players[0].winner = data),
      (players[1].winner = data),
    ]);
  });

  // get random eevees for raceTrack
  const eevees = [eevee, espeon, jolteon, leafeon, umbreon, vaporeon];

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const raceTrackArray = [];
  for (let i = 0; i < 2; i++) {
    raceTrackArray.push(
      <RaceTrack
        pokemon={eevees[getRandom(0, 6)]}
        percentage={players[i].percentage}
        username={players[i].username}
        gameOver={gameOver}
        players={players}
        key={players[i].username}
      />
    );
  }

  // conditional rendering depending on number of players in the room
  if (playersJoined < 2) {
    return (
      <div>
        <WaitingModal playersJoined={playersJoined} />
      </div>
    );
  } else {
    return (
      <div>
        <GameHeader
          userRecord={userRecord}
          username={players[0].username}
          timeCompleted={players[0].timeCompleted}
          percentage={players[0].percentage}
          playersState={players}
          setPlayersState={setPlayers}
        />
        <div className="trackBox">{raceTrackArray}</div>
        <CodeContainer playersState={players} setPlayersState={setPlayers} />
      </div>
    );
  }
};

export default gamePage;
