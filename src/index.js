import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
// import { createHashHistory } from 'history';
import './styles/index.css';
import App from './Components/App';
import Dashboard from './Components/Dashboard/Dashboard';
import NotFound from './Components/NotFound/NotFound';
import registerServiceWorker from './registerServiceWorker';
import firebaseInit from './helpers/firebase';

// const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

class Routes extends Component {
  constructor(props) {
    super(props);
    firebaseInit();
  }
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="*" component={NotFound} />
      </Router>
    );
  }
}


ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
