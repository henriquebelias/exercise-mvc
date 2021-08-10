const express = require('express');
const CategoryModel = require('../models/category');
const CategoryRoute = express.Router();

CategoryRoute.get('/categories', async (_req, res) => {
  const categories = await CategoryModel.fetchCategories();

  return res.render('categories', { categories });
});

CategoryRoute.get('/', (_req, res) => {
  return res.redirect('/categories');
});

module.exports = CategoryRoute;
