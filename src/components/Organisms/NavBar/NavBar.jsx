import React from 'react';
import './NavBarStyles.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../../Atoms/SearchBar';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm o-nav-bar__filmstrip mb-4">

      <div className="row">

        <div className="col-2">
          <a className="o-nav-bar__ticket-logo mx-4 my-1" href="/">
            <FontAwesomeIcon
              className="fa-4x fas fa-ticket-alt"
              data-fa-transform="shrink-10 up-5"
              icon={faTicketAlt}
              id="ticket"
            />
          </a>
        </div>

        <div className="col-lg-4 col-sm-2">
          <ul className="navbar-nav mr-auto">
            <li className="o-nav-bar__nav-item">
              <NavLink
                to="/gallery"
                className="nav-link"
                activeClassName="chosen"
              >
                Gallery
              </NavLink>
            </li>
            <li className="o-nav-bar__nav-item">
              <NavLink
                to="/fav"
                className="nav-link"
                activeClassName="chosen"
              >
                Favourites
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="col-lg-6 offset-md-2 offset-sm-2 offset-lg-0 col-sm-2">
          <SearchBar />
        </div>

      </div>

    </nav>
  );
}

export default NavBar;
