/* globals window document */
import React from 'react';
import { hot } from 'react-hot-loader';

/**
 *  containers imports
 */
import { FilmsListContainer } from './containers/FilmsListContainer';
import { SearchFilmContainer } from './containers/SearchFilm';
import { Modal } from './components/UIKit/ModalInit';

export const Application = hot(module)(() => (
  <React.Fragment>
    <SearchFilmContainer />
    <Modal />
    <FilmsListContainer />
  </React.Fragment>
));
