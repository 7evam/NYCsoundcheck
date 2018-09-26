const { Artist, Genre } = require('../models');

module.exports = {


  async index(req, res, next) {
    try {
      res.locals.artists = await Artist.findAll({
        rejectOnEmpty: true,
      });
      next();
    } catch (e) {
      next(e)

    }
  },

    async getOneArtist(req, res, next) {
    try {
      const id = Number.parseInt(req.params.id, 10);
      res.locals.artists = await Artist.findOne({
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
        name: name,
        desc: desc,
        img_url: img_url,
      });
      next()
    } catch (e) {
      console.error(e);
      next(e)
    }
  },
    async update(req, res, next) {
    try {
      const id = parseInt(req.params.id, 10);
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