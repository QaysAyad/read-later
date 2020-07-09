import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBNGYwp9XI5C2jbsYZjOJc3ydVN-2g3vjI",
    authDomain: "readlater-708be.firebaseapp.com",
    databaseURL: "https://readlater-708be.firebaseio.com",
    projectId: "readlater-708be",
    storageBucket: "readlater-708be.appspot.com",
    messagingSenderId: "264923569873",
    appId: "1:264923569873:web:aa099d638c43334ad52ff0",
    measurementId: "G-P51ZMMNK95"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const booksRef = db.collection("books");

export default firebase;