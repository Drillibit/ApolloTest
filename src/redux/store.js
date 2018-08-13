import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import { reducers } from './reducers';
import { rootSaga } from './rootSaga';

import '../components/helpers/injectGlobalStyles';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  connectRouter(history)(reducers), // new root reducer with router state
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      sagaMiddleware
    ),
  ),
);

sagaMiddleware.run(rootSaga);

