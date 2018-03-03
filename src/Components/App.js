import React from 'react';
import logo from '../images/logo.png';
import SignUp from './SignUp/SignUp';
import '../styles/App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <h1 className="App-title">Dream, Share, Discover.</h1>
    <p className="App-intro">
            Create your bucketlist, share and discover opportunities.
    </p>
    <SignUp />
  </div>
);

export default App;

