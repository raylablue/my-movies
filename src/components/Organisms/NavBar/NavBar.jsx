import React from 'react';
import './NavBarStyles.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../../Atoms/SearchBar';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm o-nav-bar__filmstrip">

      <a className="navbar-brand" href="/gallery">
        <FontAwesomeIcon
          className="fas fa-ticket-alt"
          icon={faTicketAlt}
        />
      </a>

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

      <SearchBar />

    </nav>
  );
}

export default NavBar;
