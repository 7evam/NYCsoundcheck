import React from 'react';
import PropTypes from 'prop-types';


const Nav = () => (
  <nav className="navbar is-danger" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <i className="fas fa-music fa-fw fa-2x" />
        NYC Soundcheck
      </a>

    </div>
    <div className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item" role="menuitem" href="/">
            Home
        </a>
        <a className="navbar-item" role="menuitem" href="/artists">
            Artists
        </a>
                <a className="navbar-item" role="menuitem" href="/genres">
            Genres
        </a>
      </div>

      <div className="navbar-end">
       
         
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link" role="menuitem">
                <i className="fas fa-user fa-fw" />
          
              </div>
              <div className="navbar-dropdown">
                <a className="navbar-item" href="/profile">Profile</a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="/auth/login?_method=DELETE">Logout</a>
              </div>
            </div>
         
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="button is-dark" href="/auth/login">
                    <span className="icon">
                      <i className="fas fa-sign-in-alt" />
                    </span>
                    <span>Log In</span>
                  </a>
                </p>
              </div>
            </div>
      </div>
    </div>
  </nav>

);




export default Nav;