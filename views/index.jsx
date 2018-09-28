const React = require('react');
const PropTypes = require('prop-types');
import DefaultLayout from './DefaultLayout';

// Contrived example to show how one might use Flow type annotations

function index({artists}) {
    
  return (
  	<DefaultLayout>
    <div>
   
      <p>
Welcome to
REACT VIEWS
      </p>

   
      	{artists.map(artist => <p> <img src={artist.img_url} height='200px'/> - {artist.name}</p>)}

   
  
     
</div>
</DefaultLayout>
  );

}

module.exports = index;

//everything goes into props

//or you can restructure {artists}