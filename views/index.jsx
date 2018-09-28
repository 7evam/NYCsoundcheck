const React = require('react');
const PropTypes = require('prop-types');
import DefaultLayout from './DefaultLayout';

// Contrived example to show how one might use Flow type annotations

function index({artists}) {
    
  return (
  	<DefaultLayout>
   
   
      <p>
Welcome to
REACT VIEWS
      </p>


	
  
<div class="container is-fluid">
  <div class="columns is-multiline">
		{artists.map((artist) => 	
   		<div class="column is-one-third">
    	 <p class='title'>{artist.name}</p>
   		<img src={artist.img_url} />
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