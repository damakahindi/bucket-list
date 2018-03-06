import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import './styles/index.css';
import App from './components/App';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import registerServiceWorker from './registerServiceWorker';
import store, { history } from './store';

const Routes = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>
);


ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
