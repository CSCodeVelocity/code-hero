const express = require('express');

const app = express();
// const server = require('http').createServer(app);
// const io = require('socket.io')(server);
const path = require('path');
const PORT = 3000;

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
