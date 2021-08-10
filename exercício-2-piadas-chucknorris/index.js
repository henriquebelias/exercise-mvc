const express = require('express');
const path = require('path');
const CategoryController = require('./controllers/category');
const JokeController = require('./controllers/joke');

const PORT = 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(CategoryController);
app.use(JokeController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
