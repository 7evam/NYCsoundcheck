const React = require('react');
const PropTypes = require('prop-types');
import DefaultLayout from './DefaultLayout';
import showAlbums from './showAlbums';
import noAlbums from '.noAlbums';


// Contrived example to show how one might use Flow type annotations

function showAlbums({albums}) {
  return (
    <div>
    <p>THERE's NO ALBUMS HERE YIIIIIIKES</p>
    </div>
  );

}

module.exports = noAlbums;