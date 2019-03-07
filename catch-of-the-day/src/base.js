import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD7MuktQUcopQJQfwOfFXSSiTzM_WMsnU4",
  authDomain: "catch-of-the-day-em-estabillo.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-em-estabillo.firebaseio.com"  
});

const base = Rebase.createClass(firebaseApp.database());

//This is a named export
export { firebaseApp };

//this is a default export
export default base;