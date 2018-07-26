import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

export const FilmsList = ({ films }) => {
  if (films.loading) return <li>Loading...</li>;
  if (films.filmsList.length === 0) return <li>Nothing found...</li>;
  return (
    <ul>
      {
        films.error
          ? <li> Error, try again</li>
          : films.filmsList.map(({ id, title }) => (<MovieCard key={id} id={id} title={title} />))
      }
    </ul>
  );
};

FilmsList.propTypes = {
  films: PropTypes.shape({
    filmsList: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired
  }).isRequired
};
