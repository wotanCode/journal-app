// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration example
const firebaseConfig = {
  apiKey: "AIzaSyCXZ4dahh0xVIXjFODkllWbvred2uLbk2Z",
  authDomain: "react-curso-876u8.firebaseapp.com",
  projectId: "react-curso-543a9",
  storageBucket: "react-curso-852f0.appspot.com",
  messagingSenderId: "2054869578965",
  appId: "1:205412346485:web:2905123449e9d11960a35ac"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);