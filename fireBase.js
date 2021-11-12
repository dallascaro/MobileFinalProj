// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB871cb-Knz-RRu1dWX5q1q6oXgk1FbA3U",
  authDomain: "flicknatic.firebaseapp.com",
  projectId: "flicknatic",
  storageBucket: "flicknatic.appspot.com",
  messagingSenderId: "550620673946",
  appId: "1:550620673946:web:b789afc7a78a3824182c23"
};
// Initialize Firebase

let app;
if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
}else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };