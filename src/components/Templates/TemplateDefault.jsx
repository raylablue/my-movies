import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../Organisms/NavBar/NavBar';
import Footer from '../Organisms/Footer/Footer';

const TemplateDefault = ({ children }) => (
  <>
    <div className="content">
      <NavBar />

      <div className="container t-template-default__content py-5">
        {children}
      </div>
    </div>

    <Footer />
  </>
);

TemplateDefault.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TemplateDefault;
