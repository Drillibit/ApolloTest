import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
//Font awesome import  
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
// ////


import { films } from './redux/reducers/reducers';
import { filmsSaga } from './redux/sagas';

import { Application } from './application';
import './components/injectGlobalStyles';

 
library.add(fab, faCheckSquare, faCoffee);


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
