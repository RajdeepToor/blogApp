// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.FIREBASE,
  authDomain: "blog-2365c.firebaseapp.com",
  projectId: "blog-2365c",
  storageBucket: "blog-2365c.appspot.com",
  messagingSenderId: "851192212900",
  appId: "1:851192212900:web:fbb201cf65def2ca5ae531"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);