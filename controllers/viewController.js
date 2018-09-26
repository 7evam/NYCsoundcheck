module.exports = {

    showOneArtist(req, res) {
    res.json(res.locals)
  },

    showArtists(req, res) {
    res.json(res.locals)
  },

    showJSON(req, res) {
    res.json(res.locals)
  },

    notFound(err, req, res, next) {
    console.error(err);
    res.sendStatus(404);
  },

};