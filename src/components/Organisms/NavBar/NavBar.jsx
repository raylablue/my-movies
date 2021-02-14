import React, { useEffect, useState } from 'react';
import './NavBarStyles.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../../Atoms/SearchBar';

function NavBar() {
  const [collapse, setCollapse] = useState();
  const [toggleClass, setToggleClass] = useState('');
  const [toggleAria, setToggleAria] = useState('');
  const [navClass, setNavClass] = useState('');

  const updateToggleClass = (isActive) => {
    if (isActive) {
      setToggleClass('navbar-toggler collapsed');
      setToggleAria('false');
      setNavClass('navbar-collapse collapse');
      return;
    }
    setToggleClass('navbar-toggler');
    setToggleAria('true');
    setNavClass('navbar-collapse collapse show');
  };

  useEffect(() => {
    const initialToggleValue = true;
    setCollapse(initialToggleValue);
    updateToggleClass(initialToggleValue);
  }, []);

  const toggleClick = () => {
    const newToggleValue = !collapse;
    setCollapse(newToggleValue);
    updateToggleClass(newToggleValue);
  };

  return (
    <nav className="navbar navbar-expand-lg o-nav-bar__filmstrip px-2">
      <NavLink
        to="/"
        className="o-nav-bar__ticket-logo"
      >
        <FontAwesomeIcon
          className="fa-5x fas fa-ticket-alt mr-4 py-0 pl-1"
          icon={faTicketAlt}
        />
      </NavLink>
      <button
        className={`${toggleClass} p-1`}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded={toggleAria}
        aria-label="Toggle navigation"
        onClick={toggleClick}
      >
        <FontAwesomeIcon
          className="fa-3x fas fa-bars o-nav-bar__bars"
          icon={faBars}
        />
      </button>

      <div
        className={navClass}
      >
        <ul className="navbar-nav mr-auto o-nav-bar__nav-width pl-1">
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
      </div>
    </nav>
  );
}

export default NavBar;
