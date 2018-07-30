/* globals window document */
import React from 'react';
import { hot } from 'react-hot-loader';
import { ModalButton } from './components/UIKit/ModalButton/ModalButton';


/**
 *  containers imports
 */
import { FilmsListContainer } from './containers/FilmsListContainer';
import { SearchFilmContainer } from './containers/SearchFilm';

export const Application = hot(module)(() => (
  <React.Fragment>
    <ModalButton />
    <SearchFilmContainer />
    <FilmsListContainer />
  </React.Fragment>
));
