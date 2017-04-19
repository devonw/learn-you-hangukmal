const express = require('express');

const phrases = require('./data/phrases');

const PORT = 1337;
const IP = '127.0.0.1';
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

//serve static assests
app.use('/client', express.static(__dirname + '/client'));


app.listen(PORT, () => {
  console.log(`learn-you-hangukaml express edition is listening on port ${PORT}`);
});