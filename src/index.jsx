import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';


import { films } from './redux/reducers/reducers';
import { filmsSaga } from './redux/sagas';

import { Application } from './application';
import './components/injectGlobalStyles';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  films,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(filmsSaga);

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root')
);
