import React from 'react';
import PropTypes from 'prop-types';


const Nav = () => (
  <nav className="navbar is-danger" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <i className="fas fa-music fa-fw fa-2x" />
        NYC Soundcheck
      </a>
<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target='navMenu'>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
</a>
    </div>
    <div className="navbar-menu" id='navMenu'>
      <div className="navbar-start">
        <a className="navbar-item" role="menuitem" href="/artists">
            Artists
        </a>
         <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link" role="menuitem">
                Genres
              </div>
              <div className="navbar-dropdown">
                <a className="navbar-item" href="/genres/1/artists">Funk</a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="/genres/3/artists">Jazz</a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="/genres/4/artists">Soul</a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="/genres/11/artists">R&B</a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="/genres/2/artists">Experimental</a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="/genres/6/artists">Alt-Rock</a>
              </div>
            </div>
      </div>

      <div className="navbar-end">
       
         
            <div className="navbar-item is-hoverable">
             
                <a className = "navbar-item newArtist" href="/newArtist">Add New Artist <i class="fas fa-fw fa-plus"></i></a>
              
            </div>
      </div>
    </div>
  </nav>

);




export default Nav;