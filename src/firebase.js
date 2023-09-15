// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// import * as firebase from "firebase/app";
// import  "firebase/app";
// import *as firebase from "./firebase";
// import "firebase/firestore";
// import { initializeApp } from "firebase/app";
// import "./firebase";


const firebaseConfig = {
  apiKey: "AIzaSyA39EizL4aJrdm3bxurF3E3CezGzbbY6jo",
  authDomain: "disneyplus-clone-e8a1b.firebaseapp.com",
  projectId: "disneyplus-clone-e8a1b",
  storageBucket: "disneyplus-clone-e8a1b.appspot.com",
  messagingSenderId: "919172495261",
  appId: "1:919172495261:web:1174cc499010a3f27da174"
  
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();





export { auth, provider, storage };
export default db;
// export  initializeApp;
// firebase.initializeApp(firebaseConfig);

// export default firebase;