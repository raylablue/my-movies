import React from 'react';
import './FooterStyles.scss';

function Footer() {
  return (
    <footer
      className="py-3 bg-dark text-white-50 o-footer"
    >
      <div className="container-fluid text-center">
        <div className="row mx-5">
          <div className="col-sm-12 col-md-6 col-lg-3 offset-lg-3 offset-md-1 mb-sm-4">
            <small>This website is powered by the</small>
            <br />
            <a
              href="http://www.omdbapi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              omdbapi
            </a>
          </div>
          <div className="col col-lg-3">
            <a
              className="btn btn-outline-primary"
              href="https://github.com/rachel-blue/my-movies"
              role="button"
            >
              View the Source Code
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
