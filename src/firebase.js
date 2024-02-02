// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

let firebaseConfig; 
if (import.meta.env.MODE === "development") {
  firebaseConfig = {
    apiKey: "REACT_APP_FIREBASE_API_KEY",
    authDomain: "REACT_APP_FIREBASE_AUTH_DOMAIN",
    projectId: "REACT_APP_FIREBASE_PROJECT_ID",
    storageBucket: "REACT_APP_FIREBASE_STORAGE_BUCKET",
    messagingSenderId: "REACT_APP_MESSAGING_SENDER",
    appId: "REACT_APP_APP_ID"
  };
} else {
  firebaseConfig = {
    apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.REACT_APP_MESSAGING_SENDER,
    appId: import.meta.env.REACT_APP_APP_ID
  };
}


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);




