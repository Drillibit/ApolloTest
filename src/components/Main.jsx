import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';

import { Content } from './Content';
import { Header } from './Header';
import { MoviePage } from './MoviePage';
import { Footer } from './UIKit/Footer';
import { SmallText } from './UIKit/Typography';

export const Main = () => (
  <Fragment>
    <Header />
    <Switch>
      <Route exact path="/" component={Content} />
      <Route path="/movie/:id" component={MoviePage} />
    </Switch>
    <Footer>
      <SmallText>2018, Все права защищены</SmallText>
    </Footer>
  </Fragment>
);

Main.propTypes = {
};

Main.defaultProps = {
};
