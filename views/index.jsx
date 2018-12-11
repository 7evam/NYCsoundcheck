const React = require('react');
const PropTypes = require('prop-types');
import DefaultLayout from './DefaultLayout';


function ArtistIndex({artists,genres, title}) {
  return(
  	<DefaultLayout>
      <div className="container is-fluid">
       <div className="columns is-multiline">
		    {artists.map((artist) =>
          <div className="column is-one-third">
    	     <a href={'/artists/'+artist.id} className='title'>{artist.name}</a> <img src={artist.img_url} />
     	    </div>
	       )}
      </div>
    </div>
</DefaultLayout>
)

}

module.exports = ArtistIndex;


