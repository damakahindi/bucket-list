import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

let middlewares = [thunk]
const loggerMiddleware = createLogger();
const store = createStore(
  reducers, applyMiddleware(...middlewares, loggerMiddleware)
);

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
