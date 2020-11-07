import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDs0n7vULLY1oPXHbv99DQEiYUgl9nYbMs",
    authDomain: "discord-clone-eb0dd.firebaseapp.com",
    databaseURL: "https://discord-clone-eb0dd.firebaseio.com",
    projectId: "discord-clone-eb0dd",
    storageBucket: "discord-clone-eb0dd.appspot.com",
    messagingSenderId: "992968212277",
    appId: "1:992968212277:web:533ac626a50acb5424567c",
    measurementId: "G-915C85LBKX"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;