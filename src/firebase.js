import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBbWIz7-R23AVXhJPH_4lrNlqluNZ3wnJw",
  authDomain: "clone-b0705.firebaseapp.com",
  projectId: "clone-b0705",
  storageBucket: "clone-b0705.appspot.com",
  messagingSenderId: "461499119513",
  appId: "1:461499119513:web:3fcedef45fcf969ea68508"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };