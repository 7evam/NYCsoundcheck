const { Artist, Genre } = require('../models');

module.exports = {


  async index(req, res, next) {
    try {
      res.locals.genres = await Genre.findAll({
        rejectOnEmpty: true,
      });
      next();
    } catch (e) {
      next(e)

    }
  },

    async getOneGenre(req, res, next) {
    try {
      const id = Number.parseInt(req.params.id, 10);
      res.locals.genres = await Genre.findOne({
        where: { id },
        rejectOnEmpty: true,
      });
      next();
    } catch (e) {
      next(e)

    }
  },
    async getArtistsGenre(req, res, next) {
    try {
      const id = Number.parseInt(req.params.id, 10);
      res.locals.genres = await Genre.findOne({
        where: { id: req.params.id },
        rejectOnEmpty: false,
      });
      next();
    } catch (e) {
      next(e)

    }
  },
    async create(req, res, next) {
    try {
      const { name } = req.body;
      const newGenre = await Genre.create({
        name,
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
      const { name } = req.body;
      const [,genre] = await Genre.update({
        name,
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
      await Genre.destroy({
        where: {id},
      });
      next()
    } catch (e) {
      console.error(e);
      next(e);
    }
  },


};