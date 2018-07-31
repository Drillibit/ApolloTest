/* globals window document */
import React from 'react';
import { hot } from 'react-hot-loader';
import { Dropdown } from '../src/components/UIKit/Dropdown/Dropdown';

/**
 *  containers imports
 */
import { FilmsListContainer } from './containers/FilmsListContainer';
import { SearchFilmContainer } from './containers/SearchFilm';

export const Application = hot(module)(() => (
  <React.Fragment>
    <Dropdown />
    <SearchFilmContainer />
    <FilmsListContainer />
  </React.Fragment>
));
