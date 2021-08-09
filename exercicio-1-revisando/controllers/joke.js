const express = require('express');
const JokeModel = require('../models/joke');

const JokeController = express.Router();

JokeController.get('/', async (_req, res) => {
  const joke = await JokeModel.getJokes();

  return res.render('jokeView', { joke });
});

module.exports = JokeController;
