import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUN0LlPTRSpkkXHlSHRrZ8YxI63_wtYCE",
  authDomain: "read-later-cdf86.firebaseapp.com",
  databaseURL: "https://read-later-cdf86.firebaseio.com",
  projectId: "read-later-cdf86",
  storageBucket: "read-later-cdf86.appspot.com",
  messagingSenderId: "672667799800",
  appId: "1:672667799800:web:d1688455253adffd36eb0d",
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const booksRef = db.collection("books");

export default firebase;
