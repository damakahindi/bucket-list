import { createStore, applyMiddleware } from 'redux';
import { SyncHistoryWithStore } from 'react-router-redux';
import { hashHistory, createLogger } from 'redux-logger';
// import thunk from 'redux-thunk';
import reducers from './reducers/index';

// Logger Middleware
const loggerMiddleware = createLogger();
const store = createStore(
  reducers, applyMiddleware(loggerMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export const history = SyncHistoryWithStore(hashHistory, store);
export default store;
