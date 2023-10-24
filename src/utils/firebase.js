// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXS4Kszc9zwgKM23VhRKzyyVX0z3KOvVM",
  authDomain: "rajdeepblog-e383b.firebaseapp.com",
  projectId: "rajdeepblog-e383b",
  storageBucket: "rajdeepblog-e383b.appspot.com",
  messagingSenderId: "482221722086",
  appId: "1:482221722086:web:94ac7413756a73ca6bee27",
  measurementId: "G-RH3Z36BWWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);