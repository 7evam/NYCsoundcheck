const React = require('react');
const PropTypes = require('prop-types');
import DefaultLayout from './DefaultLayout';


// Contrived example to show how one might use Flow type annotations

function index({artists,genres, title}) {
		

  return (
  	<DefaultLayout>
<div className="container is-fluid">
  <div className="columns is-multiline">
		{artists.map((artist) => 

   		<div className="column is-one-third">
    	 <a href={'http://localhost:3100/artists/'+artist.id} className='title'>{artist.name}</a> <img src={artist.img_url} />
     	</div>	
	)}	
</div>	 
</div>
   
  
     

</DefaultLayout>
  );

}

module.exports = index;

//everything goes into props

//or you can restructure {artists}