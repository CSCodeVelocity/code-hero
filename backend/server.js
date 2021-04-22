const express = require('express');
const path = require('path');
const userRouter = require('./routes/users');
const codeBlockRouter = require('./routes/codeblocks');
const gameRouter = require('./routes/games');

const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const PORT = 3000;

// serves the static example codeblock TO REMOVE AFTER DB HAS CODEBLOCKS
app.use(express.static('data'));

// handle incoming json
app.use(express.json());

// serve bundle
app.use('/build', express.static(path.join(__dirname, '../build')));

// serve html
app.get('/', (req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../index.html'))
);
app.get('/game', (req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../index.html'))
);

// api routes
app.use('/users', userRouter);
app.use('/codeblock', codeBlockRouter);
app.use('/games', gameRouter);

// 404 handler
app.use((req, res) => res.status(404).send('This Page does not exist'));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.log);
});

io.on('connection', (client) => {
  console.log('players connected: ', io.engine.clientsCount);

  client.on('playersJoined', () => {
    io.emit('playersJoined', io.engine.clientsCount);
  });

  client.on('userRecord', (data) => {
    console.log('userRecord: ', data);
    client.broadcast.emit('opponentRecord', data);
  });

  client.on('userScore', (data) => {
    // console.log('userScore: ', data);
    client.broadcast.emit('opponentScore', data);
  });

  client.on('userWon', (data) => {
    console.log('userWon: ', data);
    client.broadcast.emit('opponentWon', data);
  });
});

server.listen(PORT, () => console.log(`listening on port ${PORT}`));
