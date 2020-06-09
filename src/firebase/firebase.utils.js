import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config ={
    apiKey: "AI zaSyAhna3B7nQ81mstk4T6NuAkXXEXNXqhBcI",
    authDomain: "estore-af814.firebaseapp.com",
    databaseURL: "https://estore-af814.firebaseio.com",
    projectId: "estore-af814",
    storageBucket: "estore-af814.appspot.com",
    messagingSenderId: "423594283514",
    appId: "1:423594283514:web:0827a50605126737809443",
    measurementId: "G-6D35CMM1M8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider  = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;