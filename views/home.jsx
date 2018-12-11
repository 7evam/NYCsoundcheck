const React = require('react');
const PropTypes = require('prop-types');
import DefaultLayout from './DefaultLayout';


// Contrived example to show how one might use Flow type annotations

function home() {
	//get artist genres into a string


  return (
  	<DefaultLayout>
  	<p className='title'>NYC Soundcheck</p>
   <img className='homeImage' src ="http://5d48184523c8a489ed05-91a4b8ed85c04e5358f91889505a4163.r43.cf1.rackcdn.com/24/6/large.jpg" />

<p class='center'>Welcome to NYC Soundcheck!</p>
<p class='center'>Explore different artists of NYC and check out their music and upcoming shows.</p>
<p class='center'>Don't see your favorite NYC artist? Add them!</p>






</DefaultLayout>
  );

}

module.exports = home;







