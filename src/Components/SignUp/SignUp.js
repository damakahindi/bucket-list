import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import google from '../../images/google.svg';
import '../../styles/App.css';

class SignUp extends Component {
  handleGoogle(e) {
    if (e.error) {
      console.log('HERe', e);
      return;
    }
    console.log('You were successful Letting you in ');
    // go to the other page
  }
  render() {
    return (
      <GoogleLogin
        clientId="494574908988-eom8fhp3olniqkbbv1uvvav0mjoqk1gs.apps.googleusercontent.com"
        onSuccess={this.handleGoogle}
        onFailure={this.handleGoogle}
        className="Action-Call"
      >
        <img src={google} className="App-google" alt="google" />
            Sign in with Google
      </GoogleLogin>
    );
  }
}

export default SignUp;
