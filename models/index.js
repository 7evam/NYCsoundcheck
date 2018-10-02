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
    unique: true,
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
    unique: true,
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


const Show = db.define('show', {
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

Show.belongsToMany(Artist, { through: 'artist_show_xref'});
Artist.belongsToMany(Show, { through: 'artist_show_xref'});

Genre.belongsToMany(Artist, { through: 'artist_genre_xref'});
Artist.belongsToMany(Genre, { through: 'artist_genre_xref'});


Artist.hasMany(Album);
Album.belongsTo(Artist);




module.exports = {
	Artist, 
	Genre, 
	Album, 
	Show, 
	db,
};


