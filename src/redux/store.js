import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import { reducers } from './reducers';
import { rootSaga } from './rootSaga';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  connectRouter(history)(reducers),
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
    ),
  ),
);

sagaMiddleware.run(rootSaga);
