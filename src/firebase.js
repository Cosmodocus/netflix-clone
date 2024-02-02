// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

let firebaseConfig; 
if (import.meta.env.MODE === "development") {
  firebaseConfig = {
    apiKey: "AIzaSyDo8XcYLryv_um5GSr0EvQykG0V56GrZmI",
    authDomain: "netflix-clone-project-56783.firebaseapp.com",
    projectId: "netflix-clone-project-56783",
    storageBucket: "netflix-clone-project-56783.appspot.com",
    messagingSenderId: "830105046582",
    appId: "1:830105046582:web:05835f738861c32eb55297"
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


// Your web app's Firebase configuration
// export const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
//   appId: process.env.REACT_APP_APP_ID
// };

// export const firebaseConfig = {
//   apiKey: "AIzaSyDo8XcYLryv_um5GSr0EvQykG0V56GrZmI",
//   authDomain: "netflix-clone-project-56783.firebaseapp.com",
//   projectId: "netflix-clone-project-56783",
//   storageBucket: "netflix-clone-project-56783.appspot.com",
//   messagingSenderId: "830105046582",
//   appId: "1:830105046582:web:05835f738861c32eb55297"
// };

// Your web app's Firebase configuration
// export const firebaseConfig = {
//   apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.REACT_APP_MESSAGING_SENDER,
//   appId: import.meta.env.REACT_APP_APP_ID
// };


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);




