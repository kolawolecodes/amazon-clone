import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDODkao8uEfsWgDHYfdceHfRsaJ8fpX1ec",
    authDomain: "myclone-affed.firebaseapp.com",
    projectId: "myclone-affed",
    storageBucket: "myclone-affed.appspot.com",
    messagingSenderId: "985619371054",
    appId: "1:985619371054:web:203ac993c2b1b9eea17bbf"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };