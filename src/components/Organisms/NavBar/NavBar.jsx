import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <a className="navbar-brand" href="/">
        <FontAwesomeIcon
          className="fas fa-ticket-alt"
          icon={faTicketAlt}
        />
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/fav">Favourites</Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
