import React from 'react';
import './FooterStyles.scss';

function Footer() {
  return (
    <footer
      className="py-3 bg-dark text-white-50 o-footer"
    >
      <div className="container text-center">
        <small>This website is powered by the</small>
        <br />
        <a href="http://www.omdbapi.com/">omdbapi</a>
      </div>
    </footer>
  );
}

export default Footer;
