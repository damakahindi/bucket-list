import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import google from '../../images/google.svg';
import { saveUser, fetchSectionsIfUserExists } from '../../actions'
import '../../styles/App.css';

class SignUp extends Component {
  handleGoogle = (e) => {
    const { dispatch } = this.props
    if (e.error) {
      return;
    }
    dispatch(saveUser(e.profileObj))
    browserHistory.push('/dashboard')
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

SignUp = connect()(SignUp) 

export default SignUp;
