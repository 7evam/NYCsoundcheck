const { Show } = require('../models');

module.exports = {

    async getAllShows(req, res, next) {
    try {
      const id = Number.parseInt(req.params.id, 10);
      res.locals.shows = await Show.findAll({
        where: {id: req.params.id },
        rejectOnEmpty: false,
      });
      next();
    } catch (e) {
      next(e)

    }
  },
}