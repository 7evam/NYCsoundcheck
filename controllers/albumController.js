const { Artist, Album } = require('../models');

module.exports = {

    async getOneAlbum(req, res, next) {
    try {
      const id = Number.parseInt(req.params.id, 10);
      res.locals.albums = await Album.findOne({
        where: { id },
        include: [Artist],
        rejectOnEmpty: false,
      });
      next();
    } catch (e) {
      next(e)

    }
  },
}

//