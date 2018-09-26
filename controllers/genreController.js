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


};