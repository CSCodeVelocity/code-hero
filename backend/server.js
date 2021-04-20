const express = require('express');

const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const path = require('path');
const PORT = 3000;

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
