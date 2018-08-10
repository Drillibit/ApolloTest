/* globals window document */
import React from 'react';
import { hot } from 'react-hot-loader';

/**
 *  containers imports
 */
import { FilmsListContainer } from './containers/FilmsListContainer';
import { SearchFilmContainer } from './containers/SearchFilm';
<<<<<<< HEAD
import { Modal } from './components/UIKit/ModalInit';
=======
import { SearchContainer } from './containers/SearchContainer';
>>>>>>> master

export const Application = hot(module)(() => (
  <React.Fragment>
    <SearchContainer />
    <SearchFilmContainer />
    <Modal />
    <FilmsListContainer />
  </React.Fragment>
));
