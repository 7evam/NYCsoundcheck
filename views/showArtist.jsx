const React = require('react');
const PropTypes = require('prop-types');
import DefaultLayout from './DefaultLayout';


// Contrived example to show how one might use Flow type annotations

function showArtist({artists, id, albums}) {
	//get artist genres into a string
	let artistGenres = [];
	for(let i=0;i<artists.genres.length;i++){
		artistGenres.push(<span class='tag is-info is-large'> {artists.genres[i].name} </span>)
	}

	//artist album info
	let showAlbumInfo = "uh oh default";
	if(albums==null){
		showAlbumInfo = "There are no albums to show here!"
	} else {
		showAlbumInfo = (<div><p>{albums.name}</p> <img className ="albumImage" src={albums.img_url} /> </div>)
		//console.log("Number of albums" + albums.name)
		// showAlbumInfo = <img class="albumImage" src={artists.img_url} />
	}


  return (
  	<DefaultLayout>
   
   
      <p>
Welcome to REACT VIEWS
      </p>

      <div className='content'>
      	<p className='title'>{artists.name}</p>
      	<img className ="showImage" src={artists.img_url} />
      	<p class='desc'>{artists.desc}</p>
      	<hr />
      	<h4>Genres:</h4>
      	{artistGenres}
      	<hr />
      	<h4>Albums</h4>
      	<p>{showAlbumInfo}</p>

      	<hr />
      	<h4>Upcoming Shows</h4>


      
      
   </div>
      		
      	
 
  
     

</DefaultLayout>
  );

}

module.exports = showArtist;