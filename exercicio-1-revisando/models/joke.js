const axios = require('axios');

const url = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single';

const getJokes = async () => {
  const { data } = await axios.get(url);

  return data.joke;
};

module.exports = {
  getJokes,
};
