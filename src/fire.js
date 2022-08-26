import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD40QLASWOxKo0P8GsvBKyUqWmFYcwcynU",
  authDomain: "login-7d45f.firebaseapp.com",
  projectId: "login-7d45f",
  storageBucket: "login-7d45f.appspot.com",
  messagingSenderId: "314652594849",
  appId: "1:314652594849:web:a37ea533de66bbc310d6e0",
};

// const fire = firebase.initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { provider, auth, storage };

export default db;
