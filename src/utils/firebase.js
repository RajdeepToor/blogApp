//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyDDC2cxlDNnohseS6dpASgbiPLTTb4zFXI",
  apiKey: process.env.FIREBASE,
  authDomain: "blog-3db16.firebaseapp.com",
  projectId: "blog-3db16",
  storageBucket: "blog-3db16.appspot.com",
  messagingSenderId: "115621947546",
  appId: "1:115621947546:web:1717355dcb7d76108e5723"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);