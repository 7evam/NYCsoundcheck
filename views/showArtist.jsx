const React = require('react');
const PropTypes = require('prop-types');
import DefaultLayout from './DefaultLayout';


// Contrived example to show how one might use Flow type annotations

function showArtist({artists, id, albums}) {
	//get artist genres into a string
	let artistGenres = [];
	for(let i=0;i<artists.genres.length;i++){
		artistGenres.push(artists.genres[i].name+ " ")
	}

	//artist album info
	let showAlbumInfo = "uh oh default";
	if(albums==null){
		showAlbumInfo = "There are no albums to show here!"
	} else {
		showAlbumInfo = albums.name
	}


  return (
  	<DefaultLayout>
   
   
      <p>
Welcome to REACT VIEWS
      </p>

      <div className='content'>
      	<p className='title'>{artists.name}</p>
      	<img src={artists.img_url} />
      	<p>{artists.desc}</p>
      	<p>{artists.genres[0].name}</p>
      	<p> 
      	{artistGenres}</p>
      	<p>{showAlbumInfo}</p>


      
      
   </div>
      		
      	
 
  
     

</DefaultLayout>
  );

}

module.exports = showArtist;