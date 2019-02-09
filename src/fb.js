import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyClW8sOFscn0x0hHggOpaT_O4kTirpGP3M",
  authDomain: "dailyexpenses-74231.firebaseapp.com",
  databaseURL: "https://dailyexpenses-74231.firebaseio.com",
  projectId: "dailyexpenses-74231",
  storageBucket: "dailyexpenses-74231.appspot.com",
  messagingSenderId: "582639288170"
};
firebase.initializeApp(config);

// const db = firebase.firestore();

// make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.functions();

// db.settings({ timestampsInSnapshots: true });
export {auth, db, functions};