import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyB5GM5O-83dROE1kXMTAqJYagumrO12mT8",
    authDomain: "react-movies-9407d.firebaseapp.com",
    projectId: "react-movies-9407d",
    storageBucket: "react-movies-9407d.appspot.com",
    messagingSenderId: "345445262575",
    appId: "1:345445262575:web:9badf2492c3aca0435e71a"
};


firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;