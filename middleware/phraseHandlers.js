const phrases = require('../data/phrases');


function getAll(req, res){
  res.json(phrases);
}

function addOne(req, res) {
  let newPhrase = req.body;
  newPhrase.id = phrases.length;
  phrases.push(newPhrase);

  res.json(newPhrase);
}

function getOneByID(req, res){
  let phraseId = req.params.id;
  res.json(phrases[phraseId]);
}

module.exports = {
  getAll: getAll,
  addOne: addOne,
  getOneByID: getOneByID
}