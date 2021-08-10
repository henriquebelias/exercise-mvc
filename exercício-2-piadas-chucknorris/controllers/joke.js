const express = require('express');
const JokeModel = require('../models/joke');
const JokeRoute = express.Router();

JokeRoute.get('/jokes', async (_req, res) => {
  const joke = await JokeModel.getRandomJoke();

  return res.render('joke', { joke });
});

JokeRoute.get('/jokes/:category', async (req, res) => {
  const { category } = req.params;
  const joke = await JokeModel.getJokeByCategory(category);

  return res.render('joke', { joke });
});

module.exports = JokeRoute;
