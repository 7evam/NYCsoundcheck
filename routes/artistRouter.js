const express = require('express');
const views   = require('../controllers/viewController');
const artists = require('../controllers/artistController'); 

const artistRouter = express.Router({mergeParams:true});

artistRouter.route('/:id')
  .get(artists.getOneArtist, views.showOneArtist) //then get views.showJSON, then views.notFound (as outlined in artistRouter.use below)
  .put(artists.update, views.handleUpdate, views.badUpdate)
  .delete(artists.destroy, views.handleDestroy);

artistRouter.route('/')
  .get(artists.index, views.showArtists)
  .post(artists.create, views.handleCreateArtist, views.badCreate);

artistRouter.use(views.showJSON, views.notFound);

module.exports = artistRouter;