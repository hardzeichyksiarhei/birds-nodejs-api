const express = require('express');
const cors = require('cors');
const app = express();

const birdRouter = require('./resources/birds/bird.router');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
      res.send('Service is running!');
      return;
    }
    next();
  });

app.use('/birds', birdRouter);

module.exports = app;