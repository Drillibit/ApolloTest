/* globals window document */
import React from 'react';
import { hot } from 'react-hot-loader';

import './assets/css/styles.css';
import './assets/scss/styles.scss';

/**
 *  containers imports
 */
import { BannerContainer } from './containers/BannerContainer';
import { FilmsListContainer } from './containers/FilmsListContainer';
import { SearchFilmContainer } from './containers/SearchFilm';

export const Application = hot(module)(() => (
  <React.Fragment>
    <h1 className="title">React Starter Template</h1>
    <p>Build with Webpack 4</p>
    <BannerContainer />
    <SearchFilmContainer />
    <FilmsListContainer />
  </React.Fragment>
));
