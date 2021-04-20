const express = require('express');

const app = express();
const path = require('path');
const PORT = 3000;

// handle incoming json
app.use(express.json());

// serve bundle
app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// api routes
//app.use('/users', userRouter)

// 404 handler
app.use((req, res) => res.status(404).send('This Page does not exist')

// Global error handler
app.use(err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err)
  return res.status(errorObj.status).json(errorObj.message)
}


app.listen(PORT, () => console.log(`listening on port ${PORT}`));
