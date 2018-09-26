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


};