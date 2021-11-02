import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB5qHQKmOINXOrLw6kdibo7jEALgUIcw0E",
  authDomain: "todoapp-22471.firebaseapp.com",
  projectId: "todoapp-22471",
  storageBucket: "todoapp-22471.appspot.com",
  messagingSenderId: "298931726416",
  appId: "1:298931726416:web:ac2e758332eea4529bc955"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
