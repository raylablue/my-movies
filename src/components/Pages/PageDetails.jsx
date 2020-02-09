import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from '../Organisms/NavBar/NavBar';
import Footer from '../Organisms/Footer/Footer';
import { setMovies } from '../../redux/actions';

const getMovies = async () => {
  const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=44c3c47e');
  return response.json();
};

const Details = ({ dispatch }) => {
  // const { id } = useParams();
  const [imdbid, setImdbid] = useState();


  useEffect(() => {
    getMovies()
      // eslint-disable-next-line consistent-return
      .then(({ imdbID }) => {
        try {
          dispatch(setMovies(imdbID));
          setImdbid(imdbID);
        } catch (error) {
          return error;
          // console.log(error);
        }
      });
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <div className="ml-4 my-3 container-fluid">
        <h2>{imdbid}</h2>
      </div>
      <Footer />
    </>
  );
};

Details.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const DetailsConnect = connect()(Details);

export default DetailsConnect;
