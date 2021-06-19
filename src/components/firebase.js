import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAf2xGP1pslMHvsD7H1Z-GbgQ-LflF4Bn8",
  authDomain: "ourspace-326e8.firebaseapp.com",
  projectId: "ourspace-326e8",
  storageBucket: "ourspace-326e8.appspot.com",
  messagingSenderId: "875828889657",
  appId: "1:875828889657:web:dc4b159aaa299830ec25e8",
  measurementId: "G-Y1L123X27N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
