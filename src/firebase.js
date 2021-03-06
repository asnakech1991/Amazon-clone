// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyB3RhVt8RkKKlRKWH-JfJP5EQSbyIIbV-w",
  authDomain: "clone-ecbdb.firebaseapp.com",
  projectId: "clone-ecbdb",
  storageBucket: "clone-ecbdb.appspot.com",
  messagingSenderId: "790728782389",
  appId: "1:790728782389:web:9729ab1caa2f3b4fdbb77c",
  measurementId: "G-W8BLH73RMP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
