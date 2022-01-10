import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD-QK-qhz8Db-obdO8D-HoHR3uAPIzv6ok",
    authDomain: "challenge-a1fca.firebaseapp.com",
    databaseURL: "https://challenge-a1fca.firebaseio.com",
    projectId: "challenge-a1fca",
    storageBucket: "challenge-a1fca.appspot.com",
    messagingSenderId: "250526759061",
    appId: "1:250526759061:web:f9fd901d99176ea7ecc39c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };