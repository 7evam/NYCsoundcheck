const { Artist, Genre } = require('../models');

module.exports = {


  async index(req, res, next) {
    try {
      res.locals.artists = await Artist.findAll({
        rejectOnEmpty: true,
        include:[ Genre ],
      });
      next();
    } catch (e) {
      next(e)

    }
  },

    async artistsOfGenre (req, res, next) {
    let filter = {};
    try {
      if ('genre_id' in req.params) {
        const { genre_id } = req.params;
        filter = { where: { genre_id:artist_id } };
      }
      res.locals.artists = await Artist.findAll({
        ...filter,
        where: {id: req.params.id},
        rejectOnEmpty: false,
      });
      next();
    } catch (e) {
      next(e);
    }
  },

    async getOneArtist(req, res, next) {
    try {
      const id = Number.parseInt(req.params.id, 10);
      res.locals.artists = await Artist.findOne({
        include: [ Genre ],
        where: { id },
        rejectOnEmpty: true,
      });
      next();
    } catch (e) {
      next(e)
    }
  },

  async create(req, res, next) {
    try {
      const { name, desc, img_url } = req.body;
      const newArtist = await Artist.create({
        name,
        desc,
        img_url,
      });
      //res.locals.artist = newArtist; //maybe
      next()
    } catch (e) {
      console.error(e);
      next(e)
    }
  },

    async update(req, res, next) {
    try {
      const id = Number.parseInt(req.params.id, 10);
      console.log("HERES THE ID RIGHT HERE>>>>>>>>>>>>>>>>>>>" + req.params.id)
      const { name, desc, img_url } = req.body;
      const [,artist] = await Artist.update({
        name,
        desc,
        img_url,
      }, {
        where: {id}
      });
      next()
    } catch (e) {
      console.error(e);
      next(e)
    }
  },
    async destroy(req, res, next) {
    try {
      const id = parseInt(req.params.id, 10)
      await Artist.destroy({
        where: {id},
      });
      next()
    } catch (e) {
      console.error(e);
      next(e);
    }
  },

};