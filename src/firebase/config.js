// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXQ4dahh0xVIXjFODkllWbvrR5vH1bk2U",
  authDomain: "react-curso-152f1.firebaseapp.com",
  projectId: "react-curso-152f1",
  storageBucket: "react-curso-152f1.appspot.com",
  messagingSenderId: "205486956485",
  appId: "1:205486956485:web:290514849e9d11960a35ac"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);