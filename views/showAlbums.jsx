const React = require('react');
const PropTypes = require('prop-types');
import DefaultLayout from './DefaultLayout';
import showAlbums from './showAlbums';
import noAlbums from '.noAlbums';


// Contrived example to show how one might use Flow type annotations

function showAlbums({albums}) {
  return (
    <div>
    <p>Here are some albums!!!!!!</p>
    </div>
  );

}

module.exports = showAlbums;