const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Works on my.');
});


module.exports = app;