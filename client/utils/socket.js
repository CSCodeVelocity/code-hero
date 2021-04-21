import { io } from 'socket.io-client';

const socket = io();

socket.on('connect', () => {
  console.log('socket connected: ', socket.connected);
});

socket.on('test', (data) => {
  console.log('number of players: ', data);
});

export default socket;
