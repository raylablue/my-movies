import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../Organisms/NavBar/NavBar';
import Footer from '../Organisms/Footer/Footer';

const TemplateDefault = ({
  children,
}) => (
  <>
    <NavBar />

    <div className="container">
      {children}
    </div>

    <Footer />
  </>
);

TemplateDefault.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TemplateDefault;
