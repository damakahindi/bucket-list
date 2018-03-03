import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux'
// import { createHashHistory } from 'history';
import './styles/index.css';
import App from './components/App';
import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';
import registerServiceWorker from './registerServiceWorker';
// import firebaseInit from './helpers/firebase';
import store, { history } from './store'
// const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

class Routes extends Component {
  // constructor(props) {
  //   super(props);
  //   // firebaseInit();
  // }
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="*" component={NotFound} />
        </Router>
      </Provider>
    );
  }
}


ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
