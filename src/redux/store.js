import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import { reducers } from './reducers';
import { rootSaga } from './rootSaga';

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['favourites'],
  stateReconciler: autoMergeLevel2
};

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  connectRouter(history)(persistedReducer),
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
    ),
  ),
);

sagaMiddleware.run(rootSaga);

export const PERSISTOR = persistStore(store);
export const STORE = store;
