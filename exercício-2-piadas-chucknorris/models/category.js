const axios = require('axios');
const url = 'https://api.chucknorris.io/jokes/categories';

const fetchCategories = async () => {
  const { data } = await axios.get(url);

  return data;
};

module.exports = {
  fetchCategories,
};
