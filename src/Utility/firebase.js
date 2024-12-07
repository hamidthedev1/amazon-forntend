import firebase from "firebase/compat/app";
//auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK9MFj78M1wrEb0i3zmL-QucAbEHRAljE",
  authDomain: "clone-a66de.firebaseapp.com",
  projectId: "clone-a66de",
  storageBucket: "clone-a66de.firebasestorage.app",
  messagingSenderId: "412788885924",
  appId: "1:412788885924:web:360a63e6b4189ad201d931",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = app.firestore()