/* globals window document */
import React from 'react';
import { hot } from 'react-hot-loader';

/**
 *  containers imports
 */
import { FilmsListContainer } from './containers/FilmsListContainer';
import { SearchFilmContainer } from './containers/SearchFilm';
import { SearchContainer } from './containers/SearchContainer';

export const Application = hot(module)(() => (
  <React.Fragment>
    <SearchContainer />
    <SearchFilmContainer />
    <FilmsListContainer />
  </React.Fragment>
));
