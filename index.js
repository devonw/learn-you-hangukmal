const express = require('express');
const bodyParser = require('body-parser')

const Phrases = require('./middleware/phraseHandlers')
const logger = require('./middleware/logger');

const PORT = 1337;
const IP = '127.0.0.1';
const app = express();


app.use(logger);
//serve static assests
app.use(bodyParser.json());
app.use('/client', express.static(__dirname + '/client'));

app.get('/phrases', Phrases.getAll);
app.post('/phrases', Phrases.addOne);

app.get('/phrases/:id', Phrases.getOneByID);

//serve index.html on GET /
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});


app.listen(PORT, () => {
  console.log(`learn-you-hangukaml express edition is listening on port ${PORT}`);
});