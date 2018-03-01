/* global document window */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import './styles/index.css';
import App from './Components/App';
import Dashboard from './Components/Dashboard/Dashboard';
import NotFound from './Components/NotFound/NotFound';
import registerServiceWorker from './registerServiceWorker';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

const routes = (
  <Router history={appHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="*" component={NotFound} />
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
