import * as firebase from 'firebase';

// eslint-disable-next-line
let database;
const firebaseInit = () => {
  const config = {
    apiKey: 'AIzaSyD1bEiEOL4wDBODsonrQ3Dpmar-k94NnOM',
    authDomain: 'bucket-list-6d169.firebaseapp.com',
    databaseURL: 'https://bucket-list-6d169.firebaseio.com',
    storageBucket: 'bucket-list-6d169.appspot.com',
    messagingSenderId: '638617831247',
  };
  firebase.initializeApp(config);
  database = firebase.database();
};

export default firebaseInit;
