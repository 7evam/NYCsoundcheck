module.exports = {

     showOneArtist(req, res) {
      res.format({
        json(){
          res.json(res.locals);
        },
        html(){
          res.render('showArtist');
        }
      });
  },

 showArtistsGenre(req, res) {
    res.json(res.locals)
  },

    showOneGenre(req, res) {
    res.json(res.locals)
  },

    showArtistsOfGenre(req, res) {
     res.format({
        json(){
          res.json(res.locals);
        },
        html(){
          res.render('artistsOfGenre');
        }
      });
  },

  showOneAlbum(req, res) {
    res.json(res.locals)
  },

  showAllShows(req,res){
    res.json(res.locals)
  },

    showArtists(req, res) {
      res.format({
        json(){
          res.json(res.locals);
        },
        html(){
          res.render('index');
        }
      });
  },

  showEditPage(req, res) {
   res.render('editArtist')
},

    showGenres(req, res) {
    res.json(res.locals)
  },


    showJSON(req, res) {
    res.json(res.locals)
  },

    notFound(err, req, res, next) {
    console.error(err);
    res.sendStatus(404);
  },

    handleUpdate(req, res) {
    res.redirect('.')
  },

    badUpdate(req, res) {
    console.error(err);
    res.sendStatus(401);
  },

    handleDestroy(req, res) {
    res.redirect('.');
  },

   handleCreateArtist(req, res) {
    res.redirect('./artists');
    // res.send(`/artists/${res.locals.id}`)
  },
    handleCreateGenre(req, res) {
    console.log(res.locals);
    res.send('you did it');
    // res.send(`/artists/${res.locals.id}`)
  },
  badCreate(err, req, res, next) {
    console.error(err);
    res.sendStatus(401);
  },

};