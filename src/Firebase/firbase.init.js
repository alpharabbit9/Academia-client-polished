// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3SsNeFQhUmvr_2WqKX6M1m-oVQRXpyw4",
  authDomain: "academia-386c1.firebaseapp.com",
  projectId: "academia-386c1",
  storageBucket: "academia-386c1.firebasestorage.app",
  messagingSenderId: "690144784104",
  appId: "1:690144784104:web:dcc35afaf328a80826235d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);