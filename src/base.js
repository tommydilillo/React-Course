import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA-kRsKMsbaKHEAtIlCN-6CbfkiGTXPK8M",
    authDomain: "catch-of-the-day-tommyd.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-tommyd.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;