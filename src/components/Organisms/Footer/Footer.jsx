import React from 'react';
import './FooterStyles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className="card mb-3 bg-dark p-4">
      <div className="row no-gutters">

        <a
          className="navbar-brand"
          href="/gallery"
        >
          <FontAwesomeIcon
            className="fas fa-ticket-alt"
            icon={faTicketAlt}
          />
        </a>

        <div className="card-body mx-4">
          <p className="card-text o-footer__p-text">
            This is a footer, a place for feets.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Footer;
