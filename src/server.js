`use strict`;

const express  = require('express');
const app = express();
const logger = require('./middleware/logger.js');

app.use(express.json());
// app.use(logger);

app.get('/person', handlePerson);

function handlePerson(req, res){
  let { name } = req.body;
}

module.exports = {
  app,
  start: port => {
    app.listen(port, () => console.log('Server is up')
    )}

};