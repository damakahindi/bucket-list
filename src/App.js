import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1 className="App-title">Dream Share Discover</h1>
        <p className="App-intro">
          Create your bucketlist, share and discover opportunities.
        </p>
      </div>
    );
  }
}

export default App;
