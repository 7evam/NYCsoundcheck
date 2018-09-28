const express = require('express');
const views   = require('../controllers/viewController');
const artists = require('../controllers/artistController'); 
const albums  = require ('../controllers/albumController');

const artistRouter = express.Router({mergeParams:true});

artistRouter.route('/:id')
//need to also show albums where album.artist_id = artist.id AND shows where artist.id = upcoming_shows.artist.id
  .get(artists.getOneArtist, albums.getOneAlbum, views.showOneArtist, views.showOneAlbum)
  //albums.getAlbums, views.showAlbums
   //then get views.showJSON, then views.notFound (as outlined in artistRouter.use below)
  .put(artists.update, views.handleUpdate, views.badUpdate)
  .delete(artists.destroy, views.handleDestroy);

artistRouter.route('/')
  .get(artists.index, views.showArtists)
  .post(artists.create, views.handleCreateArtist, views.badCreate);

artistRouter.use(views.showJSON, views.notFound);

module.exports = artistRouter;

 // .get(artists.getOneArtist, albums.getOneAlbum, views.showOneArtist, views.showOneAlbum)