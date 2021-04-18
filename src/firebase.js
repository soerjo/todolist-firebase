import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBCtnP9zDW14dw1Z1N_ZIJf-TV1XZxYWQc",
  authDomain: "todo-app-16423.firebaseapp.com",
  projectId: "todo-app-16423",
  storageBucket: "todo-app-16423.appspot.com",
  messagingSenderId: "331041206153",
  appId: "1:331041206153:web:3fd5cb79bcfdcaeda7fb58",
});

const db = firebaseApp.firestore();

export default db;
