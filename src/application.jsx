/* globals window document */
import React from 'react';
import { hot } from 'react-hot-loader';
import { ModalRegister } from './components/UIKit/ModalRegiseter';


/**
 *  containers imports
 */
import { FilmsListContainer } from './containers/FilmsListContainer';
import { SearchFilmContainer } from './containers/SearchFilm';

export const Application = hot(module)(() => (
  <React.Fragment>
    <ModalRegister />
    <SearchFilmContainer />
    <FilmsListContainer />
  </React.Fragment>
));
