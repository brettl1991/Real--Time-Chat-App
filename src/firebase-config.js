// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ4lJnepCYVVFXVHncFBklZRxMZvji7wg",
  authDomain: "real-time-chatapp-621bd.firebaseapp.com",
  projectId: "real-time-chatapp-621bd",
  storageBucket: "real-time-chatapp-621bd.appspot.com",
  messagingSenderId: "1019095966906",
  appId: "1:1019095966906:web:452cbb3612f67421b94e83",
  measurementId: "G-S93C0XV64B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
