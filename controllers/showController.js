const { Artist, Show } = require('../models');

module.exports = {

    async getAllShows(req, res, next) {
    try {
      const id = Number.parseInt(req.params.id, 10);
      res.locals.shows = await Show.findOne({
        include: [{
          model: Artist,
          where: {
            id: id
          },
          rejectOnEmpty: false,
        }]
      });
      next();
    } catch (e) {
      next(e)
    }
  },
}