import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TemplateDefault from '../Templates/TemplateDefault';
import MovieDetails from '../Molecules/MovieDetails';
import LoadingAnim from '../Atoms/LoadingAnim';

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    const getMovie = async () => {
      const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=44c3c47e`);
      const json = await response.json();
      setMovie(json);
    };
    getMovie(id);
  }, [id]);

  if (!movie) {
    return (
      <TemplateDefault>
        <LoadingAnim />
      </TemplateDefault>
    );
  }

  return (
    <TemplateDefault>
      <MovieDetails
        movie={movie}
      />
    </TemplateDefault>
  );
};

export default Details;
