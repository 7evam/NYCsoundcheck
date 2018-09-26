const express = require('express');
const views   = require('../controllers/viewController');
const genres = require('../controllers/genreController'); 

const genreRouter = express.Router({mergeParams:true});

genreRouter.route('/:id')
  .get(genres.getOneGenre, views.showOneGenre) //then get views.showJSON, then views.notFound (as outlined in artistRouter.use below)

  genreRouter.route('/')
  .get(genres.index, views.showGenres)

genreRouter.use(views.showJSON, views.notFound);

module.exports = genreRouter;