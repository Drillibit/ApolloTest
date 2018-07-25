import React from 'react';
import PropTypes from 'prop-types';


export const FilmsList = ({ films }) => {
  if (films.loading) return <li>Loading...</li>;
  return (
    <ul>
      {
        films.error
          ? <li> Error, try again</li>
          : films.filmsList.map(film => (<li key={film.id}>{film.title}</li>))
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
