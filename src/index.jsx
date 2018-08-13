import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';

import { films } from './redux/reducers';
import { initState } from './redux/movies/reducer';
import { filmsSaga } from './redux/movies/sagas';
import { Application } from './application';
import './components/helpers/injectGlobalStyles';

const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  connectRouter(history)(films), // new root reducer with router state
  initState,
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      sagaMiddleware
    ),
  ),
);

sagaMiddleware.run(filmsSaga);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
      <div> { /* your usual react-router v4 routing */ }
        <Switch>
          <Route exact path="/" render={() => <Application />} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
);
