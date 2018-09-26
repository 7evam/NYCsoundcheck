const Sequelize = require('sequelize');

const db = new Sequelize({
  database: 'nyc_soundcheck',
  dialect:  'postgres',
  define:   {
    underscored:   true,
    returning:     true,
  },
});

const Artist = db.define('artist', {
  name: {
    type:      Sequelize.STRING(128),
    allowNull: false,
  },
  desc: {
  	type: 		Sequelize.TEXT,
  	allowNull: 	false,
  },
  img_url: {
  	type: 		Sequelize.TEXT,
  	allowNull: 	false,
  },
});

const Genre = db.define('genre', {
  name: {
    type:      Sequelize.STRING(64),
    allowNull: false,
  },
});

const Album = db.define('album', {
  name: {
    type:      Sequelize.STRING(128),
    allowNull: false,
  },
  img_url: {
  	type: 		Sequelize.TEXT,
  	allowNull: 	false,
  },
});

const Upcoming_show = db.define('upcoming_show', {
  date: {
    type:     Sequelize.DATEONLY,
    allowNull:  false,
  },
  venue: {
    type:      Sequelize.STRING(64),
    allowNull: false,
  },
});

//associations

Upcoming_show.belongsToMany(Artist, { through: 'artist_show_xref'});
Artist.belongsToMany(Upcoming_show, { through: 'artist_show_xref'});

Genre.belongsToMany(Artist, { through: 'artist_genre_xref'});
Artist.belongsToMany(Genre, { through: 'artist_genre_xref'});


Artist.hasMany(Album);
Album.belongsTo(Artist);


module.exports = {
	Artist, 
	Genre, 
	Album, 
	Upcoming_show, 
	db,
};


