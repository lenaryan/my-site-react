import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBhHjFeA45OJPDRCXXIyn9cB5KentWuL60",
    authDomain: "metalwebdev.firebaseapp.com",
    databaseURL: "https://metalwebdev.firebaseio.com",
    projectId: "metalwebdev",
    storageBucket: "metalwebdev.appspot.com",
    messagingSenderId: "677354913245"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;