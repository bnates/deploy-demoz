'use strict';

const express = require('express');
const details = require('./middleware/details.js');
const app = express();

app.get('/test', details, (req, res) => {
  console.log('custom mw req pieces', req.details);
  res.json({ msg: 'test success' });
});

function start(port) {
  app.listen(port, () => {
    console.log(`listening on PORT ${port}`)
  });
}

// "app" -> express and your routes/middleware
// "start" -> function that starts your server and is now bound to "start", making it a method of this module
module.exports = {
  app: app,
  start: start
}