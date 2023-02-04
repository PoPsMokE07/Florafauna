// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDmQbEgWhMjF9iOMHR-fGBKIi-iCKrf_HU",
  authDomain: "florafauna-35729.firebaseapp.com",
  projectId: "florafauna-35729",
  storageBucket: "florafauna-35729.appspot.com",
  messagingSenderId: "239862934463",
  appId: "1:239862934463:web:a64657951aa4d81c14cf0a"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

export {auth};
export default db;