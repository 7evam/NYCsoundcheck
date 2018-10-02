const express = require('express');
const views   = require('../controllers/viewController');
const genres = require('../controllers/genreController');


const genreRouter = express.Router({ mergeParams: true });

genreRouter.route('/:id/artists')
 .get(genres.getArtistsGenre, genres.getOneGenre, views.showArtistsOfGenre) //  then get views.showJSON, then views.notFound (as outlined in artistRouter.use below)
  .put(genres.update, views.handleUpdate, views.badUpdate)
  .delete(genres.destroy, views.handleDestroy);

  genreRouter.route('/')
  .get(genres.index, views.showGenres)
  .post(genres.create, views.handleCreateGenre, views.badCreate);

genreRouter.use(views.showJSON, views.notFound);

module.exports = genreRouter