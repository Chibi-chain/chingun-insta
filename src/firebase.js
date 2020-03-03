import firebase from 'firebase/app';
import 'firebase/firestore';

var config = {
    apiKey: "AIzaSyBTXkCZqMcQcjhhfeJFVCaRmsyXIM6NEmE",
    authDomain: "instagram-story-of-chingun.firebaseapp.com",
    databaseURL: "https://instagram-story-of-chingun.firebaseio.com",
    projectId: "instagram-story-of-chingun",
    storageBucket: "instagram-story-of-chingun.appspot.com",
    messagingSenderId: "351246634092",
    appId: "1:351246634092:web:4d3e86e6cdfdb5f0efdc49",
    measurementId: "G-SQFRHQLC5Y"
  };

  firebase.initializeApp(config);

  export default firebase.firestore();