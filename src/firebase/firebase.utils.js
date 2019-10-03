import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyANgVn3sH3lVarn8_A5AL-ueQXPzLTsNg8",
  authDomain: "crwn-db-8ef7f.firebaseapp.com",
  databaseURL: "https://crwn-db-8ef7f.firebaseio.com",
  projectId: "crwn-db-8ef7f",
  storageBucket: "",
  messagingSenderId: "34019813901",
  appId: "1:34019813901:web:e7f70c4d8a727b02314344"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
